/**
 * Escreve um programa que peca dois numeros ao usuario e faz
 * a soma dos mesmo numero e mostra o resultado
 */
const prompt = require("prompt-sync")({sigint: true});

let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));

let soma = (n1 + n2);

console.log(`A soma entre ${n1} e ${n2} = ${soma}`);