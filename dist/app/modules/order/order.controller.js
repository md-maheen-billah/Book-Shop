"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const book_model_1 = __importDefault(require("../book/book.model"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const book = yield book_model_1.default.findById(orderData.product);
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
        yield book.save();
        const result = yield order_service_1.OrderService.createOrderIntoDB(orderData);
        res.status(200).json({
            message: "Order created successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Order could not be created",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.calculateRevenueFromDB();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Revenue could not be calculated",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
exports.OrderController = {
    createOrder,
    calculateRevenue,
};
