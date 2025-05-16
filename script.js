document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("feed");

  const posts = [
    {
      autor: "Joana Silva",
      texto: "Acabei de ver uma campanha brutal no Instagram!",
      categoria: "Audiovisuais",
      imagem: "https://via.placeholder.com/600x300?text=Imagem+Publicação",
      data: "16 de Maio, 2025"
    },
    {
      autor: "Diogo Marques",
      texto: "Novo artigo sobre tendências de marketing digital disponível! 🚀",
      categoria: "Marketing",
      imagem: "https://via.placeholder.com/600x300?text=Artigo+Marketing",
      data: "15 de Maio, 2025"
    }
  ];

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
    `;
    feed.appendChild(div);
  });

  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
