import login from "./routes/loginRoutes.js";
import product from "./routes/productRoutes.js"
import order from "./routes/orderRoutes.js"
import JWT from './routes/jwtRouter.js'
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";



const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
// all  routes api
app.use("/api/v1/auth", login);
app.use("/api/v1/auth", product);
app.use("/api/v1/auth", order);
app.use("/api/v1/auth", JWT);



// all  routes api
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Hello World");
});

const uri =`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ry6i5bk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majorityI`;
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
