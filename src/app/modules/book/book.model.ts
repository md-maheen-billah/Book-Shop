import { model, Schema } from "mongoose";
import { Book } from "./book.interface";

const bookSchema = new Schema<Book>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please enter a title"],
      unique: true,
      validate: {
        validator: function (value: string) {
          return (
            /^[A-Z0-9][A-Za-z0-9\s-]*$/.test(value) &&
            !/[a-z]+[A-Z]/.test(value)
          );
        },
        message:
          "Title must only contain words starting with uppercase letters, and no mixed-case formatting is allowed.",
      },
    },
    author: {
      type: String,
      trim: true,
      required: [true, "Please enter name of the author"],
      validate: {
        validator: function (value: string) {
          return /^([A-Z][a-z]*)( [A-Z][a-z]*)*$/.test(value);
        },
        message:
          "Author name must only contain words starting with uppercase letters, and no mixed-case formatting is allowed.",
      },
    },
    price: {
      type: Number,
      trim: true,
      required: [true, "Please enter the price of the book"],
      validate: {
        validator: function (value: number) {
          return value > 0;
        },
        message:
          "Price must be a positive number and cannot be zero or negative",
      },
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
      trim: true,
      required: [true, "Please enter the quantity of the book"],
      validate: {
        validator: function (value: number) {
          return Number.isInteger(value) && value >= 0;
        },
        message:
          "Quantity must be a positive number and cannot be zero or negative or a decimal",
      },
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
