// Crie uma função que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

function separaParesEImpares(numeroInteiro){
    let pares = [];
    let impares = [];
    for(let i = 1; i <= numeroInteiro; i++){
      if(i % 2 === 0){
        pares.push(i);
      } else {
        impares.push(i);
      }
    }
    return `De 1 até ${numeroInteiro} temos, Números pares: ${pares} e Números ímpares: ${impares}`
  }
  
  console.log(separaParesEImpares(22))