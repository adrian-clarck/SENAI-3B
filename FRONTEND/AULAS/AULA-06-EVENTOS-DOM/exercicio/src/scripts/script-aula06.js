// Selecionando os elementos do HTML
const contador = document.getElementById("contador");
const btnCurtir = document.getElementById("btn-curtir");
const campoTexto = document.getElementById("campo-texto");
const preview = document.getElementById("preview-texto");
const caixaCor = document.getElementById("caixa-cor");

// Variável para armazenar o número de curtidas
let totalCurtidas = 0;

/* 1. Clique (Curtir) */
btnCurtir.addEventListener("click", () => {
  totalCurtidas++;
  contador.textContent = totalCurtidas;
});

/* Input (Preview em tempo real) */
campoTexto.addEventListener("input", () => {
  preview.textContent = "Digitando: " + campoTexto.value;
});

/* 3. Mouse (Caixa de cor) */
caixaCor.addEventListener("mouseenter", () => {
  caixaCor.style.backgroundColor = "blue";
});

caixaCor.addEventListener("mouseleave", () => {
  caixaCor.style.backgroundColor = "#95a5a6"; // cor original
});

/* 4. Reset (Extra) */

// Reset ao pressionar a tecla "r"
document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    totalCurtidas = 0;
    contador.textContent = 0;

    campoTexto.value = "";
    preview.textContent = "Digitando: ...";
  }
});