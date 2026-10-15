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
  craft:   { en: "Design craft",   pt: "Ofício de design" },
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
   -------------------------------------------------------------------------- */
PORTFOLIO.projects = [
  {
    id: "alexa",
    name: "GOL Alexa Skill",
    featured: true,
    company: "GOL Airlines",
    year: "2018–2022",
    tags: ["Voice UX", "Intents", "Dialogue design"],
    kind: "voice",
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
    id: "smart-fare",
    name: "Smart Fare",
    namePt: "Tarifa Inteligente",
    featured: true,
    company: "GOL Airlines",
    year: "2018–2022",
    tags: ["Journey design", "Automation logic", "B2C"],
    kind: "commerce",
    title: { en: "A smarter way to buy a ticket", pt: "Um jeito mais inteligente de comprar passagem" },
    short: {
      en: "A new ticket-purchase feature adopted from day one, linked to an 80% EBIT increase in GOL Labs' first year.",
      pt: "Uma nova funcionalidade na compra de passagens, adotada desde o primeiro dia e associada a 80% de EBIT no primeiro ano do GOL Labs."
    },
    role: { en: "UX lead: journey design and automation logic", pt: "UX lead: desenho de jornada e lógica de automação" },
    problem: {
      en: "Ticket purchase is a high-stakes, high-anxiety moment. The new fare feature had to fit into an existing flow without adding friction or doubt.",
      pt: "A compra de passagem é um momento de alta tensão. A nova funcionalidade de tarifa precisava entrar num fluxo existente sem adicionar atrito ou dúvida."
    },
    approach: [
      { en: "Led discovery and workshops with business owners, developers and architects.", pt: "Conduzi discovery e workshops com business owners, desenvolvedores e arquitetos." },
      { en: "Designed the journey and the automation logic behind the fare.", pt: "Desenhei a jornada e a lógica de automação por trás da tarifa." },
      { en: "Tested with users before production, following Discover, Explore, Test and Listen.", pt: "Testei com usuários antes da produção, seguindo Discover, Explore, Test e Listen." }
    ],
    results: {
      en: "Adopted by customers from the first day in production, and one of the main drivers of the 80% EBIT increase in GOL Labs' first year.",
      pt: "Adotada pelos clientes desde o primeiro dia em produção, e uma das principais responsáveis pelo EBIT de 80% no primeiro ano do GOL Labs."
    },
    learnings: {
      en: "The best innovation is often invisible: it removes a decision from the user instead of adding a new one.",
      pt: "A melhor inovação muitas vezes é invisível: ela tira uma decisão do usuário em vez de adicionar uma nova."
    }
  },
  {
    id: "gol-id",
    name: "GOL ID",
    featured: false,
    company: "GOL Airlines",
    year: "2018–2022",
    tags: ["Biometrics", "Service design", "Pilot"],
    kind: "biometrics",
    title: { en: "Boarding with your face", pt: "Embarque com o rosto" },
    short: {
      en: "A pioneering facial biometrics boarding pilot in Latin America, also tested at GOL's headquarters.",
      pt: "Um piloto pioneiro de embarque por biometria facial na América Latina, também testado na sede da GOL."
    },
    role: { en: "UX design and journey design", pt: "UX design e desenho de jornada" },
    problem: {
      en: "Boarding and building access depend on documents and queues. Biometrics could speed them up — but only if people trust it and understand what is happening.",
      pt: "Embarque e acesso a prédios dependem de documentos e filas. A biometria poderia acelerar isso — mas só se as pessoas confiarem e entenderem o que está acontecendo."
    },
    approach: [
      { en: "Designed the enrolment and boarding journeys, with clear feedback at every step.", pt: "Desenhei as jornadas de cadastro e embarque, com feedback claro em cada etapa." },
      { en: "Ran the pilot at GOL's headquarters before the airport tests.", pt: "Rodamos o piloto na sede da GOL antes dos testes em aeroporto." }
    ],
    results: {
      en: "A pioneering pilot in Latin America, part of the initiatives linked to GOL Labs' first-year EBIT growth.",
      pt: "Um piloto pioneiro na América Latina, parte das iniciativas associadas ao crescimento de EBIT do primeiro ano do GOL Labs."
    },
    learnings: {
      en: "Trust is a design material. People accept new technology when they can see what it is doing.",
      pt: "Confiança é material de design. As pessoas aceitam tecnologia nova quando conseguem ver o que ela está fazendo."
    }
  },
  {
    id: "gollog",
    name: "GOLLOG Online Sales",
    namePt: "GOLLOG Vendas Online",
    featured: false,
    company: "GOL Airlines",
    year: "2018–2022",
    tags: ["B2B", "E-commerce", "Information architecture"],
    kind: "cargo",
    title: { en: "Air cargo, bought online", pt: "Carga aérea, comprada online" },
    short: {
      en: "Quote, booking, online payment and tracking for GOL's cargo business.",
      pt: "Cotação, pedido, pagamento online e rastreamento para o negócio de cargas da GOL."
    },
    role: { en: "UX/UI design", pt: "UX/UI design" },
    problem: {
      en: "Shipping air cargo used to require contact with a sales team. The first online phase had to make a complex B2B service feel as simple as buying a product.",
      pt: "Enviar carga aérea exigia contato com um time comercial. A primeira fase online precisava fazer um serviço B2B complexo parecer tão simples quanto comprar um produto."
    },
    approach: [
      { en: "Structured the flow into four clear stages: quote, booking, payment and tracking.", pt: "Estruturei o fluxo em quatro etapas claras: cotação, pedido, pagamento e rastreamento." },
      { en: "Focused on conversion and on removing usability issues in each step.", pt: "Foco em conversão e em remover problemas de usabilidade em cada etapa." }
    ],
    results: {
      en: "Online sales launched on the GOLLOG website with features that were competitive in the air cargo market.",
      pt: "Venda online lançada no site da GOLLOG com funcionalidades competitivas no mercado de cargas aéreas."
    },
    learnings: {
      en: "Complex services become simple when every step has one job.",
      pt: "Serviços complexos ficam simples quando cada etapa tem uma única função."
    }
  },
  {
    id: "employee-app",
    name: "GOL Employee App",
    namePt: "App dos Colaboradores GOL",
    featured: false,
    company: "GOL Airlines",
    year: "2018–2022",
    tags: ["Mobile", "Internal product", "UI design"],
    kind: "mobile",
    title: { en: "One app for everyday work life", pt: "Um app para o dia a dia de trabalho" },
    short: {
      en: "A friendly app to connect employees, company tools and HR.",
      pt: "Um app amigável para conectar colaboradores, ferramentas da empresa e RH."
    },
    role: { en: "UX/UI design", pt: "UX/UI design" },
    problem: {
      en: "Employees needed a single, easy place to reach company tools, talk to HR and connect with each other.",
      pt: "Os colaboradores precisavam de um lugar único e fácil para acessar ferramentas da empresa, falar com o RH e se conectar entre si."
    },
    approach: [
      { en: "Designed a simple, attractive interface focused on the most frequent tasks.", pt: "Desenhei uma interface simples e atraente, focada nas tarefas mais frequentes." }
    ],
    results: {
      en: "A new internal app that brought tools, HR communication and social features together.",
      pt: "Um novo app interno que reuniu ferramentas, comunicação com o RH e recursos sociais."
    },
    learnings: {
      en: "Internal products deserve the same care as customer products — employees are users too.",
      pt: "Produtos internos merecem o mesmo cuidado que produtos para clientes — colaboradores também são usuários."
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
      { en: "Redesigned the responsive website, mobile-first.", pt: "Redesenhei o site responsivo, com abordagem mobile-first." }
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
    id: "globo",
    name: "News graphics at Globo",
    namePt: "Arte para telejornais na Globo",
    featured: false,
    company: "Globo",
    year: "2013–2015",
    tags: ["Information design", "Data visualization", "Motion"],
    kind: "infographic",
    title: { en: "Explaining complex news to millions", pt: "Explicar notícias complexas para milhões" },
    short: {
      en: "Maps, animated infographics and graphic systems for national TV news, including the 2014 World Cup and Elections.",
      pt: "Mapas, infográficos animados e sistemas gráficos para telejornais nacionais, incluindo Copa e Eleições 2014."
    },
    role: { en: "Designer — art and information design", pt: "Designer — arte e design de informação" },
    problem: {
      en: "Live news needs complex information turned into something anyone understands in seconds, on deadline, every day.",
      pt: "O telejornal precisa transformar informação complexa em algo que qualquer pessoa entenda em segundos, com prazo, todos os dias."
    },
    approach: [
      { en: "Took briefs from editors, prioritised the production flow and reviewed on-air graphics at GloboNews.", pt: "Recebia briefings de editores, priorizava o fluxo de produção e revisava as artes no ar da GloboNews." },
      { en: "Produced motion graphics, maps and animated infographics for Jornal Nacional, Jornal da Globo, Fantástico and SporTV.", pt: "Produzi motion graphics, mapas e infográficos animados para Jornal Nacional, Jornal da Globo, Fantástico e SporTV." },
      { en: "Created visual identities for the 2014 FIFA World Cup and 2014 Elections coverage.", pt: "Criei identidades visuais para a cobertura da Copa do Mundo 2014 e das Eleições 2014." }
    ],
    results: {
      en: "The animated idents for the 2014 Elections project won a journalism award.",
      pt: "As vinhetas animadas do projeto Eleições 2014 conquistaram um prêmio de jornalismo."
    },
    learnings: {
      en: "Information design is conversation design without words: the order in which you reveal things is the message.",
      pt: "Design de informação é design conversacional sem palavras: a ordem em que você revela as coisas é a mensagem."
    }
  },
  {
    id: "campus-party",
    name: "Campus Party Brazil",
    featured: false,
    company: "Campus Party Brasil",
    year: "2017–2018",
    tags: ["Art direction", "Web & app UI", "Design leadership"],
    kind: "brand",
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
      en: "A consistent visual system across a dozen editions in 2017 and 2018.",
      pt: "Um sistema visual consistente em mais de uma dezena de edições em 2017 e 2018."
    },
    learnings: {
      en: "A system scales better than heroics: clear intake and reusable patterns kept quality high under pressure.",
      pt: "Um sistema escala melhor que esforço heroico: entrada clara de demandas e padrões reutilizáveis mantiveram a qualidade sob pressão."
    }
  }
];

/* --------------------------------------------------------------------------
   MORE INTERFACE PROJECTS AT GOL AIRLINES (cards without a case page)
   - img: screenshot in assets/img/projects/ (WebP, 800×450)
   - kind: illustration used when there is no image
   -------------------------------------------------------------------------- */
PORTFOLIO.moreProjects = [
  { name: "Employee Mobile", namePt: "Colaborador Mobile", img: "assets/img/projects/colaborador-mobile.webp",
    tags: [{ en: "Mobile", pt: "Mobile" }, { en: "Internal product", pt: "Produto interno" }],
    en: "Redesign of the GOL employee app: a side menu organised by area — crew, approvals, people & culture, travel benefits — and a virtual business card with QR code.",
    pt: "Redesign do app dos colaboradores da GOL: menu lateral organizado por área — tripulantes, aprovações, gente e cultura, benefício viagem — e cartão de visitas virtual com QR code." },
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
    craft: { en: "Design craft", pt: "Ofício de design" },
    talk:  { en: "Conversation", pt: "Conversa" },
    build: { en: "Build & product", pt: "Construção e produto" }
  },
  origins: [
    { id: "o-tv",     years: "2010–2015", en: "Video, animation & TV news graphics", pt: "Vídeo, animação e arte para TV" },
    { id: "o-art",    years: "2015–2018", en: "Art direction & head of design",      pt: "Direção de arte e head of design" },
    { id: "o-ux",     years: "2018–2022", en: "UX/UI for digital products",          pt: "UX/UI de produtos digitais" },
    { id: "o-voice",  years: "2018–2022", en: "Voice assistants",                    pt: "Assistentes de voz" },
    { id: "o-ai",     years: "2022–now",  en: "Generative AI agents",                pt: "Agentes de IA generativa" }
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
  { years: "2018 – 2022", org: "GOL Airlines · GOL Labs",
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
