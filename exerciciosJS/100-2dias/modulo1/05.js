/**
 * [ ] Atribua null a uma variável e veja o typeof dela.
 */
const prompt = require("prompt-sync")({ sigint: true });

let rafael = null;
console.log(typeof rafael);
//apareceu object, mas null é um tipo primitivo,
//  ou seja, não é um objeto. O typeof null retorna "object" 
// por causa de um erro histórico na implementação do JavaScript,
//  mas isso não significa que null seja realmente um objeto.