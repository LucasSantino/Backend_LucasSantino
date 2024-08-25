consumoPorHoraKWh = 1750 / 1000; 
horasPorDia = 8;
diasPorMes = 25;
custoPorKWh = 0.75;
consumoMensalKWh = consumoPorHoraKWh * horasPorDia * diasPorMes;
custoMensal = consumoMensalKWh * custoPorKWh;
console.log("O valor gasto com a energia da máquina é: R$", custoMensal.toFixed(2));
