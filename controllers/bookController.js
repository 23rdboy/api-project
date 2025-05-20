const { response, request } = require("express");
const Book = require("../schemas/book");

exports.getAllBooks = async (request, response) => {
    try {
        const books = await Book.find();
        response.send(books);
    } catch (error) {
        response.status(500).send({ error: "Failed to fetch books" });
    }
};

exports.getBook = async (request, response) => {
    try {
        const book = await Book.findById(request.params.id);
        if (!book) {
            return response.status(404).send({ error: "Book not found" });
        }
        response.send(book);
    } catch (error) {
        response.status(500).send({ error: "Failed to fetch book" });
    }
};

exports.createBook = async (request, response) => {
    try {
        const book = new Book(request.body);
        await book.save();
        response.send(book);
    } catch (error) {
        response.status(500).send({ error: "Failed to add book" });
    }
};

exports.updateBook = async (request, response) => {
    try {
        const book = await Book.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
        });
        response.send(book);
    } catch (error) {
        response.status(500).send({ error: "Failed to update book" });
    }
};


exports.deleteBook = async (request, response) => {
  try {
    const book = await Book.findById(request.params.id)
    const deleteBook = await Book.deleteOne(book);
    response.send(book);
  } catch (error) {
    response.status(500).send({ error: "Failed to delete book" });
  }
};