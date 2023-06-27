import express from "express";
const router = express.Router();
import { allOrderController } from "../controller/orderController.js";

router.post('order', allOrderController);

export default router;