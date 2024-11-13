const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//inicializaçãp do app

const app= express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://SantinoLucas:<relampago>@library.fetwz.mongodb.net/'), {
    userNewUrlParser:true,
    useUnifiedtopology:true,
}

.then(()=> console.log('MongoDB conectado'))
.cath(err => console.error('Erro ao tentar conectar com o MongoDB:', err));

//Importação das rotas
const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes);

// Definindo a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

