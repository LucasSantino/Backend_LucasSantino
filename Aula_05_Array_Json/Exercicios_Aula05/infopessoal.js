const pessoa = {
    nome: "Lucas Santino da Silva",
    idade: 22,
    solteiro: true,
    hobbies: ["Volei", "VideoGames", "Leitura", "Assistir Filmes"]
};

function mostrarInfoPessoa(pessoa) {
    console.log("Nome:", pessoa.nome, "(Tipo:", typeof pessoa.nome, ")");
    console.log("Idade:", pessoa.idade, "(Tipo:", typeof pessoa.idade, ")");
    console.log("Solteiro:", pessoa.solteiro, "(Tipo:", typeof pessoa.solteiro, ")");
    console.log("Hobbies:", pessoa.hobbies, "(Tipo:", typeof pessoa.hobbies, ")");
}


mostrarInfoPessoa(pessoa);






