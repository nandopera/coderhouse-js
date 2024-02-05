function calcularSoma(nota1, nota2) {
    return nota1 + nota2;
  }
  
  var somaProvas = () => {
    var prova1 = Number(prompt("Insira a nota da primeira prova:"));
    var prova2 = Number(prompt("Insira a nota da segunda prova:"));
  
    var soma = calcularSoma(prova1, prova2);
    
    var media = soma / 2;
    alert(`A média das notas é ${media}`);
  
    return soma;
  };
  
  var verificarAprovacao = (media) => {
    if (media >= 6) {
      alert("O aluno foi aprovado!");
    } else {
      alert("O aluno foi reprovado.");
    }
  };
  
  var media = somaProvas();
  verificarAprovacao(media);