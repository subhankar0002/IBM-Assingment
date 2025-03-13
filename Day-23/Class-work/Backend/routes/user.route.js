const { login, signUp }=require("../controllers/user.controller");

const express=require('express');

const userRouter = express.Router();

userRouter.post("/signup",signUp)

userRouter.post("/login",login)

module.exports=userRouter;