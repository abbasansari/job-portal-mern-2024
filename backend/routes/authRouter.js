import express from "express";
import { signUpController } from "../controller/authController.js";

const router = express.Router();

router.post("/sign-up", signUpController);

export default router;
