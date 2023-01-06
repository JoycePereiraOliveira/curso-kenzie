//Exiba na tela o restante quando 15 for dividido por 9.


// let result = (15 _____ 9)
let result = (15 % 9)

document.getElementById("demo").innerHTML = result


//NÃO ALTERE O CÓDIGO A SEGUIR:
let el = document.getElementById("demo").innerHTML;
if (el == 6) {
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}
