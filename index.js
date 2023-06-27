import login from "./routes/loginRoutes.js";
import product from "./routes/productRoutes.js"
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(express.json());

// all  routes api
app.use("/api/v1/auth", login);
app.use("/api/v1/auth", product);
// all  routes api
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const uri =
  "mongodb+srv://ClimbHigh:n1251OZRtkgfIruT@cluster0.ry6i5bk.mongodb.net/?retryWrites=true&w=majority";
/* 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}); */

try {
  const conn = await mongoose.connect(uri);
  console.log(`Mongodb connected with server: ${conn.connection.host}`);
} catch (error) {
  console.log(`Error in Mongodb ${error}`);
}
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
