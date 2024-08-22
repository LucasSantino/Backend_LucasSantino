class Usuario{
    constructor(){
        this.nome= null;
        this.idade= null;
    }
exibeinfo(){
    console.log(`nome ${this.nome}, idade ${this.idade}`);
}

}

class cliente extends Usuario {
    constructor() {
        super();

        this.cargo = null;
    }

    exibeinfocargo(){
        console.log(`Nome ${this.mome}, idade ${this.idade}`);
    }
}


const Lucas = new cliente();
Lucas.nome="Lucas";
Lucas.idade=22;
Lucas.cargo=""
