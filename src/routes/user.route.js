import express from "express";
import asyncHandler from 'express-async-handler';

import { userLogin, userSignin } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/login', asyncHandler(userLogin));
userRouter.post('/signin', asyncHandler(userSignin));