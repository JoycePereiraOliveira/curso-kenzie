// Crie uma função chamada multiplyList que receba um array de números, um multiplicador e devolva a multiplicação de cada elemento do array pelo multiplicador. Exemplo:
//([1, 2, 3, 4, 5] , 3) deve retornar [3, 6, 9, 12, 15]

function multiplyList(array, multiplicador){
    for (let i = 0; i < array.length; i++){
      console.log(array[i] * multiplicador)
    }
}
  
  multiplyList([1, 2, 3, 4, 5], 3);