# Mural de Notícias

Este projeto é um site simples para partilhar notícias, com um painel de administração embutido para inserção direta dos conteúdos. Inspirado no estilo da Footdistrict.

## Funcionalidades

- Destaque automático das 4 notícias mais recentes
- Divisão por categorias: Marketing, Audiovisuais e Videojogos
- Formulário de administração integrado (Dashboard)
- Armazenamento local com `localStorage`

## Estrutura do Projeto

```
/
├── index.html
├── styles.css
├── script.js
├── fotos/
│   └── (coloca aqui as imagens das notícias)
└── README.md
```

## Instruções de Utilização

1. **Clona este repositório** ou **faz upload manual para o GitHub**
2. **Cria uma pasta chamada `fotos`** na raiz do repositório
3. **Adiciona imagens** à pasta `fotos`
4. Acede ao ficheiro `index.html` para inserir e visualizar notícias

## Campos do Formulário (Dashboard)
- **Título**
- **Subtítulo**
- **Corpo do texto**
- **Nome da imagem** (ex: `minhaimagem.jpg` → colocar a imagem em `/fotos/minhaimagem.jpg`)
- **Categoria**

## Como Publicar no GitHub Pages

1. Vai ao repositório no GitHub
2. Acede a **Settings > Pages**
3. Em "Source", seleciona a branch `main` e pasta `/ (root)`
4. Guarda e acede ao link gerado (ex: `https://teu-utilizador.github.io/mural-noticias/`)

## Notas Finais

Este projeto usa `localStorage` para guardar notícias. Caso pretendas evoluir para armazenamento central (por exemplo, com GitHub API ou base de dados), a estrutura já está preparada para adaptação.

---

Criado com 💻 por Diogo.
