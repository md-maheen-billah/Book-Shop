import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./modules/book/book.route";

const app: Application = express();

app.use(express.json());

app.use("/api/products", BookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is Live ⚡",
  });
});

export default app;
