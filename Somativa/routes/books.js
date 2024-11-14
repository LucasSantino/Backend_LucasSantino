const express = require('express');
const Book = require('../models/Book');  // importação do modelo Book
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

// Rota GET(Leitura) - utilizando filtros
// Rota para buscar livros por título (GET)
router.get('/title', async (req, res) => {
    const { title } = req.query; // Obtém o título a partir da query string


    if (!title) {
        // Caso não tenha sido fornecido o título na query, retorna erro
        return res.status(400).json({ message: 'O parâmetro "titulo" é necessário para a busca.' });
    }


    try {
        // Busca livros que contenham o título parcial, com correspondência insensível a maiúsculas/minúsculas
        const books = await Book.find({
            title: { $regex: title, $options: 'i' } // 'i' para insensibilidade a maiúsculas/minúsculas
        });


        // Caso nenhum livro seja encontrado
        if (books.length === 0) {
            return res.status(404).json({ message: 'Nenhum livro encontrado com esse título.' });
        }


        // Retorna os livros encontrados
        res.status(200).json(books);
    } catch (error) {
        // Retorna erro caso haja algum problema na consulta
        res.status(500).json({ message: 'Erro ao buscar os livros', error });
    }
});



// Rota PUT (Atualizar) atraves de titulo, autor, ano,
router.put('/:id', async (req, res) => {
    const { title, author, year, ISBN } = req.body; // extrai os dados do corpo da requisição

    const updateData = {};  // Objeto que vai armazenar os dados que queremos atualizar

    // Preenche o objeto de atualização apenas com os campos que foram passados na requisição
    if (title) updateData.title = title;
    if (author) updateData.author = author;
    if (year) updateData.year = year;
    if (ISBN) updateData.ISBN = ISBN;

    try {
        // Utilizando o findByIdAndUpdate para atualizar apenas os campos fornecidos
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,       // O ID do livro a ser atualizado
            updateData,          // Os dados a serem atualizados (somente os campos passados na requisição)
            { new: true }        // Retorna o livro atualizado (não o antigo)
        );

        if (!updatedBook) {
            // Caso o livro não seja encontrado
            return res.status(404).json({ message: 'Livro não encontrado com esse ID' });
        }

        // Se o livro for encontrado e atualizado com sucesso
        res.status(200).json(updatedBook);
    } catch (error) {
        // Se houver erro ao tentar atualizar
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});


// Rota DELETE (excluir)
// Rota DELETE (Excluir) pelo ISBN
router.delete('/isbn/:isbn', async (req, res) => {
    const { isbn } = req.params; // extrai o ISBN da URL
    try {
        const deletedBook = await Book.findOneAndDelete({ ISBN: isbn }); // busca e deleta o livro pelo ISBN
        if (!deletedBook) {
            return res.status(404).json({ message: 'Livro não encontrado com esse ISBN' }); // retorna erro se não encontrar o livro
        }
        res.status(200).json({ message: 'Livro deletado com sucesso', book: deletedBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao tentar deletar o livro', error });
    }
});


//Exportação do roteador para ser usado no server.js
module.exports = router;