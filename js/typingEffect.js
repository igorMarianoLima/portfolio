const escritas = [
  {
    elemento: document.getElementById("subtitulo"),
    frase: "Sou desenvolvedor Front-End",
  },
];

function efeitoEscrita(elemento, frase) {
  let delayEscrita = 125;
  let indiceLetraAtual = 0;

  const digitar = setInterval(() => {
    let letraAtual = frase[indiceLetraAtual];

    if (!letraAtual) {
      clearInterval(digitar);
      return;
    }

    elemento.innerHTML += letraAtual;
    indiceLetraAtual++;
  }, delayEscrita);
}

escritas.forEach(({ elemento, frase }) => {
  efeitoEscrita(elemento, frase);
});
