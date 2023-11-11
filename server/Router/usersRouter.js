const express = require("express");
const userController = require("../Controller/UserController");

const userRouter = express.Router();

userRouter.get("/", userController.getAllUser);
userRouter.post("/", userController.addUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put('/:id',userController.updateUser)
module.exports = userRouter;
