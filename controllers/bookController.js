const { response, request } =require("express");
const books = [];

exports.getAllBooks = (request, response) => {
    response.send(books);
};

exports.createBook = (request, response) => {
    console.log(request.body);
    const book = request.body;
    book.id = Date.now().toString();
    books.push(book);
    response.send(book);
};

exports.getBook = (request, response) => {
    const bookId = request.params.id;
    const book = books.find((book) => book.id === bookId)
    response.send(book);
};

exports.updateBook = (request, response) => {
    const index = books.findIndex((book) => book.id === request.params.id);
    if (index !== -1) {
        books[index] = { ...books[index], ...request.body };
        response.send(books[index]);
    }
};
exports.deleteBook = (request, response) => {
    console.log("request params", request.params.id)
    const booksIndex = books.findIndex(({ id }) => id === request.params.id);
    if (booksIndex >= 0) {
      books.splice(booksIndex, 1);
    }
  };