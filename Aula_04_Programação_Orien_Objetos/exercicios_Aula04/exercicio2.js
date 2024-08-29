// Exercicio 2
// Definição da classe Pessoa
class Pessoa {
    // Construtor para inicializar os atributos
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    // Método para exibir informações sobre o trabalho
    exibirTrabalho(nomeEmpresa, tempoTrabalho) {
        console.log(`Nome da empresa: ${nomeEmpresa}`);
        console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
    }
}

// Criando um objeto da classe Pessoa
const pessoa = new Pessoa('Ana', 30, 'Desenvolvedora', 5000);

pessoa.exibirTrabalho('Tech Solutions', 5);
