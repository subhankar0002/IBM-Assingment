const express=require("express");
const { signUp } = require("../controllers/user.controller");

const userRouter=express.Router();

userRouter.post("/resister",signUp)

module.exports={
    userRouter
}