const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const gamesRoutes = require('./routes/games');
const path = require('path');

const app = express();

// Conecta ao MongoDB
mongoose.connect('mongodb+srv://SantinoLucas:relampago@library.fetwz.mongodb.net/ps5_games', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParse.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/games', gamesRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
