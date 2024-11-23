import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./app/modules/book/book.route";
import { OrderRoutes } from "./app/modules/order/order.route";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5000"] }));

app.use("/api/products", BookRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is Live ⚡",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "API endpoint not found" });
});

export default app;
