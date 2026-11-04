/* ==========================================================================
   PORTFOLIO DATA — edit this file to add, remove or update projects.
   Every text field has an English (en) and Portuguese (pt) version.
   ========================================================================== */

const PORTFOLIO = (window.PORTFOLIO = {});

/* --------------------------------------------------------------------------
   STATUS — shown as a pill on each agent card. Keys are used in `status`.
   -------------------------------------------------------------------------- */
PORTFOLIO.status = {
  live: { en: "In production", pt: "Em produção" },
  mvp:  { en: "MVP",           pt: "MVP" }
};

/* --------------------------------------------------------------------------
   CONTRIBUTIONS — what Camilla did in each agent (agents page matrix and
   the "What I did" section of each case). Names follow common job-market
   terms so recruiters and search engines recognise them.
   family: craft (design craft, incl. conversation), agentic (agentic build), testing, product
   The order here is the column order of the matrix.
   -------------------------------------------------------------------------- */
PORTFOLIO.families = {
  craft:   { en: "Design craft",   pt: "Design" },
  agentic: { en: "Agentic build",  pt: "Construção agêntica" },
  testing: { en: "Testing",        pt: "Testes" },
  product: { en: "Product",        pt: "Produto" }
};

PORTFOLIO.contributions = [
  { id: "discovery",     family: "craft",   en: "Discovery & user research",          pt: "Discovery e pesquisa com usuários" },
  { id: "conv-design",   family: "craft",   en: "Conversation design",                pt: "Design conversacional" },
  { id: "prompt",        family: "agentic", en: "Prompt engineering",                 pt: "Engenharia de prompt" },
  { id: "orchestration", family: "agentic", en: "Agent orchestration",                pt: "Orquestração de agentes" },
  { id: "rag",           family: "agentic", en: "RAG knowledge engineering",          pt: "Engenharia de conhecimento para RAG" },
  { id: "dev",           family: "agentic", en: "Agent development (Copilot Studio)", pt: "Desenvolvimento de agentes (Copilot Studio)" },
  { id: "alm",           family: "agentic", en: "ALM & deployment pipelines",         pt: "ALM e pipelines de deploy" },
  { id: "testing",       family: "testing", en: "Testing & evaluation",               pt: "Testes e avaliação" },
  { id: "metrics",       family: "testing", en: "Results measurement",                pt: "Mensuração de resultados" },
  { id: "debug",         family: "testing", en: "Debugging",                          pt: "Debugging" },
  { id: "pm",            family: "product", en: "AI product management",              pt: "Gestão de produto de IA" },
  { id: "docs",          family: "product", en: "Technical documentation",            pt: "Documentação técnica" }
];

/* --------------------------------------------------------------------------
   AI AGENTS
   - id: used in the URL → agent.html?id=gal
   - featured: true → shown on the home page
   - status: "live" (in production) or "mvp"
   - did: contribution ids (see PORTFOLIO.contributions) → agents page matrix
   - didLabel: optional, renames a contribution for this agent only
   - metrics: results (kind "result") or goals (kind "goal")
   - architecture: drawn automatically as a diagram on the case page
   -------------------------------------------------------------------------- */
PORTFOLIO.agents = [
  {
    id: "gal",
    name: "GAL",
    featured: true,
    status: "live",
    version: "In production",
    versionPt: "Em produção",
    did: ["discovery", "conv-design", "prompt", "orchestration", "rag", "dev", "alm", "testing", "metrics", "debug", "pm", "docs"],
    didLabel: {
      "conv-design": { en: "Conversation design (Q&A topics)", pt: "Design conversacional (tópicos de Q&A)" }
    },
    channel: "Microsoft Teams",
    stack: ["Copilot Studio", "Teams", "SharePoint", "Power Platform ALM"],
    title: {
      en: "GOL's first generative-AI assistant for employees",
      pt: "O primeiro assistente de IA generativa da GOL para colaboradores"
    },
    short: {
      en: "A company-wide Q&A agent in Teams, rebuilt so knowledge can change without breaking production.",
      pt: "Um agente de perguntas e respostas para toda a empresa no Teams, reconstruído para o conhecimento mudar sem quebrar a produção."
    },
    role: {
      en: "Experience direction, conversation design and low-code development",
      pt: "Direção de experiência, design conversacional e desenvolvimento low-code"
    },
    pain: {
      en: "GAL answers GOL employees' questions in Teams, grounded in internal manuals that change often. Every update meant manually reconfiguring each knowledge source, topic by topic, between environments — slow, risky and a blocker for keeping answers current.",
      pt: "A GAL responde dúvidas dos colaboradores da GOL no Teams, com base em manuais internos que mudam com frequência. Cada atualização exigia reconfigurar manualmente cada fonte de conhecimento, tópico por tópico, entre ambientes — um processo lento, arriscado e que travava a atualização das respostas."
    },
    solution: {
      en: "I set the experience direction for GAL and redesigned how it is maintained: knowledge split into development and production spaces, one environment variable per knowledge source, and a standard deployment path between Dev, Test and Prod. Conversation patterns for routing, safe answers and hand-offs became the reference for later agents.",
      pt: "Defini a direção de experiência da GAL e redesenhei como ela é mantida: conhecimento separado em espaços de desenvolvimento e produção, uma variável de ambiente por fonte de conhecimento e um caminho padrão de deploy entre Dev, HML e Prod. Os padrões conversacionais de roteamento, respostas seguras e handoffs viraram referência para os agentes seguintes."
    },
    design: [
      { en: "Clear routing between topics, with safe answers when the question is out of scope.", pt: "Roteamento claro entre tópicos, com respostas seguras quando a pergunta está fora do escopo." },
      { en: "Hand-off patterns that tell the employee exactly where to go next.", pt: "Padrões de handoff que dizem ao colaborador exatamente para onde ir." },
      { en: "Knowledge maintenance designed as part of the product, not an afterthought.", pt: "Manutenção do conhecimento desenhada como parte do produto, não como um detalhe posterior." }
    ],
    metrics: [
      { value: "1st",  valuePt: "1º", kind: "result", label: { en: "generative-AI assistant at GOL", pt: "assistente de IA generativa da GOL" } },
      { value: "Feb 2026", valuePt: "fev/2026", kind: "result", label: { en: "company-wide rollout", pt: "rollout para toda a empresa" } },
      { value: "3",    kind: "result", label: { en: "environments with one standard release path (Dev, Test, Prod)", pt: "ambientes com um caminho padrão de release (Dev, HML, Prod)" } }
    ],
    architecture: {
      channel: "Teams",
      core: { en: "GAL agent", pt: "Agente GAL" },
      children: [
        { en: "Topics & routing", pt: "Tópicos e roteamento" },
        { en: "Connected agents", pt: "Agentes conectados" }
      ],
      sources: [
        { en: "Dev knowledge space", pt: "Base de Dev" },
        { en: "Prod knowledge space", pt: "Base de Prod" }
      ]
    },
    next: {
      en: "Use the same maintenance model as the standard for every new agent built by the squad.",
      pt: "Usar o mesmo modelo de manutenção como padrão para todos os novos agentes do squad."
    }
  },

  {
    id: "lean-mentor",
    name: "Lean Mentor",
    namePt: "Mentor Lean",
    featured: true,
    status: "live",
    version: "In production",
    versionPt: "Em produção",
    did: ["discovery", "conv-design", "prompt", "orchestration", "rag", "dev", "alm", "testing", "metrics", "debug", "pm", "docs"],
    didLabel: {
      orchestration: { en: "Multi-agent orchestration", pt: "Orquestração multiagente" }
    },
    channel: "Microsoft Teams",
    stack: ["Copilot Studio", "Multi-agent", "Prompt engineering", "Evaluation rubric"],
    flow: [
      { en: ["Share the problem or A3", "The employee pastes a draft or describes the problem."], pt: ["Compartilha o problema ou o A3", "O colaborador cola um rascunho ou descreve o problema."] },
      { en: ["Mentor asks first", "The agent questions premises and missing data, like a Lean mentor."], pt: ["O mentor pergunta primeiro", "O agente questiona premissas e dados faltantes, como um mentor Lean."] },
      { en: ["Evaluator scores (hidden)", "A child agent scores each criterion and block with a fixed rubric."], pt: ["Avaliador pontua (oculto)", "Um agente filho pontua cada critério e bloco com uma rubrica fixa."] },
      { en: ["Feedback + next step", "One clear message: score, what to improve and the next question to answer."], pt: ["Feedback + próximo passo", "Uma mensagem clara: nota, o que melhorar e a próxima pergunta a responder."] }
    ],
    title: {
      en: "A digital mentor for Lean problem solving",
      pt: "Um mentor digital para resolução de problemas Lean"
    },
    short: {
      en: "Questions assumptions, suggests a better structure and scores A3 reports like a Lean mentor would.",
      pt: "Questiona premissas, sugere uma estrutura melhor e pontua relatórios A3 como um mentor Lean faria."
    },
    role: {
      en: "Product owner, conversation designer and agent architect",
      pt: "Product owner, designer conversacional e arquiteta do agente"
    },
    pain: {
      en: "Employees struggled to apply the A3 method in practice and depended on a few Lean mentors, who spent 2–3 hours of manual analysis on every PDCA cycle. The result was a bottleneck, slow feedback and inconsistent use of the method.",
      pt: "Os colaboradores tinham dificuldade de aplicar o método A3 na prática e dependiam de poucos mentores Lean, que gastavam de 2 a 3 horas de análise manual a cada ciclo PDCA. O resultado era um gargalo, feedback lento e uso inconsistente do método."
    },
    solution: {
      en: "A mentor agent that reads the problem or the A3, asks the questions a good mentor would ask, challenges weak premises and suggests how to restructure it. In V2, an evaluator child agent — invisible to the user — scores the A3 by criterion, by block and overall, using a standard rubric and a fixed response format.",
      pt: "Um agente mentor que lê o problema ou o A3, faz as perguntas que um bom mentor faria, desafia premissas frágeis e sugere como reestruturar. Na V2, um agente filho avaliador — invisível para o usuário — pontua o A3 por critério, por bloco e no total, usando uma rubrica padrão e um formato de resposta fixo."
    },
    design: [
      { en: "Socratic tone: the agent asks before it answers, so people learn the method.", pt: "Tom socrático: o agente pergunta antes de responder, para que as pessoas aprendam o método." },
      { en: "Parent/child architecture keeps the scoring rubric separate from the conversation.", pt: "Arquitetura pai/filho mantém a rubrica de pontuação separada da conversa." },
      { en: "Deterministic output templates so every score reads the same way.", pt: "Templates de saída determinísticos para que toda pontuação seja lida do mesmo jeito." },
      { en: "Guardrails against instruction leakage between parent and child agents.", pt: "Guardrails contra vazamento de instruções entre agente pai e filho." }
    ],
    metrics: [
      { value: "2h → 1h", kind: "goal", label: { en: "mentoring time per PDCA cycle", pt: "de mentoria por ciclo PDCA" } },
      { value: ">80%",    kind: "goal", label: { en: "assertiveness target", pt: "meta de assertividade" } },
      { value: "V1",      kind: "result", label: { en: "published in August 2026", pt: "publicada em agosto de 2026" } }
    ],
    architecture: {
      channel: "Teams",
      core: { en: "Mentor agent (parent)", pt: "Agente mentor (pai)" },
      children: [
        { en: "Evaluator agent (hidden)", pt: "Agente avaliador (oculto)" }
      ],
      sources: [
        { en: "A3 method guide", pt: "Guia do método A3" },
        { en: "Scoring rubric", pt: "Rubrica de pontuação" }
      ]
    },
    next: {
      en: "Validate V2 scoring with Lean specialists and measure the real reduction in mentoring time.",
      pt: "Validar a pontuação da V2 com especialistas Lean e medir a redução real no tempo de mentoria."
    }
  },

  {
    id: "continuous-improvement",
    name: "Continuous Improvement Research Agent",
    namePt: "Agente de Pesquisa de Melhoria Contínua",
    featured: false,
    status: "mvp",
    version: "MVP",
    versionPt: "MVP",
    channel: "Microsoft Teams",
    stack: ["Copilot Studio", "RAG", "SharePoint", "Entra ID"],
    title: {
      en: "Natural-language search over years of improvement projects",
      pt: "Busca em linguagem natural sobre anos de projetos de melhoria"
    },
    short: {
      en: "Finds past initiatives and lessons learned, and always shows where the answer came from.",
      pt: "Encontra iniciativas passadas e lições aprendidas, e sempre mostra de onde veio a resposta."
    },
    role: {
      en: "Conversation designer and low-code builder",
      pt: "Designer conversacional e desenvolvedora low-code"
    },
    pain: {
      en: "The area's project history was scattered across folders and formats. Finding a past initiative depended on whoever took part in it, took manual effort, and valuable lessons were rarely reused.",
      pt: "O histórico de projetos da área estava espalhado em pastas e formatos diferentes. Encontrar uma iniciativa passada dependia de quem participou dela, exigia esforço manual, e lições valiosas raramente eram reaproveitadas."
    },
    solution: {
      en: "A research agent that answers in natural language over a controlled knowledge base, reading results through a Lean lens and citing every source. Access is managed by the area itself through a distribution list, which keeps security simple and auditable.",
      pt: "Um agente de pesquisa que responde em linguagem natural sobre uma base de conhecimento controlada, lendo os resultados sob a lente Lean e citando todas as fontes. O acesso é gerenciado pela própria área através de uma lista de distribuição, o que mantém a segurança simples e auditável."
    },
    design: [
      { en: "Every answer cites its sources, so people can verify before they reuse.", pt: "Toda resposta cita as fontes, para que as pessoas possam verificar antes de reutilizar." },
      { en: "Access control owned by the business area, not by IT tickets.", pt: "Controle de acesso nas mãos da área de negócio, não de chamados de TI." }
    ],
    metrics: [
      { value: "≥70%", kind: "goal", label: { en: "assertiveness target", pt: "meta de assertividade" } },
      { value: "≥80%", kind: "goal", label: { en: "positive feedback target", pt: "meta de feedback positivo" } },
      { value: "4",    kind: "result", label: { en: "collaborators in QA", pt: "colaboradores em QA" } }
    ],
    architecture: {
      channel: "Teams",
      core: { en: "Research agent", pt: "Agente de pesquisa" },
      children: [
        { en: "Citations & Lean lens", pt: "Citações e lente Lean" }
      ],
      sources: [
        { en: "Controlled project base", pt: "Base de projetos controlada" },
        { en: "Access via distribution list", pt: "Acesso via lista de distribuição" }
      ]
    },
    next: {
      en: "Finish QA, tune retrieval with the testers' feedback and open it to the whole area.",
      pt: "Concluir o QA, ajustar a recuperação com o feedback dos testadores e abrir para toda a área."
    }
  },

  {
    id: "magno-writer",
    name: "Magno Writer Agent",
    namePt: "Agente Redator Magno",
    featured: false,
    status: "mvp",
    version: "MVP",
    versionPt: "MVP",
    channel: { en: "WhatsApp (via service team)", pt: "WhatsApp (via time de atendimento)" },
    stack: ["Copilot Studio", "Tone of voice", "Prompt engineering", "Human-in-the-loop"],
    flow: [
      { en: ["Context in", "The service agent pastes the case or a rough draft."], pt: ["Entra o contexto", "O atendente cola o caso ou um rascunho."] },
      { en: ["Rules applied", "Policies and business rules shape what can be said."], pt: ["Regras aplicadas", "Políticas e regras de negócio definem o que pode ser dito."] },
      { en: ["Concierge voice", "A short, warm WhatsApp message in the Magno tone of voice."], pt: ["Voz do Concierge", "Uma mensagem curta e calorosa de WhatsApp no tom de voz Magno."] },
      { en: ["Human review", "The service agent edits and decides what is sent."], pt: ["Revisão humana", "O atendente edita e decide o que é enviado."] }
    ],
    title: {
      en: "A writing agent for GOL's top-tier customers",
      pt: "Um agente redator para os clientes de mais alto nível da GOL"
    },
    short: {
      en: "Drafts short, personal WhatsApp messages in the Concierge Magno voice — a human reviews before sending.",
      pt: "Redige mensagens curtas e pessoais de WhatsApp na voz do Concierge Magno — um humano revisa antes de enviar."
    },
    role: {
      en: "Conversation designer: tone of voice, writing rules and review flow",
      pt: "Designer conversacional: tom de voz, regras de escrita e fluxo de revisão"
    },
    pain: {
      en: "Serving Magno, GOL's top customer tier, calls for delight and personalisation. But agents write under time pressure with few support tools, so quality varies and messages risk sounding impersonal or robotic.",
      pt: "Atender o cliente Magno, o nível mais alto da GOL, exige encantamento e personalização. Mas os atendentes escrevem sob pressão de tempo e com poucas ferramentas de apoio, então a qualidade varia e as mensagens correm o risco de soar impessoais ou robóticas."
    },
    solution: {
      en: "A writer agent that creates or rewrites short WhatsApp messages in the Concierge Magno tone of voice, following service policies and business rules. The human agent always reviews the draft before it reaches the customer.",
      pt: "Um agente redator que cria ou reescreve mensagens curtas de WhatsApp no tom de voz do Concierge Magno, seguindo políticas de atendimento e regras de negócio. O atendente sempre revisa o rascunho antes de chegar ao cliente."
    },
    design: [
      { en: "Tone-of-voice guide translated into explicit writing rules for the model.", pt: "Guia de tom de voz traduzido em regras explícitas de escrita para o modelo." },
      { en: "Human-in-the-loop by design: the agent drafts, the person decides.", pt: "Human-in-the-loop por design: o agente redige, a pessoa decide." },
      { en: "Two modes — write from scratch or improve a draft — to fit how agents already work.", pt: "Dois modos — escrever do zero ou melhorar um rascunho — para encaixar no jeito que os atendentes já trabalham." }
    ],
    metrics: [
      { value: ">70%", kind: "goal", label: { en: "adequate responses", pt: "de respostas adequadas" } },
      { value: "−50%", kind: "goal", label: { en: "drafting time", pt: "no tempo de redação" } },
      { value: "≥89%", kind: "goal", label: { en: "top-box PSAT", pt: "de PSAT top" } }
    ],
    architecture: {
      channel: { en: "Service desk", pt: "Mesa de atendimento" },
      core: { en: "Writer agent", pt: "Agente redator" },
      children: [
        { en: "Tone-of-voice rules", pt: "Regras de tom de voz" },
        { en: "Human review", pt: "Revisão humana" }
      ],
      sources: [
        { en: "Service policies", pt: "Políticas de atendimento" },
        { en: "Business rules", pt: "Regras de negócio" }
      ]
    },
    next: {
      en: "Close the usability round, adjust the writing rules and go live with the service team.",
      pt: "Fechar a rodada de usabilidade, ajustar as regras de escrita e entrar em produção com o time de atendimento."
    }
  },

  {
    id: "medical-forms",
    name: "Medical Forms Support Agent",
    namePt: "Agente de Apoio a Formulários Médicos",
    featured: false,
    status: "mvp",
    version: "MVP",
    versionPt: "MVP",
    channel: { en: "Email (via service team)", pt: "E-mail (via time de atendimento)" },
    stack: ["Copilot Studio", "RAG", "Guardrails", "Validated response library"],
    flow: [
      { en: ["Read the request", "The agent reads the request and its supporting documents."], pt: ["Lê o pedido", "O agente lê o pedido e os documentos de apoio."] },
      { en: ["Check the rules", "Applicable rules and exceptions are identified — no medical judgement."], pt: ["Verifica as regras", "Regras e exceções aplicáveis são identificadas — sem julgamento médico."] },
      { en: ["Draft from the library", "Wording comes from responses validated by Medical and Legal."], pt: ["Redige a partir da biblioteca", "O texto vem de respostas validadas pelo Médico e Jurídico."] },
      { en: ["Collaborator decides", "A person reviews, adjusts and sends — or escalates."], pt: ["O colaborador decide", "Uma pessoa revisa, ajusta e envia — ou escala."] }
    ],
    title: {
      en: "Empathetic, compliant answers for passengers with medical needs",
      pt: "Respostas empáticas e seguras para passageiros com necessidades médicas"
    },
    short: {
      en: "Suggests clear, safe emails for sensitive cases — without ever making a medical or legal decision.",
      pt: "Sugere e-mails claros e seguros para casos sensíveis — sem nunca tomar uma decisão médica ou jurídica."
    },
    role: {
      en: "Conversation designer and responsible-AI guardrails",
      pt: "Designer conversacional e guardrails de IA responsável"
    },
    pain: {
      en: "Medical clearance forms for passengers involve sensitive decisions, regulatory exceptions and clinical variation. Collaborators had few templates and tight deadlines, with real risk of answers that were legally sensitive or lacked empathy.",
      pt: "Os formulários de autorização médica de passageiros envolvem decisões sensíveis, exceções regulatórias e variação clínica. Os colaboradores tinham poucos modelos e prazos curtos, com risco real de respostas juridicamente sensíveis ou pouco empáticas."
    },
    solution: {
      en: "An agent that reads the request and its supporting documents, checks the applicable rules and suggests a clear, empathetic email. It is grounded in a response library validated by GOL's Medical and Legal teams, and designed to stop short of any medical or legal decision.",
      pt: "Um agente que lê o pedido e os documentos de apoio, verifica as regras aplicáveis e sugere um e-mail claro e empático. Ele se baseia em uma biblioteca de respostas validada pelos times Médico e Jurídico da GOL, e foi desenhado para nunca tomar uma decisão médica ou jurídica."
    },
    design: [
      { en: "Hard boundaries: the agent suggests wording, people make the decisions.", pt: "Limites claros: o agente sugere o texto, as pessoas tomam as decisões." },
      { en: "Grounded only in content approved by Medical and Legal.", pt: "Baseado apenas em conteúdo aprovado pelo Médico e Jurídico." },
      { en: "Empathy written into the response patterns, not left to chance.", pt: "Empatia escrita nos padrões de resposta, não deixada ao acaso." }
    ],
    metrics: [
      { value: ">90%", kind: "goal", label: { en: "compliance", pt: "de conformidade" } },
      { value: "−50%", kind: "goal", label: { en: "email drafting time", pt: "no tempo de redação de e-mails" } }
    ],
    architecture: {
      channel: { en: "Service desk", pt: "Mesa de atendimento" },
      core: { en: "Support agent", pt: "Agente de apoio" },
      children: [
        { en: "Rule check", pt: "Verificação de regras" },
        { en: "Guardrails", pt: "Guardrails" }
      ],
      sources: [
        { en: "Validated response library", pt: "Biblioteca de respostas validada" },
        { en: "Request documents", pt: "Documentos do pedido" }
      ]
    },
    next: {
      en: "Run compliance tests with the Medical and Legal teams before piloting with the service team.",
      pt: "Rodar testes de conformidade com os times Médico e Jurídico antes do piloto com o atendimento."
    }
  }
];

/* --------------------------------------------------------------------------
   UX/UI & FOUNDATION PROJECTS
   - id: used in the URL → project.html?id=alexa
   - tags: shown on the card
   - sections without content are hidden automatically on the case page
   - cover: optional hero image, WebP 1600×900 (coverAlt describes it)
   - thumb: optional card image, WebP 800×450
   - gallery: optional screens [{ img (WebP 1600×900), caption: { en, pt } }]
     add w and h to show an image in its own proportion instead of 16:9
   - problem: a paragraph { en, pt } or a list of paragraphs [{ en, pt }, …]
   - quotes: optional [{ en, pt, by: { en, pt } }], shown after the results
   - results: a paragraph { en, pt } or a list [{ en, pt }, …]
   - article: optional link to the long version (e.g. Medium), shown as a button
   - prototype: optional link to a navigable prototype, highlighted in the case hero
   -------------------------------------------------------------------------- */
PORTFOLIO.projects = [
  {
    id: "gollog",
    name: "GOLLOG Online Services",
    namePt: "GOLLOG Serviços Online",
    featured: true,
    company: "GOL Airlines",
    year: "2019–2020",
    tags: ["E-commerce", "B2B & B2C", "UX writing", "Responsive"],
    kind: "cargo",
    cover: "assets/img/projects/gollog-cover.webp",
    thumb: "assets/img/projects/gollog-thumb.webp",
    coverAlt: { en: "GOLLOG quote results on desktop and mobile, with the recommended option first", pt: "Resultado da cotação da GOLLOG no desktop e no celular, com a opção recomendada em primeiro lugar" },
    article: "https://medium.com/@careboucas/a-brand-new-cargo-services-experience-dcabb4ddc74d",
    title: { en: "A brand-new air cargo experience", pt: "Uma nova experiência de carga aérea" },
    short: {
      en: "Quote, booking, advance payment, tracking and a customer area — redesigned so individuals and small businesses, not only corporate clients, could ship air cargo online.",
      pt: "Cotação, pedido, pagamento antecipado, rastreamento e área do cliente — redesenhados para que pessoas físicas e pequenas empresas, e não só clientes corporativos, pudessem enviar carga aérea online."
    },
    role: { en: "UX/UI design: research, workshops, UX writing, wireframes, prototype and handoff", pt: "UX/UI design: pesquisa, workshops, UX writing, wireframes, protótipo e handoff" },
    problem: {
      en: "The goal was to become Brazil's best air freight service for individuals and businesses. But the website offered only quotation and tracking, and the quotation had a high abandonment rate. Tests showed why: you had to know the service names to get a quote, fees were explained only in English, tracking asked for an AWB code most first-time senders had never seen, an optional step looked like a mandatory sign-up, there was no advance payment — and 60% of visits came from mobile, on a layout that wasn't responsive.",
      pt: "A meta era se tornar o melhor serviço de frete aéreo do Brasil para pessoas e empresas. Mas o site oferecia só cotação e rastreamento, e a cotação tinha alta taxa de abandono. Os testes mostraram por quê: era preciso conhecer o nome dos serviços para cotar, as taxas eram explicadas só em inglês, o rastreamento pedia um código AWB que quem envia pela primeira vez nunca viu, uma etapa opcional parecia um cadastro obrigatório, não havia pagamento antecipado — e 60% dos acessos vinham do celular, em um layout que não era responsivo."
    },
    approach: [
      { en: "Benchmarked air cargo websites in Brazil and abroad, asked current and future customers which online services mattered, and studied the Air Transport Terms and how LGPD applied.", pt: "Fiz benchmarking de sites de carga aérea no Brasil e no exterior, perguntei a clientes atuais e futuros quais serviços online importavam e estudei as Condições Gerais de Transporte e a aplicação da LGPD." },
      { en: "Ran design workshops with stakeholders and business owners on business rules, new features and backlog priority — and brought developers and architects in early to outline a feasible architecture.", pt: "Conduzi workshops de design com stakeholders e donos do negócio sobre regras, novas funcionalidades e prioridade de backlog — e envolvi desenvolvedores e arquitetos cedo para desenhar uma arquitetura viável." },
      { en: "Replaced 'pick a service' with results: every option with price and delivery time, ranked, with a recommendation first.", pt: "Troquei o \"escolha um serviço\" por resultados: todas as opções com preço e prazo, ordenadas, com uma recomendação em primeiro lugar." },
      { en: "Treated UX writing as core: cargo jargon was replaced or explained in plain-language tips, so the interface spoke to corporate clients and first-time senders alike.", pt: "Tratei o UX writing como peça central: os termos técnicos de carga foram trocados ou explicados com dicas em linguagem simples, para a interface falar tanto com clientes corporativos quanto com quem envia pela primeira vez." },
      { en: "Turned the long paper form handed out at the store counter into a numbered online flow: fewer fields, pre-filled suggestions, automatic focus between fields and address lookup by ZIP code.", pt: "Transformei o longo formulário em papel entregue no balcão da loja em um fluxo online numerado: menos campos, sugestões pré-preenchidas, avanço automático entre campos e endereço preenchido pelo CEP." },
      { en: "Validated the flows with a high-fidelity prototype and handed off in Zeplin, staying close to developers during the build.", pt: "Validei os fluxos com um protótipo de alta fidelidade e fiz o handoff no Zeplin, acompanhando de perto o time de desenvolvimento." }
    ],
    gallery: [
      { img: "assets/img/projects/gollog-before.webp", caption: { en: "Before: to get a quote you had to pick a service by name, and tracking asked for an AWB code.", pt: "Antes: para cotar era preciso escolher o serviço pelo nome, e o rastreamento pedia um código AWB." } },
      { img: "assets/img/projects/gollog-sketch.webp", caption: { en: "From paper sketch to the final quote: every option with price and delivery time, the recommended one first.", pt: "Do rascunho em papel à cotação final: todas as opções com preço e prazo, a recomendada em primeiro lugar." } },
      { img: "assets/img/projects/gollog-flow.webp", caption: { en: "Quote and tracking rewritten in plain language.", pt: "Cotação e rastreamento reescritos em linguagem simples." } },
      { img: "assets/img/projects/gollog-stores.webp", caption: { en: "Choosing the nearest store on a map, from the ZIP code.", pt: "Escolha da loja mais próxima no mapa, a partir do CEP." } },
      { img: "assets/img/projects/gollog-account.webp", caption: { en: "Customer area: orders, status at a glance and order details.", pt: "Área do cliente: pedidos, status de cada um e detalhes do pedido." } }
    ],
    results: {
      en: "Quotation, booking, advance payment, tracking, a store finder and a customer area launched on a responsive GOLLOG website, with features that were competitive in the air cargo market. The form that used to be a dead end became a flow users completed — and praised.",
      pt: "Cotação, pedido, pagamento antecipado, rastreamento, busca de lojas e área do cliente lançados em um site da GOLLOG responsivo, com funcionalidades competitivas no mercado de cargas aéreas. O formulário que antes era um beco sem saída virou um fluxo que os usuários concluíam — e elogiavam."
    },
    learnings: {
      en: "Complex services become simple when every step has one job — and when the words do as much design work as the layout.",
      pt: "Serviços complexos ficam simples quando cada etapa tem uma única função — e quando as palavras fazem tanto trabalho de design quanto o layout."
    }
  },
  {
    id: "employee-app",
    name: "GOL Staff App",
    namePt: "App do Colaborador GOL",
    featured: false,
    company: "GOL Airlines",
    year: "2019",
    tags: ["Mobile", "Internal product", "Information architecture", "Usability testing"],
    kind: "mobile",
    cover: "assets/img/projects/employee-app-cover.webp",
    thumb: "assets/img/projects/employee-app-thumb.webp",
    coverAlt: { en: "GOL Staff App: customizable home, edit mode and side menu", pt: "App do Colaborador GOL: home personalizável, modo de edição e menu lateral" },
    article: "https://medium.com/@careboucas/staff-mobile-app-human-resources-and-routine-requests-made-simple-c9f7dbe3fe5e",
    title: { en: "HR and everyday requests, made simple", pt: "RH e solicitações do dia a dia, sem complicação" },
    short: {
      en: "Redesign of the app GOL's 15,000+ employees use for HR, approvals, travel benefits and routine requests — from a 15-item list to a customizable home.",
      pt: "Redesign do app que os mais de 15 mil colaboradores da GOL usam para RH, aprovações, benefício viagem e solicitações do dia a dia — de uma lista de 15 itens a uma home personalizável."
    },
    role: { en: "UX designer and product owner in discovery; UI design through development", pt: "UX designer e product owner na descoberta; UI design até o desenvolvimento" },
    problem: {
      en: "The app was solid and widely used — requests to managers and HR, days off, personal flights, boarding passes, ethics and operations reports — but people couldn't find things. The home was a vertical list of 15 items, many with sub-items, and no clear hierarchy. Everyone saw features they had no access to, some buttons opened external websites, and the bright orange look no longer matched the brand. For 15,000+ people of different ages, countries and levels of digital familiarity, that was a real barrier.",
      pt: "O app era sólido e muito usado — solicitações a gestores e ao RH, folgas, voos pessoais, cartões de embarque, relatos de ética e de operação —, mas as pessoas não encontravam as coisas. A home era uma lista vertical de 15 itens, muitos com subitens, sem hierarquia clara. Todos viam funcionalidades às quais não tinham acesso, alguns botões abriam sites externos, e o laranja intenso já não combinava com a marca. Para mais de 15 mil pessoas de idades, países e familiaridade digital diferentes, isso era uma barreira real."
    },
    approach: [
      { en: "Documented the whole app with the departments that owned each feature, and ran 'as is' usability tests: colleagues completed tasks they did every day and showed where they got stuck. The findings built the case for a redesign.", pt: "Documentei o app inteiro com as áreas responsáveis por cada funcionalidade e conduzi testes de usabilidade do \"as is\": colegas realizavam tarefas do dia a dia e mostravam onde travavam. Os achados justificaram o redesign." },
      { en: "Listened to the original architect and developers; together we concluded that rebuilding the app from scratch was better than a front-end facelift.", pt: "Ouvi o arquiteto e os desenvolvedores da versão original; juntos concluímos que reconstruir o app do zero era melhor que só trocar o front-end." },
      { en: "Benchmarked super apps (Grab, Rappi), banking (Itaú), airlines (Delta, Emirates) and operating systems (iOS, Windows), then moved from paper drafts to visual concepts in Adobe XD.", pt: "Fiz benchmarking de superapps (Grab, Rappi), banco (Itaú), companhias aéreas (Delta, Emirates) e sistemas operacionais (iOS, Windows), e passei dos rascunhos em papel para conceitos visuais no Adobe XD." },
      { en: "Mapped the full flowchart and tested a prototype up to the third navigation level with employees from many departments, so anyone could reach any item in the fewest steps.", pt: "Mapeei o fluxograma completo e testei um protótipo até o terceiro nível de navegação com colaboradores de várias áreas, para que qualquer pessoa chegasse a qualquer item no menor número de passos." },
      { en: "Designed a customizable home (people choose their shortcuts and background), a side menu grouped into 7 categories with icons, and permission-based menus: people only see what they can use. Familiar task flows stayed familiar.", pt: "Desenhei uma home personalizável (cada um escolhe seus atalhos e o fundo), um menu lateral agrupado em 7 categorias com ícones e menus por permissão: cada pessoa só vê o que pode usar. Fluxos de tarefa conhecidos continuaram conhecidos." },
      { en: "Proposed, with the developers, three social features to bring people together: a shared events calendar, profiles, and a colleague search by name, office, department or role.", pt: "Propus, junto com os desenvolvedores, três recursos sociais para aproximar as pessoas: um calendário de eventos compartilhado, perfis e uma busca de colegas por nome, base, área ou cargo." }
    ],
    gallery: [
      { img: "assets/img/projects/employee-app-before.webp", caption: { en: "Before: a 15-item list in bright orange, with sub-menus everywhere.", pt: "Antes: uma lista de 15 itens em laranja intenso, com submenus por toda parte." } },
      { img: "assets/img/projects/employee-app-concepts.webp", caption: { en: "First visual concepts for the new home.", pt: "Primeiros conceitos visuais da nova home." } },
      { img: "assets/img/projects/employee-app-approvals.webp", caption: { en: "Approval requests for managers.", pt: "Solicitações de aprovação para gestores." } },
      { img: "assets/img/projects/employee-app-hr.webp", caption: { en: "Paycheck documents, vacations and boarding passes.", pt: "Holerites, férias e cartões de embarque." } },
      { img: "assets/img/projects/employee-app-social.webp", caption: { en: "Social features: events calendar, profiles and colleague search.", pt: "Recursos sociais: calendário de eventos, perfis e busca de colegas." } },
      { img: "assets/img/projects/employee-app-new.webp", caption: { en: "Features added after launch: crew time-off requests and an HR chatbot MVP.", pt: "Funcionalidades adicionadas depois do lançamento: solicitação de folgas para tripulantes e um MVP de chatbot do RH." } },
      { img: "assets/img/projects/colaborador-mobile.webp", caption: { en: "A later evolution: side menu by area and a virtual business card with QR code.", pt: "Uma evolução posterior: menu lateral por área e cartão de visitas virtual com QR code." } }
    ],
    results: [
      { en: "Built by a squad of 5 developers, with my design support through development; stakeholders then asked to bring more desktop-only features into the app.", pt: "Desenvolvido por um squad de 5 desenvolvedores, com meu apoio de design durante todo o desenvolvimento; depois, os stakeholders pediram para trazer ao app mais funcionalidades que só existiam no desktop." },
      { en: "Fewer calls to HR: people download forms and documents straight from the app.", pt: "Menos chamados ao RH: as pessoas baixam formulários e documentos direto do app." },
      { en: "Requests from anywhere: actions that once needed a desktop now happen on the phone — especially for airport staff.", pt: "Solicitações de qualquer lugar: ações que antes exigiam um computador agora são feitas no celular — principalmente por quem trabalha no aeroporto." },
      { en: "During the pandemic, the app kept key documents within reach and avoided overwhelming HR.", pt: "Na pandemia, o app manteve documentos importantes ao alcance de todos e evitou sobrecarregar o RH." },
      { en: "More frequent releases for Android and iOS, and a chatbot MVP answering the most common HR questions.", pt: "Atualizações mais frequentes para Android e iOS, e um MVP de chatbot respondendo às dúvidas mais comuns sobre RH." }
    ],
    learnings: {
      en: "Employees are users too. Internal products deserve the same research and care as customer products — and a company of 15,000 people is as diverse an audience as any.",
      pt: "Colaboradores também são usuários. Produtos internos merecem a mesma pesquisa e o mesmo cuidado que produtos para clientes — e uma empresa de 15 mil pessoas é um público tão diverso quanto qualquer outro."
    }
  },
  {
    id: "gol-id",
    name: "GOL ID Access",
    namePt: "GOL ID Acesso",
    featured: false,
    company: "GOL Airlines",
    year: "2019",
    tags: ["Biometrics", "Mobile", "Design system", "UX writing", "Pilot"],
    kind: "biometrics",
    cover: "assets/img/projects/gol-id-cover.webp",
    thumb: "assets/img/projects/gol-id-thumb.webp",
    coverAlt: { en: "GOL ID Access screens: login, employee sign-up and email verification", pt: "Telas do GOL ID Acesso: login, cadastro de colaborador e verificação por e-mail" },
    article: "https://medium.com/@careboucas/ui-ux-portfolio-3b8be226cd2d",
    title: { en: "Face ID for corporate access", pt: "Reconhecimento facial no acesso corporativo" },
    short: {
      en: "An app for employees and visitors to enter GOL's headquarters with their face — piloted at Portaria 3 in 2019, with over 3,800 sign-ups in the first three weeks, and the basis for testing boarding at Congonhas.",
      pt: "Um app para colaboradores e visitantes entrarem na sede da GOL com o rosto — testado na Portaria 3 em 2019, com mais de 3.800 cadastros nas primeiras três semanas, e base para testar o embarque no Congonhas."
    },
    role: { en: "End-to-end UX lead: design, UI, UX and writing at every stage, front-end refinement after development, and co-creation brainstorms with the GOL Labs team", pt: "UX lead do projeto de ponta a ponta: design, UI, UX e writing em todas as etapas, refinamento do front-end após o desenvolvimento e brainstorms de co-criação com o time do GOL Labs" },
    problem: {
      en: "Getting into GOL's headquarters meant identifying yourself at reception every time, and boarding depends on documents and queues. Facial biometrics could speed both up — but only if people trust it and understand, at every step, what is happening with their face.",
      pt: "Entrar na sede da GOL exigia se identificar na recepção toda vez, e o embarque depende de documentos e filas. A biometria facial poderia acelerar os dois — mas só se as pessoas confiassem nela e entendessem, a cada etapa, o que está acontecendo com o seu rosto."
    },
    approach: [
      { en: "Sketched the journeys on paper first — login, visitor sign-up, activation code and error states — to test ideas before going digital.", pt: "Desenhei as jornadas primeiro no papel — login, cadastro de visitante, código de ativação e estados de erro — para testar ideias antes de ir para o digital." },
      { en: "Ran brainstorms with the GOL Labs team to co-design the best solution together, before locking the flows.", pt: "Conduzi brainstorms com o time do GOL Labs para desenharmos juntos a melhor solução, antes de fechar os fluxos." },
      { en: "Designed six flow versions between June and October 2019: from the first core flow to the login with meetings and notifications, the Outlook integration for visitor invitations, and the turnstile release.", pt: "Desenhei seis versões de fluxo entre junho e outubro de 2019: do primeiro fluxo core ao login com reuniões e notificações, passando pela integração com o Outlook para convites de visitantes até a liberação da catraca." },
      { en: "Designed three paths: employees log in with their network account and face ID; first-time visitors enter their details and capture their face; managers view and approve access requests.", pt: "Desenhei três caminhos: colaboradores entram com a conta de rede e o rosto; visitantes de primeira viagem informam seus dados e cadastram o rosto; gestores visualizam e aprovam as solicitações de acesso." },
      { en: "Wrote guidance for the face capture — good lighting, no accessories, a step-by-step before starting — so the photo works on the first try.", pt: "Escrevi orientações para a captura do rosto — ambiente iluminado, sem adereços, um passo a passo antes de começar — para a foto dar certo na primeira tentativa." },
      { en: "Worked on the time it takes to read the face: together with the developers, we took technical measures to speed up the read, and designed the screens so the user always knows what is happening during the wait.", pt: "Trabalhei no tempo de leitura do rosto: com os devs, tomamos medidas técnicas para acelerar a leitura, e desenhei as telas para o usuário sempre saber o que está acontecendo durante a espera." },
      { en: "Wrote the feedback for each step of the wait, such as 'Great, your picture was taken! Please wait…' and 'Excellent! Just wait while we check…', so the user never has to guess.", pt: "Escrevi o feedback de cada etapa da espera, como 'Ótimo, sua foto foi tirada! Aguarde…' e 'Excelente! Aguarde enquanto verificamos…', para o usuário nunca precisar adivinhar." },
      { en: "Wrote the app copy in Portuguese and English, from capture guidance to push notifications and e-mails.", pt: "Escrevi os textos do app em português e inglês, das orientações de captura às notificações push e e-mails." },
      { en: "Refined the front-end after the developers built it, polishing the implementation details.", pt: "Refinei o front-end depois que os devs desenvolveram, cuidando dos detalhes da implementação." },
      { en: "Built a small design system — colors, typography and button variations — to keep the app consistent as it grew.", pt: "Criei um pequeno design system — cores, tipografia e variações de botões — para manter o app consistente conforme crescia." },
      { en: "Ran the pilot at GOL's headquarters, Portaria 3, from 29 August 2019, before the airport tests, which were the next step: testing the same technology on passenger boarding at Congonhas.", pt: "Rodamos o piloto na sede da GOL, na Portaria 3, a partir de 29 de agosto de 2019, antes dos testes em aeroporto. O próximo passo era testar a mesma tecnologia no embarque de passageiros em Congonhas." }
    ],
    gallery: [
      { img: "assets/img/projects/gol-id-sketches.webp", caption: { en: "Paper wireframes to test different ideas before going digital.", pt: "Wireframes em papel para testar ideias diferentes antes de ir para o digital." } },
      { img: "assets/img/projects/gol-id-signup.webp", caption: { en: "Visitor sign-up and guided face capture: lighting, accessories and a step-by-step before starting.", pt: "Cadastro de visitante e captura guiada do rosto: iluminação, adereços e um passo a passo antes de começar." } },
      { img: "assets/img/projects/gol-id-visitors.webp", caption: { en: "Visitor screens: profile, access requests and their status.", pt: "Telas do visitante: perfil, solicitações de acesso e seus status." } },
      { img: "assets/img/projects/gol-id-manager.webp", caption: { en: "Access manager: view and approve requests.", pt: "Gestor de acessos: visualizar e aprovar solicitações." } },
      { img: "assets/img/projects/gol-id-system.webp", caption: { en: "Design system: colors, typography and button variations.", pt: "Design system: cores, tipografia e variações de botões." } }
    ],
    results: {
      en: "In the first three weeks of the pilot (29 August to 20 September 2019), the reports show 3,816 sign-ups and over 12,000 access events, entries and exits. Average face recognition time fell from 2.98 s to 2 s between the 4 and 11 September reports, as a result of the technical measures we took with the developers, and held at 2 s until 20 September.",
      pt: "Nas primeiras três semanas do piloto (29/08 a 20/09/2019), os relatórios registram 3.816 cadastros e mais de 12 mil eventos de acesso, entradas e saídas. O tempo médio de reconhecimento facial caiu de 2,98 s para 2 s entre os relatórios de 4 e 11 de setembro, fruto das medidas técnicas que tomamos com os devs, e se manteve em 2 s até 20 de setembro."
    },
    learnings: {
      en: "Waiting time shapes the experience: reducing it technically is only half the job, the interface also has to show clearly what is happening while the user waits. Trust is a design material too: people accept new technology when they can see what it is doing.",
      pt: "O tempo de espera faz parte da experiência: reduzir a espera com medidas técnicas é só metade do trabalho, a interface também precisa mostrar com clareza o que está acontecendo enquanto o usuário aguarda. Confiança também é material de design: as pessoas aceitam tecnologia nova quando conseguem ver o que ela está fazendo."
    }
  },
  {
    id: "sabre",
    name: "Sabre Historical Archives",
    namePt: "Dados Históricos Sabre",
    featured: false,
    company: "GOL Airlines",
    year: "2023–2025",
    tags: ["Internal tool", "UX for complex data", "Design system", "Role-based access"],
    kind: "brand",
    cover: "assets/img/projects/sabre-cover.webp",
    thumb: "assets/img/projects/sabre-thumb.webp",
    coverAlt: { en: "Sabre Historical Archives: search, choice between bookings and the PNR summary with itinerary and tickets", pt: "Dados Históricos Sabre: busca, escolha entre reservas e o resumo do PNR com itinerário e bilhetes" },
    title: { en: "Data that no longer disappears", pt: "Dados que não somem mais" },
    short: {
      en: "An internal tool for GOL's customer service to look up bookings, tickets and services that Sabre has already deleted. The reservation system erases this data about 13 months after the flight — but by law, a customer can take the airline to court up to 5 years after the trip.",
      pt: "Uma ferramenta interna para que o atendimento da GOL consulte reservas, bilhetes e serviços apagados pela Sabre. O sistema de reservas apaga esses dados cerca de 13 meses após o voo. Pela lei, um cliente pode entrar na Justiça até 5 anos depois da viagem."
    },
    role: {
      en: "Lead product designer, from start to delivery: research on the legacy tools, information architecture, high-fidelity prototype, export model, training screens and follow-up of development and testing. I worked with the PO, the project manager, Customer Service (CRC) and the software vendor.",
      pt: "Designer principal do produto, do início à entrega: pesquisa das ferramentas antigas, arquitetura da informação, protótipo em alta fidelidade, modelo de exportação, telas de treinamento e acompanhamento do desenvolvimento e dos testes. Trabalhei com a PO, a gerente de projeto, a área de Atendimento (CRC) e a fábrica de software."
    },
    problem: [
      {
        en: "GOL uses Sabre as its reservation system. Sabre shares the same database with many airlines and deletes data on a regular schedule: bookings (PNRs) 396 days after the last flight; tickets (VCRs) between 7 and 396 days, depending on status; paid services (EMDs) 400 days after issue or use. After that, the data doesn't show up even in the history.",
        pt: "A GOL usa a Sabre como sistema de reservas. A Sabre compartilha a mesma base com várias companhias e apaga os dados com regularidade: reservas (PNRs) 396 dias após o último voo; bilhetes (VCRs) entre 7 e 396 dias, conforme o status; serviços pagos (EMDs) 400 dias após a emissão ou o uso. Depois disso, os dados não aparecem nem no histórico."
      },
      {
        en: "The problem is that the law allows lawsuits up to 5 years after the trip. In those cases a loose report carries little weight, because it can easily be altered. The customer service, reconciliation and Procon teams needed to see the original record. Until then, looking up old data depended on three tools that didn't talk to each other — the Sabre Interact terminal, SQL Server reports and a Power BI dashboard (InfoPAX) — and none of them showed bookings Sabre had already deleted.",
        pt: "O problema é que a lei permite ações judiciais até 5 anos depois da viagem. Nesses processos, um relatório solto vale pouco porque pode ser facilmente alterado. As equipes de atendimento, conciliação e Procon precisavam ver o registro original. Até então, a consulta a dados antigos dependia de três ferramentas que não conversavam entre si — o terminal Sabre Interact, relatórios em SQL Server e um painel de Power BI (InfoPAX) — e nenhuma delas mostrava reservas que a Sabre já tinha apagado."
      },
      {
        en: "The design challenge: bring a huge volume of technical data — booking codes, coupons, fares, taxes and free-text histories — into a clear web interface. It had to feel familiar to people who had spent years on the Sabre terminal, and be safe enough for personal and legal data.",
        pt: "O desafio de design: levar para uma interface web clara um volume enorme de dados técnicos, como códigos de reserva, cupons, tarifas, taxas e históricos em texto corrido. O resultado precisava ser familiar para quem passou anos no terminal Sabre e seguro o bastante para dados pessoais e jurídicos."
      }
    ],
    approach: [
      { en: "Studied the tools the team already used. With no market benchmark available, the references were Sabre Interact, InfoPAX and the old reports. I watched recorded sessions in which CRC analysts showed how they built a search.", pt: "Estudei as ferramentas que a equipe já usava. Sem benchmark de mercado, as referências foram o Sabre Interact, o InfoPAX e os relatórios antigos. Acompanhei sessões gravadas em que analistas da CRC mostravam como montavam uma consulta." },
      { en: "Kept Sabre's mental model. Labels (Reservation, Itinerary, Ticketing/Pricing, Received from) and codes stayed as agents already knew them. What changed was the visual organisation: cards, hierarchy, spacing and colour.", pt: "Mantive o modelo mental do Sabre. Os rótulos (Reservation, Itinerary, Ticketing/Pricing, Received from) e os códigos ficaram como o agente já conhecia. A organização visual é que mudou: cards, hierarquia, espaço e cor." },
      { en: "Reduced the search to a single field: the PNR. When the same code appears in different years, the screen lists the options with route and creation date so the person can pick the right booking.", pt: "Reduzi a busca a um campo só: o PNR. Quando o mesmo código aparece em anos diferentes, a tela lista as opções com rota e data de criação para a pessoa escolher a reserva certa." },
      { en: "Organised the information in two levels in the sidebar. Tools at the top (New search, Users, Access history); search results below (Summary, PAX data, Remarks, PNR History). The header with the PNR and creation date is always visible.", pt: "Organizei a informação em dois níveis na barra lateral. Em cima ficam as ferramentas (Nova consulta, Usuários, Histórico de acessos). Embaixo, os resultados da consulta (Resumo, Dados de PAX, Remarks, PNR History). O cabeçalho com o PNR e a data de criação fica sempre visível." },
      { en: "Used colour to separate types of information: blue for fares, green for itinerary and payment, beige for miscellaneous information. The eye finds the right block before reading.", pt: "Usei cor para separar tipos de informação. Azul para tarifa, verde para itinerário e pagamento, bege para informações diversas. O olho encontra o bloco certo antes de ler." },
      { en: "Details open in modals. Ticket (VCR), expanded ticket, ticket history, services (EMD) and service history open over the booking, without taking the person out of context.", pt: "Detalhes abrem em modais. Bilhete (VCR), bilhete expandido, histórico do bilhete, serviços (EMD) e histórico de serviços abrem sobre a reserva, sem tirar a pessoa do contexto." },
      { en: "Designed role-based access. The profiles are Administrator, Exporter and Reader, and the export button only appears for those with permission. The Access history screen logs every search and export for auditing.", pt: "Desenhei o acesso por perfil. Os perfis são Administrador, Exportador e Leitor, e o botão de exportar só aparece para quem tem permissão. A tela de Histórico de acessos registra cada consulta e exportação para auditoria." },
      { en: "Proposed the export model: a 10-tab spreadsheet (PAX, Booking, Baggage, Remarks, PNR History, VCR, VCR History, Expanded VCR, EMD and EMD History) to validate fields and format with the CRC supervisors before development.", pt: "Propus o modelo de exportação. Fiz uma planilha com 10 abas (PAX, Reserva, Bagagem, Remarks, PNR History, VCR, VCR History, Expanded VCR, EMD e EMD History) para validar campos e formato com as supervisoras da CRC antes do desenvolvimento." },
      { en: "Wrote the interface copy, including the empty state (\"Sorry, we couldn't find bookings for this PNR\"), error messages with cause and next step, and filter labels.", pt: "Escrevi os textos de interface. Inclui estado vazio (\"Desculpe, mas não encontramos reservas associadas a esse PNR\"), mensagens de erro com causa e próximo passo e rótulos de filtros." },
      { en: "Built a small design system of colours, buttons, tabs, filters, cards and modals, and documented the specs in the prototype for the development team.", pt: "Montei um pequeno design system de cores, botões, abas, filtros, cards e modais, e documentei as especificações no protótipo para o time de desenvolvimento." },
      { en: "Followed the delivery end to end: the kick-off with the software vendor, the front-end review, QA sign-off and the adjustment rounds between 2024 and 2025.", pt: "Acompanhei a entrega de ponta a ponta. Participei do kick-off com a fábrica de software, da revisão do front-end, da homologação com o QA e das rodadas de ajuste entre 2024 e 2025." },
      { en: "Prepared the training: generated the screens in the Reader profile view for the CRC training material.", pt: "Preparei o treinamento. Gerei as telas na visão do perfil Leitor para o material de treinamento da CRC." }
    ],
    gallery: [
      { img: "assets/img/projects/sabre-before.webp", w: 2000, h: 568, caption: { en: "Before: Sabre Interact, SQL Server reports and Power BI. None of the three showed data Sabre had already deleted. (Images blurred to protect customer data.)", pt: "Antes: Sabre Interact, relatórios em SQL Server e Power BI. Nenhuma das três mostrava dados já apagados pela Sabre. (Imagens desfocadas para proteger dados de clientes.)" } },
      { img: "assets/img/projects/sabre-flow.webp", w: 2000, h: 1488, caption: { en: "The search flow has four steps: corporate login, search by PNR, choosing between bookings with the same code, and an empty state that points to the next step.", pt: "O fluxo de consulta tem quatro passos: login com a conta corporativa, busca por PNR, escolha entre reservas com o mesmo código e um estado vazio que orienta o próximo passo." } },
      { img: "assets/img/projects/sabre-summary.webp", w: 2000, h: 1417, caption: { en: "The PNR Summary shows passengers, seats and special services, itinerary and tickets on a single screen. The structure echoes Interact, but is easier to read.", pt: "O Resumo do PNR mostra passageiros, assentos e serviços especiais, itinerário e bilhetes em uma tela só. A estrutura lembra o Interact, com leitura mais fácil." } },
      { img: "assets/img/projects/sabre-pax.webp", w: 2000, h: 1488, caption: { en: "Passenger data in tabs: details, contact, baggage (with tags listed separately, as the data model required) and remarks.", pt: "Os dados do passageiro ficam em abas: detalhes, contato, bagagem (com as etiquetas separadas, como pediu a modelagem de dados) e remarks." } },
      { img: "assets/img/projects/sabre-vcr.webp", w: 2000, h: 1042, caption: { en: "Ticket (VCR) in a modal, with fare, calculation and payment in cards of different colours, and access to the expanded ticket and coupon history.", pt: "Bilhete (VCR) em modal, com tarifa, cálculo e pagamento em cards de cores diferentes, e acesso ao bilhete expandido e ao histórico de cupons." } },
      { img: "assets/img/projects/sabre-emd.webp", w: 2000, h: 1147, caption: { en: "An iteration with the business: services with many taxes show the total and a \"See all…\" link, instead of stretching the card.", pt: "Uma iteração com o negócio: serviços com muitas taxas mostram o total e um \"Ver todas…\", em vez de esticar o card." } },
      { img: "assets/img/projects/sabre-pnr-history.webp", w: 2000, h: 811, caption: { en: "PNR History redesign (Dec 2024). The Air Itinerary filter turns Sabre's raw text into a table of flight changes; the full view keeps the original text.", pt: "Redesenho do PNR History (dez/2024). O filtro Air Itinerary transforma o texto do Sabre em uma tabela de alterações de voo. A visão completa mantém o texto original." } },
      { img: "assets/img/projects/sabre-access.webp", w: 2000, h: 811, caption: { en: "Access management: users by profile and status, and a history of searches and exports for auditing.", pt: "Gestão de acessos: usuários por perfil e status, e histórico de consultas e exportações para auditoria." } },
      { img: "assets/img/projects/sabre-profiles.webp", w: 2000, h: 811, caption: { en: "The same screen seen by different profiles. Without permission, you don't even see the option to export or manage.", pt: "A mesma tela vista por perfis diferentes. Quem não tem permissão nem vê a opção de exportar ou gerenciar." } },
      { img: "assets/img/projects/sabre-export.webp", w: 2000, h: 589, caption: { en: "Export to PDF or CSV, choosing the data blocks, and error messages that explain what happened and what to do.", pt: "Exportação em PDF ou CSV, com escolha dos blocos de dados, e mensagens de erro que explicam o que aconteceu e o que fazer." } },
      { img: "assets/img/projects/sabre-design-system.webp", w: 2000, h: 1367, caption: { en: "Design system: a palette with GOL orange, colours that separate types of information and components reused across 30+ screens.", pt: "Design system: paleta com o laranja GOL, cores que separam tipos de informação e componentes reutilizados nas mais de 30 telas." } }
    ],
    results: [
      { en: "The prototype became the foundation of the whole project: the software vendor used the screens to split and detail the user stories.", pt: "O protótipo virou a base de todo o projeto: a fábrica de software usou as telas para dividir e detalhar as histórias de usuário." },
      { en: "At the front-end delivery, in February 2024, the GOL team rated the work \"above expectations\", with few visual adjustments.", pt: "Na entrega do front-end, em fevereiro de 2024, o time da GOL avaliou o trabalho como \"acima do esperado\", com poucos ajustes visuais." },
      { en: "The PNR History redesign was approved by the business area in the presentation meeting itself.", pt: "O redesenho do PNR History foi aprovado pela área de negócio na própria reunião de apresentação." },
      { en: "In September 2025, the progressive test scenarios reached 100% completion in QA. In February 2026, infrastructure approved the historical database for production, and the launch moved into preparation.", pt: "Em setembro de 2025, os cenários de teste progressivos chegaram a 100% concluídos na homologação. Em fevereiro de 2026, a área de infraestrutura aprovou o banco de dados histórico para produção, e o lançamento passou à fase de preparação." },
      { en: "Once in production, the tool will extend lookups from about 13 months to 5 years — the period the law allows for lawsuits — in the format agents already know.", pt: "Quando entrar em produção, a ferramenta vai estender a consulta de cerca de 13 meses para 5 anos — o prazo que a lei dá para ações judiciais —, no formato que os agentes já conhecem." }
    ],
    quotes: [
      { en: "Really nice layout! Very similar to Sabre and intuitive.", pt: "Muito legal o layout! Bem semelhante ao Sabre e intuitivo.", by: { en: "Customer service analyst", pt: "Analista da área de Atendimento" } },
      { en: "I believe 90% of what's there will make it in.", pt: "Acredito que 90% do que está aí vai constar.", by: { en: "Data modelling lead, reviewing the prototype", pt: "Responsável pela modelagem de dados, ao revisar o protótipo" } }
    ],
    learnings: {
      en: "In an internal tool, being familiar is a design decision too. Keeping Sabre's vocabulary and logic made agents recognise the screen instantly, and the visual organisation did the rest. I also learned that a prototype is an alignment tool: when validating the export, users checked the fictional data instead of the layout, so I had to make clear what was being validated at each stage. And a data project depends on the database as much as on the interface. Many changes came from the data model — fields that didn't exist, rules for copying and exporting. Designing close to the data team avoided rework.",
      pt: "Em ferramenta interna, ser familiar também é decisão de design. Manter o vocabulário e a lógica do Sabre fez os agentes reconhecerem a tela na hora, e a organização visual cuidou do resto. Aprendi também que protótipo é ferramenta de alinhamento. Na validação da exportação, os usuários conferiram os dados fictícios em vez do layout, e foi preciso deixar claro o que estava sendo validado em cada etapa. Por último, projeto com dados depende do banco tanto quanto da interface. Boa parte das mudanças veio da modelagem, como campos que não existiam e regras de cópia e exportação. Desenhar perto do time de dados evitou retrabalho."
    }
  },
  {
    id: "alexa",
    name: "GOL Alexa Skill",
    featured: true,
    company: "GOL Airlines",
    year: "2021–2022",
    tags: ["Voice UX", "Intents", "Dialogue design"],
    kind: "voice",
    cover: "assets/img/projects/alexa-cover.webp",
    thumb: "assets/img/projects/alexa-thumb.webp",
    coverAlt: { en: "GOL skill open on an Echo Show: \"The flight has landed!\", with the hint \"Try saying 'Alexa, check another flight' or 'Alexa, exit'\"", pt: "Skill da GOL aberta em um Echo Show: \"O voo pousou no destino!\", com a dica \"Tente dizer 'Alexa, consultar outro voo' ou 'Alexa, sair'\"" },
    title: { en: "GOL's first voice experience", pt: "A primeira experiência de voz da GOL" },
    short: {
      en: "Flight status by voice — where my conversation design work began.",
      pt: "Status de voo por voz — onde começou meu trabalho com design conversacional."
    },
    role: { en: "Designed, implemented and supported the skill", pt: "Desenhei, implementei e sustentei a skill" },
    problem: {
      en: "Passengers wanted a quick, hands-free way to check their next flight. Voice has no screen to fall back on: every answer must be short, ordered and unambiguous.",
      pt: "Passageiros queriam uma forma rápida e sem as mãos de consultar o próximo voo. Voz não tem tela de apoio: cada resposta precisa ser curta, ordenada e sem ambiguidade."
    },
    approach: [
      { en: "Mapped the intents and the questions people actually ask about a flight.", pt: "Mapeei as intenções e as perguntas que as pessoas realmente fazem sobre um voo." },
      { en: "Designed an audio information architecture: the most important fact first, details on request.", pt: "Desenhei uma arquitetura de informação auditiva: o fato mais importante primeiro, detalhes sob demanda." },
      { en: "Wrote reprompts and error recovery for when the assistant didn't understand.", pt: "Escrevi reprompts e recuperação de erro para quando o assistente não entendia." }
    ],
    results: {
      en: "The airline's first conversational voice experience, launched and supported by the GOL Labs team.",
      pt: "A primeira experiência conversacional por voz da companhia, lançada e sustentada pelo time do GOL Labs."
    },
    learnings: {
      en: "Designing for the ear taught me to write for any conversational channel: say less, in the right order, and always offer a way forward.",
      pt: "Desenhar para o ouvido me ensinou a escrever para qualquer canal conversacional: falar menos, na ordem certa, e sempre oferecer um caminho."
    }
  },
  {
    id: "zuum",
    name: "Zuum Digital Account",
    namePt: "Zuum Conta Digital",
    featured: false,
    company: "Vivo (Telefônica Brasil)",
    year: "2018",
    tags: ["Fintech", "UX research", "Mobile-first", "Social media"],
    kind: "fintech",
    cover: "assets/img/projects/zuum-cover.webp",
    thumb: "assets/img/projects/zuum-thumb.webp",
    coverAlt: { en: "Zuum mobile-first website: home, app download and online deposit screens", pt: "Site mobile-first da Zuum: telas de home, download do app e depósito online" },
    prototype: "https://xd.adobe.com/view/3fc26dd7-9e71-43f3-8c18-413d8bb241f9/",
    title: { en: "Making a digital account feel simple", pt: "Fazer uma conta digital parecer simples" },
    short: {
      en: "UX research and mobile-first redesign for a Vivo + Mastercard joint venture.",
      pt: "Pesquisa de UX e redesign mobile-first para uma joint venture Vivo + Mastercard."
    },
    role: { en: "UX research and UI redesign", pt: "Pesquisa de UX e redesign de UI" },
    problem: {
      en: "Financial requirements are complex, and the website didn't help people understand the product.",
      pt: "Requisitos financeiros são complexos, e o site não ajudava as pessoas a entender o produto."
    },
    approach: [
      { en: "Ran UX research to understand what people needed to know before signing up.", pt: "Conduzi pesquisa de UX para entender o que as pessoas precisavam saber antes de se cadastrar." },
      { en: "Redesigned the responsive website, mobile-first.", pt: "Redesenhei o site responsivo, com abordagem mobile-first." },
      { en: "Organised the menu around what people came to do: log in, download the app, get the Zuum card, learn how it works, deposit money or open a business account.", pt: "Organizei o menu em torno do que as pessoas vinham fazer: entrar, baixar o app, pedir o cartão Zuum, entender como funciona, depositar ou abrir conta para empresa." },
      { en: "Designed the online deposit as a short form: pick your bank, confirm the destination account and enter the amount — with the minimum value, limits and deadlines explained in plain words.", pt: "Desenhei o depósito online como um formulário curto: escolher o banco, confirmar a conta de destino e informar o valor — com valor mínimo, limites e prazos explicados em linguagem simples." }
    ],
    gallery: [
      { img: "assets/img/projects/zuum-home.webp", caption: { en: "Home on mobile and desktop: an institutional video, a clear call to open an account and help for new customers.", pt: "Home no celular e no desktop: vídeo institucional, um convite claro para abrir a conta e ajuda para quem acabou de chegar." } },
      { img: "assets/img/projects/zuum-deposit.webp", caption: { en: "Online deposit: choose the bank, the destination account and the amount, with the deadline explained in plain words.", pt: "Depósito online: escolha do banco, da conta de destino e do valor, com o prazo explicado em linguagem simples." } },
      { img: "assets/img/projects/zuum-screens.webp", caption: { en: "Menu organised by task, web password creation and the app download page.", pt: "Menu organizado por tarefa, criação de senha web e a página de download do app." } }
    ],
    results: {
      en: "A simpler, more fluid interface that translated financial complexity into clear choices.",
      pt: "Uma interface mais simples e fluida, que traduziu a complexidade financeira em escolhas claras."
    },
    learnings: {
      en: "Clarity is the most persuasive thing a financial product can offer.",
      pt: "Clareza é a coisa mais persuasiva que um produto financeiro pode oferecer."
    }
  },
  {
    id: "campus-party",
    name: "Campus Party Brasil",
    featured: false,
    company: "Campus Party Brasil",
    year: "2017–2018",
    tags: ["Art direction", "Web UI", "Design leadership", "Social media", "Graphic design"],
    kind: "brand",
    cover: "assets/img/projects/campus-party-cover.webp",
    thumb: "assets/img/projects/campus-party-thumb.webp",
    coverAlt: { en: "Collage of Campus Party Brasil social media posts: #CPBR11 campaign in São Paulo and the Bahia and Brasília editions", pt: "Colagem de posts de redes sociais da Campus Party Brasil: campanha #CPBR11 em São Paulo e as edições da Bahia e de Brasília" },
    title: { en: "Design for Brazil's largest tech festival", pt: "Design para o maior festival de tecnologia do Brasil" },
    short: {
      en: "Head of Design for all of Campus Party Brasil's digital visual communication: website, app, social media and campaigns.",
      pt: "Head of Design de toda a comunicação visual digital da Campus Party Brasil: site, app, redes sociais e campanhas."
    },
    role: { en: "Head of Design (promoted from Digital Designer)", pt: "Head of Design (promovida de Designer Digital)" },
    problem: [
      { en: "Campus Party is Brazil's largest technology and innovation festival, present in more than 12 countries, with over 70 editions around the world.", pt: "A Campus Party é o maior festival de tecnologia e inovação do Brasil, presente em mais de 12 países e com mais de 70 edições pelo mundo." },
      { en: "In 2017 and 2018 it ran editions in several Brazilian states at once. Each one needed its own website, social media, ads and emails, while art requests arrived from Sales, Marketing, Content, Social Media and Accreditation at the same time.", pt: "Em 2017 e 2018, o festival teve edições em vários estados ao mesmo tempo. Cada uma precisava de site, redes sociais, anúncios e e-mails próprios, enquanto as demandas de arte chegavam juntas do Comercial, Marketing, Conteúdos, Social Media e Credenciamento." }
    ],
    approach: [
      { en: "Joined as Digital Designer and was promoted to Head of Design five months later, taking over all of the festival's digital visual communication in Brazil.", pt: "Entrei como Designer Digital e fui promovida a Head of Design cinco meses depois, assumindo toda a comunicação visual digital do festival no Brasil." },
      { en: "Organised the design workflow and a single intake for art requests from Sales, Marketing, Content, Social Media and Accreditation.", pt: "Organizei o fluxo de trabalho de design e uma entrada única para as demandas de arte do Comercial, Marketing, Conteúdos, Social Media e Credenciamento." },
      { en: "Produced the art for the website, the app and every Campus Party social channel in Brazil — Facebook, Instagram and Twitter — together with the social media team.", pt: "Produzi a arte do site, do app e de todas as redes sociais da Campus Party no Brasil — Facebook, Instagram e Twitter — junto com o time de social media." },
      { en: "Gave each edition its own look inside one visual system, so the brand stayed recognisable from São Paulo to Salvador and Brasília.", pt: "Dei a cada edição uma cara própria dentro de um mesmo sistema visual, para a marca continuar reconhecível de São Paulo a Salvador e Brasília." },
      { en: "Designed web interfaces, landing pages, email marketing, newsletters and digital ads.", pt: "Desenhei interfaces web, landing pages, e-mail marketing, newsletters e anúncios digitais." },
      { en: "Created advertising for TV, internet, outdoor, print and digital media, with creative ideas built for impact and engagement.", pt: "Criei peças publicitárias para TV, internet, mídia exterior, impressa e digital, com ideias criativas pensadas para impacto e engajamento." }
    ],
    gallery: [
      { img: "assets/img/projects/campus-party-social-sp.webp", caption: { en: "#CPBR11 campaign in São Paulo: the edition launch, programme areas like Campus Future and Campus Wellness, the app, CP Hack and the call for startups and makers.", pt: "Campanha da #CPBR11 em São Paulo: lançamento da edição, áreas da programação como Campus Future e Campus Wellness, o app, o CP Hack e a chamada para startups e makers." } },
      { img: "assets/img/projects/campus-party-social-editions.webp", caption: { en: "Regional editions with their own palette inside the same system — Bahia and Brasília — plus engagement and seasonal posts.", pt: "Edições regionais com paleta própria dentro do mesmo sistema — Bahia e Brasília — além de posts de engajamento e datas comemorativas." } },
      { img: "assets/img/projects/campus-party-site.webp", caption: { en: "Campus Party Bahia website: countdown to the event, ticket call, agenda and speaker highlights, plus the Arena, Camping and Open Campus sections.", pt: "Site da Campus Party Bahia: contagem regressiva para o evento, chamada para ingressos, agenda e destaques de palestrantes, além das seções Arena, Camping e Open Campus." } }
    ],
    moreLink: {
      url: "https://camillareboucas.myportfolio.com/social-media",
      label: { en: "See more social media art", pt: "Ver mais artes de redes sociais" }
    },
    results: [
      { en: "One consistent visual system across 16 editions and events: in 2017, Campus Party in Brasília, Minas Gerais and Bahia, Campus Weekend Pato Branco and six Campus Nights in Minas Gerais; in 2018, Campus Party Brasil in São Paulo and the editions in Brasília, Minas Gerais, Natal, Rondônia and Bahia.", pt: "Um sistema visual consistente em 16 edições e eventos: em 2017, Campus Party em Brasília, Minas Gerais e Bahia, Campus Weekend Pato Branco e seis Campus Night em Minas Gerais; em 2018, Campus Party Brasil em São Paulo e as edições de Brasília, Minas Gerais, Natal, Rondônia e Bahia." },
      { en: "Requests from five areas flowing through one design workflow, keeping quality steady across simultaneous editions.", pt: "Demandas de cinco áreas passando por um único fluxo de design, mantendo a qualidade em edições simultâneas." },
      { en: "Promoted from Digital Designer to Head of Design after five months.", pt: "Promoção de Designer Digital a Head of Design em cinco meses." }
    ],
    learnings: {
      en: "A system scales better than heroics: clear intake and reusable patterns kept quality high under pressure.",
      pt: "Um sistema escala melhor que esforço heroico: entrada clara de demandas e padrões reutilizáveis mantiveram a qualidade sob pressão."
    }
  }
];

/* --------------------------------------------------------------------------
   MORE INTERFACE PROJECTS (cards without a case page)
   - img: screenshot in assets/img/projects/ (WebP, 800×450)
   - kind: illustration used when there is no image
   - company / year: optional, shown above the title (default: GOL Airlines)
   -------------------------------------------------------------------------- */
PORTFOLIO.moreProjects = [
  { name: "News graphics at Globo", namePt: "Arte para telejornais na Globo", kind: "infographic", img: "assets/img/projects/globonews-cover.webp", url: "https://camillareboucas.myportfolio.com/infographics", company: "Globo", year: "2013–2015",
    tags: [{ en: "Information design", pt: "Design de informação" }, { en: "Motion", pt: "Motion" }],
    en: "Maps, animated infographics and graphic systems for national TV news, including the 2014 World Cup and Elections. The 2014 Elections idents won a journalism award.",
    pt: "Mapas, infográficos animados e sistemas gráficos para telejornais nacionais, incluindo Copa e Eleições 2014. As vinhetas das Eleições 2014 ganharam um prêmio de jornalismo." },
  { name: "Smart Fare", namePt: "Tarifa Inteligente", kind: "commerce", img: "assets/img/projects/smart-fare-cover.webp", year: "2018–2019",
    tags: [{ en: "Journey design", pt: "Desenho de jornada" }, { en: "B2C", pt: "B2C" }],
    en: "Suggests the best fare combination for outbound and return flights, giving customers the most advantageous option during purchase. On the Site, from October 2018 to September 2019, gains beat the forecast by 41.5%; on the m.Site, by 127%. Together they generated R$ 23.26 million in accumulated gains, 47.6% above forecast, at a cost of around R$ 50 thousand: every R$ 1 invested returned R$ 465. Adopted by customers from day one and one of the main drivers of the 80% EBIT increase in GOL Labs' first year.",
    pt: "Sugere a melhor combinação de tarifas para ida e volta, oferecendo ao cliente a opção mais vantajosa durante a compra. No Site, entre outubro de 2018 e setembro de 2019, os ganhos superaram a previsão em 41,5%; no m.Site, em 127%. Juntos, geraram R$ 23,26 milhões em ganhos acumulados, 47,6% acima do previsto, com custo de cerca de R$ 50 mil: cada R$ 1 investido gerou R$ 465. Adotada pelos clientes desde o primeiro dia e uma das principais responsáveis pelo EBIT de 80% no primeiro ano do GOL Labs." },
   { name: "OC Mobile", img: "assets/img/projects/oc-mobile.webp",
    tags: [{ en: "Tablet", pt: "Tablet" }, { en: "Flight operations", pt: "Operações de voo" }],
    en: "Tablet portal for ramp coordinators: digital ramp checklist, chat with dispatch and real-time alerts. Part of the Paperless project, which replaced printed flight documents, and tested on site at Recife airport.",
    pt: "Portal em tablet para os coordenadores de rampa: checklist de rampa digital, chat com o despacho e alertas em tempo real. Parte do projeto Paperless, que substituiu documentos de voo impressos, testado em campo no aeroporto de Recife." },
  { name: "Weight & Balance Backup", img: "assets/img/projects/weight-balance.webp",
    tags: [{ en: "Web app", pt: "Web app" }, { en: "Flight safety", pt: "Segurança de voo" }],
    en: "Contingency weight-and-balance system for flight dispatch, used when the main system is down: flight data entry, calculated weight and index, and the aircraft envelope chart.",
    pt: "Sistema de contingência de peso e balanceamento para o despacho de voos, usado quando o sistema principal está indisponível: entrada dos dados do voo, peso e índice calculados e o gráfico de envelope da aeronave." },
  { name: "Encantômetro", img: "assets/img/projects/encantometro.webp",
    tags: [{ en: "Service design", pt: "Design de serviço" }, { en: "Survey", pt: "Pesquisa" }],
    en: "Satisfaction survey for premium airport counters: each agent has a QR code display, and customers rate the service in seconds, in Portuguese, English or Spanish. Managers follow results in a back office.",
    pt: "Pesquisa de satisfação dos balcões premium dos aeroportos: cada atendente tem um display com QR code e o cliente avalia o atendimento em segundos, em português, inglês ou espanhol. Gestores acompanham os resultados em um back office." },
  { name: "Virtual Queue", namePt: "Fila Virtual", img: "assets/img/projects/fila-virtual.webp",
    tags: [{ en: "Mobile web", pt: "Mobile web" }, { en: "Airport", pt: "Aeroporto" }],
    en: "Boarding updates on the customer's own phone: gate confirmation, status changes and the call for each boarding group. A GOL Labs pilot on selected flights.",
    pt: "Atualizações de embarque no celular do próprio cliente: confirmação de portão, mudanças de status e a chamada de cada grupo de embarque. Um piloto do GOL Labs em voos selecionados." },
  { name: "Standby List", namePt: "Lista de Standby", img: "assets/img/projects/standby-list.webp",
    tags: [{ en: "Web", pt: "Web" }, { en: "LGPD", pt: "LGPD" }],
    en: "Public standby list for employees and dependants flying on the travel benefit: boarding order updated in real time, with names masked to comply with LGPD.",
    pt: "Lista de standby pública para colaboradores e dependentes que viajam pelo benefício viagem: ordem de embarque atualizada em tempo real, com nomes mascarados para respeitar a LGPD." },
  { name: "NEXAG", img: "assets/img/projects/nexag.webp",
    tags: [{ en: "Handheld", pt: "Handheld" }, { en: "Usability testing", pt: "Teste de usabilidade" }],
    en: "Handheld app for airport agents to find bookings, change seats on the aircraft map, rebook flights and request refunds. I ran the usability tests with agents at Congonhas airport.",
    pt: "App em handheld para agentes de aeroporto localizarem reservas, trocarem assentos no mapa da aeronave, remarcarem voos e solicitarem reembolsos. Conduzi os testes de usabilidade com agentes no aeroporto de Congonhas." },
  { name: "GOL Mobile Site", kind: "msite",
    tags: [{ en: "B2C", pt: "B2C" }, { en: "Check-in", pt: "Check-in" }],
    en: "Face-lift of GOL's mobile website, including a simpler check-in flow for single and multi-passenger bookings.",
    pt: "Face-lift do site mobile da GOL, incluindo um fluxo de check-in mais simples para reservas com um ou vários passageiros." },
  { name: "Jira Service Portal", namePt: "Central de Chamados do Jira", img: "assets/img/projects/jira-portal.webp",
    tags: [{ en: "Redesign", pt: "Redesign" }, { en: "Internal tool", pt: "Ferramenta interna" }],
    en: "Redesign of GOL's internal service portal: requests grouped by area — technology, legal, people, finance and more — on a clearer, friendlier home page.",
    pt: "Redesign do portal de serviços interno da GOL: solicitações agrupadas por área — tecnologia, jurídico, pessoas, financeiro e outras — em uma home mais clara e amigável." },
  { name: "B2B Website", namePt: "Site B2B", img: "assets/img/projects/site-b2b.webp",
    tags: [{ en: "B2B", pt: "B2B" }, { en: "E-commerce", pt: "E-commerce" }],
    en: "Purchase and post-sale flows for travel agencies and corporate customers, updated for the new fare families and baggage add-ons.",
    pt: "Fluxos de compra e pós-venda para agências e clientes corporativos, atualizados para as novas famílias tarifárias e a compra de bagagem." },
  { name: "Touchless Kiosk", namePt: "Totem", img: "assets/img/projects/totem-touchless.webp",
    tags: [{ en: "Kiosk", pt: "Totem" }, { en: "Airport", pt: "Aeroporto" }],
    en: "Touchless bag drop at the self-service kiosk: the customer scans the boarding pass and drops the bag without touching the screen.",
    pt: "Despacho de bagagem sem toque no totem de autoatendimento: o cliente lê o cartão de embarque e despacha a mala sem tocar na tela." },
  { name: "Boarding Documents on WhatsApp", namePt: "WhatsApp Documentos de Embarque", img: "assets/img/projects/whatsapp-docs.webp",
    tags: [{ en: "Conversational", pt: "Conversacional" }, { en: "WhatsApp", pt: "WhatsApp" }],
    en: "GAL, GOL's virtual assistant, checks passports, visas and vaccination certificates on WhatsApp before international flights, with photo examples to guide the customer.",
    pt: "A GAL, assistente virtual da GOL, valida passaportes, vistos e certificados de vacina pelo WhatsApp antes de voos internacionais, com exemplos de foto para orientar o cliente." },
  { name: "Boarding Pass in Wallet", namePt: "Cartão de embarque na Wallet", img: "assets/img/projects/wallet-pass.webp",
    tags: [{ en: "Mobile", pt: "Mobile" }, { en: "B2C", pt: "B2C" }],
    en: "Boarding pass for Apple Wallet and Google Wallet, designed to be read at a glance: route, boarding window, gate, seat, fare, loyalty tier and boarding group around the QR code.",
    pt: "Cartão de embarque para Apple Wallet e Google Wallet, desenhado para leitura rápida: trecho, horário de embarque, portão, assento, tarifa, categoria de fidelidade e grupo de embarque ao redor do QR code." },
  { name: "Uber / 99 Integrated Check-in", namePt: "Check-in integrado Uber/99", img: "assets/img/projects/uber-checkin.webp",
    tags: [{ en: "Integration", pt: "Integração" }, { en: "B2C", pt: "B2C" }],
    en: "Check-in inside the Uber and 99 apps on the way to the airport: the customer confirms the flight and gets the boarding pass, with live flight status, gate and seat, without leaving the ride.",
    pt: "Check-in dentro dos apps Uber e 99 a caminho do aeroporto: o cliente confirma o voo e recebe o cartão de embarque, com status do voo, portão e assento, sem sair da corrida." }
];

/* --------------------------------------------------------------------------
   SKILLS FLOW — the animated infographic on the home page.
   Three columns: where each skill came from → the skill → what it builds
   in an AI agent. `w` (1–3) is how strongly one feeds the next.
   cluster: craft (visual & information design), talk (conversation), build (technology & product)
   -------------------------------------------------------------------------- */
PORTFOLIO.skillsFlow = {
  clusters: {
    craft: { en: "Design craft", pt: "Design" },
    talk:  { en: "Conversation", pt: "Conversacional" },
    build: { en: "Build & product", pt: "Construção e produto" }
  },
  origins: [
    { id: "o-tv",     years: "2010–2015", en: "Graphics, video & animation", pt: "Gráficos, vídeo e animação" },
    { id: "o-art",    years: "2015–2018", en: "Art direction & head of design",      pt: "Direção de arte e head of design" },
    { id: "o-ux",     years: "2016–now",  en: "UX/UI for digital products",          pt: "UX/UI de produtos digitais" },
    { id: "o-voice",  years: "2021–2022", en: "Voice assistants",                    pt: "Assistentes de voz" },
    { id: "o-ai",     years: "2024–now",  en: "Generative AI agents",                pt: "Agentes de IA generativa" }
  ],
  skills: [
    { id: "s-story",  cluster: "craft", en: "Storytelling",                   pt: "Storytelling" },
    { id: "s-info",   cluster: "craft", en: "Information design",             pt: "Design de informação" },
    { id: "s-system", cluster: "craft", en: "Visual & design systems",        pt: "Sistemas visuais e de design" },
    { id: "s-research", cluster: "craft", en: "UX research",                  pt: "Pesquisa de UX" },
    { id: "s-write",  cluster: "talk",  en: "UX writing & tone of voice",     pt: "UX writing e tom de voz" },
    { id: "s-flow",   cluster: "talk",  en: "Dialogue & flow design",         pt: "Design de diálogos e fluxos" },
    { id: "s-prompt", cluster: "talk",  en: "Prompt engineering",             pt: "Engenharia de prompt" },
    { id: "s-rag",    cluster: "build", en: "Knowledge curation & RAG",       pt: "Curadoria de conhecimento e RAG" },
    { id: "s-lowcode", cluster: "build", en: "Low-code automation",           pt: "Automação low-code" },
    { id: "s-product", cluster: "build", en: "Product ownership & metrics",   pt: "Product ownership e métricas" }
  ],
  outcomes: [
    { id: "a-persona", en: "Persona & voice",              pt: "Persona e voz" },
    { id: "a-dialog",  en: "Conversations that flow",      pt: "Conversas que fluem" },
    { id: "a-ground",  en: "Grounded, cited answers",      pt: "Respostas fundamentadas e citadas" },
    { id: "a-trust",   en: "Guardrails, fallbacks & hand-offs", pt: "Guardrails, fallbacks e handoffs" },
    { id: "a-orch",    en: "Orchestration & integrations", pt: "Orquestração e integrações" },
    { id: "a-value",   en: "Adoption & measurable value",  pt: "Adoção e valor mensurável" }
  ],
  links: [
    ["o-tv", "s-story", 3], ["o-tv", "s-info", 3],
    ["o-art", "s-system", 3], ["o-art", "s-story", 2], ["o-art", "s-product", 1],
    ["o-ux", "s-research", 3], ["o-ux", "s-system", 2], ["o-ux", "s-write", 2], ["o-ux", "s-product", 2],
    ["o-voice", "s-flow", 3], ["o-voice", "s-write", 2],
    ["o-ai", "s-prompt", 3], ["o-ai", "s-rag", 3], ["o-ai", "s-lowcode", 3], ["o-ai", "s-product", 2], ["o-ai", "s-flow", 2],

    ["s-story", "a-persona", 3], ["s-story", "a-dialog", 1],
    ["s-info", "a-ground", 2], ["s-info", "a-dialog", 2],
    ["s-system", "a-trust", 2], ["s-system", "a-orch", 1],
    ["s-research", "a-value", 2], ["s-research", "a-dialog", 2],
    ["s-write", "a-persona", 3], ["s-write", "a-trust", 2],
    ["s-flow", "a-dialog", 3], ["s-flow", "a-trust", 2],
    ["s-prompt", "a-persona", 2], ["s-prompt", "a-trust", 3], ["s-prompt", "a-orch", 2],
    ["s-rag", "a-ground", 3],
    ["s-lowcode", "a-orch", 3], ["s-lowcode", "a-value", 1],
    ["s-product", "a-value", 3]
  ]
};

/* --------------------------------------------------------------------------
   CAREER TIMELINE (about page)
   -------------------------------------------------------------------------- */
PORTFOLIO.timeline = [
  { years: "2022 – now", org: "GOL Airlines · GOL Labs",
    role: { en: "Senior Product Designer — Conversational AI & AI agents", pt: "Senior Product Designer — IA conversacional e agentes de IA" },
    text: {
      en: "Experience direction and product ownership of GAL, GOL's first generative-AI assistant and now its most used agent: around 300 users a day and 6,000 sessions a month, answering 15,000 employees in Teams — including anonymous ethics and conduct questions. I lead a portfolio of eight AI and automation initiatives, from a Lean A3 mentor to empathetic writer agents and knowledge search with cited sources, and implement them in Copilot Studio with GPT and Claude. I also set the squad's conversation and Dev/Test/Prod release standards and mentor designers.",
      pt: "Direção de experiência e product ownership da GAL, o primeiro assistente de IA generativa da GOL e hoje o agente mais usado da empresa: cerca de 300 usuários por dia e 6 mil sessões por mês, atendendo 15 mil colaboradores no Teams — inclusive consultas anônimas de Ética e Conduta. Conduzo um portfólio de oito iniciativas de IA e automação, de um mentor de A3 Lean a agentes redatores com tom empático e busca com citação de fontes, e implemento esses agentes no Copilot Studio com GPT e Claude. Também defino os padrões conversacionais e de deploy entre Dev, HML e Prod do squad e faço mentoria de designers."
    } },
  { years: "2018 – now", org: "GOL Airlines · GOL Labs",
    role: { en: "Product Designer — Voicebots, automation & UX", pt: "Product Designer — Voicebots, automação e UX" },
    text: {
      en: "50+ traditional and conversational interface projects as UX lead in agile, cross-functional squads, from discovery to measurement with the Double Diamond. Highlights: GOL's first Alexa skill, Smart Fare, GOL ID biometric boarding (a first in Latin America), GOLLOG Online Sales and the Employee App; the VoeGOL site and app on the Tangerina design system, mobile check-in and Apple and Google Wallet boarding passes; operations, airport and process-automation systems; and innovation and design-thinking workshops across the company.",
      pt: "Mais de 50 projetos de interfaces tradicionais e conversacionais como UX lead em squads ágeis e multidisciplinares, do discovery à mensuração com o Double Diamond. Destaques: a primeira skill da GOL para Alexa, Tarifa Inteligente, embarque biométrico GOL ID (pioneiro na América Latina), GOLLOG Vendas Online e o App dos Colaboradores; o site e o app VoeGOL no design system Tangerina, o check-in mobile e o cartão de embarque para Apple e Google Wallet; sistemas de Operações, Aeroportos e automação de processos; e workshops de inovação e design thinking para toda a companhia."
    } },
  { years: "2018", org: "Vivo (Telefônica Brasil)",
    role: { en: "UI/UX Designer", pt: "UI/UX Designer" },
    text: {
      en: "Dedicated to Zuum, the Vivo + Mastercard digital account: UX research and the mobile-first redesign of its responsive website, plus in-app push, social media and marketing campaign strategy, internal communications and sales presentations.",
      pt: "Dedicação integral à Zuum, conta digital da joint venture Vivo + Mastercard: pesquisa de UX e redesign mobile-first do novo site responsivo, além de estratégia de pushes in-app, redes sociais e campanhas de marketing, endomarketing e apresentações para o time comercial."
    } },
  { years: "2015 – 2018", org: "Campus Party Brasil · ZoeFilms",
    role: { en: "Head of Design / Art Director", pt: "Head of Design / Diretora de Arte" },
    text: {
      en: "At Campus Party Brasil, the country's largest technology festival, I joined as a digital designer and became Head of Design five months later, running all digital visual communication — site, app, social media, landing pages, newsletters and campaigns for TV, outdoor and print — for editions across Brazil. Before that, as art director at ZoeFilms: visual concepts, storyboards and illustration for the TV Cultura animated series “Eu e o Quarteto Apavorante”, and 21 animations for a brand's YouTube campaign.",
      pt: "Na Campus Party Brasil, o maior festival de tecnologia do país, entrei como designer digital e cinco meses depois assumi como Head of Design, responsável por toda a comunicação visual digital — site, app, redes sociais, landing pages, newsletters e campanhas para TV, mídia exterior e impressa — em edições por todo o Brasil. Antes disso, como diretora de arte na ZoeFilms: conceitos visuais, storyboards e ilustração da série animada “Eu e o Quarteto Apavorante”, da TV Cultura, e 21 animações para a campanha de uma marca no YouTube."
    } },
  { years: "2013 – 2015", org: "Globo",
    role: { en: "Designer — Art & information design", pt: "Designer — Arte e design de informação" },
    text: {
      en: "Daily news graphics, maps and animated infographics for national and local TV news — Jornal Nacional, Fantástico, SporTV and, above all, GloboNews, where I also took briefings from editors, organized the art desk's workflow and reviewed artwork. Visual identity for two GloboNews shows and special projects for the 2014 World Cup and Elections; the Elections idents won a journalism award.",
      pt: "Arte diária, mapas e infográficos animados para telejornais nacionais e locais — Jornal Nacional, Fantástico, SporTV e, principalmente, GloboNews, onde também recebia briefings dos editores, organizava o fluxo de produção da equipe de arte e revisava as peças. Identidade visual de dois programas da GloboNews e projetos especiais da Copa e das Eleições 2014; as vinhetas das Eleições ganharam prêmio de jornalismo."
    } },
  { years: "2010 – 2013", org: "Studios & agencies",
    orgPt: "Estúdios e agências",
    role: { en: "Video editor, 3D animator & illustrator", pt: "Editora de vídeo, animadora 3D e ilustradora" },
    text: {
      en: "Where it started: editing commercials and TV shows, 3D animation for TV ads at BlackHouse, illustration for a TV Cultura animated series at ZoeFilms, e-commerce design and photography, and motion graphics, 3D and campaign pieces for brands like Starbucks, Subway and Havaianas at Grupo Rai.",
      pt: "Onde tudo começou: edição de comerciais e programas de TV, animação 3D para filmes publicitários na BlackHouse, ilustração para uma série animada da TV Cultura na ZoeFilms, design e fotografia para e-commerce, e motion graphics, 3D e peças de campanha para marcas como Starbucks, Subway e Havaianas no Grupo Rai."
    } }
];

PORTFOLIO.education = [
  { school: "California Institute of the Arts (CalArts)", en: "UX Design specialisation · 2020–2022", pt: "Especialização em UX Design · 2020–2022" },
  { school: "California Institute of the Arts (CalArts)", en: "Graphic Design specialisation · 2016–2018", pt: "Especialização em Graphic Design · 2016–2018" },
  { school: "Faculdade Méliès", en: "3D Animation / Computer Graphics · 2011–2012", pt: "Animação 3D / Computação Gráfica · 2011–2012" },
  { school: "Universidade Federal de São Carlos (UFSCar)", en: "BA in Image and Sound · 2007–2010", pt: "Bacharelado em Imagem e Som · 2007–2010" }
];

PORTFOLIO.toolkit = [
  { group: { en: "AI & agents", pt: "IA e agentes" }, cluster: "talk",
    note: { en: "Designing, prompting and implementing agents and voice assistants.", pt: "Para desenhar, escrever prompts e implementar agentes e assistentes de voz." },
    items: ["Claude Code", "Copilot Studio", "Microsoft 365 Copilot", "Azure OpenAI", "ChatGPT · Claude · Gemini", "Alexa Skills"] },
  { group: { en: "Design & research", pt: "Design e pesquisa" }, cluster: "craft",
    note: { en: "Interfaces, prototypes and usability tests, plus solution mapping in Miro.", pt: "Interfaces, protótipos e testes de usabilidade, além do desenho de solução no Miro." },
    items: ["Figma", "FigJam", "Sketch", "Miro", "Maze", "UserTesting", "Adobe Creative Cloud", "Motion & 3D", "HTML & CSS", "VS Code"] },
  { group: { en: "Automation, data & metrics", pt: "Automação, dados e métricas" }, cluster: "build",
    note: { en: "Flows, connectors and data behind each agent; usage metrics in Datadog and conversation and product-data analysis in Databricks.", pt: "Fluxos, conectores e dados por trás de cada agente; métricas de uso no Datadog e acompanhamento de conversas e análise de dados do produto no Databricks." },
    items: ["Power Automate", "Power Apps", "Dataverse", "SharePoint", "Adaptive Cards", "Entra ID", "Datadog", "Databricks"] },
  { group: { en: "Delivery & documentation", pt: "Entrega e documentação" }, cluster: "build",
    note: { en: "Backlog in Notion and Jira, documentation in Confluence, and Office for AI/RAG knowledge documents, decks and spreadsheets.", pt: "Backlog no Notion e no Jira, documentação no Confluence e o pacote Office para documentos de conhecimento de IA/RAG, apresentações e planilhas." },
    items: ["Jira", "Azure DevOps", "Notion", "Confluence", "Microsoft Office", "ALM pipelines (Dev/Test/Prod)", "Scrum · Kanban · Lean"] }
];

/* Your public links. Only LinkedIn is shown in the contact page and footer. */
PORTFOLIO.links = {
  linkedin: "https://www.linkedin.com/in/careboucas"
};
