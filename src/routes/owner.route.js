import express from "express";
import asyncHandler from 'express-async-handler';
import { addMission } from "../controllers/owner.controller";

export const ownerRouter = express.Router();

ownerRouter.post('/mission', asyncHandler(addMission));