// Crie uma função chamada isPrime que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o seja primo e Falso em caso contrário.

function isPrime(number){
    let conta = 0;
    let ePrimo = true;
    for(let i = 1; i < number; i++){
      if(number % i === 0){
        conta++;
      }
    }
    if(conta >= 2){
      ePrimo = false;
      return ePrimo;
    } else {
      return ePrimo;
    }
  }
  
  console.log(isPrime(97));