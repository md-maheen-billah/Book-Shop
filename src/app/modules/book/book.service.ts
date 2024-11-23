import { Book } from "./book.interface";
import BookModel from "./book.model";

const createBookIntoDB = async (book: Book): Promise<Book> => {
  const result = await BookModel.create(book);
  return result;
};

const getBooksFromDB = async (searchTerm?: string): Promise<Book[]> => {
  if (searchTerm) {
    const query = {
      $or: [
        { title: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search
        { author: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
      ],
    };

    const result = await BookModel.find(query);
    return result;
  } else {
    const result = await BookModel.find();
    return result;
  }
};

const getABookFromDB = async (id: string) => {
  const result = await BookModel.findById(id);
  return result;
};

const updateABookInDB = async (id: string, book: Book) => {
  const result = await BookModel.findByIdAndUpdate(id, book, {
    new: true,
  });
  return result;
};

const deleteABookInDB = async (id: string) => {
  const result = await BookModel.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBookIntoDB,
  getBooksFromDB,
  getABookFromDB,
  updateABookInDB,
  deleteABookInDB,
};
