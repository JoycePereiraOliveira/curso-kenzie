// Complete o campo vázio e descomente a última linha para ver o total na tela

// *Obs: para descomentar um código você pode:
// apertar ctrl + / ou
// simplesmente apagar as duas barras no início da linha

// Preço 1 = 4
// Preço 2 = 7
// Total = 4 + 7 = 11

let preco1 = 4;
let preco2 = 7;
let total = preco1 + preco2;

alert('Total: '+total);


if (total !== undefined) {
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}