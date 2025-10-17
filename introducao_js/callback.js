const inicio = () => {
    console.log("iniciando...");

}

const fim = () => {
    console.log("finalizando...");

}

//callback recebe função como parâmetro
const processa = (ini, final) => {
    ini();

    final()

}

processa(inicio, fim);

processa(() => {
    console.log("iniciando 2...");
},
 () => {
    console.log("finalizando 2...");
});