// let frutas = ["Morango", "Maçã", "Banana"];
// Seguindo o exemplo de declaração de array no comentário
// acima, crie uma variável chamada 'animais' 
// Atribua uma array á essa variável
// Adicione os seguintes valores a array:
// 'Gato', 'Cachorro', 'Vaca'

// let animais = [ /* coloque valores da array aqui */ ];
let animais = [ 'Gato', 'Cachorro', 'Vaca' ];


// Outra maneira de criar uma array
// é utilizando o 'new'

// let animais = new Array("Gato", "Cachorro", "Vaca");

// Crie outra array, chamada 'artistas'
// Mas, dessa vez utilizando o 'new'
// *Utilize o exemplo acima
// Atribua os valores:
// 'Angelina Jolie', 'Will Smith', 'Michael B. Jordan'

// let artistas = new _____( '', '', '' );
let artistas = new Array( 'Angelina Jolie', 'Will Smith', 'Michael B. Jordan' );


if(animais !== undefined && animais.includes('Gato') && animais.includes('Cachorro') && animais.includes('Vaca')){
  const mensagem = document.getElementById('mensagem1');
  mensagem.classList.remove('hidden');
}


if(artistas !== undefined && artistas.includes('Angelina Jolie') && artistas.includes('Will Smith') && artistas.includes('Michael B. Jordan')){
  const mensagem = document.getElementById('mensagem2');
  mensagem.classList.remove('hidden');
}