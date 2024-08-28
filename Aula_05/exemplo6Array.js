/// EXEMPLO 6 forEach

nomes = ['Daniel', 'Bruna', 'Camila', 'Julia']
nomes. forEach(function(index, nomes){  // forEach itera os elementos da lista
    console.log(index, nomes)
});

for (i=0; i<nomes.lenght; i++){
    console.log( `${i} ${nomes[i]}`)
}