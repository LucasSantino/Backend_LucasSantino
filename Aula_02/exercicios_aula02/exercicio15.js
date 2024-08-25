const altura = 1.75; 
const imc = peso / (altura * altura);
let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}
console.log("O IMC é:", imc.toFixed(2));
console.log("Classificação:", classificacao);