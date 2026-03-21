/**
 * pedri para o usuario entrar com valores para graus celsius
 * e eu vou querer responder na escala kelvin e na escala
 * fahrenheit
 */
const prompt = require("prompt-sync")({ sigint: true });

let celsius = Number(prompt("Digite a temperatura: "));

let kelvin = celsius + 273;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(
  ` A temperatura em Kelvin = ${kelvin}\n A temperatura em fahrenheit ${fahrenheit}`,
);
