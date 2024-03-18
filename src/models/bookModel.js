const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  referenceNumber: Number,
  title: String,
  author: String,
  genre: String,
  description: String,
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
