import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router();

bookRouter.post("/", BookController.createBook);
bookRouter.get("/", BookController.getBooks);
bookRouter.get("/:productId", BookController.getABook);
bookRouter.put("/:productId", BookController.updateBook);
bookRouter.delete("/:productId", BookController.deleteBook);

export const BookRoutes = bookRouter;
