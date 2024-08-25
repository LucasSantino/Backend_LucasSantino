const nota1 = 9;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

let status_aluno;
if (media >= 6) {
    status_aluno = "Aprovado";
} else if (media > 4 && media < 6) {
    status_aluno = "Exame";
} else {
    status_aluno = "Reprovado";
}


console.log("A média do aluno é:", media.toFixed(2));
console.log("Status do aluno:", status_aluno);
