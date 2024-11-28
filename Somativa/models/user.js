const mongoose = require('mongoose');

// Define o esuema do usuário
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Nome do usuario
    password: { type: String, required: true }, // Senha obrigatória
});

// Exporta o modelo de usuário
module.exports = mongoose.model('User', userSchema);