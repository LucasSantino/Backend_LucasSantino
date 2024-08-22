const readline = require('readline');

const rl= readline.createInterface({
    input: process.stdin,
    output:process.stdout

});

// Pergunte ao usuário
rl.question('Digite algo: ', (answer) => {
    // Resposta do usuário
    console.log(`Voçê digitou: ${answer}`);

    //Fecha a interface
    rl.close();
});