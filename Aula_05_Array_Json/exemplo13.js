/// classe é a estrutura/template/modelo e o objeto é parte que existe fisicamente/estruturada/relidade/fisica
// cria um objeto
let carro={
    nome:' jeep',
    cor: 'vermelho',
    ano: 2022,
    velocidade: function(){
        return this.nome+ '150km/h'
    }
}
console.log(carro)
console.log(carro.velocidade())

class carro1{
    nome='Jeep';
    ano = 2024;
    cor = 'Azul'
}

Hilux = new carro1()
console.log(Hilux)

