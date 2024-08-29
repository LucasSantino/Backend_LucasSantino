// Exercicio 7
// Definição da classe Livros
class Livros {
    constructor(nome, quantidade, preco, autor, edicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.edicao = edicao;
    }

    // Método para emprestar um livro
    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`Livro "${this.nome}" emprestado com sucesso.`);
            console.log(`Quantidade disponível: ${this.quantidade}`);
        } else {
            console.log(`Não há cópias disponíveis do livro "${this.nome}".`);
        }
    }

    // Método para devolver um livro
    devolver() {
        this.quantidade++;
        console.log(`Livro "${this.nome}" devolvido com sucesso.`);
        console.log(`Quantidade disponível agora: ${this.quantidade}`);
    }

    // Método para exibir informações do livro
    exibirInformacoes() {
        console.log(`Nome do livro: ${this.nome}`);
        console.log(`Quantidade disponível: ${this.quantidade}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Edição: ${this.edicao}`);
    }
}

// Função para testar a classe Livros
function testarLivros() {
    console.log("Testando a classe Livros:");

    const meuLivro = new Livros('JavaScript: The Good Parts', 5, 99.90, 'Douglas Crockford', 2);

    // Exibindo informações iniciais
    meuLivro.exibirInformacoes();

    // Emprestando um livro
    meuLivro.emprestar();

    // Devolvendo um livro
    meuLivro.devolver();
}


testarLivros();
