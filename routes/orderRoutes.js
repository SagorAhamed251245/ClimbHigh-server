import express from "express";
const router = express.Router();
import { allOrderController, currentOrderStatus, userAllOrders } from "../controller/orderController.js";

router.post('/order', allOrderController);
router.get('/order/:id', currentOrderStatus );
router.get('/userorders/:id', userAllOrders)

export default router;