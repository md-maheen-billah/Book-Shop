import mongoose, { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
  {
    email: { type: String, required: [true, "Please enter an email"] },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter product id"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the quantity"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Please enter the total price"],
    },
  },
  { timestamps: true }
);

const OrderModel = model<Order>("Order", orderSchema);

export default OrderModel;
