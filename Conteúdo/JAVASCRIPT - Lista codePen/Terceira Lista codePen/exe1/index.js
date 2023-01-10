// Crie uma função chamada multiplica que recebe dois parametros e retorne a multiplicação dos dois números. 

// function multiplica(_____,_____) {
function multiplica(num1, num2) {
// _____ num1 * num2;
return num1 * num2;
}
  
  
// Descomente o código abaixo para testar sua função
alert(multiplica(3,2))
  
  
//NÃO ALTERE O CÓDIGO A SEGUIR.
function testFunction() {
let result = multiplica(2,2);
if(result === 4) {
const mensagem = document.getElementById('mensagem');
mensagem.classList.remove('hidden');
}
}
  
testFunction()
  