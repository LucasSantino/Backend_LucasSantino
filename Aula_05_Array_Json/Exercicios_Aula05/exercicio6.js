const anoAtual = new Date().getFullYear();

const Livro={
    titulo:"Percy Jacksom e o Mar de Monstros",
    autor:"Rick Riordan",
    anoPublicacao:2005,
    genero:"Aventura, Fantasia e Mitologia",
};

// Calcula a idade da publicação subtraindo o ano de publicação do ano atual
Livro.idadePublicacao = anoAtual - Livro.anoPublicacao;

// Cria uma string formatada contendo todos os detalhes do livro
// Usa template literals (crase) para formatar a string
const MostrarDetalhes = `Título: ${Livro.titulo}\n` + 
                        `Autor: ${Livro.autor}\n` + 
                        `Ano de Publicação: ${Livro.anoPublicacao}\n` + 
                        `Gênero: ${Livro.genero}\n` + 
                        `Idade da Publicação: ${Livro.idadePublicacao} anos`;
console.log("Mostrar detalhes do livro:", MostrarDetalhes);






