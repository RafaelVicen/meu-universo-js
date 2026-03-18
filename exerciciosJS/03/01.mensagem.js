/**
 * Escreva um programa que pede o nome do usuario e imprime o nome do
 * usuario
 */

const prompt = require("prompt-sync")({ sigint: true });

let nome = prompt("Digite o nome do usuario: ");
console.log("O nome do usuario é: " + nome);