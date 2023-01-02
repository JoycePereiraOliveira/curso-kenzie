//1 - Corrija a instrução if para que a função retorne "Hello World" se x for maior que y e ímpar.
//2 - Caso contrário, deve retornar "Goodbye".

let x = 1
let y = 2

// function myFunction(){
//   ____(x __ y ___ (x % 2 == 0) ) {
//     return "Hello World";
//   } ____ {
//     return "Goodbye";
//   }
// }
function myFunction(){
  if(x > y && (x % 2 == 0) ) {
    return "Hello World";
  } else {
    return "Goodbye";
  }
}


//NÃO ALTERE O CÓDIGO A SEGUIR:
if (myFunction() === "Goodbye") {
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}
