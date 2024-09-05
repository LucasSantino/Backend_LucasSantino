// Criando o objeto livro com a propriedade idadePublicacao
const livro = {
    titulo: "Assassin's Creed Black Flag",
    autor: "Rick Anton Gill",
    anoPublicacao: 2013,
    genero: "Ficção histórica, Literatura fantástica, Ficção de aventura",
    idadePublicacao: new Date().getFullYear() - 2013 // Calcula a idade com base no ano atual
};

// Acessando e imprimindo as propriedades usando colchetes
console.log("Título:", livro["titulo"]);
console.log("Autor:", livro["autor"]);
console.log("Ano de publicação:", livro["anoPublicacao"]);
console.log("Gênero:", livro["genero"]);
console.log("Idade de publicação:", livro["idadePublicacao"]);
