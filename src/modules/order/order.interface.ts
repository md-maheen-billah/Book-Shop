import mongoose from "mongoose";

export interface Order {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
