const nome = "Emilly";
console.log(nome);

const idade = 17;
console.log(idade);

const curso = "Desenvolvimento de Sistemas";
console.log(curso);

const nota1 = 9;
const nota2 = 8;
const nota3 = 7;

console.log(nota1, nota2, nota3);

const quantidade_faltas = 4;
console.log(quantidade_faltas);

const matriculado = true;
console.log(matriculado);


const media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media);


let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação acadêmica:", situacao);


const total_aulas = 40;

let aulasFrequentadas = total_aulas - quantidade_faltas;
let frequencia = (aulasFrequentadas / total_aulas) * 100;

console.log("Percentual de frequência:", frequencia + "%");

if (frequencia >= 75) {
    console.log("Atingiu a frequência mínima.");
} else {
    console.log("Não atingiu a frequência mínima.");
}


let resultadoFinal;

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    resultadoFinal = "Aprovado nos critérios finais.";
} else {
    resultadoFinal = "Não aprovado nos critérios finais.";
}

console.log(resultadoFinal);



