/**
 * pede ao usuario a area de um trapesio e imprime o resultado na tela
 * Area do trapesio baseMaior + baseMenor vezes altura dividido por 2
 *
 */

const prompt = require("prompt-sync")({ sigint: true });

let BaseMenor = Number(prompt("Digite o valor da Base Menor: "));
let BaseMaior = Number(prompt("Digite o valor da Base Maior: "));
let Altura = Number(prompt("Digite o valor da altura: "));

let area = (BaseMenor + BaseMaior) * Altura / 2;

console.log(`A area do trapesio eh igual a: ${area}`)
