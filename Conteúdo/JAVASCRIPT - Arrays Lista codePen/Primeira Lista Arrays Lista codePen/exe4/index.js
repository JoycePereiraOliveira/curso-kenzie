// Crie uma função que receba um array de números retorne a soma dos primeiros 5 números ímpares desse array.

function elementosImparesDoArray(meuArray){
    let soma = 0;
    for (let i = 0; i < meuArray.length; i++){
     if (meuArray[i] % 2 === 1 && i < 5){
       soma += meuArray[i];
     }
    }
    return soma;
  }
  
  console.log(elementosImparesDoArray([1, 2, 3, 4, 5, 6]))