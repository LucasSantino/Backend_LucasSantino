
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: String, required: true },
    image: { type: String, required: true } // Caminho da imagem salva
});

module.exports = mongoose.model('Game', GameSchema);
