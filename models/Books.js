
import mongoose from "mongoose";
// The boolean function specifically converts JavaScript values to Web IDL boolean types//
import { boolean } from "webidl-conversions";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    unique: true,
    required: true,
    minLength: 1,
    maxLength:13
  },

  publishedDate: Date,
  
  inStock: {
    type: Boolean,
    default: true
  },

  likes: {
    type: Number,
    default: 0
  }
})

const Book = mongoose.model("Book", bookSchema)
export default Book
