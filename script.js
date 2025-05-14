let noticias = [];

const params = new URLSearchParams(window.location.search);
const modoAdmin = params.get("admin") === "1";
const categoriaFiltro = params.get("categoria");

window.onload = () => {
  const guardadas = localStorage.getItem("noticias");
  if (guardadas) {
    noticias = JSON.parse(guardadas);
  }
  if (modoAdmin) {
    document.getElementById("admin").style.display = "block";
  }
  mostrarNoticias();
};

document.getElementById("form-noticia").addEventListener("submit", (e) => {
  e.preventDefault();
  const idEditar = document.getElementById("id-editar").value;
  const novaNoticia = {
    titulo: document.getElementById("titulo").value,
    subtitulo: document.getElementById("subtitulo").value,
    corpo: document.getElementById("corpo").value,
    imagem: `fotos/${document.getElementById("imagem").value}`,
    categoria: document.getElementById("categoria").value,
    data: new Date().toLocaleDateString("pt-PT"),
  };

  if (idEditar) {
    noticias[idEditar] = novaNoticia;
  } else {
    noticias.unshift(novaNoticia);
  }

  localStorage.setItem("noticias", JSON.stringify(noticias));
  document.getElementById("form-noticia").reset();
  document.getElementById("id-editar").value = "";
  mostrarNoticias();
});

function mostrarNoticias() {
  const destaques = document.getElementById("noticias-destaque");
  const lista = document.getElementById("lista-noticias");
  destaques.innerHTML = "";
  lista.innerHTML = "";

  let filtradas = [...noticias];
  if (categoriaFiltro) {
    filtradas = filtradas.filter(n => n.categoria === categoriaFiltro);
  }

  filtradas.slice(0, 4).forEach((noticia, index) => {
    const card = criarCard(noticia, index);
    destaques.appendChild(card);
  });

  filtradas.slice(4).forEach((noticia, index) => {
    const card = criarCard(noticia, index + 4);
    lista.appendChild(card);
  });
}

function criarCard(noticia, index) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${noticia.imagem}" alt="Imagem da notícia">
    <h3>${noticia.titulo}</h3>
    <h4>${noticia.subtitulo}</h4>
    <p>${noticia.corpo.substring(0, 100)}...</p>
    <small>${noticia.data} | ${noticia.categoria}</small>
    ${modoAdmin ? `
      <div class="botoes-admin">
        <button onclick="editarNoticia(${index})">Editar</button>
        <button onclick="removerNoticia(${index})">Remover</button>
      </div>` : ""}
  `;
  return div;
}

function editarNoticia(index) {
  const n = noticias[index];
  document.getElementById("id-editar").value = index;
  document.getElementById("titulo").value = n.titulo;
  document.getElementById("subtitulo").value = n.subtitulo;
  document.getElementById("corpo").value = n.corpo;
  document.getElementById("imagem").value = n.imagem.replace("fotos/", "");
  document.getElementById("categoria").value = n.categoria;
  window.scrollTo(0, document.body.scrollHeight);
}

function removerNoticia(index) {
  if (confirm("Tens a certeza que queres remover esta notícia?")) {
    noticias.splice(index, 1);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    mostrarNoticias();
  }
}
