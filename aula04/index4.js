/* function subtrair(n1, n2) {

    if (n1 < n2) {
        return n2 - n1;
    } else (n1 > n2); {
        return n1 - n2;
    }
} 

subtrair();

console.log(subtrair(8, 5));
console.log(subtrair(10, 3)); */

function subtracaoMaiorMenor() {
    var n1 = parseInt(prompt("Número 1:"));
    var n2 = parseInt(prompt("Número 2:"));

    if (n1 > n2) {
       return n1 - n2;
    } else if (n2 > n1) {
        return n2 - n1;
    }

}

console.log(subtracaoMaiorMenor());