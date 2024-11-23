import { Order } from "./order.interface";
import OrderModel from "./order.model";

const createOrderIntoDB = async (order: Order): Promise<Order> => {
  const result = await OrderModel.create(order);
  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);
  const [{ totalRevenue } = { totalRevenue: 0 }] = result;
  return { totalRevenue };
};

export const OrderService = {
  createOrderIntoDB,
  calculateRevenueFromDB,
};
