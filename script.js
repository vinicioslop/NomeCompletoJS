let nome = prompt("Informe seu nome:");
let sobrenome = prompt("Informe seu sobrenome:")

let nomeCompleto = nome + " " + sobrenome;
let nomeDeCatalogo = sobrenome.toUpperCase() + ", " + nome;

alert(`Nome Completo: ${nomeCompleto}`);
alert(`Nome de Catálogo: ${nomeDeCatalogo}`);