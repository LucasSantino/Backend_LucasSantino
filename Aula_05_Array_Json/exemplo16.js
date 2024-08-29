/// Exemplo16 Lista de objetos

const dadoP ={ //objeto principal
    nome: 'Daniel',
    idade: 29,
    endereco:[{                 /// objeto 1
        rua: 'Av Brasilia',    /// elemento 1 [] refeente a posição 1
        numero: 77,
    },
    {                            /// objeto2
        rua: ' Cicero Canuto',  /// elemento 2 [] referenrte a posição 2
        numero: 280
    }
]
}
console.log(dadoP)
console.log(dadoP.endereco[0].rua) //[] posição 0 é a primeira posição
console.log(dadoP.endereco[1].rua) 