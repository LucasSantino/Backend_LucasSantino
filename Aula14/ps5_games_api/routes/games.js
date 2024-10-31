const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Game = require('../models/Game');
const router = express.Router()
 

// configuração do caminho para upload das imagens
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'upload/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});


/// Rota para cadastrar um novo jogo

router.post('/',upload.single('image'),async(req,res)=>{
    try{
        const {name,value,year,rating} = req.body;
        const image = req.file.path;
        const newGame = new Game({
            name,
            value,
            year,
            rating, 
            image
        });
        await newGame.save();
        res.status(201).json({message: 'Jogo cadastrado com sucesso',game:newGame});
    }catch(error){
      res.status(500).json({message: 'Erro ao cadastrar o jogo',error})
    }
});

// Rota para listar o jogo

router.get('/',async(req,res)=>{
    try {
        const games = await Game.find();
        res.status(201).json(games);
    }catch(error){
        res.status(500).json({message:'Erro ao buscar os jogos',error});
    }
});
module.exports = router;