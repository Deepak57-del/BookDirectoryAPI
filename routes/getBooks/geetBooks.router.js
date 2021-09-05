const express = require('express');
const { httpGetAllBooks, httpAddNewBook,httpDeleteBook,httpGetBook,httpUpdateBook } = require('./geetBooks.controller');
const getBooksrouter = express.Router();

getBooksrouter.get('/',httpGetAllBooks);
getBooksrouter.get('/:id',httpGetBook);
getBooksrouter.post('/',httpAddNewBook);
getBooksrouter.delete('/:id',httpDeleteBook);
getBooksrouter.put('/:id',httpUpdateBook);

module.exports = {
    getBooksrouter
}