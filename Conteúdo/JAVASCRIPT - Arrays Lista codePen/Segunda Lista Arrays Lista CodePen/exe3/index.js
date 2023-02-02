// Sabendo que uma matriz é um array de arrays, crie uma função que recebe matriz 6 x 6, conte e retorne quantos valores maiores que 10 ela possui.

function valorAcimaDe10(matriz6x6){
    conta = 0;
    for(let i = 0; i < matriz6x6.length; i++){
      for(let j = 0; j < matriz6x6[i].length; j++){
        if(matriz6x6[i][j] > 10){
          conta ++;
        }
      }
    }
    return conta;
  }
  
  console.log(valorAcimaDe10([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 13, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 5, 11]
  ]));