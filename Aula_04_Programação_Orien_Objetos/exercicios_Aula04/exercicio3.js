// Definição da classe Automovel (classe mãe)
class Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoCombustivel = tipoCombustivel;
        this.quantidadeRodas = quantidadeRodas;
        this.motorLigado = false;
        this.vidrosAbertos = false;
    }

    // Método para ligar o motor
    ligar() {
        if (!this.motorLigado) {
            this.motorLigado = true;
            console.log(`O motor do ${this.modelo} está ligado.`);
        } else {
            console.log(`O motor do ${this.modelo} já está ligado.`);
        }
    }

    // Método para desligar o motor
    desligar() {
        if (this.motorLigado) {
            this.motorLigado = false;
            console.log(`O motor do ${this.modelo} está desligado.`);
        } else {
            console.log(`O motor do ${this.modelo} já está desligado.`);
        }
    }

    // Método para abrir os vidros
    abrirVidro() {
        if (!this.vidrosAbertos) {
            this.vidrosAbertos = true;
            console.log(`Os vidros do ${this.modelo} estão abertos.`);
        } else {
            console.log(`Os vidros do ${this.modelo} já estão abertos.`);
        }
    }

    // Método para descer os vidros
    descerVidro() {
        if (this.vidrosAbertos) {
            this.vidrosAbertos = false;
            console.log(`Os vidros do ${this.modelo} estão fechados.`);
        } else {
            console.log(`Os vidros do ${this.modelo} já estão fechados.`);
        }
    }

    // Método para exibir informações do automóvel
    exibirInformacoes() {
        console.log(`Cor: ${this.cor}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Tipo de combustível: ${this.tipoCombustivel}`);
        console.log(`Quantidade de rodas: ${this.quantidadeRodas}`);
    }
}

// Definição da classe Carro (herda de Automovel)
class Carro extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas, tipoCarroceria) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);  // Chama o construtor da classe mãe
        this.tipoCarroceria = tipoCarroceria;  // Atributo específico de Carro
    }

    // Método específico de Carro
    exibirTipoCarroceria() {
        console.log(`Tipo de carroceria: ${this.tipoCarroceria}`);
    }
}

// Definição da classe Moto (herda de Automovel)
class Moto extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas, tipoMoto) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);  // Chama o construtor da classe mãe
        this.tipoMoto = tipoMoto;  // Atributo específico de Moto
    }

    // Método específico de Moto
    exibirTipoMoto() {
        console.log(`Tipo de moto: ${this.tipoMoto}`);
    }
}

// Definição da classe Caminhao (herda de Automovel)
class Caminhao extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas, capacidadeCarga) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);  // Chama o construtor da classe mãe
        this.capacidadeCarga = capacidadeCarga;  // Atributo específico de Caminhao
    }

    // Método específico de Caminhao
    exibirCapacidadeCarga() {
        console.log(`Capacidade de carga: ${this.capacidadeCarga} toneladas`);
    }
}

// Criando e testando um objeto da classe Carro
const meuCarro = new Carro('Vermelho', 'Fusca', 'Gasolina', 4, 'Sedan');
meuCarro.exibirInformacoes();
meuCarro.ligar();
meuCarro.abrirVidro();
meuCarro.descerVidro();
meuCarro.desligar();
meuCarro.exibirTipoCarroceria();

// Criando e testando um objeto da classe Moto
const minhaMoto = new Moto('Preta', 'CB500', 'Gasolina', 2, 'Esportiva');
minhaMoto.exibirInformacoes();
minhaMoto.ligar();
minhaMoto.abrirVidro();  // A classe Moto pode não ter vidros, isso pode ser um exemplo para ver como funciona
minhaMoto.descerVidro();
minhaMoto.desligar();
minhaMoto.exibirTipoMoto();

// Criando e testando um objeto da classe Caminhao
const meuCaminhao = new Caminhao('Azul', 'Scania', 'Diesel', 6, 20);
meuCaminhao.exibirInformacoes();
meuCaminhao.ligar();
meuCaminhao.abrirVidro();  // A classe Caminhao pode não ter vidros, isso pode ser um exemplo para ver como funciona
meuCaminhao.descerVidro();
meuCaminhao.desligar();
meuCaminhao.exibirCapacidadeCarga();
