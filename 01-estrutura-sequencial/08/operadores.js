document.writeln(5 + 3 + "<br>");
document.writeln(5 - 3 + "<br>");
document.writeln(5 * 3 + "<br>");
document.writeln(5 / 3 + "<br>");
document.writeln((5 % 3) + "<br>");
document.writeln(5 ** 3 + "<br>");

/**
 * Objecto Math
 * Nas linguagens que nao sao orientadas a objectos nos temos a funcao Math
 * temos a funcao pow//para fazer uma potencia de (5,3)//que vai dar //8
 * a funcao para raiz quadrada sqrt//a raiz quadrada de (25) eh 5
 * o round usamos para arrendondamento
 * como o javscrip eh uma linguagem oreitada a objecto a funcao pow esta artelada ao objecto MATh
 */
document.writeln("<hr>")
document.writeln(Math.pow(5,3) + "<br>");//potencia
document.writeln(Math.sqrt(25) + "<br>"); //raiz quadrada
document.writeln(Math.pow(25,1/2) + "<br>");//potencia 25 elevado a 1 sobre 2 o resultado eh 5
document.writeln(Math.sqrt(8,1/3) + "<br>"); // oito elevado a 1 sobre 3 vai retornar 2

//para arrendodamento usamos o round
document.writeln(Math.round(2.98) + "<br>"); //se nos arrendondar 2.98 vai dar 3 ele 
// arrendonda para cima
document.writeln(Math.round(2.38) + "<br>");// se for 2.30 ele vai arrendondar para 2
//  que eh mais proximo


