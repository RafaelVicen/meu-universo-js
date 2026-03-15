//1. Operações Numéricas (Number)
// Soma
let soma1 = 1 + 4;         // 5
let soma2 = 5 + 5;         // 10
let soma3 = 5 + -7;        // -2
// Subtração
let sub1 = 10 - 3;         // 7
let sub2 = 4.5 - 0.3;      // 4.2
// Multiplicação
let multi1 = 5 * 9;        // 45
let multi2 = 4.321 * 2.3;  // 9.9382
// Divisão
let div1 = 6 / 2;          // 3
let div2 = 8.5 / 5;        // 1.7
let div3 = 8.5 / -5;       // -1.7
// Módulo (Resto da divisão)
let resto = 10 % 3;        // 1
//// // / // / / // / / / / // / / // // / / / / / // / // / // / / // / / / // / // / / 
// Concatenação (Juntar)
let mundo1 = "Planeta" + "Terra";   // "PlanetaTerra"
let mundo2 = "Planeta " + "Terra";  // "Planeta Terra" (com espaço)
// Extração por posição (Índice começa em 0)
let letraPosicao = "Planeta Terra"[2]; // "a" (P=0, l=1, a=2)
// Tamanho da String
let tamanho = "Planeta Terra".length;  // 13
// /// /// // / // / / / / // / / // / // / / / / / // / / / / /  / //
// 3. Ordem de Precedência (O que vem primeiro)
// Primeiro extrai a letra, depois junta
let mistura1 = "planeta" + "terra"[3];     // "planetar"
// Primeiro junta as palavras, depois extrai a letra
let mistura2 = ("planeta" + "terra")[3];   // "n"
// Tipagem Fraca (Número vira texto na soma)
let frase = "Eu vivo na terra a " + 30 + " anos";
// Matemática com Parênteses
let conta1 = 5 * 5 + 1;                    // 26
let conta2 = 5 * (5 + 1);                  // 30
let conta3 = 5 * (5 / (5 - 4) + 1);        // 30