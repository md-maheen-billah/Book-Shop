import { model, Schema } from "mongoose";
import { Book } from "./book.interface";

const bookSchema = new Schema<Book>(
  {
    title: { type: String, required: [true, "Please enter a title"] },
    author: {
      type: String,
      required: [true, "Please enter name of the author"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the price of the book"],
    },
    category: {
      type: String,
      required: [true, "Please choose a category"],
      enum: {
        values: [
          "Fiction",
          "Non-Fiction",
          "Science",
          "History",
          "Biography",
          "Fantasy",
          "Mystery",
          "Romance",
          "Self-Help",
          "Children",
        ],
        message: "{VALUE} is not valid category",
      },
      default: "Biography",
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
      trim: true,
      maxlegth: [50, "Decscription cannot be more than 50 characters"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the quantity of the book"],
    },
    inStock: {
      type: Boolean,
      required: [true, "Please choose whether the book is in stock or not"],
    },
  },
  { timestamps: true }
);

const BookModel = model<Book>("Book", bookSchema);

export default BookModel;
