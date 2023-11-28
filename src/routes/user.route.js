import express from "express";
import asyncHandler from 'express-async-handler';

import { userAddMission, userLogin, userSignin, userWriteReview } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/login', asyncHandler(userLogin));
userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission/:storeId', asyncHandler(userAddMission));

userRouter.get('/review', asyncHandler(userWriteReview));