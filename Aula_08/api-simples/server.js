// criando a variavel express
const express = require('express')

// cria uma instancia do express
const app = express();
// define a porta que a api irá rodar
const porta= 3000

// Midware para prcessar a resposta com formato json
app.use(express.json())

// Criação da rota get na raiz da api
// req - requisição
// res - resposta
app.get('/', (req, res)=>{
    res.send('Api funcionando');
});

// inicia o servidor e a porta
app.listen(porta,()=>{
    console.log('Api executando na porta ${porta} ')
} );
