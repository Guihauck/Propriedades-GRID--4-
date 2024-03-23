const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const alterarBotaoAoClicar = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  
  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroAtivo) {
    alterarBotaoAoClicar.setAttribute("src", "./src/images/sun.png");
  } else {
    alterarBotaoAoClicar.setAttribute("src", "./src/images/moon.png");
  }
});

