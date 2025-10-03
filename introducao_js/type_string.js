
const primeiroTexto = "Olá"; 
// um igual (=) é como uma atribuição, não é para comparar
// dois iguais (==) é para comparar valores
// três iguais (===) é para comparar valores e tipos

const segundoTexto = "mundo!";


console.log(primeiroTexto + " " + segundoTexto); 
// esse console.log serve para imprimir no console do navegador (saida -> Olá mundo!)

console.log(primeiroTexto + segundoTexto); 
// o + é um operador de concatenação, ou seja, ele junta os textos (saida -> Olámundo!)


console.log(`${primeiroTexto} ${segundoTexto}`); 
// com crase vai ser uma expressão (saida -> Olá mundo!)

console.log(`${primeiroTexto}${segundoTexto}`); 
// caso não tenha o espaço, a saída será Olámundo! (saida -> Olámundo!)

