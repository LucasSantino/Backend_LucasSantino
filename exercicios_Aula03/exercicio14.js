function encontrarMaiorNumero(num1, num2, num3) {// Função que determina o maior de três números
    let maior;

    // Verifica qual é o maior número usando estruturas condicionais
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    return maior;
}

// Testa a função com três números específicos
const numero1 = 10;  
const numero2 = 20;
const numero3 = 15;
const maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);

console.log(`O maior número entre ${numero1}, ${numero2} e ${numero3} é ${maiorNumero}.`);
