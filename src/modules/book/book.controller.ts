import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const { book: bookData } = req.body;
    const result = await BookService.createBookIntoDB(bookData);
    res.status(200).json({
      message: "Book created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Book could not be created",
      success: false,
      error: error,
    });
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await BookService.getBooksFromDB(searchTerm as string);
    res.status(200).json({
      message: "Books retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Books could not be retrieved",
      success: false,
      error: error,
    });
  }
};

const getABook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.productId;
    const result = await BookService.getABookFromDB(bookId);
    res.status(200).json({
      message: "Book retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Books could not be retrieved",
      success: false,
      error: error,
    });
  }
};

export const BookController = {
  createBook,
  getBooks,
  getABook,
};
