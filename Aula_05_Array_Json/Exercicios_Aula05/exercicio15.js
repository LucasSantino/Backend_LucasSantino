const pessoa = {
    nome: "Lucas Santino da Silva",
    idade: 22,
    solteiro: true,
    hobbies: ["Volei", "VideoGames", "Leitura", "Assistir Filmes"],
    endereco: {
        rua: "Rua 17, José Pinto Rodrigues",
        cidade: "Monte Mor",
        estado: "SP"
    }
};

// Modificando a função mostrarInfoPessoa para incluir informações de endereço
function mostrarInfoPessoa(pessoa) {
    console.log("Nome:", pessoa.nome, "(Tipo:", typeof pessoa.nome, ")");
    console.log("Idade:", pessoa.idade, "(Tipo:", typeof pessoa.idade, ")");
    console.log("Solteiro:", pessoa.solteiro, "(Tipo:", typeof pessoa.solteiro, ")");
    console.log("Hobbies:", pessoa.hobbies, "(Tipo:", typeof pessoa.hobbies, ")");
    console.log("Endereço:", `Rua: ${pessoa.endereco.rua}, Cidade: ${pessoa.endereco.cidade}, Estado: ${pessoa.endereco.estado}`, "(Tipo:", typeof pessoa.endereco, ")");
}

// Chamando a função para verificar se as informações estão corretas
mostrarInfoPessoa(pessoa);
