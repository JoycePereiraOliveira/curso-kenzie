// Substitua no underline(_) entre as variaveis para que a condição
// "numero1 é igual ao número2"
// retorne true.

let numero1 = 7;
let numero2 = 7;


// let resultado = numero1 __ numero2;
let resultado = numero1 === numero2;

alert(resultado);


if(resultado !== undefined && resultado === true){
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}