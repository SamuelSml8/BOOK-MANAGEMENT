const express = require("express");
const router = express.Router();
const { createBook, getAllBooks, getBookByReferenceNumber, updateTitle, deleteBookByTitle } = require("../controllers/booksController.js");

router.post("/create", createBook);
router.get("/all", getAllBooks);
router.get("/:referenceNumber", getBookByReferenceNumber);
router.patch("/edit/:title", updateTitle)
router.delete("/delete/:title", deleteBookByTitle)

module.exports = router;
