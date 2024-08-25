const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
let res;
//Pergunte para o primeiro valor
rl.questtion('Digite o primeiro valor: ', (valor1)=> {
    //Pergunte para o segundo valor
    rl,questtion('Digite o segundo valor: ', (valor2) => {
        //exibe os valores digitados
        console.log('Primeir numero: ', valor1);
        console.log('Segundo numero: ', valor2);
        console.log(valor1+valor2);
        console.log(number(vaor1 + number(valor2)));
    // fecha a interface de leitura
        rl.close();
    });
        
});
    
    
