const { Client } = require("pg");

const postgreSqlConnect = new Client({
  host: "localhost",
  user: "postgres",
  port: 5000,
  password: "Ali20031001a",
  database:'dbusers',
  
});


const getName = async()=>{
   console.log( (await postgreSqlConnect.query('select * from users')).rows); 
}

getName()     

module.exports = postgreSqlConnect;
 