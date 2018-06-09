const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "student"`)
    .then((results) => {
      res.send(results.rows);
    })
    .catch(err => res.sendStatus(500));
});

router.get('/scores/:id', (req, res) => {
  const studentID = Number(req.params.id);
  const queryText = `SELECT "score", "date", "notes" from "scores" WHERE "student_id" = $1 ORDER BY "date"`;
  pool.query(queryText, [studentID])
    .then((results) => {
      res.send(results.rows);
    })
    .catch(err => res.sendStatus(500));
});

router.get('/average', (req, res) => {
  pool.query(`SELECT AVG("scores"."score"), "student"."grade"
              FROM "scores"
              JOIN "student" ON "scores"."student_id"="student"."id"
              GROUP BY "student"."grade"
              ORDER BY "avg";`)
    .then((results) => {
      res.send(results.rows);
    })
    .catch(err => res.sendStatus(500));
})

router.get('/studentinfo/:id', (req, res) => {
  const studentID = req.params.id;
  pool.query(`SELECT "first_name", "last_name", "id" from "student"
              WHERE "id" = $1`, [studentID])
  .then((results) => {
    res.send(results.rows);
  })
  .catch(err => res.sendStatus(500));
});

router.post('/', (req, res) => {
  const student = req.body;
  const queryText = `INSERT INTO "student" ("first_name", "last_name", "grade", 
                    "goal") VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [student.firstName, student.lastName, student.grade,
              student.goal])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch(err => res.sendStatus(500))
});


router.post('/score', (req, res) => {
  const score = req.body;
  const queryText = `INSERT INTO "scores" ("score", "date", "notes", 
                    "student_id") VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [Number(score.score), score.date, score.notes,
              score.studentId])
    .then((results) => {
       res.send(results.rows);
    })
    .catch(err => res.sendStatus(500));
});

module.exports = router;