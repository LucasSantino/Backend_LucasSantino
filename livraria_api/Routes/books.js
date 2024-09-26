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

// Rota Get
router.get('/', async (req, res)=>{
    try{
        const books = await Books.find(); // Busca todos os livros metodo FIND
        res.status(200).json(books) // retorna a lista de livros
}catch(error){
    res.status(500).json({message: 'Erro ao buscar os livros', error}) // retorna o erro se houver
}
});

// put - modifica o elemento
router.put('/:id', async(req, res)=>{
    const {title, author,year} = req.body; // extrai o conteudo da requisição
try{
const updatedBook = await Book.findByIdAndUpdate(req. params.id,{title, author, year},{new: true});
res.status(200).json(updatedBook);
}catch(error){
    res.status(500).json({message: 'erro ao atualizar o livro', error});
}
})

// delete - deleta o lemento pelo id
routwr.delete('/:id',async(req, res)=>{
    try{
        await Book.findByIdAndDelete(rq.params.id);
        res.status(200).json({message: 'Livro deletado com sucesso'});
    }catch(error){
        res.status(500).json({message: 'Erro ao deletar livro', error});
    }
})

// exporta o roteador para uaar no servidor.js
modeule.exports = router
