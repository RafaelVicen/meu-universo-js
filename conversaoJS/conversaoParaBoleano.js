console.log(Boolean(true)); //  ->  true

console.log(Boolean(42)); //  ->  true
console.log(Boolean(0)); //  ->  false
console.log(Boolean(NaN)); //  ->  false

console.log(Boolean('text')); //  ->  true
console.log(Boolean('')); //  ->  false

console.log(Boolean(undefined)); //  ->  false

console.log(Boolean(null)); //  ->  false
//As conversões para booleano seguem regras simples, pois só podemos ter um de dois valores:verdadeirooufalsoO valorfalsoé sempre retornado para:

//0,
//NaN,
//sequência vazia,
//indefinido,
//nulo
//Qualquer outro valor resultará emverdadeirosendo devolvido.