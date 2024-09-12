const express = require('express')  // variavel express que vai salvar uma requisição
const app = express() // variavel app(aplicativo) armazena o express
const port = 3000 // porta padrão para aqs aplicações em node


// cria uma requisição get

app.get('/', (req, res)=>{
    res.send('Hello backend teste');
});

// App.post é para fazer um post na api com o express
app.post('/', (req, res)=>{
    res.send('Bckend teste');
});

app.listen(port,()=>{
    console.log(`Exemplo app ouvindo port ${port}`);
});
