/**
 * calcula o valor da hipotenusa e mostra o seu resultado na tela
 * formula  h2 = a2 + b2 tudo ao quadrado
 */

const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("Digite o valor do primeiro cateto: "));
let b = Number(prompt("Digite o valor do segundo cateto: "));

//let soma = a**2 + b**2;
//let soma = Math.pow(a, 2) + Math.pow(b, 2);
//hipotenusa = Math.sqrt(soma);
//hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
//primeiro ele vai fazer as duas potencias
//depois ele vai somar tudo
//depois da soma vai fazer a raiz quadrada
// o resultado da raiz quadrada
//ele vai escrever no documento