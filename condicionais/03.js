let velocidade = 200;

if (velocidade < 40) {
  console.log('velocidade baixa');
} else {
  if (velocidade <= 100) {
    console.log('cuidado');
  } else {
    console.log('Estamos em velocidade de risco');
  }
}
//o que o nosso bloco de codigo esta a fazer?
//ele esta a verificar se velocidade eh menor que 40
//se for menor que 40 ele exibe uma msg se nao
//depois vai entrar no outro if e verifica se a velocidade eh menor a 100
//se for vai imprimir a msg 
//porem se a velocidade for maior que 100
//ele executa o ultimo else que eh velocidade de risco