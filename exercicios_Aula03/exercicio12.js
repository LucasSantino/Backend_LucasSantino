function verificarMaioridade(idade) { //função
    if (idade >= 18) {
        return 'Você é maior de idade, meus pesames!!!';
    } else {
        return 'Você é menor de idade, sortudo não precisa pagar boleto!!!';
    }
}

// Testa a função com uma idade específica
const idadePessoa = 20;  
const resultado = verificarMaioridade(idadePessoa);

// Imprime o resultado no console
console.log(resultado);
