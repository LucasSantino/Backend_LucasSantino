const Livro = {
    titulo: "Assassin's Creed Black Flag",
    autor: "Rick Anton Gill",
    anoPublicacao: 2013,
    genero: "Ficção histórica, Literatura fantástica, Ficção de aventura",
    idadePublicacao: new Date().getFullYear() - 2013,  // calcula a idade se baseando no ano de publicação
    avaliacao: 4.8       
};

// Exibindo os detalhes do livro antes de excluir a propriedade avaliacao
console.log("Título:", Livro["titulo"]);
console.log("Autor:", Livro["autor"]);
console.log("Ano de publicação:", Livro["anoPublicacao"]);
console.log("Gênero:", Livro["genero"]);
console.log("Idade de publicação:", Livro["idadePublicacao"]);
console.log("Avaliação:", Livro["avaliacao"]); 

// Excluindo a propriedade avaliacao do objeto livro
delete Livro["avaliacao"]; 

// Exibindo os detalhes do livro novamente para verificar se a avaliação foi removida
console.log("Título:", Livro["titulo"]);
console.log("Autor:", Livro["autor"]);
console.log("Ano de publicação:", Livro["anoPublicacao"]);
console.log("Gênero:", Livro["genero"]);
console.log("Idade de publicação:", Livro["idadePublicacao"]);
console.log("Avaliação:", Livro["avaliacao"]); // Agora deve imprimir "undefined" porque a propriedade foi excluída



// exercicio 12 parte 2
console.log("//////// exercicio 12 parte //////2");

const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
    cpf: "123456789-00", // Novo campo adicionado
    seguroSocial: "987-65-4320" // Novo campo adicionado
  };
  
  // Formatando os dados para exibição
  const cpfFormatado = pessoa.cpf ? pessoa.cpf.substring(0, 4) + "****" : "N/A";
  const identidadeFormatada = pessoa.carteiraIdentidade ? pessoa.carteiraIdentidade.substring(0, 4) + "****" : "N/A";
  

  console.log("Nome:", pessoa.nome);
  console.log("Data de Nascimento:", pessoa.dataNascimento);
  console.log("Carteira de Identidade:", identidadeFormatada);
  console.log("Email:", pessoa.email);
  console.log("Telefone:", pessoa.telefone);
  console.log("Cidade:", pessoa.cidade);
  console.log("Estado:", pessoa.estado);
  console.log("CPF:", cpfFormatado);
  console.log("Seguro Social:", pessoa.seguroSocial);
  
              
