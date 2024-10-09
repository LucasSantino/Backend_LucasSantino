const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
// Midware to parse URl-encoded bodies (optional, but useful for form )
//app.use(express.urlencoded({ extended: true}));

// Your routes here

// Função para regegistrar novos usuarios
exports.register =  async(req,res) => {
    const {username,password } = req.body;
    try{
        // Verifica se o úsuario ja existe
        const existingUser = await User.findOne({username});
        if (existingUser){
            return res.status(400).json({error: 'Usuario ja existe'});
        }

        // Criptografa a senha antes de salvar no banco
        const hashedPassword = await bcrypt.hash(password,10);

        // Cria um novo usuario
        const newUser = new User({username, password: hashedPassword})  //HASHED - Onde utiliza a função para criptografar
        await newUser.save();
        res.status(201).json({message: 'Usuario registrado com sucesso'});
    }catch(error){
        console.error(error); // Loga o erro
        res.status(500).json({error: 'Erro ao registrar usuario'});
    }
};


// função para fazer login de usuarios
exports.login = async(req,res)=>{
    const {username,password}= req.body;

    try{
   // busca usuario pelo nome
   const user = await User.findOne({ username})
   if(!user) return res.status(400).json({error: 'Usuario não encontrado'})
   
    // Compara a senha fornecida com a senha armazenada
   const isMatch = await bcrypt.compare(password, user.password);
   if(!isMatch) return res.status(400).json({error: 'Senha incorreta'});

    // cria web token
    const token = jwt.sign({id:user.id},process.env.JWT_SECRET, {expiresIn: '1h'}); // expira em 1 hora o token
    res.json({token});

} catch(error){
        console.error(error); // loga o erro
        res.status(500).json({error: 'Erro ao fazer login'});
    }
};