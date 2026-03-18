let spaceship = "Elemental";
let velocity = 20;

// agora vamos verificar os 3 operadores basicos que nos tinhamos visto
// que era o (E); (Or); e o (Not)

// o (E) ele eh representado da seguinte maneira (&&) dois i comerciais

console.log(spaceship.length == 9 && velocity > 15); // o que temos ai, estamos a verfiricar o
//spaceship.length, que retorna o tamano da string Elemental que sao 9, esta dentro da variavel
//spaceship e 9 eh == a 9 e essa expressao retorna verdadeiro e temos o & comercial
//velocity tem o valor 20 que eh maior que 15 entao vai retornar verdadeiro
//V e V = V

console.log(velocity > 10 && velocity < 19);
//velocity maior que 10 vai dar verdadeiro
//velocity menor que 19 vai retornar falso
// temos o operador e
// o nosso retorno vai ser falso
// na condicao e verdadeiro e falso retorna falso
console.log(velocity > 17 && spaceship == "Elemental");
//velocity maior que 17 retorna falso, lembrando que velocity tem o valor 20 e 20 nao eh maior que 17
//a primeira expressao retorna falso
//spaceship igual a Elemental retorna verdadeiro
//na condicao e falso e verdadeiro retorna falso
// F e V = F

console.log(spaceship == "golias" && velocity > 21);
//spaceship contem a string elemental e nao golias entao retorna falso
//velocity tem o valor 20 e 20 nao eh maior que 21 entao retorna falso
//na condicao e falso e falso retorna falso
// F e F = F
// na tabela verdade do (e) temos que verdadeiro e verdadeiro retorna verdadeiro
// verdadeiro e falso retorna falso
// falso e verdadeiro retorna falso
// falso e falso retorna falso

// a segunda tabela da verdade que temos que verificar eh a tabela verdade do or
// o operador do (or) eh representado por (||) duas barras verticais

console.log(spaceship.length == 9 || velocity > 15);
//spaceship.length retorna 9 e 9 eh == a 9 entao retorna verdadeiro
//velocity tem o valor 20 e 20 eh maior que 15, entao retorna verdadeiro
//na condicao ou verdadeiro ou verdadeiro retorna verdadeiro
// V ou V = V
console.log(velocity > 10 || velocity < 19);
//velocity maior que 10 retorna verdadeiro
//velocity menor que 19 retorna falso, porque 20 nao eh menor que 19
//na condicao ou verdadeiro ou falso retorna verdadeiro
// V ou F = V
console.log(velocity > 17 || spaceship == "Elemental");
//velocity maior que 17 retorna falso, porque 20 nao eh maior que 17
//spaceship igual a Elemental retorna verdadeiro
//na condicao ou falso ou verdadeiro retorna verdadeiro
// F ou V = V

console.log(spaceship == "golias" || velocity > 21);
//spaceship contem a string elemental e nao golias entao retorna falso
//velocity tem o valor 20 e 20 nao eh maior que 21 entao retorna falso
//na condicao ou falso ou falso retorna falso
// F ou F = F

//na tabela verdade do or nos vimos que:
// verdadeiro ou verdadeiro retorna verdadeiro
// verdadeiro ou falso retorna verdadeiro
// falso ou verdadeiro retorna verdadeiro
// falso ou falso retorna falso

// agora vamos verificar a tabela verdade do (not) que eh representado por (!)
// a expressao not ela inverte o valor logico
// se a expressao for verdadeira o not vai retornar falso
// se a expressao for falsa o not vai retornar verdadeiro
// a expressao not ela eh representada por um ponto de exclamação (!)
console.log(!(velocity > 19));
// nao velocity maior que 19 retorna falso, porque 20 nao eh maior que 19
// nao verdadeiro retorna falso
// !V = F
// o not inverte o valor logico e retorna verdadeiro

console.log(!(spaceship == "golias "));
// nao spaceship igual a golias retorna verdadeiro,
// // porque spaceship contem a string elemental e nao golias)
// nao falso retorna verdadeiro
// !F = V
//se formos a ver ela simplmente inverteu o que era verdadeiro
// // para falso e o que era falso para verdadeiro

//entao chegamos na seguinte tabela verdade do (not):
// !V = F // nao verdadeiro retorna falso
// !F = V //nao falso retorna verdadeiro

// agora vamos verficar uma expressao um pouco maior para nos entender bem
// o que eh uma expressao logica
console.log(
  !(velocity > 25 && spaceship == "Elemental") ||
    (velocity - 3 == 17 && spaceship.length + 1 > 15),
);
//quando nos executar vai ter um retorno verdadeiro
//primeiro o que fazemos eh executar a expressao aritmetica, tem parentes mas primeiro temos que executar
// para poder entender com que valores numericos estamos a lidar na comparacao  
// !(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15)
// velocity tem o valor 20 e 20 - 3 retorna 17 
//(17 == 17 && spaceship.length + 1 > 15)
//spaceship.length vai retornar o tamanho que eh 9 e 9 + 1 retorna 10
//(17 == 17 && 10 > 15)
// agora vamos sair resolvendo o que esta dentro do parenteses mais interno 
// !(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10 > 15)
// entao eu sei 10 nao eh maior que 15 entao retorna falso
// 17 eh igual a 17 entao retorna verdadeiro
//nos vimos na tabela verdade do (e) que verdadeiro e falso retorna falso
// vimos tbm que velocity tem valor 20 e 20 nao eh maior que 25 entao retorna falso
//spaceship contem a string elemental entao essa comparacao retorna verdadeiro
//nos vimos na tabela verdade do e que falso e verdadeiro vai retornar falso
// vamos ter a resultante !F || V vai dar verdadeiro
// Verdadeiro ou verdadeiro retorna verdadeiro
// que vai ser o resultado final da expressao logica