console.log(Number(42)); //  ->  42

console.log(Number('11')); //  ->  11
console.log(Number('0x11')); //  ->  17
console.log(Number('0o11')); //  ->  9
console.log(Number('0b11')); //  ->  3
console.log(Number('12e3')); //    ->  12000
console.log(Number('Infinity')); //  ->  Infinity
console.log(Number('text')); //  ->  NaN

console.log(Number(14n)); //  ->  14
console.log(Number(123456789123456789123n)); //  -  >    123456789123
456800000;

console.log(Number(true)); //  ->  1
console.log(Number(false)); //  ->  0

console.log(Number(undefined)); //    ->  NaN

console.log(Number(null)); //  ->  0

//A conversão para um número não é tão óbvia quanto a conversão para uma string. Ela funciona como esperado para strings que representam números reais, como"14","-72,134"ou sequências de caracteres que representam números em notação científica, como"2e3"ou valores numéricos especiais como"NaN"ou"Infinidade".
// No entanto, a string também pode conter números nos formatos hexadecimal, octal e binário. Eles devem ser precedidos por 0x, 0o ou 0b, respectivamente. Para qualquer string que não possa ser convertida para um valor especial,NaN(não um número) é retornado. UmBigInttambém pode ser convertido em umNúmeroMas precisamos lembrar que um BigInt pode armazenar valores muito maiores do que um Number, então, para valores grandes, parte deles pode ser truncada ou acabar sendo imprecisa. O Booleanverdadeiroé convertido em1, efalsopara0– Isso é comum em muitas linguagens de programação. Uma tentativa de converter um valor indefinido resultará em NaN, enquanto null será convertido para0.


