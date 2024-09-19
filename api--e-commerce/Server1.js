const express = require('express'); // Pacote para criar um servidor
const app = express(); // Instância do express
const porta = 3000; // Define a porta

// Listas para armazenar produtos e clientes
const produtos = [];
const clientes = [];

// Middleware para processar resposta em formato JSON
app.use(express.json());

// Rota PRINCIPAL//
app.get('/', (req, res) => {
    res.send('Bem vindo à API - Senai Market v 1.0');
});

// Rota PRODUTOS///
app.post('/produtos', (req, res) => {
    const { nome, qtde, valor } = req.body;
    produtos.push({ nome, qtde, valor }); // Adiciona o produto
    res.send(`Produto cadastrado: Nome ${nome}, Qtde ${qtde}, Valor ${valor}`);
});

app.get('/produtos', (req, res) => {
    res.json(produtos); // Retorna a lista de produtos
});

// Rota CLIENTES//
app.post('/clientes', (req, res) => {
    const { login, senha } = req.body;
    clientes.push({ login, senha }); // Adiciona o cliente
    res.send(`Cliente cadastrado: Login ${login}`);
});

app.get('/clientes', (req, res) => {
    res.json(clientes); // Retorna a lista de clientes
});

// Iniciando o servidor da api
app.listen(porta, () => {
    console.log(`API - Senai Market v 1.0 executando na porta ${porta}`);
});
