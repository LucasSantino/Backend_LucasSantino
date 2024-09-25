const mongoose = require('mongoose') // Variavel mongoose que irá armazenar a conexão futura com o mongo

// Define a estrutura para salvar o livro no banco de dados
const BookSchema = new mongoose.Schema({
// titulo, tipo string, required indica que o parametero é obrigatório
title: {
    type: String, required: True},
author:{
    type: String, required: True
},
year:{ 
    type:Number
}


});