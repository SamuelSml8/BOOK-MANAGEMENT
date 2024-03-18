const express = require("express");
const router = express.Router();
const { createBook } = require("../controllers/booksController.js");

router.post("/create", createBook);

module.exports = router;
