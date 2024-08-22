class Animal{
    constructor(){
        this.nome = null;
        this.idade = null;

    }

    //Método da classe base
    fazerSom(){
        console.log(`${this.nome} faz um som`);
    }
}

//Extends herança, a classe cachorro herda da classe animal algumas características como nome e idade
class Cachorro extends Animal{
    constructor(){
        //Chama o construtor da classe base
        super();
        this.raça = null;
    }
    //Método sobrescrito
    fazerSom(){
        console.log(`${this.nome} late`);
    }

    //Método adicional
    exibirInfo(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, Raça: ${this.raça}`);
    }
}

const Rocky = new Cachorro();
Rocky.nome = "Rocky";
Rocky.idade = "2";
Rocky.raça = "Amstaff";
Rocky.exibirInfo();