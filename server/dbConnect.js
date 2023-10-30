const pg = require("pg");

const postgreSqlConnect = new pg.Pool({
  connectionString: process.env.DB__CONNECT__STRING,
});

module.exports = postgreSqlConnect;
