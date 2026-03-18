/**
 * Resto da divisao
 * faca um programa que recebe dois numero e mostra o resto da divisao
 * exemplo 5 % 6 o resto da divisao é 1
 */

const prompt = require("prompt-sync")({ sigint: true });
console.log("Resto da divisao")
let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));

let total = n1 % n2;
console.log(`O resto da divisao de ${n1} e ${n2} = ${total}`);
