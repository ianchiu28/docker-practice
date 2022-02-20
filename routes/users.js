var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  database: 'postgres'
});
client.connect();

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  const id = req.params.userId;
  client.query(`SELECT * FROM users WHERE id = ${id}`, (err, data) => {
    const user = data.rows[0];
    res.json({
      firstName: user.first_name,
      lastName: user.last_name,
    });
  });
});

module.exports = router;
