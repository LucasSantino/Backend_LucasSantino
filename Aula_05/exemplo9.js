// Exemplo9 REDUCE(reduce)

const numeros=[1,2,3,4,5]
const soma = numeros.reduce((acumulador,num) => acumulador + num, 0)
console.log(soma)


for (i=0;i<numeros.length;i++){
    soma [i] += numeros[i]

}
console.log(`Soma utilizando for ${soma}`)