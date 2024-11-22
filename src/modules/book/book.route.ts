import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router();

bookRouter.post("/", BookController.createBook);
bookRouter.get("/", BookController.getBooks);
bookRouter.get("/:productId", BookController.getABook);

export const BookRoutes = bookRouter;
