const Book = require("../models/bookModel.js");

const createBook = async (req, res) => {
  try {
    const data = req.body;
    const newBook = new Book(data);

    if (
      newBook.referenceNumber.length <= 0 ||
      newBook.title.length <= 0 ||
      newBook.author.length <= 0 ||
      newBook.genre.length <= 0 ||
      newBook.description.length <= 0
    ) {
      return res.status(400).json({
        ok: false,
        message: "All fields required",
        data: null,
      });
    }

    const saveBook = await newBook.save();
    return res.status(201).json({
      ok: true,
      message: "Book saved",
      data: saveBook,
    });
  } catch (error) {
    console.log("Error creating the book", error);
    res.status(500).json({
      ok: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

module.exports = { createBook };
