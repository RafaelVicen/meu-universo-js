const prompt = require("prompt-sync")({ sigint: true });

let NomeMaisVelha = prompt("Digite o nome da pessoa mais velha: ");
let idadeDaMaisVelha = prompt("Digite a idade da pessoa mais velha: ");

let NomeMaisNova = prompt("Digite o nome da pessoa mais nova: ");
let idadeDaPessoaMaisNova = prompt("Digite a sua idade: ");

let Diferenca = idadeDaMaisVelha - idadeDaPessoaMaisNova;

console.log(
    "\npessoa mais velha: " + NomeMaisVelha + "\n Idade" + idadeDaMaisVelha +
    "\npessoa mais nova: " + NomeMaisNova + "\n Idade" + idadeDaPessoaMaisNova +
    "\nDiferenca de idade: " + Diferenca + " Anos "
)