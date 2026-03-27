//estrutra de control if
// se nota for igual a 10 entao lado verdadeiro nota maxia
//se nao lado falso que nao tem valor nenhum ainda

const prompt = require('prompt-sync')({ sigint: true });
let nota = 9;

if (nota == 10) {
  console.log('nota maxia');
}
else {
  console.log('nota diferente de 10');
}