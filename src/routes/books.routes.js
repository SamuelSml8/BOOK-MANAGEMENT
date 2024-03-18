const express = require("express");
const router = express.Router();
const { createBook, getAllBooks, getBookByReferenceNumber } = require("../controllers/booksController.js");

router.post("/create", createBook);
router.get("/all", getAllBooks);
router.get("/:referenceNumber", getBookByReferenceNumber);

module.exports = router;
