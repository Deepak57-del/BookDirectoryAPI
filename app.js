const express = require('express');
const { getBooksrouter } = require('./routes/getBooks/geetBooks.router');

const app = express();


app.use(express.json());

app.use('/getbooks',getBooksrouter);


module.exports = app;