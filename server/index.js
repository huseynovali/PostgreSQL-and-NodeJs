const express = require("express");
const postgreSqlConnect = require("./dbConnect");
require("dotenv").config();
const app = express();

app.use(express.json());

app.listen(5000, () => {
  postgreSqlConnect.connect(() => {
    try {
      console.log("Connect Db");
    } catch (error) {
      console.log(error);
    }
  });
});
