//tipos primitivos no javaScript
//1- o tipo number ele é representado pra poder fazer uma representação numerica
// todo os numeros estao incluidos no tipo number, tanto inteiros / decimais

console.log(1, 4)//numeros inteiros
console.log(4.5, 0.3333)//numeros com casas decimais
console.log(-1, -100)// numeros negativos.
//todos esses fazem parte dos tipo de dado primitivos tipo number, tudo que envolve numero

//2-tipo string, tbm conhecido como tipo texto, a string eh uma cadeia de caracter
//ele pode ser representado de 3 formas
console.log("spaceship")//representacao com aspas duplas
console.log('rafael')//representacao com aspas simples
console.log("11")//se eu colocar um numero entre aspas eu vou ter no final das contas uma string
//lembrando que tudo que tiver entre aspas, se torna um texto, mesmo se for um numero//!

//3- o terceiro tipo eh o boleano, ele retorna verdadeiro e falso!
console.log(true)//verdadeiro
console.log(false)//falso

//4- temos tbm o null
console.log(null)
//o null ele simplesmente quer dizer nada, importante lembrar que o null ele eh diferente de zero
//o zero ele eh um numero passivo de calculo matematico, o null nao

//5-temos o undefined
console.log(undefined)//ele eh usado no javascript para dizer que eh um numero indefinido


// Testando no console do navegador ou VS Code:
console.log(typeof 10);        // Retorna: "number"
console.log(typeof "Rafael");  // Retorna: "string"
console.log(typeof true);      // Retorna: "boolean"
console.log(typeof null);      // Retorna: "object"