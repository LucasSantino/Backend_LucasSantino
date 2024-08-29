//Exercicio 1
// Definição da classe Carro
class Carro {
    // Construtor para inicializar os atributos
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motor_ligado = false;  
    }

    // ligar o motor
    ligar_motor() {
        this.motor_ligado = true;
    }

    // desligar o motor
    desligar_motor() {
        this.motor_ligado = false;
    }

    // Método para verificar o status do motor
    status_motor() {
        return this.motor_ligado ? 'O motor está ligado.' : 'O motor está desligado.';
    }
}

// Criando um objeto da classe Carro
const meuCarro = new Carro('Honda', 'Civic', 2020);

// Testando os métodos
console.log(meuCarro.status_motor()); 
meuCarro.ligar_motor();  
console.log(meuCarro.status_motor()); 
meuCarro.desligar_motor(); 
console.log(meuCarro.status_motor()); 
