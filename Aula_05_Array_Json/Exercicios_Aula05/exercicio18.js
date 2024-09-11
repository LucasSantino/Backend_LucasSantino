const contaBancaria = {
    titular: "Lucas Santino da Silva",
    saldo: 1000,

    depositar: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito no valor de R$${valor} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    },

    sacar: function(valor) {
        if (valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log(`Saque no valor de R$${valor} realizado com sucesso.`);
            } else {
                console.log("Saldo insuficiente para o saque.");
            }
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
};

// Função para mostrar o perfil do cliente
function mostrarPerfilCliente(cliente) {
    console.log(`Nome do Cliente: ${cliente.nome}`);
}

// Função para mostrar o perfil do titular e o saldo da conta
function mostrarPerfilConta(conta) {
    console.log(`Titular da Conta: ${conta.titular}`);
    console.log(`Saldo: R$${conta.saldo}`);
}

// Realiza operações na conta bancária e exibe o perfil
contaBancaria.depositar(500);
contaBancaria.sacar(200);
mostrarPerfilConta(contaBancaria);

const cliente = {
    nome: "Kauã Layon Lima Bonfim",
    conta: contaBancaria
};

// Realiza operações na conta do cliente e exibe o perfil
cliente.conta.depositar(800);
cliente.conta.sacar(200);

// Mostra o perfil do cliente
mostrarPerfilCliente(cliente);

// Mostra o perfil da conta associada ao cliente
mostrarPerfilConta(cliente.conta);
