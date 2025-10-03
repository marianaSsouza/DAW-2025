const value1 = true;
const value2 = false;


//thruty e falsy -> variaveis vazias ou com valor 0, se submeter 
//a um teste lógico, ficam boolean.

if (value1) {
    console.log("é verdadeiro"); 
} else {
    console.log("é falso");
}
// saída -> é verdadeiro (pois o value1 é true)


if (!value1) {
    console.log("é verdadeiro"); 
} else {
    console.log("é falso");
}
// saída -> é falso (pois o value1 é true, e o ! inverte o valor)

const value3 =  '';

if (value3) {
    console.log("é verdadeiro"); 
} else {
    console.log("é falso");
}
//saida -> é falso (pois o value3 é vazio)


//operador ternario 

(logica) ? (então) : (senao)

const resultado = (value3) ? "é verdadeiro" : "é falso";
console.log(resultado);
// saída -> é false (pois o value3 é vazio)

