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

module.exports = router;