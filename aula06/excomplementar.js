const tipoParcela = prompt('Escolha o tipo de parcela:\n1 - Simples\n2 - Decrescente');

const valorEmprestimo = parseInt(prompt("Qual o valor do empréstimo?"));

const quantidadeParcelas = parseInt(prompt('Digite a quantidade de parcelas:'));

const taxaJuros = 0.05;

if (tipoParcela === '1') {
  for (let i = 1; i <= quantidadeParcelas; i++) {
    const valorParcela = valorEmprestimo / quantidadeParcelas;
    console.log(`Parcela ${i}: R$${valorParcela.toFixed(2)}`);
  }
} else if (tipoParcela === '2') {
  let saldoDevedor = valorEmprestimo;
  const valorParcelaInicial = valorEmprestimo / quantidadeParcelas;
  
  for (let i = 1; i <= quantidadeParcelas; i++) {
    const valorParcela = saldoDevedor * taxaJuros + valorParcelaInicial;
    saldoDevedor -= valorEmprestimo / quantidadeParcelas;
    console.log(`Parcela ${i}: R$${valorParcela.toFixed(2)}`);
  }
} else {
  console.log('Opção inválida!');
}