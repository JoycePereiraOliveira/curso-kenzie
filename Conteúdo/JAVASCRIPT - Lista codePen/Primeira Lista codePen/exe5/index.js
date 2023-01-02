// Substitua no underline(_) entre as variaveis para que a condição
// "numero1 é maior que número2"
// retorne true.

let numero1 = 10;
let numero2 = 5;

// let resultado = numero1 _ numero2;
let resultado = numero1 > numero2;

alert(resultado);


if(resultado !== undefined && resultado === true){
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}