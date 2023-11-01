const { Client } = require("pg");

const postgreSqlConnect = new Client({
  host: "localhost",
  user: "postgres",
  port: 5000,
  password: "Ali20031001a",
  database:'dbusers',
  
});




module.exports = postgreSqlConnect;
 