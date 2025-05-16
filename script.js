document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const isAdmin = window.location.search.includes("gertos=on");

  const posts = [
    {
      id: 1,
      autor: "Joana Silva",
      texto: "Acabei de ver uma campanha brutal no Instagram!",
      categoria: "Audiovisuais",
      imagem: "https://via.placeholder.com/600x300?text=Imagem+Publicação",
      data: "16 de Maio, 2025"
    },
    {
      id: 2,
      autor: "Diogo Marques",
      texto: "Novo artigo sobre tendências de marketing digital disponível! 🚀",
      categoria: "Marketing",
      imagem: "https://via.placeholder.com/600x300?text=Artigo+Marketing",
      data: "15 de Maio, 2025"
    }
  ];

  const renderFeed = () => {
    content.innerHTML = "";
    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <strong>${post.autor}</strong>
        <span class="category">${post.categoria}</span>
        <p>${post.texto}</p>
        <img class="post-image" src="${post.imagem}" alt="Imagem da publicação">
        <div class="share-icons">
          <span>❤️</span>
          <span>📥</span>
          <span>📱</span>
          <span>🐦</span>
        </div>
        <p style="font-size:12px;color:#bbb;">${post.data}</p>
        ${isAdmin ? `<button onclick="editPost(${post.id})">Editar</button>
                     <button onclick="deletePost(${post.id})">Eliminar</button>` : ""}
      `;
      content.appendChild(div);
    });
  };

  const renderAdminForm = () => {
    const formDiv = document.createElement("div");
    formDiv.className = "post";
    formDiv.innerHTML = `
      <h3>Adicionar Notícia</h3>
      <form id="adminForm">
        <input type="text" id="titulo" placeholder="Título" required><br><br>
        <input type="text" id="categoria" placeholder="Categoria" required><br><br>
        <textarea id="texto" placeholder="Texto" required></textarea><br><br>
        <input type="text" id="imagem" placeholder="URL da imagem"><br><br>
        <button type="submit">Adicionar</button>
      </form>
    `;
    content.prepend(formDiv);

    document.getElementById("adminForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const novoPost = {
        id: Date.now(),
        autor: "Admin",
        texto: document.getElementById("texto").value,
        categoria: document.getElementById("categoria").value,
        imagem: document.getElementById("imagem").value || "https://via.placeholder.com/600x300?text=Nova+Imagem",
        data: new Date().toLocaleDateString("pt-PT", { day: '2-digit', month: 'long', year: 'numeric' })
      };
      posts.unshift(novoPost);
      renderFeed();
      e.target.reset();
    });
  };

  window.editPost = (id) => {
    const post = posts.find(p => p.id === id);
    if (post) {
      const novoTexto = prompt("Editar texto:", post.texto);
      if (novoTexto !== null) {
        post.texto = novoTexto;
        renderFeed();
      }
    }
  };

  window.deletePost = (id) => {
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
      if (confirm("Eliminar esta publicação?")) {
        posts.splice(index, 1);
        renderFeed();
      }
    }
  };

  if (isAdmin) renderAdminForm();
  renderFeed();

  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
