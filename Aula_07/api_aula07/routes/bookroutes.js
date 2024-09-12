const express = require('express'); // variavel express
const router = express.router(); // armazena a rota dos livros
const books = require('../models/book'); //armazena a rota dos livros

// adicionar livro
router.post('/books', (req, res)=> {
    const{ title, author, year, isbn} = req.body; // parametros para cadastrar o livro
    const book = {title, author, year, isbn}; // cada livro vai ter titulo, author, ano, isbn
    books.push(book)
    res.status(201).send(book);
});

// Remover livro
router.delete('/books/:isbn', (req, res)=>{
    const {isbn}= req.params;
    books = books.filter(book => book.isbn !== isbn);
    res.status(200).send({ message: 'Livro removido'});
});

// Listar Livros
router.get('/books', (req, res)=>{
    const {title} = req.query;
    res.status(200).send(books);
});

// Buscar Livros por titulo
router.get('/books/search', (req, res)=>{
    const {title} = req.query;
    const filteredbooks = books.filter(book.title.toLowerCase().includes(title.toLowerCase()));
    res.status(200).send(filteredbooks);

});

module.exports = router; // exporta a rota da api

// get http://localhost:3000/api/books
// postr http://localhost:3000/api/books