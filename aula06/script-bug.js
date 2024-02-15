let numero = parseInt(prompt("Numero:"));

function produtorio (numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }
    console.log("Produtorio de " + numero + " = " + resultado);
}

produtorio(numero)