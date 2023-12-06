// handler.js

const {
    addBook, getAllBooks, getBookById, updateBookById, deleteBookById,
  } = require('./books');
  
  module.exports = {
    addBookHandler: addBook,
    getAllBooksHandler: getAllBooks,
    getBookByIdHandler: getBookById,
    updateBookByIdHandler: updateBookById,
    deleteBookByIdHandler: deleteBookById,
  };
    