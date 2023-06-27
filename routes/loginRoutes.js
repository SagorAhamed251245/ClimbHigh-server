import express from "express";
const router = express.Router();
import { loginController } from "../controller/userModelController.js";

router.post("/login", loginController);

export default router;
