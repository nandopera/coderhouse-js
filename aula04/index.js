const subtracaoMaiorMenor = () => {
    const n1 = parseInt(prompt("Número 1:"));
    const n2 = parseInt(prompt("Número 2:"));

    if (n1 > n2) {
        return n1 - n2;
    } else if (n2 > n1) {
        return n2 - n1;
    }
};

console.log(subtracaoMaiorMenor());