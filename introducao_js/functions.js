
//função sem parâmetro e sem retorno
function inicio ( ) {
    const mensagem = "estou iniciando....";
    console.log(mensagem); //isso imprime a mensagem
}

//função sem parâmetro e com retorno
function processa ( ) {
    const mensagem = "estou processando....";
    return mensagem; //isso retorna a mensagem, retornando para quem chamou a função
}

inicio(); //chamando a função inicio

const processado = processa(); //chamando a função processa e guardando o retorno na variável processado
console.log(processado); //imprimindo o valor da variável processado