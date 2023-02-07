// Crie uma função que receba um array com a idade de dez pessoas. Calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

function maiorIdade(arrayIdadePessoas){
    let conta = 0;
    for(let i = 0; i < arrayIdadePessoas.length; i++){
      if(arrayIdadePessoas[i] >= 18){
        conta ++;
      }
    }
    return `Nesta lista temos ${conta} pessoa(s) com/acima de 18 anos`;
  }
  
  console.log(maiorIdade([11, 16, 18, 22, 3, 33, 24, 8, 87, 54]));