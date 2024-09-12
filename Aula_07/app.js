const express = require('express')  // variavel express que vai salvar uma requisição
const app = express() // variavel app(aplicativo) armazena o express
const port = 3000 // porta padrão para aqs aplicações em node


// cria uma requisição get

app.get('/', (req, res)=>{
    res.send('Hello backend teste');
});

app.get('/usuario', (req, res)=>{
    res.send(' usuario adimin');
});


// App.post é para fazer um post na api com o express
app.post('/', (req, res)=>{
    res.send('Bckend teste');
});

// teste com requisição post
app.post('/', (req, resp)=>{
    res.send('Teste post');
});

app.listen(port,()=>{
    console.log(`Exemplo app ouvindo port ${port}`);
});
