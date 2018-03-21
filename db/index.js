const pgp = require("pg-promise")();

const cn = {
  host: "localhost",
  port: 5432,
  database: "asoiaf"
};

const db = pgp(cn);

module.exports = db;
