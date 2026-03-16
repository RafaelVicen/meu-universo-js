// As variaveis nos utilizamos para poder armazenar valores e utilizar 
//futuramente no nosso codigo, porem para nos utilizar variavel, precisamos declarar
//apartir da versao 6 do js, nos temos 3 tipos de declarar variaveis

let spaceship = "FE SuperNova"// o que eu fiz? usei o lete para criar uma variavel
//spaceship eh o nome da variavel, utilizei o igual que eh de atribuicao
// e no final coloquei uma string entre aspas
console.log(spaceship)//aqui eu estou a imprimir o conteudo dessa variavel, ou seja
//estou a mostrar na tela o que foi feito acima
// agora eu vou subscrever este valor, o que esta em spaceship

spaceship = "FE Helmet"
console.log(spaceship)
// ao executar ele vai imprimir na tela FE superna e FE Helmet
//porque? nos declaramos a primeira variavel como super nova e imprimi
//Depois eu subscrevi, o valor de spaceship, eu atribui o novo valor para ela, que foi
// FE Helmet, e imprimi a variavel spaceship novamente.
// para eu poder declarar uma variavel, eu vou usar o let, porem, quando a variavel ja existe e 
//eu quero atribuir um novo valor para ela, eu nao preciso, basta colocar o nome da variavel
// e o nome da atribuição


// ja o const ele funciona de outra forma
const squad = "Estrelar"
console.log(squad)
//entao declarei squad, dessa vez com a palavra const, e atribui o valor estrelar
//na saida ele imprimiu estrelar

squad = "Espacial"
console.log(squad)
//ele so vai imprimir estrelar, ele nao vai imprimir squad, porque no meio do caminho
//ocorreu um erro na atribuição na variavel const, esse const ai eh de constante
// o squad ai, tem o valor constante, ele so pode receber um valor uma unica vez
//quando tentamos fazer a segunda atribuição, um erro ocorre, e é por isso que ele nao consegue fazer
// a impressao embaixo, ent o const so usamos quando queremos atribuir um valor numa variavel, que nunca
//vai mudar

// o terceiro tipo de declarar variavel eh o var
// o var ele funciona igual ao let
var velocity = 80
console.log(velocity)

velocity = 25
console.log(velocity)
//ent ele vai imprimir pra mim o 80 e depois o 25
//se o var, funciona exatamente como o let, porque que ele existe?
//bem esse var veio de uma herança de valores js, mas ele tem um motivo bem importante
//para ele existir, isso vamos ver nas proximas aulas


// uma coisa interessante que podemos fazer, eh declarar uma variavel e nao atribuir nenhum valor
//let noValue
console.log(noValue)
//quando eu executar esse valor, o que vai retornar para gente eh undefined
// nas aulas anteriores vimos, que uma variavel, que nao recebeu ainda nenhum valor ela eh
//undefined.

let noValue = "Eu tenho valor"
console.log(noValue)
//aqui ele vai imprimrir dizendo que agora ele tem valor



//uma coisa bem interessante tbm, eh que podemos atribuir um retorno
//por exemplo, o arlet e o console eles nao retornam valor algum
//mas o confirm e o prompt retornam
let departureconfirmation = confirm ("Nave pronta para decolar.aguardando confirmacao ")
console.log(departureconfirmation)
//o que vai acontecer, ele vai chamar o confirm, e se eu clickar em cancelar ou ok
// vai me retornar verdadeiro ou falso
//falso no cancelar
//verdadeiro no ok
// eh como se eu tivesse confirmando ou desconfirmando o que estava na minha string de cima



// o prompt ele tbm retorna valor
// eu posso ter aqui por exemplo
let pilot = prompt ("Qual seu nome piloto")
console.log(pilot) 
//entao eu to a chamar o prompt e eu vou atribuir o retorno do prompt na variavel pilot
// quando eu fizer isso, vai exibir o prompt e eu vou poder escrever um texto la dentro
// o valor que eu digitar, eh o valor que o prompt vai retornar quando eu digitar ok

//se eu fizer a mesma coisa e ao inves de clicar ok e apertar em cancelar, ele vai retornar null
//quando nos aprtar em cancelar ele vai retornar null que significa nada
//