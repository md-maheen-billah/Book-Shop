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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, price, category, description, quantity, inStock } = req.body;
        const result = yield book_service_1.BookService.createBookIntoDB({
            title,
            author,
            price,
            category,
            description,
            quantity,
            inStock,
        });
        res.status(200).json({
            message: "Book created successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Book could not be created",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield book_service_1.BookService.getBooksFromDB(searchTerm);
        res.status(200).json({
            message: "Books retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Books could not be retrieved",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const getABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.productId;
        const result = yield book_service_1.BookService.getABookFromDB(bookId);
        if (!result) {
            res.status(404).json({
                message: "Book not found",
                success: false,
            });
            return;
        }
        res.status(200).json({
            message: "Book retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Book could not be retrieved",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.productId;
        const bookData = req.body;
        const result = yield book_service_1.BookService.updateABookInDB(bookId, bookData);
        if (!result) {
            res.status(404).json({
                message: "Book to be updated not found",
                success: false,
            });
            return;
        }
        res.status(200).json({
            message: "Book updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Book was not updated",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.productId;
        const result = yield book_service_1.BookService.getABookFromDB(bookId);
        if (!result) {
            res.status(404).json({
                message: "Book to be deleted not found",
                success: false,
            });
            return;
        }
        yield book_service_1.BookService.deleteABookInDB(bookId);
        res.status(200).json({
            message: "Book deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Book was not deleted",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
exports.BookController = {
    createBook,
    getBooks,
    getABook,
    updateBook,
    deleteBook,
};
