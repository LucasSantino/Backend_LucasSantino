/// Exemplo 4 SPLICE e SLICE

nomes= ['Daniel', 'Bruna', 'Camila', 'Julia']
console.log(nomes)
nomes.splice(1,1, 'Viviane') /// SPLICE adiciona elelemtnos e remove em uma posição especifica
console.log(nomes)

const nomes2= nomes.slice(1,3) // SLICE FATIA a lista a partir da posição 1 até 2 (posição 1, posição2)
console.log(nomes2)

const tamanho = nomes.lenght // LENGHT retorna o tamanho da lista
console.log(tamanho)