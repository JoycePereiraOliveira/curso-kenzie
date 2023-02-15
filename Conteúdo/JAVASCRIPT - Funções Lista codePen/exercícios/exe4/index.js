// Crie uma função chamada isPerfect que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). A função deve retornar um valor booleano.

function isPerfect(number){
    let perfectNumber = 0;
    for(let i = 0; i < number; i++){
      perfectNumber += i;
      if(perfectNumber === number){
        return true;
      }
    }
    if(perfectNumber !== number){
      return false;
    }
  }
  
  console.log(isPerfect(3));