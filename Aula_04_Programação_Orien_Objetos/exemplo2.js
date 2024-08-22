class Usuario{
    constructor(){
        this.nome = null;
        this.login= null;
        this.senha=null;
        this.cpd=null;
        this.celular=null;
}

exibir_info(){
    console.log(`Nome do usuario: ${this.nome}`);
    console.log(`Login: ${ this.login}`);
    console.log(`Senha: ${this.senha}`);
    console.log(`cpf: ${this.cpf}`);
    console.log(`celular ${this.celular}`);
}

verifica_login(user, senha){
    if((user == this.login) && (senha == this.senha)){
        console.log(`Login correto ! Bem vindo ${user}`);
    }
    else{
        console.log(`Login incorreto ! Tente novemente!`);
    }
}


}

const Usuario1 = new Usuario(); // cria um objeto usuário 1 a partir da classe usuario
Usuario1.nome="Daniel Vieira";
Usuario1.login= "Daniel";
Usuario1.senha="12345";
Usuario1.cpf="48851946876";
Usuario1.celular= "19986059291";
Usuario1.exibir_info()
Usuario1.verifica_login("Daniel", "1234");
