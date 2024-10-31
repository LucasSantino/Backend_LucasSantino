const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const gamesRoutes = require('./routes/games');
const patch = require('path');
const path = require('path');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://SantinoLucas:<relampago>@library.fetwz.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log(err));


// MiddLeware 
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/games', gamesRoutes);


// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


// Configurando do Multer pra upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'uploads/'); // Define o diretório onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        // define o nome do arquivo: uma combinação de timestamp e o nome original
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage});

// Roita para criar um novo jogo

router.post('/', upload.single('image'), async (req, res)=>{
    try {
        const { name, value, releaseYear, rating} = req.body:
        const image = req.file.path; // Caminho do arquivo de imagem salvo
        
        // Criando um novo documento de jogo com os dados recebidos
        const newGame = new Game({
            name,
            value,
            releaseYear,
            rating,
            image
        });

        await newGame.save(); // Salvando o docuemento no MongoDB
        res.status(201).json({message: 'Jogo cadastrado com sucesso', game: newGame});
    }catch (error) {
        res.satus(500).json({message: 'Erro ao cadastrar o jogo, error'});
    }
});