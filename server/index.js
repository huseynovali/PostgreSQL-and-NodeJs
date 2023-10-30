const express = require("express");
const postgreSqlConnect = require("./dbConnect");
const userRouter = require("./Router/usersRouter");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(5010, () => {
  postgreSqlConnect.connect((err) => {
    if (err) {
      console.error("Connection error:", err);
    } else {
      console.log("Connected to the database");
    }
  });
});
