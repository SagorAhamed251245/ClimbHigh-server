import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
    category: {
      type: String,
      required: true,
    },
   
    stock: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    images:{
      type: [String],
      default: [],
    },
    isActive:{
      type: Boolean,
      default: true,
    },
    size:{
      type:String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);