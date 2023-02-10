// Crie uma função chamada convertTime que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

function convertTime(years, months, days){
    let totalDays = 0;
    totalDays = ((years * 365) + (months * 30) + days)
    return `Essa pessoa tem aproximadamente ${totalDays} dias de vida.`
  }
  
  console.log(convertTime(37, 8, 27));