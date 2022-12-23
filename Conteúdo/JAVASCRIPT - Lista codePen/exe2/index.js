// Hora de incrementar um pouco!
let primeiroNome; // Declare, uma variável chamada 'primeiroNome'
let ultimoNome; // E também uma variável chamada 'ultimoNome'
primeiroNome = "Joyce";
ultimoNome = "Oliveira"; 
// Atribua o seu primeiro e último nome às respectivas variáveis
// Descomente a linha 10

let ____________ = "_________";
let __________ = "_________";

alert('Meu nome completo é: ' + primeiroNome + ' ' + ultimoNome);


if (primeiroNome !== undefined && ultimoNome !== undefined) {
  const mensagemTag = document.getElementById('mensagem');
  const mensagem = "Muito bem, " + primeiroNome + " " + ultimoNome + "! Você acertou!";
  mensagemTag.innerText = mensagem;
  mensagemTag.classList.remove('hidden');
}