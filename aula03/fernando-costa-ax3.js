// Opções de idioma
let idioma = prompt("Digite o idioma desejado (pt-br, en-us ou es):");

// Verifica o idioma escolhido
if (idioma === "pt-br") {
  alert("Olá! Bem-vindo ao nosso site!");
} else if (idioma === "en-us") {
  alert("Hello! Welcome to our website!");
} else if (idioma === "es") {
  alert("¡Hola! ¡Bienvenido a nuestro sitio web!");
} else {
  alert("Idioma inválido. Por favor, escolha pt-br, en-us ou es.");
}