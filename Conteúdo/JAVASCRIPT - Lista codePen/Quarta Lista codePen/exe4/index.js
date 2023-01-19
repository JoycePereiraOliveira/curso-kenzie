// Acessando elementos de um array
// diretamente pelo índice

let frutas = ['Melancia', 'Laranja', 'Maçã', 'Mamão'];
let melancia = frutas[0];
console.log(melancia);
// Saída: 'Melancia'

// Levando em consideração a array frutas
// e o exemplo dado, retorne a fruta 'Mamão'

// let mamao = frutas[ __ ];
let mamao = frutas[3];
console.log(mamao);
// substitua os '__' pelo índice da fruta pedida

// Ta, mas se eu quiser acessar todos os elementos?
// Confira, no próximo exercício!


if(mamao === 'Mamão'){
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}