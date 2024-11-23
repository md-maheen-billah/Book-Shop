import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./app/modules/book/book.route";
import { OrderRoutes } from "./app/modules/order/order.route";

const app: Application = express();

app.use(express.json());

app.use("/api/products", BookRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is Live ⚡",
  });
});

export default app;
