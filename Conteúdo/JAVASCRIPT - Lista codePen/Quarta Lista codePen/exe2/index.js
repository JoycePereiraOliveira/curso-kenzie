// Crie duas variaveis, 'linguagens' e 'tipoDados'
// Levando em consideranção o nome da variável, 
// atribua os devidos valores às duas variáveis
// Por exemplo, para 'linguagens' você pode adicionar:
// 'HTML', 'CSS', 'Javascript'
// e para 'tipoDados':
// 'string', 'inteiro', 'array'

// *Obs: atribua os valores para cada variável
// de uma maneira:
// diretamente e utilizando o 'new'

// let __________ = [ _, _, _ ];
// let _________ = ___ _____( _, _, _ );
let linguagens = [ 'HTML', 'CSS', 'JAVASCRIPT' ];
let tipoDados = new Array( 'string', 'inteiro', 'array' );


if(linguagens !== undefined && linguagens.length >=3 && tipoDados !== undefined && tipoDados.length >= 3){
  const mensagem = document.getElementById('mensagem');
  mensagem.classList.remove('hidden');
}