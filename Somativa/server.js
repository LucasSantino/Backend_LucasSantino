const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Para servir arquivos estáticos

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://SantinoLucas:relampago@library.fetwz.mongodb.net/somativa_library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro ao tentar conectar com o MongoDB:', err));

// Configuração para servir arquivos estáticos da pasta "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importação das rotas
const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes);

// Definindo a porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
