// Sabendo que uma matriz é um array de arrays declare uma matriz 5 x 5. Utilizando um laço de repetição preencha com 1 a diagonal principal e com 0 os demais elementos. Escreva ao final a matriz obtida.

let minhaMatriz5x5 = [
    [1, 2, 3, 4, 6],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];

for(let i = 0; i < minhaMatriz5x5.length; i++){
  for(let j = 0; j < minhaMatriz5x5[i].length; j++){
    if(i === j){
      minhaMatriz5x5[i][j] = 1;
    } else if(minhaMatriz5x5[i][j] != 0){
      minhaMatriz5x5[i][j] = 0;
    }
  }
}

console.log(minhaMatriz5x5);