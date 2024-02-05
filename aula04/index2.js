function calculadora(n1, n2, operacao) {
    if (operacao == "*") {
        console.log(n1 * n2);
    } else if (operacao == "+") {
        console.log(n1 + n2);
    } else if (operacao == "-") {
        console.log(n1 - n2);
    } else if (operacao == "/") {
        console.log(n1 / n2 );
    }
} 

calculadora(10, 5, '*');