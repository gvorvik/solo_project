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
    .catch(err => res.sendStatus(500))
  });


router.post('/', (req, res) => {
  const student = req.body;
  const queryText = `INSERT INTO "student" ("first_name", "last_name", "grade", 
                    "goal", "initial_score") VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [student.firstName, student.lastName, student.grade,
                         student.goal, student.initialScore])
  .then((results) => {
    res.send(results.rows);
  })
  .catch(err => res.sendStatus(500))
})

module.exports = router;