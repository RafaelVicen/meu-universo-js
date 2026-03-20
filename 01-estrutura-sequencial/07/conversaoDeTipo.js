let pressao = "50.5";
console.log(pressao); // 50.5
console.log(typeof pressao); // string

// vamos fazer a nossa conversao de tipo
// como seria a conversao de tipo para numero?

let pressao2 = parseInt(pressao); //aqui passamos o valor que queremos converter
// e a funcao parseInt vai pegar o numero inteiro da string
//  ou seja, ele vai pegar o 50 e ignorar o .5
// devemos observar que a funcao parseInt retorna um numero inteiro,
// ou seja, ele nao vai considerar a parte decimal
console.log(pressao2); // 50
console.log(typeof pressao2); // number

let pressao2 = Number.parseInt(pressao); //aqui vai funcionar do mesmo jeito
//eu nao preciso chamar o objecto number para usar a funcao parseInt
// o mesmo acontece se eu quiser chamar em ponto flutuante com casas decimais.

// a funcao parseInt e a funcao parseFolat elas ja sao membos da funcao number,
// entao podemos usar a notacao de ponto para acessar essas funcoes
// a funcao parseFloat ela vai pegar o numero inteiro e a parte decimal da string,
//  ou seja, ela vai pegar o 50.5
let pressao3 = parseFloat(pressao);
console.log(pressao3); // 50.5
console.log(typeof pressao3); // number

//  e se eu usa-se so o objecto number, sera que ele vai funcionar?
let pressao4 = Number(pressao);
console.log(pressao4); // 50.5
console.log(typeof pressao4); // number
//lembrando que eu nao especifiquei se ela eh de ponto flutuante ou inteiro,
// A pressao ela eh uma string onde la dentro teria um numero de ponto flutuante
// entao a funcao number ela vai tentar converter essa string para um numero,
// e como ela tem um numero de ponto flutuante, ela vai converter para um numero de ponto flutuante

// E se essa sting for uma armadilha? E se ela tiver um texto dentro dela?
let qualquer = "20buscar"; //e eu quero transformar isso num numero
console.log(Number(qualquer)); // NaN
// NaN significa Not a Number, ou seja, ele nao conseguiu converter essa string para um numero
// entao ele retorna NaN, que significa que nao eh um numero valido
// mas se eu utilizar um dos outros metodos?
console.log(Number.parseFloat(qualquer)); // 20
// a funcao parseFloat ela vai pegar o numero inteiro e a parte decimal da string,
// entao ela vai pegar o 20 e ignorar o buscar

// nesse caso se eu usar o number ele vai me dizer que nao eh um numero
//mas se eu usar um dos metodos de conversao seja ele parsInt ou parsFloat
//ele vai funcionar como esperado, e vou conseguir transformar a string em numero
// entao a funcao number ela eh mais rigorosa, ela vai tentar converter a string para um numero,
// mas se ela encontrar um texto dentro da string, ela vai retornar NaN,
// enquanto que as funcoes parseInt e parseFloat elas sao mais flexiveis,
// elas vao pegar o numero inteiro e a parte decimal da string, e ignorar o texto

// isso que estamos a fazer eh chamado de conversao explicita
// ou seja, estamos a dizer para o javascript que queremos converter essa string para um numero
//eu to forcando atravez de funcoes que o dado mude do jeito que eu quero
// e onde isso eh usado na vida real?
// Em muitos lugares, por exemplo, quando eu quero ler um valor do usuario,
// eu sei que o valor que eu vou ler do usuario vai ser uma string, mas eu quero trabalhar com esse valor como um numero,
// entao eu preciso converter essa string para um numero, e para isso eu posso usar a funcao number, parseInt ou parseFloat,
// dependendo do tipo de numero que eu quero trabalhar.
console.log(Number.parseFloat("buscar20")); // NaN
// eu to a falar para ele transformar o buscar20 num numero de ponto flutuante, mas ele nao consegue, entao ele retorna NaN
//porque nao comeca com um numero, entao ele nao consegue converter essa string para um numero, entao ele retorna NaN
//tem que ter muito cuidado com as strings que a gente vai tentar converter para numero, porque se elas tiverem um texto dentro delas, elas podem nao ser convertidas para numero, e ai a gente vai ter que lidar com o NaN, que significa Not a Number, ou seja, nao eh um numero valido.
//se comecar com numero ele vai converter, se comecar com texto ele nao vai converter, entao tem que ter cuidado com as strings que a gente vai tentar converter para numero.
//isso tudo eh chamado de conversao explicita
//eu especifico que eu quero converter essa string para um numero, e eu uso uma funcao para fazer isso, e dependendo do tipo de numero que eu quero trabalhar, eu posso usar a funcao number, parseInt ou parseFloat.

//a mesma coisa acontece se eu quiser transformar numa string ou num valor boleano
let a = 1;
console.log(typeof a); // number
let b = String(a); // aqui eu to a falar para ele transformar o numero 1 numa string
console.log(b);
console.log(typeof b); // string
// e se eu quiser transformar esse numero 1 num valor boleano?
let c = Boolean(a);
console.log(c); // true     
console.log(typeof c); // boolean
// nesse caso, a funcao boolean ela vai pegar o numero 1 e transformar num valor boleano, e como o numero 1 eh considerado um valor verdadeiro, ele vai retornar true, que significa verdadeiro.
// se eu tivesse um numero 0, ele seria considerado um valor falso, entao ele retornaria false, que significa falso.
// entao a funcao boolean ela vai pegar o numero e transformar num valor boleano, e dependendo do valor do numero, ela vai retornar true ou false.  

//se por casao o a fosse 0, transformando na string seria "0", e transformando no booleano seria false, porque o numero 0 eh considerado um valor falso, entao ele retornaria false, que significa falso.

//que outros valares seriam considerados falsos?
// o numero 0, a string vazia "", o valor null, o valor undefined, o valor NaN, e o valor false, todos esses valores sao considerados falsos, entao se eu tentar transformar qualquer um desses valores num valor boleano, ele vai retornar false, que significa falso.
// entao a funcao boolean ela vai pegar qualquer valor e transformar num valor boleano, e dependendo do valor do numero, ela vai retornar true ou false.    
let a = null;
console.log(Boolean(a)); // false
// o valor null eh considerado um valor falso, entao ele retorna false, que significa falso.
//eu poderia nao atribuir nenhum valor para a variavel a, e ela seria undefined, que tambem eh considerado um valor falso, entao ele retornaria false, que significa falso.
let x ;
console.log(Boolean(x)); // false
// o valor undefined eh considerado um valor falso, entao ele retorna false, que significa falso.
// entao a funcao boolean ela vai pegar qualquer valor e transformar num valor boleano, e dependendo do valor do numero, ela vai retornar true ou false.
//quando eu transformei a variavel a em string eh undefined, ele vai dizer que o conteudo eh uma string vazia, entao ele vai retornar false, que significa falso.
//se for a sting 0 ele vai transformar num valor boleano, e como a string 0 eh considerada um valor verdadeiro, ele vai retornar true, que significa verdadeiro.
console.log(Boolean("0")); // true
//ainda que for outra sting "oidmfd", ela tambem eh considerada um valor verdadeiro, entao ela vai retornar true, que significa verdadeiro.
console.log(Boolean("oidmfd")); // true
//ent qualquer string ele vai transformar em verdadeiro
//para transformar em falso ele so vai transformar
// o null, undefined, 0
//estou a trabalhar com a conversao explicita, ou seja, estou a dizer para o javascript que eu quero converter esse valor para um tipo diferente, e eu uso uma funcao para fazer isso, e dependendo do tipo de valor que eu quero trabalhar, eu posso usar a funcao number, string ou boolean.
//existe a conversao implicita e eu devo ter muito cuidado
console.log("20" + "30")//isso daqui vai dar 2030
//porque o operador de soma ele tem um comportamento diferente quando ele trabalha com strings, ele vai concatenar as strings, ou seja, ele vai juntar as duas strings, e nao vai somar os numeros, entao ele vai pegar a string "20" e a string "30" e vai juntar elas, e vai retornar a string "2030", entao isso eh chamado de concatenacao de strings, ou seja, quando o operador de soma ele trabalha com strings, ele vai concatenar as strings, e nao vai somar os numeros.
//entao a conversao implicita acontece quando o javascript ele tenta converter um valor para um tipo diferente, sem que eu tenha especificado isso, ou seja, sem que eu tenha usado uma funcao para fazer isso, e isso pode acontecer quando eu uso o operador de soma com strings, ou seja, quando eu uso o operador de soma com strings, ele vai concatenar as strings, e nao vai somar os numeros, entao isso eh chamado de conversao implicita, ou seja, o javascript ele tenta converter um valor para um tipo diferente, sem que eu tenha especificado isso, e isso pode acontecer quando eu uso o operador de soma com strings.
//ah e se um deles for numerico?
console.log(20 + "30")//isso daqui vai dar 2030, conversao implicita
//ele simplesmente transformou o 20 em string e fez a concatencao
console.log(String(20) + "30");//conversao explicita aqui eu to a falar para ele transformar o numero 20 numa string, e ai ele vai concatenar as duas strings, e vai retornar a string "2030", entao isso eh chamado de conversao explicita, ou seja, eu especifico que eu quero converter esse valor para um tipo diferente, e eu uso uma funcao para fazer isso, e dependendo do tipo de valor que eu quero trabalhar, eu posso usar a funcao number, string ou boolean.

console.log("20" * "30");//quando eu estou multiplicando nao existe uma concatencao
//isso daria 600, ento como as duas coisa sao numericas ele vai entender que eu quero
//transformar as duas string em numero ele vai calcular
//isso vai dar uma conversao implicita

console.log(Number("20") + Number("30"));//ele vai transformar os dois em numericos e depois vai fazer
//a multiplicacao e vai dar 600, entao isso eh uma conversao explicita, porque eu to a falar para ele transformar as duas string em numero, e ai ele vai fazer a multiplicacao e vai dar 600, entao isso eh uma conversao explicita, ou seja, eu especifico que eu quero converter esse valor para um tipo diferente, e eu uso uma funcao para fazer isso, e dependendo do tipo de valor que eu quero trabalhar, eu posso usar a funcao number, string ou boolean.

//lembrando que tenho que ter muito cuidado quando eu for trabalhar com dados externo
// eu preciso garantir a seguranca da informacao, nao confiar na condicao implicita
// quando o   o usuario digitar um valor esse valor vai chegar como texto, mesmo que ele esteja numerico, entao eu preciso garantir que esse valor seja convertido para numero, e para isso eu posso usar a funcao number, parseInt ou parseFloat, dependendo do tipo de numero que eu quero trabalhar, e eu preciso garantir que esse valor seja um numero valido, ou seja, que ele nao tenha um texto dentro dele, porque se ele tiver um texto dentro dele, ele pode nao ser convertido para numero, e ai eu vou ter que lidar com o NaN, que significa Not a Number, ou seja, nao eh um numero valido.
//se vir de uma api num formato xml ou  json ele tbm pode chegar como texto, eu devo fazer a conversao explicita para garantir que eu estou trabalhando com o tipo de dado correto, e para isso eu posso usar a funcao number, parseInt ou parseFloat, dependendo do tipo de numero que eu quero trabalhar, e eu preciso garantir que esse valor seja um numero valido, ou seja, que ele nao tenha um texto dentro dele, porque se ele tiver um texto dentro dele, ele pode nao ser convertido para numero, e ai eu vou ter que lidar com o NaN, que significa Not a Number, ou seja, nao eh um numero valido.