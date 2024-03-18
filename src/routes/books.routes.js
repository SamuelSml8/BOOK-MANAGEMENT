const express = require("express");
const router = express.Router();
const { createBook, getAllBooks } = require("../controllers/booksController.js");

router.post("/create", createBook);
router.get("/all", getAllBooks);

module.exports = router;
