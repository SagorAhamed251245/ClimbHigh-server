import express from "express";
import { verifyJWT } from "../middleware/authMiddleware.js";
const router = express.Router();
import { singUpController,loginController } from "../controller/userModelController.js";

router.post("/singup",  singUpController);
router.get("/profile/:email",  loginController);


export default router;
