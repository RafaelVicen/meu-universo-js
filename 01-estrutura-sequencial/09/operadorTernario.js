const prompt = require("prompt-sync")({ sigint: true });

let saida = 3 != 3 ? "Verdadeiro" : "Falso";

saida = 3 != 3 ? "Verdadeiro" : "Falso";
//eh chamado de operador ternario porque tem tres operandos,
// o primeiro eh a condicao,
// o segundo eh o valor caso a condicao
// seja verdadeira e o terceiro eh o valor caso a condicao seja falsa
// as pessoas usam sem os parenteses,
// mas eu acho que fica mais legivel com os parenteses
// e a palavra nao precisa ser verdadeiro ou falso, pode ser qualquer coisa,
// o importante eh que o valor do segundo
// operando seja retornado caso a condicao seja verdadeira

saida = 3 == 3 ? "logado" : "nao logado";
//pode retornar qualquer valor, pode ser numero, string, booleano, 
// objeto, array, etc
// o importante eh que o valor do segundo operando seja retornado
//  caso a condicao seja verdadeira

// e se eu precisa-se de instrucoes? 
//caso isso seja verdade, faca isso, senao faca aquilo
// nesse caso, o operador ternario nao seria suficiente, 
// entao eu precisaria usar um if else normal
//estrutura de controle condicional if else
// if (condicao) {
//     // instrucoes caso a condicao seja verdadeira
// } else {
//     // instrucoes caso a condicao seja falsa
// }


console.log(saida);
