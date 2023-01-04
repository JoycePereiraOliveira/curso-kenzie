//Use o operador de atribuição correto que resultará em x ser 50(o mesmo que x = x * y).

x = 10;
y = 5;
// x ______ y;
x = x * y;


document.getElementById("demo").innerHTML = x


//NÃO ALTERE O CÓDIGO A SEGUIR:
let el = document.getElementById("demo").innerHTML;
if (el == 50) {
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}
