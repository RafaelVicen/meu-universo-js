console.log(BigInt(11)); //  ->  11n
console.log(BigInt(0x11)); //  ->  17n
console.log(BigInt(11e2)); //  ->  1100n

console.log(BigInt(true)); //  ->  1n

console.log(BigInt('11')); //  ->  11n
console.log(BigInt('0x11')); //  ->  17n

console.log(BigInt(null)); //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt

console.log(BigInt(undefined)); //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

console.log(BigInt(NaN)); //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

//Para que as conversões para BigInt sejam bem-sucedidas, precisamos de um Number ou String representando um número como valor a ser convertido. Os valores para conversão podem ser fornecidos no formato decimal padrão, bem como nos formatos hexadecimal, octal ou binário. Isso se aplica tanto à situação em que fornecemos literais Number e String como argumentos (ou variáveis ​​contendo dados desses tipos). Também podemos usar a notação exponencial, mas apenas para argumentos Number. Ao contrário de outras conversões, a conversão para BigInt lançará um erro e interromperá o programa caso não seja possível converter um determinado valor.
// Observação: Ao testar o exemplo a seguir, preste atenção ao fato de que o primeiro erro impede a execução do código subsequente. Portanto, execute o exemplo várias vezes seguidas, removendo as chamadas incorretas uma a uma.