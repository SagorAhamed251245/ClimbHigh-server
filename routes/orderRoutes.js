import express from "express";
import Stripe from "stripe";
import {
  allOrderController,
  currentOrderStatus,
  userAllOrders,
} from "../controller/orderController.js";

const router = express.Router();

const stripe = new Stripe(
  "sk_test_51NFA04JHKCQ45FlfJrbaYK2PozN35ykehdtEM5ePxGC2bD3AnfJadd3l7NbBPJRhveEYpNPf1chx9aszKqpr806C00Va5xviIi"
);

// stripe(process.env.SECRET);

router.post("/order", allOrderController);
router.get("/order/:id", currentOrderStatus);
router.get("/userorders/:id", userAllOrders);

// Payment
router.post("/payment", async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

export default router;
