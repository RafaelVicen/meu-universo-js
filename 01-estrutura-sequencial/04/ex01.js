//Nesse exemplo, usamos prompt para pegar dados e alert para mostrar.
// Criando as caixinhas (variáveis)
let nomePiloto = prompt("Identifique-se, Piloto:");
let destino = "Marte"; // Uma string fixa

// Mostrando a mensagem na tela
alert("Bem-vindo ao comando, " + nomePiloto + "! Rota definida para: " + destino);

// Log de segurança no console
console.info("Acesso autorizado para o piloto: " + nomePiloto);

//2. Painel de Controle (Matemática e Tipos)

let combustivelAtual = 100;
let consumoPorKm = 5;
let distancia = 12;

// Cálculo: primeiro multiplica a distância pelo consumo, depois subtrai do total
let sobraCombustivel = combustivelAtual - (distancia * consumoPorKm);

console.log("Combustível restante: " + sobraCombustivel + "%");
// Resultado: 100 - 60 = 40%
//3. Verificação de Segurança (confirm e Booleano)
const NOME_NAVE = "Estrela de Prata"; // Constante, o nome não muda
let autorizacao = confirm("Deseja iniciar os motores da " + NOME_NAVE + "?");

// Se clicar em OK, autorizacao será true. Se Cancelar, será false.
console.log("Motores ligados? " + autorizacao);

// Usando o warn para avisar caso não tenha autorizado
console.warn("Status da autorização: " + autorizacao);

//4. Brincando com as Strings (Índice e Tamanho)
let codigoSecreto = "ALFA-99-X";

let primeiraLetra = codigoSecreto[0]; // Posição 0 é o "A"
let tamanhoCodigo = codigoSecreto.length; // Quantos caracteres tem?

console.log("A primeira letra do código é: " + primeiraLetra);
console.log("O código tem " + tamanhoCodigo + " caracteres de comprimento.");

//5. O erro da Constante (Para você testar)
const anoAtual = 2026;
console.log(anoAtual);

// Tentar mudar uma constante vai dar erro no console!
anoAtual = 2027;
console.error("Isso aqui nem vai aparecer porque o código trava em cima!");