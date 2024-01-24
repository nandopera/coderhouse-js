// Opções de idioma
let idioma = prompt("Digite o idioma desejado (pt-br, en-us ou es):");

// Verifica o idioma escolhido
if (idioma === "pt-br") {
  alert("Olá! Bem-vindo ao nosso site!");

  let ano = prompt("Qual seu ano de nascimento?");
  let idade = 2024 - (ano);

  alert("Você tem " + (idade) + " anos.");

} else if (idioma === "en-us") {
  alert("Hello! Welcome to our website!");

  let ano = prompt("What is your year of birth?");
  let idade = 2024 - (ano);

  alert("You are " + (idade) + " years old.");

} else if (idioma === "es") {
  alert("¡Hola! ¡Bienvenido a nuestro sitio web!");

  let ano = prompt("¿Cuál es tu año de nacimiento?");
  let idade = 2024 - (ano);

  alert("Tienes " + (idade) + " años.");
  
} else {
  alert("Idioma inválido. Por favor, escolha pt-br, en-us ou es.");
}

