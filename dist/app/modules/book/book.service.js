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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createBookIntoDB = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.create(book);
    return result;
});
const getBooksFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const query = {
            $or: [
                { title: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search
                { author: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } },
            ],
        };
        const result = yield book_model_1.default.find(query);
        return result;
    }
    else {
        const result = yield book_model_1.default.find();
        return result;
    }
});
const getABookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findById(id);
    return result;
});
const updateABookInDB = (id, book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findByIdAndUpdate(id, book, {
        new: true,
    });
    return result;
});
const deleteABookInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.BookService = {
    createBookIntoDB,
    getBooksFromDB,
    getABookFromDB,
    updateABookInDB,
    deleteABookInDB,
};
