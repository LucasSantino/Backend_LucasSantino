let saldo = 10000; 
let deposito = 1340; 
let saque = 8265; 
let operacao = 'deposito'; 
if (operacao === 'deposito') {
    saldo += deposito; 
    console.log("Depósito realizado. Novo saldo: R$ " + saldo);
} else if (operacao === 'saque') {
    saldo -= saque; 
    console.log("Saque realizado. Novo saldo: R$ " + saldo);
} else {
    console.log("Operação inválida. Por favor, escolha 'deposito' ou 'saque'.");
}

console.log("Saldo final: R$ " + saldo);
