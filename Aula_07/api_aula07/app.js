const express = require('express');
const bodyParser = require('body-parser'); 
const bookRoutes = require('./routes/bookRoutes'); 

const app = express(); // define o servidor
app.use(bodyParser.json());
app.use('/api', bookRoutes);

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});