// Estrutura base das notícias
let noticias = [];

// Carregar notícias do localStorage (poderá ser adaptado para GitHub JSON futuramente)
window.onload = () => {
  const guardadas = localStorage.getItem("noticias");
  if (guardadas) {
    noticias = JSON.parse(guardadas);
    mostrarNoticias();
  }
};

// Submissão do formulário
const form = document.getElementById("form-noticia");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const novaNoticia = {
    titulo: document.getElementById("titulo").value,
    subtitulo: document.getElementById("subtitulo").value,
    corpo: document.getElementById("corpo").value,
    imagem: `fotos/${document.getElementById("imagem").value}`,
    categoria: document.getElementById("categoria").value,
    data: new Date().toLocaleDateString("pt-PT"),
  };

  noticias.unshift(novaNoticia);
  localStorage.setItem("noticias", JSON.stringify(noticias));
  form.reset();
  mostrarNoticias();
});

function mostrarNoticias() {
  const destaques = document.getElementById("noticias-destaque");
  const lista = document.getElementById("lista-noticias");
  destaques.innerHTML = "";
  lista.innerHTML = "";

  noticias.slice(0, 4).forEach(noticia => {
    const card = criarCard(noticia);
    destaques.appendChild(card);
  });

  noticias.slice(4).forEach(noticia => {
    const card = criarCard(noticia);
    lista.appendChild(card);
  });
}

function criarCard(noticia) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${noticia.imagem}" alt="Imagem da notícia">
    <h3>${noticia.titulo}</h3>
    <h4>${noticia.subtitulo}</h4>
    <p>${noticia.corpo.substring(0, 100)}...</p>
    <small>${noticia.data} | ${noticia.categoria}</small>
  `;
  return div;
}
