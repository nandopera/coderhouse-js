let nome = prompt("Qual seu nome?");
let sobrenome = prompt("Qual seu sobrenome?");
let anoAtual = 2024;
let idadeFimAno = prompt("Qual sua idade?");

let nomeCompleto = nome + " " + sobrenome;
let anoNascimento = anoAtual - idadeFimAno;

alert(`Seu nome completo é ${nomeCompleto} e você nasceu em ${anoNascimento}`);