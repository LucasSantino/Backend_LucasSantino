//Exemplo11 Objetos
// Criando um objeto chamado PESSOA
let pessoa={
    nome: 'Daniel',
    idade: 29,
    profissão: 'Engenheiro Eletronico',
    saudacao:function(){
        console.log("Olá!!!! Seja bem vindo!");
    }
}
pessoa.time = "Corinthians"

console.log(pessoa)
console.log(pessoa.saudacao)
console.log(pessoa.idade) // acessa uma informação especifica do obejeto pessoa