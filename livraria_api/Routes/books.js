// Cria as rotas da api
const express= require('express')  // importa o express para creiar o servidor
const Book = require('.../models/Book.js') // importa o modelo dos livros Book.js
const router = express.Router();  // cria o modelo para rotear com base nas requisiçoes

// Cria rota do post
// async é por conta que a requisição tem um certo tempo para retornar
router.post('/', async(req, res)=>{
const { title, author, year} = req.body; // Extrai os dados da requisição
// tenta salvar o livro no banco de dados
try{
    const newBook = new Book({title, author, year});
    await newBook.save();
    // 201 é o códigp de status
    res.status(201).json(newBook);
}catch(error){
    res.status(500).json({message: 'Erro ao cadastrar o livro'});
}

});

