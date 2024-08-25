// Função que retorna uma saudação personalizada
function saudacaoPersonalizada(nome) {
    return `Olá, como esta o seu dia?${nome} Seja bem-vindo(a) ao Sistema!`;
}

// Chama a função e exibe a saudação no console
const nomePessoa = 'Lucas';  
const mensagem = saudacaoPersonalizada(nomePessoa);

console.log(mensagem);