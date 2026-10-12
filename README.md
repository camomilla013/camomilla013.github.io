# Portfólio — Camilla Alves Rebouças

Site estático em **HTML, CSS e JavaScript puros**, bilíngue (inglês por padrão, português com o botão **PT**), pronto para o **GitHub Pages**. Não precisa de build, framework nem servidor.

---

## 1. Endereço do site

Já configurado para o usuário **camomilla013**: o site fica em **https://camomilla013.github.io**.
Se um dia mudar de usuário, troque `camomilla013` em todos os `.html` (VS Code: `Ctrl + Shift + H`).

---

## 2. Publicar no GitHub Pages (grátis)

1. No GitHub, clique em **New repository**.
2. Nome do repositório: **`camomilla013.github.io`** (exatamente assim).
   Esse nome faz o site abrir na raiz: `https://camomilla013.github.io` e faz a página 404 funcionar.
3. Marque **Public** → **Create repository**.
4. Na página do repositório: **Add file → Upload files** e arraste **todo o conteúdo desta pasta** (não a pasta em si — o `index.html` precisa ficar na raiz). Inclua o arquivo oculto `.nojekyll`.
5. **Commit changes**.
6. Vá em **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → **Save**.
7. Em 1–3 minutos o site estará em `https://camomilla013.github.io`.

> Pelo VS Code: instale o Git, abra a pasta, use a aba **Source Control** → *Publish to GitHub* → escolha o nome `camomilla013.github.io` (público). Depois siga o passo 6.

### Links para compartilhar
- Inglês: `https://camomilla013.github.io`
- Português: `https://camomilla013.github.io/?lang=pt`
- Um case direto: `https://camomilla013.github.io/agent.html?id=lia`

### LinkedIn e currículo
- LinkedIn → **Perfil → Adicionar seção → Destaques → Adicionar link** → cole a URL. A imagem `assets/img/og-image.png` aparece como capa.
- Se a pré-visualização vier errada, use o [Post Inspector do LinkedIn](https://www.linkedin.com/post-inspector/) para atualizar o cache.
- No currículo, coloque a URL como hiperlink no cabeçalho, ao lado do LinkedIn.

---

## 3. Estrutura

```
index.html          Home: hero em formato de chat, 6 camadas de um agente, infográfico, destaques
agents.html         Portfólio de agentes de IA + gráfico de ciclo de vida
work.html           Portfólio de UX/UI e design
agent.html          Template de case de agente   → agent.html?id=lia
project.html        Template de case de UX/UI    → project.html?id=alexa
about.html          Sobre, linha do tempo, processos, ferramentas, formação
contact.html        Contato (só LinkedIn)
404.html            Página não encontrada (um "fallback" bem desenhado)
.nojekyll           Diz ao GitHub Pages para servir os arquivos como estão
assets/
  css/style.css     Design system: tokens (cores, tipografia, espaçamento), componentes, tema claro
  js/data.js        ★ TODO o conteúdo dos agentes, projetos, infográfico, timeline e ferramentas (EN + PT)
  js/i18n.js        Textos fixos das páginas em EN + PT
  js/main.js        Header, footer, idioma, tema e renderização das páginas
  js/skills-flow.js Infográfico animado "Muitas disciplinas, um só ofício"
  img/              Foto (WebP), favicon (SVG) e imagem de compartilhamento (PNG 1200×630)
```

---

## 4. Como editar

### Adicionar ou editar um agente
Abra `assets/js/data.js` → `PORTFOLIO.agents`. Copie um bloco `{ ... }` inteiro e altere:

| Campo | O que é |
|---|---|
| `id` | aparece na URL (`agent.html?id=...`), sem espaços |
| `featured` | `true` = aparece na home |
| `status` | `live`, `testing`, `building` ou `planned` |
| `stage` | 0 Discovery · 1 Aprovado · 2 Construção · 3 Testes · 4 Produção |
| `metrics` | `kind: "result"` (resultado medido) ou `kind: "goal"` (meta) |
| `compare` | opcional: gráfico meta × resultado (veja o da LIA) |
| `architecture` | o diagrama é desenhado sozinho a partir dessas listas |
| `flow` | opcional: 4 passos do fluxo de decisão; sem ele, usa o padrão |

Todo texto tem `en` e `pt`. Nomes podem ter `namePt`.

### Adicionar um projeto de UX/UI
`PORTFOLIO.projects` no mesmo arquivo. O campo `kind` escolhe a ilustração:
`voice`, `commerce`, `cargo`, `biometrics`, `mobile`, `fintech`, `infographic`, `brand`.
Seções sem conteúdo (`problem`, `approach`, `results`, `learnings`) somem automaticamente.

### Editar o infográfico de habilidades
`PORTFOLIO.skillsFlow`: três colunas (`origins` → `skills` → `outcomes`) e `links` no formato
`["origem", "destino", peso 1–3]`. O peso define a espessura da linha.

### Trocar textos fixos
O texto em inglês está no próprio HTML. O português está em `assets/js/i18n.js`, na chave indicada pelo atributo `data-i18n` do elemento.

### Cores e fontes
Topo de `assets/css/style.css` (seção **1. TOKENS**). As cores do infográfico (`--viz-*`) foram validadas para daltonismo; se trocar, mantenha tons bem diferentes entre si.

### Imagens
Use **WebP** (ex.: [squoosh.app](https://squoosh.app), qualidade ~80, largura máx. 1600px). A foto atual tem 352px; para telas retina, uma versão de 600×600px fica ainda mais nítida. A imagem de compartilhamento (`og-image.png`) fica em PNG porque o LinkedIn não exibe WebP na pré-visualização.

---

## 5. Testar no computador

No VS Code, instale a extensão **Live Server** → clique com o botão direito em `index.html` → **Open with Live Server**.
(Abrir o arquivo com duplo clique também funciona, mas o Live Server recarrega a página sozinho a cada alteração.)

---

## 6. Acessibilidade e desempenho (já incluídos)

- Contraste AA, foco visível no teclado, link "Pular para o conteúdo", `alt` na foto.
- O infográfico tem versão em tabela e funciona por teclado (Tab, Enter, Esc).
- Respeita "reduzir movimento" do sistema operacional.
- Sem bibliotecas externas: só as fontes do Google Fonts (Sora + JetBrains Mono). A página inicial carrega cerca de 165 KB de código (≈ 47 KB com a compressão automática do GitHub Pages).
- Confidencialidade: nenhum print interno; os diagramas são ilustrativos e os números são os resultados que você autorizou.
