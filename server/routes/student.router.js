const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {

  if (req.isAuthenticated()) {
    pool.query(`SELECT * FROM "student"`)
      .then((results) => {
        res.send(results.rows);
      })
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }

});

router.get('/scores/:id', (req, res) => {

  if (req.isAuthenticated()) {
    const studentID = Number(req.params.id);
    const queryText = `SELECT "scores"."score", "scores"."date", "scores"."notes", "student"."goal" 
                        FROM "scores"
                        JOIN "student" ON "scores"."student_id"="student"."id"
                        WHERE "student_id" = $1 
                        ORDER BY "date"`;
    pool.query(queryText, [studentID])
      .then((results) => {
        res.send(results.rows);
      })
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }

});

router.get('/average', (req, res) => {

  if (req.isAuthenticated()) {
    pool.query(`SELECT AVG("scores"."score"), "student"."grade"
              FROM "scores"
              JOIN "student" ON "scores"."student_id"="student"."id"
              WHERE "student"."graduated"=false
              GROUP BY "student"."grade"
              ORDER BY "avg";`)
      .then((results) => {
        res.send(results.rows);
      })
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }

})

router.get('/studentinfo/:id', (req, res) => {

  if (req.isAuthenticated()) {
    const studentID = req.params.id;
    pool.query(`SELECT "first_name", "last_name", "id", "goal" from "student"
                WHERE "id" = $1`, [studentID])
      .then((results) => {
        res.send(results.rows);
      })
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }

});

router.post('/', (req, res) => {

  if (req.isAuthenticated()) {
    const student = req.body;
    const queryText = `INSERT INTO "student" ("first_name", "last_name", "grade", 
                        "goal", "graduated") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [student.firstName, student.lastName, student.grade,
    student.goal, false])
      .then((results) => {
        res.sendStatus(200);
      })
      .catch(err => res.sendStatus(500))
  } else {
    res.sendStatus(403);
  }

});


router.post('/score', (req, res) => {

  if (req.isAuthenticated()) {
    const score = req.body;
    const queryText = `INSERT INTO "scores" ("score", "date", "notes", 
                        "student_id") VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [Number(score.score), score.date, score.notes,
    score.id])
      .then((results) => {
        res.send(results.rows);
      })
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }

});

router.put('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const idToUpdate = req.params.id;
    const queryText = `UPDATE "student" SET 
                      "graduated" = true 
                      WHERE "id" = $1`;
    pool.query(queryText, [idToUpdate])
      .then((response) => {
        console.log(response);
        res.sendStatus(200);
      })
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }
})

module.exports = router;