// cria uma classe chamada casa
class Casa{ 
    // cria o construtor que serve para passar parametros para clase
    constructor(){
        this.cor= null; // parametro de cor
        this.qtdecomodos=null; //parametro de qtde de comodos

    }
     // método para exibir as inforçoes de casa   
    exibeinfo(cor,qtdecomodos) {
        console.log(`A cor da casa é ${this.cor} e tem ${this.qtdecomodos} comodos`);
    }
            
abrirjanelas(qtde){
    comsole.log(`Abrir ${qtde} janelas`);
}

fecharjanelas(){
    if(qtde ==2){
        console.log("Todas as janelas estão fechada");
    }
    if(qtde >2){
        console.log(`Não existe ${qtde} janelas`);
    }
    
    else{
        console.log(`Fechar ${qtde} janelas`)
    }
    
}
abrirportas(){
    console.log("Portas abertas");
}

fecharportas(){
    console.log("Porta fechada")
}

}        


/*
function main(){ 
    let minhaCasa = new Casa(); // cria um objeto chamado minha casa
    minhaCasa.cor = "Azul";
    minhaCasa.qtdecomodos=3;
    minhaCasa.exibeinfo(minhaCasa.cor, minhaCasa.qtdecomodos);
}
*/


let minhaCasa = new Casa(); // cria um objeto chamado minha casa
    minhaCasa.cor = "Amarela";
    minhaCasa.qtdecomodos=3;
    minhaCasa.exibeinfo(minhaCasa.cor, minhaCasa.qtdecomodos);

const Casa2 = new Casa();
Casa2.cor = "Vemelho";
Casa2.qtdecomodos=5;
Casa2.exibeinfo();
Casa2.abrirjanelas(1);
Casa2.abrirportas();
Casa2.abrirjanelas(2);
Casa2.fecharjanelas(2);
