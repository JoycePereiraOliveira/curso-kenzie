// Crie uma função que receba um array. Percorra este array, some quantos números pares este array possuí e retorne a soma.

function elementosParesDoArray(meuArray){
    let soma = 0;
    for(i = 0; i < meuArray.length; i++){
      if (meuArray[i] % 2 === 0){
        soma ++;
      }
    }
    return soma;
  }
  
  console.log(elementosParesDoArray([2, 1, 4, 5, 8, 6, 9, 12]))