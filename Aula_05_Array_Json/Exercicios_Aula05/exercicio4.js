const clinica = [];
console.log("Fila de espera vazia:", clinica); // Inicializa um array vazio para a fila de espera


clinica.push("Pastor Alemão", "Pastor Belga", "Labrador"); // Simula a chegada de três animais
console.log("Chegada de três animais à fila de recepção:", clinica);


const removido1 = clinica.pop(); // Remove os animais da fila um por um
console.log(`Remoção: ${removido1}`);
console.log("Fila de espera atual:", clinica);

const removido2 = clinica.pop();
console.log(`Remoção: ${removido2}`);
console.log("Fila de espera atual:", clinica);

const removido3 = clinica.pop();
console.log(`Remoção: ${removido3}`);
console.log("Fila de espera atual:", clinica);

// Exibe o estado final da fila de espera
console.log("Fila de espera vazia:", clinica);
