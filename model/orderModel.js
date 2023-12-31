import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.ObjectId,
      ref: "users",
      required: true,
    },
   
    order_item: [
      {
        item_name: {
          type: String,
          required: true,
        },
        product_id: {
          type: mongoose.ObjectId,
          ref: "products",
          required: true,
        },

        
        quantity: {
          type: Number,
          required: true,
        },
        color: {
          type: String,
          
        }
      },
    ],
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Processing",
      enum: ["Processing", "Shipping", "Delivered"],
    },
    transaction_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AllOrder", orderSchema);
