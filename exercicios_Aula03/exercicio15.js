// Função que calcula a potência da base elevada ao expoente
function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

const base = 2;      
const expoente = 3;
const resultado = calculaPotencia(base, expoente);

console.log(`${base} elevado à potência de ${expoente} é ${resultado}.`);
