let str = 'text';
let strStr = String(str);
console.log(`${typeof str}  :  ${str}`); //  ->  string  :  text
console.log(`${typeof strStr}  :  ${strStr}`); //  ->  string  :  text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr}  :  ${nr}`); //  ->  number  :  42
console.log(`${typeof strNr}  :  ${strNr}`); //  ->  string  :  42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl}  :  ${bl}`); //  ->  boolean  :  true
console.log(`${typeof strBl}  :  ${strBl}`); //  ->  string  :  true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr}  :  ${bnr}`); //  ->  bigint  :  123
console.log(`${typeof strBnr}  :  ${strBnr}`); //  ->  string  :  123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un}  :  ${un}`); //  ->  undefined  :  undefined
console.log(`${typeof strUn}  :  ${strUn}`); //  ->  string  :  undefined

let n = null;
let strN = String(n);
console.log(`${typeof n}  :  ${n}`); //  ->  object  :  null
console.log(`${typeof strN}  :  ${strN}`); //  ->  string  :  null
//.6 Conversão para String
//As conversões são as mais fáceis de entender, pois tentam alterar diretamente o valor para uma string, e isso pode ser feito para todos os tipos primitivos. Portanto, não há surpresas aí. Observe que, no exemplo, usamos a técnica de interpolação de strings de caracteres discutida recentemente .