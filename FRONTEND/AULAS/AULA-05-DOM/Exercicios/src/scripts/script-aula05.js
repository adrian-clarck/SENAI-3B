// 1. Identidade: alterar o nome do usuário
const nomeUsuario = document.querySelector("#nome-usuario");
nomeUsuario.textContent = "Adrian Clarck";

// 2. Avatar: trocar a imagem de perfil
const fotoPerfil = document.querySelector("#foto-perfil");
fotoPerfil.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_LhRb-O-LCvNh5714WGXvoMm2ZyYdT9ngQ&s";

// 3. Personalização: mudar cor de fundo do container
const container = document.querySelector("#container-perfil");
container.style.backgroundColor = "#272727";

// 4. Status Real: adicionar classe e mudar texto
const status = document.querySelector("#badge-status");
status.classList.add("online");
status.textContent = "Status: Ativo";

// 5. Auditoria: contar skills e mostrar no console
const skills = document.querySelectorAll(".skill");
console.log("Total de skills:", skills.length);