# Portfólio — Camilla Alves Rebouças

Site estático em **HTML, CSS e JavaScript puros**, bilíngue (inglês por padrão, português com o botão **PT**), pronto para o **GitHub Pages**. Não precisa de build, framework nem servidor.

---

## 1. Endereço do site

Já configurado para o usuário **madebycamilla**: o site fica em **https://madebycamilla.github.io**.
Se um dia mudar de usuário, troque `madebycamilla` em todos os `.html` (VS Code: `Ctrl + Shift + H`).

---

## 2. Publicar no GitHub Pages (grátis)

1. No GitHub, clique em **New repository**.
2. Nome do repositório: **`madebycamilla.github.io`** (exatamente assim).
   Esse nome faz o site abrir na raiz: `https://madebycamilla.github.io` e faz a página 404 funcionar.
3. Marque **Public** → **Create repository**.
4. Na página do repositório: **Add file → Upload files** e arraste **todo o conteúdo desta pasta** (não a pasta em si — o `index.html` precisa ficar na raiz). Inclua o arquivo oculto `.nojekyll`.
5. **Commit changes**.
6. Vá em **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → **Save**.
7. Em 1–3 minutos o site estará em `https://madebycamilla.github.io`.

> Pelo VS Code: instale o Git, abra a pasta, use a aba **Source Control** → *Publish to GitHub* → escolha o nome `madebycamilla.github.io` (público). Depois siga o passo 6.

### Links para compartilhar
- Inglês: `https://madebycamilla.github.io`
- Português: `https://madebycamilla.github.io/?lang=pt`
- Um case direto: `https://madebycamilla.github.io/agent.html?id=gal`

### LinkedIn e currículo
- LinkedIn → **Perfil → Adicionar seção → Destaques → Adicionar link** → cole a URL. A imagem `assets/img/og-image.png` aparece como capa.
- Se a pré-visualização vier errada, use o [Post Inspector do LinkedIn](https://www.linkedin.com/post-inspector/) para atualizar o cache.
- No currículo, coloque a URL como hiperlink no cabeçalho, ao lado do LinkedIn.

---

## 3. Estrutura

```
index.html          Home: hero com ilustração de fluxo de conversa, 6 camadas de um agente, infográfico, destaques
agents.html         Portfólio de agentes de IA + matriz "O que eu fiz em cada agente"
work.html           Portfólio de UX/UI e design
agent.html          Template de case de agente   → agent.html?id=gal
project.html        Template de case de UX/UI    → project.html?id=alexa
about.html          Sobre, linha do tempo, processos, ferramentas, formação
contact.html        Contato (só LinkedIn)
product.html        ⚑ Página oculta para vagas de Product Manager (sem link no menu nem na home; noindex)
404.html            Página não encontrada (um "fallback" bem desenhado)
.nojekyll           Diz ao GitHub Pages para servir os arquivos como estão
assets/
  css/style.css     Design system: tokens (cores, tipografia, espaçamento), componentes, tema claro
  js/data.js        ★ TODO o conteúdo dos agentes, projetos, infográfico, timeline e ferramentas (EN + PT)
  js/i18n.js        Textos fixos das páginas em EN + PT
  js/main.js        Header, footer, idioma, tema e renderização das páginas
  js/skills-flow.js Infográfico animado "Muitas disciplinas, um só ofício"
  js/product-data.js Conteúdo (EN + PT) da página oculta de PM — carregado só pelo product.html
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
| `status` | `live` (em produção) ou `mvp` |
| `did` | o que você fez no agente (ids de `PORTFOLIO.contributions`) → aparece na matriz da página de agentes e no case |
| `didLabel` | opcional: renomeia uma contribuição só para aquele agente (ex.: "Orquestração multiagente") |
| `metrics` | `kind: "result"` (resultado medido) ou `kind: "goal"` (meta) |
| `compare` | opcional: gráfico meta × resultado (`{ label, goal: 50, result: 90 }`) |
| `architecture` | o diagrama é desenhado sozinho a partir dessas listas |
| `flow` | opcional: 4 passos do fluxo de decisão; sem ele, usa o padrão |

Todo texto tem `en` e `pt`. Nomes podem ter `namePt`.

### Adicionar um projeto de UX/UI
`PORTFOLIO.projects` no mesmo arquivo. O campo `kind` escolhe a ilustração:
`voice`, `commerce`, `cargo`, `biometrics`, `mobile`, `fintech`, `infographic`, `brand`.
Seções sem conteúdo (`problem`, `approach`, `results`, `learnings`) somem automaticamente.

### Página oculta de Product Manager
- Endereço para mandar em candidaturas: `https://madebycamilla.github.io/product.html` (português: `?lang=pt`).
- Não tem link no menu, na home nem em nenhuma outra página, e tem `noindex` para não aparecer no Google. Mas ela fica pública no repositório — qualquer pessoa com o link consegue abrir.
- Todo o conteúdo está em `assets/js/product-data.js` → `PORTFOLIO.pm.products`. Campos: `stage` (`live`, `testing`, `building`, `foundation`), `stageLabel`, `role`, `problem`, `decisions`, `metrics`, `stakeholders`, `stack` e `caseId` (opcional, liga ao case do agente).
- Para trocar o nome do arquivo, renomeie `product.html` e atualize o `og:url` dentro dele.

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
