1. Number (Numérico)
Representa todos os números, sejam eles inteiros, decimais ou negativos. No JavaScript, não há separação de tipos para números com vírgula.

Inteiros: 1, 10, 500

Decimais: 4.5, 0.3333 (Usa-se ponto em vez de vírgula)

Negativos: -1, -100

Nota: O 0 é um número real e passível de cálculos matemáticos.

2. String (Texto)
Representa uma cadeia de caracteres (letras, símbolos ou números formatados como texto).

Representação: Pode ser feita com aspas duplas " " ou simples ' '.

Comportamento: Se um número estiver entre aspas, ele é tratado como texto.

Exemplo: "11" é uma String e não um Number.

3. Boolean (Lógico)
Tipo de dado binário, essencial para a lógica de programação e tomada de decisões.

true: Verdadeiro.

false: Falso.

4. Null (Nulo)
Representa a ausência intencional de um valor. É quando você define explicitamente que uma variável está "vazia".

Diferença importante: null é diferente de 0. O null é o vazio, o 0 é um valor numérico ativo.

5. Undefined (Indefinido)
Indica que uma variável foi declarada no código, mas nenhum valor foi atribuído a ela. O próprio JavaScript define esse tipo automaticamente quando não encontra um valor.



Dado,Exemplo,Tipo (typeof)
Inteiro/Decimal,10 ou 5.5,number
Texto,"""Rafael""",string
Lógico,true,boolean
Vazio Definido,null,object*
Não Definido,undefined,undefined

Dado,Exemplo,Tipo (typeof)
Inteiro/Decimal,10 ou 5.5,number
Texto,"""Rafael""",string
Lógico,true,boolean
Vazio Definido,null,object*
Não Definido,undefined,undefined

console.log(1, 4);          // Saída: 1 4 (number)
console.log("rafael");      // Saída: rafael (string)
console.log(true);          // Saída: true (boolean)
console.log(null);          // Saída: null (null)
console.log(undefined);     // Saída: undefined (undefined)