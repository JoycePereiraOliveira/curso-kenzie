//Complete o código para função retornar "Hello".


function myFunction() { 
  
// ________ "_____";
return "Hello"; 
} 
  
document.getElementById("demo").innerHTML = myFunction();


//NÃO ALTERE O CÓDIGO A SEGUIR.
function testFunction() {
let result = myFunction();
if(result === "Hello") {
const mensagem = document.getElementById('mensagem');
mensagem.classList.remove('hidden');
}
}
  
testFunction()
  
  
  
  
  
  
  
  
  
  
  