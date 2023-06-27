import express from "express";
// import { verifyJWT } from "../middleware/authMiddleware.js";
const router = express.Router();
import { loginController } from "../controller/userModelController.js";

router.post("/login",  loginController);

export default router;
