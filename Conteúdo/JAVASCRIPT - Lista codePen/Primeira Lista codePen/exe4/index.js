let numero1 = 9;
let numero2 = 7;
let soma; // Crie três variaveis: 'numero1', 'numero2' e 'soma'
soma = numero1 + numero2; // Atribua numero1 + numero2 para a variável 'soma'
// Descomente a última linha

// let _______ = 9;
// let _______ = 7;
// let ____ = _______ + numero2;

alert('A soma de  ' + numero1 + ' com ' + numero2 + ' é ' + soma);


if (numero1 !== undefined && numero2 !== undefined && soma !== undefined) {
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}