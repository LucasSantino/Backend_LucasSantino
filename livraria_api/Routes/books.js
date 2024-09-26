
// Cria as rotas
const express = require('express') // importa o express para criar o servidor
const Book = require('../models/Book') // importa o modelo dos livros Book.js
const router = express.Router(); // cria o elemento para rotear com base nas requisições

// Cria rota do post
// async é por conta que a requisição tem um certo tempo para retornar
router.post('/',async(req,res)=>{
const {title, author,year} = req.body; // Extrai os dados da requisição
// tenta salvar o livro no banco de dados
try{
    const newBook = new Book({title, author, year});
    await newBook.save();
    // 201 - código de status 
    res.status(201).json(newBook);
}catch(error){
    res.status(500).json({message:'Erro ao cadastrar livro'});
}

});

// rota Get
// req - requisição
// res - resposta
router.get('/',async (req,res)=>{
try{
    const books = await Book.find(); // busca todos os livros com o metódo find
    res.status(200).json(books) // retorna a lista de livros
}catch(error){
    res.status(500).json({message: 'Erro ao buscar os livros ',error}) // retorna o erro se houver

}
});

// put - modifica elemento 
router.put('/:id',async(req,res)=>{
    const {title,author,year} = req.body; // extrai o conteudo da requisição
try{
const updatedBook = await Book.findByIdAndUpdate(req.params.id,{title,author, year},{new: true});
res.status(200).json(updatedBook);
}catch(error){
    res.status(500).json({message:'Erro ao atualizar livro',error}); 
}
})
// delete - deleta elemento pelo id
router.delete('/:id',async(req,res)=>{
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Livro deletado com sucesso'});
    }catch(error){
        res.status(500).json({message:'Erro ao deletar livro',error});
    }

})
// exporta o roteador para usar no server.js
module.exports = router
