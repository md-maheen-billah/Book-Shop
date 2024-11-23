import mongoose, { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, "Please enter an email"],
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "{VALUE} is not a valid email",
      },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter product id"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the quantity"],
      validate: {
        validator: function (value: number) {
          return Number.isInteger(value) && value > 0;
        },
        message:
          "Quantity must be a positive number and cannot be zero or negative or a decimal",
      },
    },
    totalPrice: {
      type: Number,
      required: [true, "Please enter the total price"],
      validate: {
        validator: function (value: number) {
          return value > 0;
        },
        message:
          "Total price must be a positive number and cannot be zero or negative",
      },
    },
  },
  { timestamps: true }
);

const OrderModel = model<Order>("Order", orderSchema);

export default OrderModel;
