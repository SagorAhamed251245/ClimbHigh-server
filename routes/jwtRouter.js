import jwt from "jsonwebtoken";
import express from "express";
const router = express.Router();

router.post("/jwt", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  res.send({ token });
});
export default router;
