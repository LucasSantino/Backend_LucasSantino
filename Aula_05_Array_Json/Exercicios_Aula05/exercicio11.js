const Livro={
    titulo: "Assassin's Creed Black Flag",
    autor: "Rick Anton Gill",
    anoPublicacao: 2013,
    genero: "Ficção histórica, Literatura fantástica",
    idadePublicacao: new Date().getFullYear() - 2013,  // calcula a idade se baseando no ano de publicação
}


console.log("Título:", Livro["titulo"]);
console.log("Autor:", Livro["autor"]);
console.log("Ano de publicação:", Livro["anoPublicacao"]);
console.log("Gênero: ", Livro["genero"]);
console.log("Idade de publicação:", Livro["idadePublicacao"]);

Livro["genero"] = "Ação"; // Alterando o gênero do livro para "Ação"

console.log("Gênero:", Livro["genero"]); // const de alteração criada