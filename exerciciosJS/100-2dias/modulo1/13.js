/**
 * [ ] Crie um script que pede o nome e exibe: "Olá, Piloto [nome]!".
 */
const prompt = require("prompt-sync")({ sigint: true });

let nome = prompt("Digite o teu nome: ");
console.log(`Ola: ${nome}, tudo bem?`)