import express from "express";
import { signup, signin, googleAuth } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/signup").post(signup);

authRouter.route("/signin").post(signin);

authRouter.post("/google", googleAuth);

export default authRouter;
