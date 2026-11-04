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
      en: "An app for employees and visitors to enter GOL's headquarters with their face — a pioneering pilot in Latin America for what would later be tested at the boarding gate.",
      pt: "Um app para colaboradores e visitantes entrarem na sede da GOL com o rosto — um piloto pioneiro na América Latina do que depois seria testado no portão de embarque."
    },
    role: { en: "End-to-end UX lead: design, UI, UX and writing at every stage, front-end refinement after development, and co-creation brainstorms with the GOL Labs team", pt: "UX lead do projeto de ponta a ponta: design, UI, UX e writing em todas as etapas, refinamento do front-end após o desenvolvimento e brainstorms de co-criação com o time do GOL Labs" },
    problem: {
      en: "Getting into GOL's headquarters meant identifying yourself at reception every time, and boarding depends on documents and queues. Facial biometrics could speed both up — but only if people trust it and understand, at every step, what is happening with their face.",
      pt: "Entrar na sede da GOL exigia se identificar na recepção toda vez, e o embarque depende de documentos e filas. A biometria facial poderia acelerar os dois — mas só se as pessoas confiassem nela e entendessem, a cada etapa, o que está acontecendo com o seu rosto."
    },
    approach: [
      { en: "Sketched the journeys on paper first — login, visitor sign-up, activation code and error states — to test ideas before going digital.", pt: "Desenhei as jornadas primeiro no papel — login, cadastro de visitante, código de ativação e estados de erro — para testar ideias antes de ir para o digital." },
      { en: "Ran brainstorms with the GOL Labs team to co-design the best solution together, before locking the flows.", pt: "Conduzi brainstorms com o time do GOL Labs para desenharmos juntos a melhor solução, antes de fechar os fluxos." },
      { en: "Designed three paths: employees log in with their network account and face ID; first-time visitors enter their details and capture their face; managers view and approve access requests.", pt: "Desenhei três caminhos: colaboradores entram com a conta de rede e o rosto; visitantes de primeira viagem informam seus dados e cadastram o rosto; gestores visualizam e aprovam as solicitações de acesso." },
      { en: "Wrote guidance for the face capture — good lighting, no accessories, a step-by-step before starting — so the photo works on the first try.", pt: "Escrevi orientações para a captura do rosto — ambiente iluminado, sem adereços, um passo a passo antes de começar — para a foto dar certo na primeira tentativa." },
      { en: "Reduced the time spent reading the face: we worked with the developers on technical measures to make the read faster.", pt: "Reduzimos o tempo de leitura do rosto: trabalhei com os devs em medidas técnicas para deixar a leitura mais rápida." },
      { en: "Designed the waiting screen to show, step by step, what the app is doing while it reads the face, so the user always understands the wait.", pt: "Desenhei a tela de espera para mostrar, passo a passo, o que o app está fazendo enquanto lê o rosto, para o usuário sempre entender a espera." },
      { en: "Wrote the app copy in Portuguese and English, from the sign-up guidance to push notifications and e-mails.", pt: "Escrevi os textos do app em português e inglês, das orientações de cadastro às notificações push e e-mails." },
      { en: "Refined the front-end after the developers built it, polishing the implementation details.", pt: "Refinei o front-end depois que os devs desenvolveram, cuidando dos detalhes da implementação." },
      { en: "Built a small design system — colors, typography and button variations — to keep the app consistent as it grew.", pt: "Criei um pequeno design system — cores, tipografia e variações de botões — para manter o app consistente conforme crescia." },
      { en: "Ran the pilot at GOL's headquarters before the airport tests.", pt: "Rodamos o piloto na sede da GOL antes dos testes em aeroporto." }
    ],
    gallery: [
      { img: "assets/img/projects/gol-id-sketches.webp", caption: { en: "Paper wireframes to test different ideas before going digital.", pt: "Wireframes em papel para testar ideias diferentes antes de ir para o digital." } },
      { img: "assets/img/projects/gol-id-signup.webp", caption: { en: "Visitor sign-up and guided face capture: lighting, accessories and a step-by-step before starting.", pt: "Cadastro de visitante e captura guiada do rosto: iluminação, adereços e um passo a passo antes de começar." } },
      { img: "assets/img/projects/gol-id-visitors.webp", caption: { en: "Visitor screens: profile, access requests and their status.", pt: "Telas do visitante: perfil, solicitações de acesso e seus status." } },
      { img: "assets/img/projects/gol-id-manager.webp", caption: { en: "Access manager: view and approve requests.", pt: "Gestor de acessos: visualizar e aprovar solicitações." } },
      { img: "assets/img/projects/gol-id-system.webp", caption: { en: "Design system: colors, typography and button variations.", pt: "Design system: cores, tipografia e variações de botões." } }
    ],
    results: {
      en: "Once invited to a meeting, visitors request entry in the app and go straight through the facial recognition turnstiles — no second identification at reception. The company gained a new security layer, and the pilot, pioneering in Latin America, paved the way for facial boarding tests at the gate — part of the initiatives linked to GOL Labs' first-year EBIT growth.",
      pt: "Convidados para uma reunião, os visitantes solicitam a entrada no app e passam direto pelas catracas com reconhecimento facial — sem se identificar de novo na recepção. A empresa ganhou uma nova camada de segurança, e o piloto, pioneiro na América Latina, abriu caminho para os testes de embarque facial no portão — parte das iniciativas associadas ao crescimento de EBIT do primeiro ano do GOL Labs."
    },
    learnings: {
      en: "Waiting time shapes the experience: reducing it technically is only half the job, the interface also has to show clearly what is happening while the user waits. Trust is a design material too: people accept new technology when they can see what it is doing.",
      pt: "O tempo de espera faz parte da experiência: reduzir a espera com medidas técnicas é só metade do trabalho, a interface também precisa mostrar com clareza o que está acontecendo enquanto o usuário aguarda. Confiança também é material de design: as pessoas aceitam tecnologia nova quando conseguem ver o que ela está fazendo."
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
    tags: ["Fintech", "UX research", "Mobile-first"],
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
    name: "Campus Party Brazil",
    featured: false,
    company: "Campus Party Brasil",
    year: "2017",
    tags: ["Art direction", "Web & app UI", "Design leadership"],
    kind: "brand",
    cover: "assets/img/projects/campus-party-cover.webp",
    thumb: "assets/img/projects/campus-party-thumb.webp",
    coverAlt: { en: "Campus Party Bahia website: event home with countdown and the Arena, Camping and Open Campus sections", pt: "Site da Campus Party Bahia: home do evento com contagem regressiva e as seções Arena, Camping e Open Campus" },
    title: { en: "Design for Brazil's largest tech festival", pt: "Design para o maior festival de tecnologia do Brasil" },
    short: {
      en: "Head of Design for all digital visual communication: web, app, social and campaigns.",
      pt: "Head of Design de toda a comunicação visual digital: web, app, redes sociais e campanhas."
    },
    role: { en: "Head of Design", pt: "Head of Design" },
    problem: {
      en: "A festival present in many cities and countries needed a consistent digital presence, with requests coming from marketing, sales, content and accreditation at the same time.",
      pt: "Um festival presente em várias cidades e países precisava de uma presença digital consistente, com demandas chegando de marketing, comercial, conteúdo e credenciamento ao mesmo tempo."
    },
    approach: [
      { en: "Organised the design workflow and the intake of requests from every area.", pt: "Organizei o fluxo de trabalho de design e a entrada de demandas de todas as áreas." },
      { en: "Designed web interfaces, landing pages, app content and campaigns across editions in several Brazilian states.", pt: "Desenhei interfaces web, landing pages, conteúdo do app e campanhas para edições em vários estados." }
    ],
    results: {
      en: "A consistent visual system across a dozen editions in 2017.",
      pt: "Um sistema visual consistente em mais de uma dezena de edições em 2017."
    },
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
  { name: "Smart Fare", namePt: "Tarifa Inteligente", kind: "commerce", year: "2018–2022",
    tags: [{ en: "Journey design", pt: "Desenho de jornada" }, { en: "B2C", pt: "B2C" }],
    en: "A new ticket-purchase feature, from discovery workshops to the automation logic behind the fare. Adopted by customers from day one and one of the main drivers of the 80% EBIT increase in GOL Labs' first year.",
    pt: "Uma nova funcionalidade na compra de passagens, dos workshops de discovery à lógica de automação por trás da tarifa. Adotada pelos clientes desde o primeiro dia e uma das principais responsáveis pelo EBIT de 80% no primeiro ano do GOL Labs." },
  { name: "News graphics at Globo", namePt: "Arte para telejornais na Globo", kind: "infographic", company: "Globo", year: "2013–2015",
    tags: [{ en: "Information design", pt: "Design de informação" }, { en: "Motion", pt: "Motion" }],
    en: "Maps, animated infographics and graphic systems for national TV news, including the 2014 World Cup and Elections. The 2014 Elections idents won a journalism award.",
    pt: "Mapas, infográficos animados e sistemas gráficos para telejornais nacionais, incluindo Copa e Eleições 2014. As vinhetas das Eleições 2014 ganharam um prêmio de jornalismo." },
  { name: "OC Mobile", img: "assets/img/projects/oc-mobile.webp",
    tags: [{ en: "Tablet", pt: "Tablet" }, { en: "Flight operations", pt: "Operações de voo" }],
    en: "Tablet portal for ramp coordinators: digital ramp checklist, chat with dispatch and real-time alerts. Part of the Paperless project, which replaced printed flight documents, and tested on site at Recife airport.",
    pt: "Portal em tablet para os coordenadores de rampa: checklist de rampa digital, chat com o despacho e alertas em tempo real. Parte do projeto Paperless, que substituiu documentos de voo impressos, testado em campo no aeroporto de Recife." },
  { name: "Sabre Historical Archive", namePt: "Dados Históricos Sabre", img: "assets/img/projects/sabre-historical.webp",
    tags: [{ en: "Web app", pt: "Web app" }, { en: "Internal tool", pt: "Ferramenta interna" }],
    en: "Web tool to search and export historical reservation data from Sabre — itinerary, ticketing, EMDs, baggage and contacts — with filters and export by user profile.",
    pt: "Ferramenta web para consultar e exportar dados históricos de reservas do Sabre — itinerário, emissão, EMDs, bagagens e contatos — com filtros e exportação por perfil de usuário." },
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
    pt: "Check-in dentro dos apps Uber e 99 a caminho do aeroporto: o cliente confirma o voo e recebe o cartão de embarque, com status do voo, portão e assento, sem sair da corrida." },
  { name: "GOL Gift", kind: "gift",
    tags: [{ en: "E-commerce", pt: "E-commerce" }, { en: "B2C", pt: "B2C" }],
    en: "Gift card purchase experience.",
    pt: "Experiência de compra de vale-presente." }
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
    text: { en: "Experience direction for GAL, GOL's first generative-AI assistant, and product ownership of a portfolio of eight AI and automation initiatives — from discovery to enterprise rollout. I design and build agents in Copilot Studio, set conversation standards for the squad and mentor designers.", pt: "Direção de experiência da GAL, o primeiro assistente de IA generativa da GOL, e product ownership de um portfólio de oito iniciativas de IA e automação — do discovery ao rollout corporativo. Desenho e construo agentes no Copilot Studio, defino padrões conversacionais do squad e faço mentoria de designers." } },
  { years: "2018 – now", org: "GOL Airlines · GOL Labs",
    role: { en: "Product Designer — Voicebots, automation & UX", pt: "Product Designer — Voicebots, automação e UX" },
    text: { en: "50+ interface design projects at GOL Airlines, including GOL's first Alexa skill, Smart Fare, GOL ID biometric boarding, GOLLOG Online Sales and the Employee App — as UX lead in agile, cross-functional squads.", pt: "Mais de 50 projetos de design de interfaces na GOL Linhas Aéreas, entre eles a primeira skill da GOL para Alexa, Tarifa Inteligente, embarque biométrico GOL ID, GOLLOG Vendas Online e o App dos Colaboradores — como UX lead em squads ágeis e multidisciplinares." } },
  { years: "2018", org: "Vivo (Telefônica Brasil)",
    role: { en: "UI/UX Designer", pt: "UI/UX Designer" },
    text: { en: "UX research and mobile-first redesign of Zuum, a Vivo + Mastercard digital account.", pt: "Pesquisa de UX e redesign mobile-first da Zuum, conta digital Vivo + Mastercard." } },
  { years: "2015 – 2018", org: "Campus Party Brasil · ZoeFilms",
    role: { en: "Head of Design / Art Director", pt: "Head of Design / Diretora de Arte" },
    text: { en: "Digital visual communication for Brazil's largest technology festival; art direction, illustration and animation for TV series and campaigns.", pt: "Comunicação visual digital do maior festival de tecnologia do Brasil; direção de arte, ilustração e animação para séries de TV e campanhas." } },
  { years: "2013 – 2015", org: "Globo",
    role: { en: "Designer — Art & information design", pt: "Designer — Arte e design de informação" },
    text: { en: "Daily news graphics, maps and animated infographics for national TV news. The 2014 Elections idents won a journalism award.", pt: "Arte diária, mapas e infográficos animados para telejornais nacionais. As vinhetas das Eleições 2014 ganharam prêmio de jornalismo." } },
  { years: "2010 – 2013", org: "Studios & agencies",
    orgPt: "Estúdios e agências",
    role: { en: "Video editor, 3D animator & illustrator", pt: "Editora de vídeo, animadora 3D e ilustradora" },
    text: { en: "Where it started: editing, animation and illustration for TV and advertising.", pt: "Onde tudo começou: edição, animação e ilustração para TV e publicidade." } }
];

PORTFOLIO.education = [
  { school: "California Institute of the Arts (CalArts)", en: "UX Design specialisation · 2020–2022", pt: "Especialização em UX Design · 2020–2022" },
  { school: "California Institute of the Arts (CalArts)", en: "Graphic Design specialisation · 2016–2018", pt: "Especialização em Graphic Design · 2016–2018" },
  { school: "Faculdade Méliès", en: "3D Animation / Computer Graphics · 2011–2012", pt: "Animação 3D / Computação Gráfica · 2011–2012" },
  { school: "Universidade Federal de São Carlos (UFSCar)", en: "BA in Image and Sound · 2007–2010", pt: "Bacharelado em Imagem e Som · 2007–2010" }
];

PORTFOLIO.toolkit = [
  { group: { en: "Agents & AI", pt: "Agentes e IA" }, cluster: "talk",
    items: ["Copilot Studio", "Microsoft 365 Copilot", "Azure OpenAI", "Alexa Skills", "ChatGPT · Claude · Gemini"] },
  { group: { en: "Automation & data", pt: "Automação e dados" }, cluster: "build",
    items: ["Power Automate", "Power Apps", "Dataverse", "SharePoint", "Adaptive Cards", "Entra ID", "Databricks"] },
  { group: { en: "Delivery & governance", pt: "Entrega e governança" }, cluster: "build",
    items: ["Azure DevOps", "Jira", "ALM pipelines (Dev/Test/Prod)", "Scrum · Kanban · Lean"] },
  { group: { en: "Design & prototyping", pt: "Design e prototipação" }, cluster: "craft",
    items: ["Figma", "Adobe Creative Cloud", "HTML & CSS", "VS Code", "Motion & 3D"] }
];

/* Your public links. Only LinkedIn is shown in the contact page and footer. */
PORTFOLIO.links = {
  linkedin: "https://www.linkedin.com/in/careboucas"
};
