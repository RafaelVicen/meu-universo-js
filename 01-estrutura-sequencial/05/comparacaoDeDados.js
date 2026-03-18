/**
 * comparacao de dados, basicamente elas sao operacoes que tem o retorno boleano
 *  verdadeiro ou falso
 * elas sao diferentes de operacoes aritmeticas, porque as operacoes aritmeticas elas retornam
 * um valor numerico
 * vamos ver no js, alguns operadores que sao utilizados para comparacao e vamos usar o tipo number
 * e o tipo testo (string)
 * lembrando que pode ser utilizado por outros tipos tbm
 */

let spaceship = "golias";
let velocity = 80;

// o primeiro operador que vamos ver eh o igual ele vai verificar se dois valores sao iguais
console.log(velocity == 90); // aqui estou a verificar se velocidade eh igual a 90, lembrando que para eu
//poder fazer uma comparacao de igualdade eu usei dois sinais de igual ==
// o igual so ele eh uma atribuicao
//ele me retornou um valor falso, porque o velocity tem o valor 80 e 80 nao eh igual a 90

// podemos fazer a mesma verificacao com a string que temos ai em cima
console.log(spaceship == "golias");
// se eu executar vai me dar verdadeiro, porque spaceship tem a string golias e ela esta a verificar
//se ela eh igual a golias e deu verdadeiro

//podemos ainda verificar se velocity eh igual a string 80
console.log(velocity == "80"); //isso vai retornar pra gente verdadeiro mas por que?
// ele retornou verdadeiro porque o velocity tem o valor 80 e a nossa string tbm tem o valor 80
// nos falamos nas primeiras aulas que o js tem uma tipagem fraca o golias no exemplo de cima
//ele esta a ignorar o valor que temos na nossa variavel
//ele so esta interessado ai com o valor 80 por isso retornou verdadeiro

// temos um jeito considerar os tipo eh utilizando a comparacao de igualdade com 3 sinais
console.log(velocity === "80");
//quando comparamos dessa forma que esta em cima e executar ele vai retornar falso, porque
//ele esta a considerar o tipo de dado que tem na nossa variavel ent velocity tem o tipo numerico 80
// e esse tipo numerico 80 ele eh diferente do tipo 80 texto por isso retorna falso

//o contrario ao igual nos temos o diferente !=
console.log(velocity != 80); // o diferente usamos != e se nos executar vai retornar falso
//velocity eh 80 e 80 nao eh diferente de 80 e vai retornar falso
//se eu colocar outro valor tipo 70 ele vai retornar verdadeiro porque 80 eh diferente de 70

//assim como temos os === para verificar se eh diferente o diferente tbm tem
console.log(velocity != "80");
//desse jeito ele vai retornar falso porque ele nao ta considerar o tipo de dado que eh numerico e texto
//para nos considerar o tipo temos que por !== mais um sinal de igual
console.log(velocity !== "80"); //se eu executar ele vai retornar verdadeiros
//porque 80 que ta em velocity e 80 que ta em numerico eh diferente do tipo texto

// temos tbm o sinal de mais que (>) que verifica se um valor eh maior que outro
console.log(velocity > 70); //aqui vai retornar para nos verdadeiro porque 80 que ta no velocity
//eh maior que 70
//podemos fazer esta mesma comparacao com string
//eu posso aqui verificar se spaceship eh maior que helmet
console.log(spaceship > "Helmet"); //quando eu utilizo esse sinal de maior para string
//ele esta a verificar se essa string eh maior da que eu estou comparando, na verdade ele vai verificar
//se golias ele vem  depois de helmet, se nao vier ele vai retornar falso
//como Golias comeca com G e helmet comeca com H ent golias nao vem depois de helmet por isso ele retorna
//para nos falso

//temos tbm o maior ou igual (>=)
console.log(velocity >= 90); //aqui ele vai retornar falso porque, 80 nao eh maior e nem igual a 90
//se no exemplo acima eu colocar 80 ele vai retornar verdadeiro porque embora 80 nao seja maior que 80
//80 eh igual a 80 por isso retornou verdadeiro

//podemos ter tbm o maior ou igula com a string tbm
console.log(spaceship >= "golias"); //se eu executar ele vai retornar pra nos verdadeiro porque
//golias nao vem depois de golias eles sao iguais

//o proximo que temos eh o menor, que verifica se um numero eh menor que outro(<)
console.log(velocity < 120); //vai dar verdadeiro, porque 80 vem antes de 120
//com string eh a mesma coisa
//se antes verificava o que vem depois
//agora ele verifica que vem antes
console.log(spaceship < "Helmet");
//o nosso retorno vai ser verdadeiro porque golias eh um texto que vem antes
//assim como temos o maior ou igual
//temos o menor ou igual
console.log(velocity <= 130) //ele vai retornar verdadeiro, embora que 80 nao seja igual a 130 ent
//eh menor

//assim como temos menor ou igual pra numero
//podemos ter ele tbm para texto
console.log(spaceship <= "Helmet")// ele vai retornar para nos verdadeiro, ja que golias vem antes de helmet