// Sabendo que uma matriz é um array de arrays. Crie uma função que receba uma Matriz de 10 x 10, percorra os arrays e escreva a localização (linha e a coluna) do maior valor.

function matriz(meuArray){
    let maior = 0;
    let posicao= [];
    
    for(let i = 0; i < meuArray.length; i++){
      for(let j = 0; j < meuArray[i].length; j++){
        if(meuArray[i][j] > maior){
          maior = meuArray[i][j];
          posicao = [i, j];
        }
      }
    }
    return posicao;
    }
  
  let minhaMatriz = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12], 
  ];
  
  console.log(matriz(minhaMatriz));