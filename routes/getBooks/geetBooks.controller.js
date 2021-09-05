const {
    getbook,
    addNewBook,
    deleteBook,
    getSingleBook,
    updateBook
}= require('../../models/books.model');

function httpGetAllBooks(req,res){
    res.status(200).json(getbook())
}

function httpAddNewBook(req,res){
    const book = req.body;
    addNewBook(book);
    res.status(200).json(book);
}

function httpGetBook(req,res){
    const bookId = +req.params.id;
    res.status(200).json(getSingleBook(bookId));
}

function httpUpdateBook(req,res){
    const bookId =+ req.params.id;
    const data = req.body;
    res.status(200).json(updateBook(bookId,data));
}

function httpDeleteBook(req,res){
    const bookId = +req.params.id;
    deleteBook(bookId);
    res.status(200).json({
        "Message":`Book of id ${bookId} is Deleted`,
    })
}


module.exports = {
    httpGetAllBooks,
    httpAddNewBook,
    httpDeleteBook,
    httpGetBook,
    httpUpdateBook
};