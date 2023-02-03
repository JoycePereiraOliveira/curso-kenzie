// Crie uma função que leia três parametros (a, b e c) e mostre-os na ordem lida. Em seguida, mostre-os em ordem crescente e decrescente.

function mostraElementos (a, b, c){
    let parametrosArray = [a, b, c];
    console.log(`Esses são os parâmetros na ordem de apresentação: ${parametrosArray}`);
    console.log(`Esses são os parâmetros em ordem crescente: ${parametrosArray.sort()}`);
    console.log(`Esses são os parâmetros em ordem decrescente: ${parametrosArray.reverse()}`);
  }
  
  mostraElementos(1, 4, 2);