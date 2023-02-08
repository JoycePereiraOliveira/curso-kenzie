// Crie uma função que receba um array com dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.

function quantosNumerosEntre30e90(arrayCom10Numeros){
    let contaNumeros = 0;
    for(let i = 0; i < arrayCom10Numeros.length; i++){
      if(arrayCom10Numeros[i] > 30 && arrayCom10Numeros[i] < 90){
        contaNumeros ++;
      }
    }
    return `Nesta lista de números temos ${contaNumeros} número(s) entre 30 e 90.`;
  }
  
  console.log(quantosNumerosEntre30e90([1, 2, 31, 21, 99, 87, 34, 8, 19, 27]));