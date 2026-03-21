//const prompt = require("prompt-sync")({ signit: true });

let jogo = "Mortal" + " " + "Kombat";
document.write(jogo + "<br>");

let filme = "Batman";
//document.write("oi");

filme = filme + ": ";
filme += "O cavaleiro das trevas"; //forma reduzida de se acumular valor
//filme = filme + "O cavaleiro das trevas"
document.writeln(filme + "<hr>");

let num = 50;
document.writeln(num + "<br>");
num += 10;
document.writeln(num + "<br>");
// incremento, quando eu quero subir o valor de 1 para 1

num++;
document.writeln(num + "<br>");
//eh a mesma coisa, estou a fazer incremento 
++num
document.writeln(num + "<br>");
//qual eh a diferenca de meter o sinal antes ou depois do num?
document.writeln(num + "<br>");//nessa linha o num estava a valer 62 e continua
//a valer 62
document.writeln(num++ + "<br>");//pos incremento, se na linha tava a valer 62
//na proxima linha vai valer 63, primeiro executa a instrucao, escrever no documento 62 e depois
//incrementa, por isso eh chamado pos incremento
;
document.writeln(++num + "<br>");//pode existir tbm o pre incremento, primeiro o que ele vai fazer
//o incremento para 64 e depois imprimi a extrussao que esta a ser mandada


//do mesmo jeito que existe o incremento existe o decremento
document.writeln(num-- + "<br>")//isso vai fazer que ele imprime o 64 e muda para 63
document.writeln(num + "<br>")//aqui vai aparecer o 63

document.writeln(--num + "<br>")//mesma coisa acontece com pre incremento, na hora que ele mostrar
//vai estar com o valor 62

document.writeln(num + "<br>")

