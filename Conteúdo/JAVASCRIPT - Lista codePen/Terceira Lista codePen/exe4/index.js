// Faça a função exibir "Hello" no HTML interno de um elemento com o ID "demo".
// Utilize o getElementById para selecionar o elemento pelo ID
// Para definir o conteúdo do html utilize o método innerHTML 



function myFunction() {
  
// let el = document._____("demo")._______ = "Hello";
let el = document.getElementById("demo").innerHTML = "Hello";
  
return el 
}


//NÃO ALTERE O CÓDIGO A SEGUIR.
function testFunction() {
let result = myFunction();
if(result === "Hello") {
const mensagem = document.getElementById('mensagem');
mensagem.classList.remove('hidden');
}
}
  
testFunction()