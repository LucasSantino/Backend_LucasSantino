class Fruta{
    // Criar constructor
    constructor(){
       this.sabor = "Doce";
       this.nome = "Laranja";
       this.cor="verde";
       this.peso="400";
       this.diasdecolheita = 5;
       this.isMadura = null; /// o atributo p0ode ser opicional, inicializando com null    
} 


/// Cria étodo
madura(diasParaMadura) {
    if (diasParaMadura >= this.diasdecolheita) {
        console.log(`A ${this.nome} está madura`);
    } 
    else{
     console.log( ` A ${this.nome} não esta madura`)
    }
}

}
const Tangerina = new Fruta();
Tangerina.madura(6);