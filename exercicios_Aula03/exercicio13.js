function verificaPalindromo(str) {
    // Remove espaços e transforma a string para minúsculas para uma comparação mais precisa
    const strLimpa = str.replace(/\s+/g, '').toLowerCase();

    // Inverte a string
    const strInvertida = strLimpa.split('').reverse().join('');

    // Verifica se a string original é igual à string invertida
    return strLimpa === strInvertida;
}

// Testa a função com uma string específica
const palavra = 'Radar';  // se alterar esse valor podera testar com diferentes palavras
const resultado = verificaPalindromo(palavra);

console.log(`A palavra "${palavra}" ${resultado ? 'é' : 'não é'} um palíndromo.`);
