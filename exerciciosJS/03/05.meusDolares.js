/**
 * voce vai viajar para os estados unidos e quer saber quanto vai levar em dolares
 * construa um sistema que resolve este problema
 * lembrando que a cotacao do dolar esta 5.57
 */

const prompt = require("prompt-sync")({ sigint: true });

console.log(" SEUS DOLARES ");
let valorEmkwanza = Number(prompt("Digite o valor em kwanza: "));
let conversao = (valorEmkwanza / 5.57).toFixed(2);
console.clear

console.log(" SEUS DOLARES ");
console.log(`${valorEmkwanza} kwanza esta: ${conversao} dolar`)
