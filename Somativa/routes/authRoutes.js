const express = require('express'); // Importa o express
const router = express.Router(); // Cria um roteador do express
const authController = require('../controllers/authControllers')

// Rota para registrar novos usuários
router.post('/register', authController.register);

// Rota para registrar novos usuários
router.post('/login', authController.login);

// Rota para listar todos os usuários
router.get('/user', authController.getAllUsers);

module.exports = router; // Exporta o roteador para uso no app.js