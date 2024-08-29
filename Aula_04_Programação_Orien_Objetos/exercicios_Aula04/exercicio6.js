// Exercicio 6
// Definição da classe Produtos (classe mãe)
class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false;  // Estado inicial do produto
    }

    // Método para ligar o produto
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.nome} está ligado.`);
        } else {
            console.log(`${this.nome} já está ligado.`);
        }
    }

    // Método para desligar o produto
    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.nome} está desligado.`);
        } else {
            console.log(`${this.nome} já está desligado.`);
        }
    }

    // Método para exibir informações do produto
    exibirInformacoes() {
        console.log(`Nome do produto: ${this.nome}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Tipo de comunicação: ${this.tipoComunicacao}`);
        console.log(`Consumo de energia elétrica: ${this.consumoEnergia} kW`);
        console.log(`Estado: ${this.ligado ? 'Ligado' : 'Desligado'}`);
    }
}

// Definição da classe Fritadeira (herda de Produtos)
class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    
}

// Definição da classe Televisao (herda de Produtos)
class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    
}

// Definição da classe ArCondicionado (herda de Produtos)
class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia, temperaturaAtual = 24) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperaturaAtual = temperaturaAtual;  // Temperatura inicial
    }

    // Método para ajustar a temperatura
    ajustarTemperatura(setpoint) {
        if (!this.ligado) {
            console.log("O ar-condicionado precisa estar ligado para ajustar a temperatura.");
            return;
        }
        if (setpoint < 16 || setpoint > 30) {
            console.log("Temperatura fora da faixa permitida (16-30°C).");
            return;
        }
        this.temperaturaAtual = setpoint;
        console.log(`Temperatura ajustada para ${setpoint}°C.`);
    }
}

// Função para testar as classes e exibir no terminal
function testarProdutos() {
    console.log("Testando Fritadeira:");
    const minhaFritadeira = new Fritadeira('Fritadeira Turbo', 10, 299.99, 'Bluetooth', 1.2);
    minhaFritadeira.exibirInformacoes();
    minhaFritadeira.ligar();
    minhaFritadeira.desligar();

    console.log("\nTestando Televisao:");
    const minhaTelevisao = new Televisao('Smart TV 4K', 5, 1500.00, 'Wi-Fi', 0.2);
    minhaTelevisao.exibirInformacoes();
    minhaTelevisao.ligar();
    minhaTelevisao.desligar();

    console.log("\nTestando Ar Condicionado:");
    const meuArCondicionado = new ArCondicionado('Ar Condicionado Split', 3, 2000.00, 'IR', 2.0);
    meuArCondicionado.exibirInformacoes();
    meuArCondicionado.ligar();
    meuArCondicionado.ajustarTemperatura(22);
    meuArCondicionado.desligar();
}


testarProdutos();
