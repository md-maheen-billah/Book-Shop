import { Request, Response } from "express";
import { OrderService } from "./order.service";
import BookModel from "../book/book.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const book = await BookModel.findById(orderData.product);
    if (!book) {
      res.status(404).json({
        message: "Book not found",
        success: false,
      });
      return;
    }
    if (book.quantity < orderData.quantity) {
      res.status(400).json({
        message: "Insufficient stock available",
        success: false,
      });
      return;
    }
    book.quantity -= orderData.quantity;
    if (book.quantity === 0) {
      book.inStock = false;
    }

    await book.save();

    const result = await OrderService.createOrderIntoDB(orderData);
    res.status(200).json({
      message: "Order created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Order could not be created",
      success: false,
      error: error,
      stack: (error as Error).stack,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.calculateRevenueFromDB();
    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: "Revenue could not be calculated",
      success: false,
      error: error,
      stack: (error as Error).stack,
    });
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
};
