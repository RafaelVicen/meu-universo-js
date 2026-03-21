/**
 * [ ] Declare uma variável vazia sem valor. O que aparece no console?
 */
const prompt = require("prompt-sync")({ sigint: true });

let variavel;
console.log(variavel);

//vai aparecer undefined, pois a variável foi declarada, mas não recebeu nenhum valor.