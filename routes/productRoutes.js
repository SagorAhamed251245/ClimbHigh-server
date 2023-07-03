import express from "express";
import { addProduct, getAllProducts } from "../controller/productModelController.js";

const router = express.Router();

router.post("/product",  addProduct);
router.get("/product", getAllProducts);

export default router;
