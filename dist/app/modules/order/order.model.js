"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const orderSchema = new mongoose_1.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, "Please enter product id"],
    },
    quantity: {
        type: Number,
        required: [true, "Please enter the quantity"],
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value > 0;
            },
            message: "Quantity must be a positive number and cannot be zero or negative or a decimal",
        },
    },
    totalPrice: {
        type: Number,
        required: [true, "Please enter the total price"],
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "Total price must be a positive number and cannot be zero or negative",
        },
    },
}, { timestamps: true });
const OrderModel = (0, mongoose_1.model)("Order", orderSchema);
exports.default = OrderModel;
