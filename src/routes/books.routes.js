const express = require("express");
const router = express.Router();
const { createBook, getAllBooks, getBookByReferenceNumber, updateTitle } = require("../controllers/booksController.js");

router.post("/create", createBook);
router.get("/all", getAllBooks);
router.get("/:referenceNumber", getBookByReferenceNumber);
router.patch("/edit/:title", updateTitle)

module.exports = router;
