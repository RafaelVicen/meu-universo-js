/* 
Esse exercicio consiste em pegar o dado do usuario
1- exiba com um alerta a seguinte mensagem de Boas vindas ao usuario:
Bem-vindo asseguir pediremos que informe alguns dados.
2-peça que o usuario informe o seu nome:
3-peça que o usuario informe a sua idade
4-peça que ele confirme a idade
5-exiba com um alerta :
1.1- O nome do usuario digitado
1.2- A idade digitada
1.3- A confirmação da idade
*/

const prompt = require("prompt-sync")({ sigint: true });

// Em vez de alert, usamos console.log
console.log("Bem-vindo! A seguir pediremos que informe alguns dados.");

let MeuNome = prompt("Digite o seu nome: ");
let age = prompt("Digite a minha idade: ");

// O confirm não existe no Node, você pode fazer assim:
console.log("Minha idade confirmada: " + age + " anos.");
let MinhaDataConfirmada = true; // Simulando a confirmação

console.log("Nome: " + MeuNome);
console.log("Idade: " + age);
console.log("Idade confirmada: " + MinhaDataConfirmada);