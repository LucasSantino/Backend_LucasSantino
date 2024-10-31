
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Game = require('../models/Game');
const router = express.Router();

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname);
    }
});

const upload = multer({ storage: storage });

// Rota para criar um novo jogo
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const {name, value, releaseYear, rating } = req.body;
        const image = req.file.path;

        const newGame = new Game({
            name,
            value,
            releaseYear,
            rating,
            image
        });

        await newGame.save();
        res.status(201).json({ message: 'Jogo cadastrado com sucesso', game: newGame });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o jogo', error });
    }
});

// Rota para listar todos os jogos
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os jogos', error });
    }
});

module.exports = router;
