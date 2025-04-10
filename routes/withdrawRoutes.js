// routes/withdrawRoutes.js
import express from "express";
import { createWithdraw } from "../controllers/withdrawController.js";

const router = express.Router();

router.post("/", createWithdraw);

export default router;
