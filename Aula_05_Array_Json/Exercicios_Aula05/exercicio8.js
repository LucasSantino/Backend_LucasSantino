// Criando o objeto livro com as propriedades solicitadas
const livro = {
    titulo: "Assassin's Creed Black Flag",
    autor: "Rick Anton Gill",
    anoPublicacao: 2013,
    genero: "Ficção histórica, Literatura fantástica, Ficção de aventura",
    idadePublicacao: new Date().getFullYear() - 2013,  // calcula a idade se baseando no ano de publicação
    avaliacao: null  // nova propriedade inicializada como null
};

// Adicionando uma avaliação ou verificando se já existe uma avaliação
const novaAvaliacao = 4.8; // Exemplo de nova avaliação

if (livro["avaliacao"] === null) {
    livro["avaliacao"] = novaAvaliacao;
    console.log("Avaliação adicionada com sucesso:", livro["avaliacao"]);
} else {
    console.log("O livro já possui uma avaliação.");
}

// Acessando e imprimindo as propriedades usando colchetes
console.log("Título:", livro["titulo"]);
console.log("Autor:", livro["autor"]);
console.log("Ano de publicação:", livro["anoPublicacao"]);
console.log("Gênero:", livro["genero"]);
console.log("Idade de publicação:", livro["idadePublicacao"]);
console.log("Avaliação:", livro["avaliacao"]);
