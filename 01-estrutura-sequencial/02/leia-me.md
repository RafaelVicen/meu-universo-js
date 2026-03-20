📑 Operações Básicas no JavaScript
Este documento detalha como realizar cálculos e manipulações de texto utilizando os tipos primitivos.

1. Operações com o Tipo Number
As operações seguem as regras matemáticas, aceitando números inteiros, decimais (pontos) e negativos.

Soma (+): Une valores. Ex: 5 + -7 resulta em -2.

Subtração (-): Diferença entre valores. Ex: 4.5 - 0.3 resulta em 4.2.

Multiplicação (*): Produto de dois fatores. Ex: 4.321 * 2.3 resulta em 9.9382.

Divisão (/): Quociente da operação. Ex: 8.5 / -5 resulta em -1.7.

Módulo (%): Retorna o resto de uma divisão inteira.

Exemplo: 10 % 3

Explicação: 10 dividido por 3 é 3 (sobrando 1). O resultado é 1.

2. Operações com o Tipo String
As Strings possuem formas específicas de serem manipuladas além do simples texto.

Concatenação: É a "soma" de textos.

"Planeta" + "Terra" gera "PlanetaTerra".

Espaço: O espaço é considerado um caractere. Para separar as palavras, deve-se incluí-lo: "Planeta " + "Terra".

Extração por Índice (Posição): Permite pegar uma letra específica de uma palavra usando [].

Importante: A contagem começa no zero (0).

Exemplo: "Planeta"[2] retorna "a". (P=0, l=1, a=2).

Tamanho da String (.length): Retorna a contagem total de caracteres, incluindo espaços.

Exemplo: "Planeta Terra".length retorna 13.

3. Ordem de Precedência e Tipagem Fraca
O JavaScript processa as operações seguindo uma hierarquia, que pode ser alterada com o uso de parênteses ().

Tipagem Fraca (Coerção): O JavaScript permite misturar tipos sem erro.

Exemplo: "Vivo na terra a" + 30 + "anos" resulta em uma única String, tratando o número como texto.

Precedência Matemática: Multiplicação e divisão são feitas antes da soma e subtração.

5 * 5 + 1 = 26

5 * (5 + 1) = 30 (Parênteses primeiro).

Precedência em Strings: * "planeta" + "terra"[3]: Primeiro extrai o caractere, depois junta. Resultado: "planeta r".

("planeta" + "terra")[3]: Primeiro junta tudo, depois extrai a posição 3 do resultado total. Resultado: "n".

💡 Lembrete Técnico
Ao programar, lembre-se de atribuir esses valores a nomes de variáveis para poder usá-los depois:
let resultado = 5 * (5 + 1);