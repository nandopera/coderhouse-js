let numero = Number(prompt("Inserir um número:"))

function testando(numero) {

    while(0 != numero){
        switch (numero) {
            case 8: console.log("Olá gerente.");
            break;
            case 10: console.log("Olá chefe.");
            break;
            default: console.log("Olá pessoal.");
        }
        numero = prompt("Inserir de novo.")
    }
}
testando(numero)