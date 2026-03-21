/**
 * [ ] Peça a idade via prompt() e mostre o tipo desse dado no console.
 */
const prompt = require("prompt-sync")({sigint: true})
let idade = Number(prompt("Digite a tua idade: "));
console.log(idade)