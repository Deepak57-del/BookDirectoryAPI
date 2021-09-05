let books = new Map();
let latestBookId =1; 
const book = {
    bookId:1,
    author:"Shwetabh Gangwar",
    bookName:"The Rudest Book Ever",
    price:"203rs",
    relaseDate:new Date(2019,12,9),
    availabe:true,
    banned:false,
}

books.set(book.bookId,book)

function addNewBook(book){
    latestBookId++;
    books.set(
        latestBookId,
        Object.assign(book,{
            availabe:true,
            banned:false,
            bookId:latestBookId
        })
    )
}

function deleteBook(bookId){
    const book = books.get(bookId);
    book.availabe="false";
    bookId--;
    books.delete(bookId)
}

function getSingleBook(bookId){
    const book = books.get(bookId);
    console.log(book);
    return book;
}

function updateBook(bookId,data){
    const book = books.get(bookId);
    console.log(data);
    console.log(book);
    if(data.author){
        book.author = data.author;
    }if(data.bookName){
        book.bookName = data.author;
    }
    return book;
}

function getbook(){
    return Array.from(books.values());
}

module.exports={
    getbook,
    addNewBook,
    deleteBook,
    getSingleBook,
    updateBook
}