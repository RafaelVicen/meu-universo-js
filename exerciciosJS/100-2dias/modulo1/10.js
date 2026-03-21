/**
 * [ ] Peça o nome do utilizador via prompt().
 */

const prompt = require("prompt-sync")({ sigint: true });

let nome = prompt("Digite o teu nome: ");
console.log(nome);
