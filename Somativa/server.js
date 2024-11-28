const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Para servir arquivos estáticos
require('dotenv').config(); // Para carregar variáveis de ambiente do arquivo .env

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro ao tentar conectar com o MongoDB:', err));

// Configuração para servir arquivos estáticos da pasta "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importação das rotas
const booksRoutes = require('./routes/books');
const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação
app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes); // Adiciona o prefixo `/api/auth` para rotas de autenticação

// Rota de teste inicial (opcional, pode remover se quiser)
app.get('/', (req, res) => {
    res.status(200).send('API está funcionando!');
});

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
