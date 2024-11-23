"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/", order_controller_1.OrderController.createOrder);
orderRouter.get("/revenue", order_controller_1.OrderController.calculateRevenue);
exports.OrderRoutes = orderRouter;
