class Animal{
    constructo(nome, idade){
        this.nome = null;
        this.idade = null;
    }

    // Método de classe base
    fazersom(){
        console.log(`${this.nome} faz um som,`);
    }
}


// extends herança, a calsse cachorro herda da classe animal algumas cafracteisticas como nome e idade
class cachorro extends Animal{
    constructor(nome, idade, raca) {
        // chama o constructor da classe base
        super(nome, idade, raca){
            // Chama o construtor da classe base
            super(nome, idade);
            this.raca=raca;
        }
        
    }
    /// Método Sobrescrito
    exibirinfo(){
        console.log(`nome: ${this.nome} late.`)
    }
}