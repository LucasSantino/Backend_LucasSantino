// arquivo principal da api
// inicia o servidor
require('dotenv').config() // Carrega as variaveis do arquivo venv
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
// inicialização do app

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./Routes/authRoutes')


// Conexão com o mongo db

mongoose.connect('mongodb+srv://SantinoLucas:relampago@library.fetwz.mongodb.net//library'
   
    ,{
        useNewUrlParser:true,useUnifiedTopology:true
        
    }).then(()=>console.log('Mongodb conectado')).catch(err=>console.error('Erro ao conectar no mongo',err));
    
    // Importação das rotas
    const bookRoutes = require('./Routes/books');
    app.use('/api/books',bookRoutes); // irá retornar a rota dos livros
    app.use('/api/auth',authRoutes);
    // Define a porta do servidor
    app.listen(5000,()=>{
        console.log('Servidor executando na porta 5000');
    });