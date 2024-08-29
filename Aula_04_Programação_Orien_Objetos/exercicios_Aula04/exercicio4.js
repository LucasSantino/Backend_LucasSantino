// Exercicio 4
// Definição da classe Cliente
class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    // Método para realizar uma transação Pix
    pix(valor) {
        if (valor <= 0) {
            console.log("O valor do Pix deve ser positivo.");
            return;
        }
        if (this.saldo < valor) {
            console.log("Saldo insuficiente para realizar o Pix.");
            return;
        }
        this.saldo -= valor;
        console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    // Método para realizar um empréstimo
    emprestimo(valor) {
        if (valor <= 0) {
            console.log("O valor do empréstimo deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Empréstimo de R$${valor.toFixed(2)} aprovado.`);
    }

    // Método para realizar um saque
    saque(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (this.saldo < valor) {
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    // Método para exibir o extrato
    extrato() {
        console.log(`Extrato do cliente ${this.nome}:`);
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

// Função para interagir com o usuário
function realizarTransacoes() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Coleta informações do cliente
    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite sua profissão: ', (profissao) => {
            rl.question('Digite seu saldo inicial: R$', (saldo) => {
                const cliente = new Cliente(nome, profissao, parseFloat(saldo));
                console.log(`Bem-vindo, ${cliente.nome}!`);

                function menu() {
                    console.log('\nEscolha uma transação:');
                    console.log('1. Pix');
                    console.log('2. Empréstimo');
                    console.log('3. Saque');
                    console.log('4. Extrato');
                    console.log('5. Sair');

                    rl.question('Opção: ', (opcao) => {
                        switch (opcao) {
                            case '1':
                                rl.question('Digite o valor do Pix: R$', (valor) => {
                                    cliente.pix(parseFloat(valor));
                                    menu();
                                });
                                break;
                            case '2':
                                rl.question('Digite o valor do empréstimo: R$', (valor) => {
                                    cliente.emprestimo(parseFloat(valor));
                                    menu();
                                });
                                break;
                            case '3':
                                rl.question('Digite o valor do saque: R$', (valor) => {
                                    cliente.saque(parseFloat(valor));
                                    menu();
                                });
                                break;
                            case '4':
                                cliente.extrato();
                                menu();
                                break;
                            case '5':
                                console.log('Saindo...');
                                rl.close();
                                break;
                            default:
                                console.log('Opção inválida. Tente novamente.');
                                menu();
                                break;
                        }
                    });
                }

                menu();
            });
        });
    });
}


realizarTransacoes();
