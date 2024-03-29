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

    const bookExistent = await Book.findOne({
      referenceNumber: newBook.referenceNumber,
    });
    if (bookExistent) {
      return res.status(409).json({
        ok: false,
        message: "Book already exist",
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

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      ok: true,
      message: "All books",
      data: books,
    });
  } catch (error) {
    console.log("Error getting all books", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const getBookByReferenceNumber = async (req, res) => {
  try {
    const { referenceNumber } = req.params;
    const bookFound = await Book.findOne({ referenceNumber: referenceNumber });

    if (!bookFound) {
      return res.status(404).json({
        ok: false,
        message: "Book not found",
        data: null,
      });
    }

    res.status(200).json({
      ok: true,
      message: "Book found",
      data: bookFound,
    });
  } catch (error) {
    console.log("Error getting book by reference number", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const updateTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const bookUpdate = await Book.findOneAndUpdate(
      { title: title },
      { $set: { title: "Test patch" } },
      { new: true }
    );

    if (!bookUpdate) {
      return res.status(404).json({
        ok: false,
        message: "Book not found",
        data: null,
      });
    }

    res.status(200).json({
      ok: true,
      message: "Book's title update",
      data: bookUpdate,
    });
  } catch (error) {
    console.log("Error updating books's name", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

const deleteBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const bookFound = await Book.findOne({ title: title });

    if (!bookFound) {
      return res.status(404).json({
        ok: false,
        message: "Book not found",
        data: null,
      });
    }

    await bookFound.deleteOne();

    res.status(200).json({
      ok: true,
      message: "Book deleted",
      data: bookFound,
    });
  } catch (error) {
    console.error("Error deleting book by title", error);
    res.status(500).json({
      ok: false,
      message: "Error Internal Server",
      data: null,
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookByReferenceNumber,
  updateTitle,
  deleteBookByTitle,
};
