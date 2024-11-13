const mongoose = require('mongoose');

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
    title:{type: String, required: true},
    author: {type:String, required: true},
    year:{type:Number},
    ISBN:{type:Number},


});

// exportando o modelo
module.exports=mongoose.model('Book', BookSchema);