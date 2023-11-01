const express = require("express");
const userController = require("../Controller/UserController");

const userRouter = express.Router();

userRouter.get("/", userController.getAllUser);

module.exports = userRouter;
