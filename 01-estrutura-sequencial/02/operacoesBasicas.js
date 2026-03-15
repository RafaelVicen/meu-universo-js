//operacoes basicas no javaScript
//com os tipo primitivos!

// 1- operacoes do tipo number, sao operacoes numericas!
//operacoes do tipo soma!
let = 1 + 4 // = 5
let = 5 + 5 // = 10
let = 5 + -7// aqui somei um valor negativo que vai dar -2

//operacoes do tipo subtracao
let = 10 - 3//= 7
//posso colocar tbm numeros com casas decimais
let = 4.5 - 0.3 // = 4.2

//temos tbm a multiplicacao
let = 5 * 9 // = 45
let = 4.321 * 2.3 // = 9.9382
//lembrando que nao preciso me limitar so a numeros inteiros, como posso ter com casas
//decimais!

// divisao
let = 6 / 2 // = 3
let = 8.5 / 5 // = 1.7
let = 8.5 / -5 // = -1.7

//resto da divisao ou modulo, que eh representado por (%) percentaem!
let = 10 % 3 // = 1
//o modulo ele faz a divisao inteira de 10 por 3 que vai dar 3 e mostra o seu resto
// que eh o 1
// 3 x 3 = 9
// o seu resto eh 1


// temos tbm 3 operacoes tipo string, que eh a concatenacao
//que eh a soma entre aspas de duas strings
// dizemos soma, porque a concatenacao ela junta as duas
let = "Planeta" + "Terra"// = PlanetaTerra""
//somei a string "planeta" com "terra" me deu "planetaterra"
//como nas minhas duas sting nao tinha espaço, por isso juntou tudo
//lembrando que espaço tbm eh um caracter

//para eu poder ter o espaço deveria ter feito assim
let = "Planeta " + "Terra"// = "Planeta Terra"lembrando que o espaço eh um caracter
//quando metemos o espaço ele aparece
//     //                 //              //                 //                 //

// uma segunda operacao que temos do tipo string: eh extrair o numero especifico
//de uma determinada posicao na string
let ="Planeta Terra"[2]//aqui eu quero extrair o terceiro caracter, porem para 
//extrair o terceiro caracter eu meti o numero 2
// 2 por que? porque uma string ela tem varios indice e o primeiro indice dela
//nao eh o numero 1, mas sim o numero 0
//a posicao da letra P do exemplo acima eh 0, o L eh 1 e a posicao da letra a eh 2

// como começa de zero, se eu quiser pegar o terceiro caracter eu vou buscar pelo indice 2

// a outra operacao que temos tbm, eh pra gente retorna o tamanho da string
//para nos saber o tamanho da string
let = "Planeta Terra".length// e vai retornar pra mim o 13
//o 13 ele ta somar a quantidade de string do Planeta Terra
//lembrando que ele conta ate o espaco, porque se for so
//planeta terra, tem 12 caracteres

let = "planeta" + "terra"[3]//podemos juntar essas operacoes tbm
//porem aqui da string terra, eu to a extrair o terceiro caracter que esta na posicao 3
// que no caso seria o R
// se eu juntas as duas operacoes de cima eu vou ter o resultado de planeta R
// porque ele foi na string terra, extraiu o terceiro caracter que foi o R
// e depois ele concatenou com a palavra planeta e o resultado foi
//planeta r

// eh de extrema importancia nao confudirmos com 
let = ("planeta" + "terra")[3]//aqui ele vai retornar n
//ele retorna N porque na programacao, temos ordem de precedencia, para poder realizar
//as operacoes, quando eu nao coloquei parentes, primeiro ele extraiu o caracter da posicao 3
// da palavra terra e depois concatenou com a palavra planeta
//como no exemplo acima eu tenho o parenteses e depois a concatencao
//primeiro ta concatenadno planeta com terra que daria Planeta Terra e so depois ele 
//estava a extrair o caracter que estava na posicao 3 de planeta terra
//nesse caso seria o n que esta na possicao 3


// lembrando que falamos na aula passada o js tem a tipagem fraca, ele permite que eu faca o seguinte

let = "Eu vivo na terra a" + 30 + "anos"//aqui ele vai retornar a concatenacao
//como se o 30 fosse uma string
//o que ocorreu eh que ele formou tudo numa unica string, eh justamente por isso que o js tem a tipagem
//fraca
//eu consegui somar dois valores, um do tipo texto e outro do tipo number e eu nao tive nenhum tipo de erro
//quando estamos lidar com operacoes eh sempre ficar atento com as ordem de precedencia

let = 5 * 5 + 1 // = 26 de acordo com a ordem de precedencia da matematica, primeiro eu realizo a 
//multiplicacao e depois a soma.
//lembrando que na programacao quando quisermos alterar a ordem de precedencia usamos os parentes

let = 5 * (5 + 1)// = 30//primeiro ele soma e depois ele multiplica 5 + 1 = 6 // 5 x 6 = 30

//eu posso ter um parentes dentro do outro
let = 5 * (5 / (5 - 4) + 1)// = 30
//primeiro ele (5 - 4) que vai dar 1
//depois ele faz (5 / 5) por causa da ordem de precedencia 
// depois ele faz a soma (5 + 1) que da 6 por causa do parentes 
//depois ele fez a multiplicacao (5 x 6) que da = 30
