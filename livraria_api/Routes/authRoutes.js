const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

// Rota para registrar novos usuarios

router.post('/register',authController.register)

// rota para login

router.post('/login',authController.login)

module.exports = router