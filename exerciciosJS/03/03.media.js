/**
 * Desenvolva um programa que solicita ao usuario digitar dois numers
 * e no final apresenta o resultado da media entre os dois numeros
 */
const prompt = require("prompt-sync")({sigint: true});

let n1 = Number(prompt("Digite a primeira nota: "));
let n2 = Number(prompt("Digite a segunda nota: "));

let nota = (n1 + n2)/2;

console.log(`A somda de ${n1} e ${n2} a media = ${nota}`)


