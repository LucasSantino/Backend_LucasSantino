const express = require('express');
const mongoose = require('mongoose');
const Book = require('../models/Book'); // Importação do modelo Book
const multer = require('multer');
const router = express.Router(); // Criamos o roteador

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Rota POST (Criar)
router.post('/', upload.single('image'), async (req, res) => {
    const { title, author, year, ISBN } = req.body; // Extração dos dados de requisição
    try {
        // Caminho da imagem enviada pelo Multer
        const image = req.file.path;

        const newBook = new Book({ title, author, year, ISBN, image }); // Criação e salvamento dos dados do livro
        await newBook.save();
        res.status(201).json({ message: 'Livro cadastrado com sucesso', book: newBook }); // Retorno do livro
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o livro', error }); // Retorno se houver erro
    }
});

// Rota GET (Leitura)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Busca todos os livros com o método find
        res.status(200).json(books); // Retorna a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os livros', error }); // Retorna o erro se houver
    }
});

// Rota GET (Leitura) - Utilizando filtros: Busca por pelo titulo (title)
router.get('/title', async (req, res) => {
    const { title } = req.query; // Obtém o título a partir da query string

    if (!title) {
        // Caso não tenha sido fornecido o título na query, retorna erro
        return res.status(400).json({ message: 'O parâmetro "title" é necessário para a busca.' });
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

// Rota PUT (Atualizar)
router.put('/:id', upload.single('image'), async (req, res) => {
    const { title, author, year, ISBN } = req.body; // Extração dos dados do corpo da requisição

    const updateData = {}; // Objeto que vai armazenar os dados que queremos atualizar

    // Preenche o objeto de atualização apenas com os campos que foram passados na requisição
    if (title) updateData.title = title;
    if (author) updateData.author = author;
    if (year) updateData.year = year;
    if (ISBN) updateData.ISBN = ISBN;

    // Atualiza a imagem, se enviada
    if (req.file) {
        updateData.image = req.file.path;
    }

    try {
        // Utilizando o findByIdAndUpdate para atualizar apenas os campos fornecidos
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, // O ID do livro a ser atualizado
            updateData, // Os dados a serem atualizados
            { new: true } // Retorna o livro atualizado
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

// Rota DELETE (Excluir)
router.delete('/isbn/:isbn', async (req, res) => {
    const { isbn } = req.params; // Extrai o ISBN da URL
    try {
        const deletedBook = await Book.findOneAndDelete({ ISBN: isbn }); // Busca e deleta o livro pelo ISBN
        if (!deletedBook) {
            return res.status(404).json({ message: 'Livro não encontrado com esse ISBN' }); // Retorna erro se não encontrar o livro
        }
        res.status(200).json({ message: 'Livro deletado com sucesso', book: deletedBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao tentar deletar o livro', error });
    }
});

module.exports = router;
