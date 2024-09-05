// Criando o objeto livro com as propriedades solicitadas
const Livro = {
    titulo: "Assassin's Creed Black Flag",
    autor: "Rick Anton Gill",
    anoPublicacao: 2013,
    genero: "Ficção histórica, Literatura fantástica, Ficção de aventura",
    idadePublicacao: new Date().getFullYear() - 2013,  // calcula a idade se baseando no ano de publicação
    avaliacao: 4.8       
};


console.log("Título:", Livro["titulo"]);
console.log("Autor:", Livro["autor"]);
console.log("Ano de publicação:", Livro["anoPublicacao"]);
console.log("Gênero:", Livro["genero"]);
console.log("Idade de publicação:", Livro["idadePublicacao"]);
console.log("Avaliação:", Livro["avaliacao"]); 


delete Livro["avaliacao"]; // Excluindo a propriedade avaliacao do objeto livro

// Exibindo os detalhes do livro novamente para verificar se a avaliação foi removida
console.log("Título:", Livro["titulo"]);
console.log("Autor:", Livro["autor"]);
console.log("Ano de publicação:", Livro["anoPublicacao"]);
console.log("Gênero:", Livro["genero"]);
console.log("Idade de publicação:", Livro["idadePublicacao"]);
console.log("Avaliação:", Livro["avaliacao"]); // propriedade foi excluída
