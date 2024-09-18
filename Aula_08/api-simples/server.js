// criando a variavel express
const express = require('express')  /// é um pacote do note que serve para criar um servidor

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


app.post('/data', (req,res)=>{
    const {nome,idade} = req.body
    res.send(`Nome ${nome} idade ${idade}`);

});



// iniciando o servidor e a porta
app.listen(porta,()=>{
    console.log(`Api executando na porta ${porta} `)
});

