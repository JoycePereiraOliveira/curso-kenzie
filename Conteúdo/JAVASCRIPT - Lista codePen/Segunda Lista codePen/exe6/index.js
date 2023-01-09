// Exercício 7 - Escreva uma função 'nand' que recebe dois valores booleanos. Se ambos os valores forem true, o resultado deve ser false. Nos outros casos, o retorno deve ser true.

//Ou seja: A chamada nand(true, true)deve retornar false. As ligações nand(true, false), nand(false, true)e nand(false, false) devem retornar true.

// 1- Declare a função como 'nand' com 2 argumentos a e b. 
// Exemplo function myFunction(param1, param2) { ...
// function ____ (____) {
function nand (a, b) {
  
// 2 - Utilize o  operador && para validar se ambas variaveis são verdadeiras. 
        
// let and = a ____ b;
let and = a && b;
        
//  3- retorne a variavel 'and' e use o operador "!" para reverter o resultado booleano e retornar false
// return ____;
return !and;
}
      
      
//Descomente os consoles abaixo para testar sua função
      
//deve retornar true
let test1 = nand(false, true)
console.log(test1)
      
//deve retornar true
let test2 = nand(true, false)
console.log(test2)
      
//deve retornar true
let test3 = nand(false, false)
console.log(test3)
      
//deve retornar false
let test4 = nand(true, true)
console.log(test4)
      
      
//NÃO ALTERE O CÓDIGO A SEGUIR:
if (test1 && test2 && test3 == true && test4 == false) {
const mensagem = document.getElementById('mensagem');
mensagem.classList.remove('hidden');
}
      