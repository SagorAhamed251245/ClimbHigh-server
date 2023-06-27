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
        unit_price: {
          type: Number,
          default: 0,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
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
  },
  { timestamps: true }
);

export default mongoose.model("AllOrder", orderSchema);