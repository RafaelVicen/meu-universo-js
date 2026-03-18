/**
 * Desenvolve um programa que solicete ao usuario digitar o valor
 * de 3 lados de uma forma geometrica
 * O programa deve informar se os valores digitados pelo usuario foram
 * um triangulo, e se esse triangulo é:
 
 * 1- Triangolo
 * 2- Equilatero
 * 3- Escaleno
 
 * so ira existir um triangulo se, somente os seu lados obedecerem a seguinte regra:
 
 * 1-um dos seus lados deve ser maior que o valor absoluto da diferença
 *  dos outros dois lados
 * 2-para ser euqilatero todos os lados devem ser iguais
 * 3-para ser escaleno todos os lados devem ser diferentes um do outro 
 */
const prompt = require("prompt-sync")({ sigint: true });

console.log("================================");
console.log(" Teste Dos Triangulos ");
console.log("================================");

var ladoA = Number(prompt("Digite o Primeiro lado: "));
var ladoB = Number(prompt("Digite o segundo lado: "));
var ladoC = Number(prompt("Digite o terceiro lado: "));
console.clear();

//como esta a pedir valor absoluto, chamamos a nossa função Math.abs de absoluto
var triangulo =
  Math.abs(ladoB - ladoC) < ladoA &&
  ladoA < ladoB + ladoC &&
  Math.abs(ladoC - ladoA) < ladoB &&
  ladoB < ladoC + ladoA &&
  Math.abs(ladoA - ladoB) < ladoC &&
  ladoC < ladoA + ladoB;
var equilatero = ladoA == ladoB && ladoB == ladoC && ladoC == ladoA;
var escaleno = ladoA != ladoB && ladoB != ladoC && ladoC != ladoA;

console.log("================================");
console.log(" Teste Dos Triangulos ");
console.log("================================");
console.log(`Valores Digitados: ${ladoA}, ${ladoB}, ${ladoC} `);
console.log(`Triangulo: ${triangulo}`);
console.log(`Equilatero: ${equilatero}`);
console.log(`Escaleno: ${escaleno}`);
console.log("================================");
