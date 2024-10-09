const mongoose = require('mongoose')

// Define o esquema de usuario

const userSchema = new mongoose.Schema({
    username:{ type: String, required: true, unique: true},
    password: { type: String, required: true}
})

// Exporta o modelo de usuário

module.exports = mongoose.model('User',userSchema);