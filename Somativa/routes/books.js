const express = require('express');
const Book = require('..models/Book');  // importação do modelo Book
const router = express.Router();  //Criamos o roteador

// Rota POST (Criar)
router.post('/', async (req, res) => {
    const { title, author, year, ISBN} = req.body; // extração dos dados de requisição
    try{
        const newBook = new Book({ title, author, year, ISBN}); // criação e salvamento dos dados do livros
        await newBook.save();
        res.status(201).json(newBook); // retorno do livro 
    } catch (error) {
        res.status(500).json({message: 'Erro ao criar o livro', error}); // retorno se houver erro
    }
});

// Rota GET (Leitura)
router.get('/',async (req,res)=>{
    try{
        const books = await Book.find(); // busca todos os livros com o metódo find
        res.status(200).json(books) // retorna a lista de livros
    }catch(error){
        res.status(500).json({message: 'Erro ao buscar os livros ',error}) // retorna o erro se houver
    
    }
});

// Rota PUT (Atualizar)
router.put('/:id',async(req,res)=>{
    const {title,author,year} = req.body; // extrai o conteudo da requisição
try{
const updatedBook = await Book.findByIdAndUpdate(req.params.id,{title,author, year, ISBN},{new: true});
res.status(200).json(updatedBook);
}catch(error){
    res.status(500).json({message:'Erro ao atualizar livro',error}); 
}
})

// Rota DELETE (excluir)
router.delete('/:id',async(req,res)=>{
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Livro deletado com sucesso'});
    }catch(error){
        res.status(500).json({message:'Erro ao tentar deletar o livro',error});
    }

})

//Exportação do roteador para ser usado no server.js
module.exports = router;