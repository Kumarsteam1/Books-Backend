const express = require("express");
const multer = require("multer");

const { getBooks, addBooks, deleteBook } = require('../Controllers/bookscontrollers');
const bookRouter = express.Router();

// Configure multer to store files in the "uploads" directory
const upload = multer({ dest: 'uploads/' });

// Define routes
bookRouter.get('/books', getBooks);
bookRouter.post('/books', upload.single('image'), addBooks); // Apply `upload.single('image')` here
bookRouter.delete('/books/:id', deleteBook);

module.exports = bookRouter;
