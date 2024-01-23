let nome = prompt("Qual seu nome?");
let sobrenome = prompt("Qual seu sobrenome?");
let anoAtual = 2024;
let idadeFimAno = prompt("Qual sua idade?");

let idadeNum = Number(idadeFimAno);
let nomeCompleto = "Seu nome completo é " + nome + " " + sobrenome + " ";
let anoNascimento = anoAtual - idadeNum;

alert(nomeCompleto + "e nasceu em " + anoNascimento);

// alert(`Seu nome completo é ${nomeCompleto} e você nasceu em ${anoNascimento}`);