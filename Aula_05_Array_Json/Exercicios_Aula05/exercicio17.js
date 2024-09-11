const calculadora = {
    soma: function(a, b,) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            return "Erro: Não é possivel dividir por ZERO! Revise a operação!!!";
        } else {
            return a / b;
        }
    },
    calcularMedia: function(array) {
        if (array.length === 0) {
            return "Erro: O Array está vazio!";
        }
        const soma = array.reduce((acc, valor) => acc + valor, 0);
        return soma / array.length;
    }
};

// Chamando as operações
console.log("Soma de 23 e 120:", calculadora.soma(23, 120));
console.log("Subtração de 1895 e 1010:", calculadora.subtracao(1895, 1010));
console.log("Multiplicação de 458 e 6:", calculadora.multiplicacao(458, 6));
console.log("Divisão de 26 por 2:", calculadora.divisao(26, 2));
console.log("Divisão de 1251 por 0:", calculadora.divisao(1251, 0));

// método para calcular a média  
const numeros = [98, 70, 58, 100, 89];
console.log("Média dos números [98, 70, 58, 100, 89]:", calculadora.calcularMedia(numeros));
