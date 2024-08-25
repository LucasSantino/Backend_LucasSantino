// Definição da classe Maquina (classe mãe)
class Maquina {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        this.nome = nome;
        this.quantidadeEixos = quantidadeEixos;
        this.rotacoesPorMinuto = rotacoesPorMinuto;
        this.consumoEnergia = consumoEnergia;
        this.ligada = false;  // Estado inicial da máquina
    }


    ligar() {
        if (!this.ligada) {
            this.ligada = true;
            console.log(`${this.nome} está ligada.`);
        } else {
            console.log(`${this.nome} já está ligada.`);
        }
    }

   
    desligar() {
        if (this.ligada) {
            this.ligada = false;
            console.log(`${this.nome} está desligada.`);
        } else {
            console.log(`${this.nome} já está desligada.`);
        }
    }

    // Método para ajustar a velocidade de rotação
    ajustarRotacao(novaRotacao) {
        if (novaRotacao <= 0) {
            console.log("A rotação deve ser um valor positivo.");
            return;
        }
        this.rotacoesPorMinuto = novaRotacao;
        console.log(`Velocidade de rotação ajustada para ${novaRotacao} RPM.`);
    }

    // Método para exibir informações da máquina
    exibirInformacoes() {
        console.log(`Nome da máquina: ${this.nome}`);
        console.log(`Quantidade de eixos: ${this.quantidadeEixos}`);
        console.log(`Rotações por minuto: ${this.rotacoesPorMinuto}`);
        console.log(`Consumo de energia elétrica: ${this.consumoEnergia} kW`);
        console.log(`Estado: ${this.ligada ? 'Ligada' : 'Desligada'}`);
    }
}

// Definição da classe Furadeira (herda de Maquina)
class Furadeira extends Maquina {
    constructor(nome, rotacoesPorMinuto, consumoEnergia) {
        super(nome, 1, rotacoesPorMinuto, consumoEnergia);  // Presume-se que a furadeira tem 1 eixo
    }

    // Método específico para furadeira (pode adicionar mais métodos se necessário)
    exibirTipo() {
        console.log(`${this.nome} é uma furadeira.`);
    }
}

// Criando e testando um objeto da classe Furadeira
const minhaFuradeira = new Furadeira('Furadeira Elétrica', 1500, 1.5);

// Exibindo informações iniciais
minhaFuradeira.exibirInformacoes();

// Ligando a furadeira
minhaFuradeira.ligar();

// Ajustando a rotação
minhaFuradeira.ajustarRotacao(2000);

// Desligando a furadeira
minhaFuradeira.desligar();

// Exibindo o tipo da máquina
minhaFuradeira.exibirTipo();
