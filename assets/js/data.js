/* ==========================================================================
   PORTFOLIO DATA — edit this file to add, remove or update projects.
   Every text field has an English (en) and Portuguese (pt) version.
   ========================================================================== */

const PORTFOLIO = (window.PORTFOLIO = {});

/* --------------------------------------------------------------------------
   STATUS — the lifecycle stage of each agent.
   Keys are used in the `status` field of each agent below.
   -------------------------------------------------------------------------- */
PORTFOLIO.status = {
  live:     { en: "Live",            pt: "Em produção",   stage: 4 },
  testing:  { en: "In testing",      pt: "Em testes",     stage: 3 },
  building: { en: "In development",  pt: "Em desenvolvimento", stage: 2 },
  planned:  { en: "Approved MVP",    pt: "MVP aprovado",  stage: 1 }
};

PORTFOLIO.stages = [
  { en: "Discovery",  pt: "Discovery" },
  { en: "Approved",   pt: "Aprovado" },
  { en: "Build",      pt: "Construção" },
  { en: "Testing",    pt: "Testes" },
  { en: "Live",       pt: "Produção" }
];

/* --------------------------------------------------------------------------
   AI AGENTS
   - id: used in the URL → agent.html?id=lia
   - featured: true → shown on the home page
   - metrics: results (kind "result") or goals (kind "goal")
   - architecture: drawn automatically as a diagram on the case page
   -------------------------------------------------------------------------- */
PORTFOLIO.agents = [
  {
    id: "lia",
    name: "LIA",
    featured: true,
    status: "live",
    stage: 4,
    version: "V1 live · V2 in build",
    versionPt: "V1 em produção · V2 em construção",
    channel: "Microsoft Teams (desktop + mobile)",
    stack: ["Copilot Studio", "Teams", "RAG", "SharePoint", "APIs"],
    title: {
      en: "Knowledge assistant for GOL's physical stores",
      pt: "Assistente de conhecimento das lojas físicas da GOL"
    },
    short: {
      en: "Gives store teams the right answer while the customer is still at the counter.",
      pt: "Entrega a resposta certa para o time da loja enquanto o cliente ainda está no balcão."
    },
    role: {
      en: "Product owner, conversation designer and low-code builder",
      pt: "Product owner, designer conversacional e desenvolvedora low-code"
    },
    pain: {
      en: "The knowledge needed to serve customers in GOL's 13 physical stores was spread across many sources. Sales agents took too long to find information during face-to-face service, and the customer waited at the counter.",
      pt: "O conhecimento necessário para atender clientes nas 13 lojas físicas da GOL estava espalhado em muitas fontes. Os vendedores demoravam para encontrar informações durante o atendimento presencial, e o cliente esperava no balcão."
    },
    solution: {
      en: "A conversational agent in Microsoft Teams, on desktop and mobile, grounded in a single curated knowledge base. I designed the persona, answer formats and fallbacks around the reality of a busy counter: short answers first, details on demand. V2 evolves into an orchestrator agent that routes questions to specialist agents and live API data.",
      pt: "Um agente conversacional no Microsoft Teams, no desktop e no celular, com uma base de conhecimento única e curada. Desenhei a persona, os formatos de resposta e os fallbacks para a realidade de um balcão movimentado: resposta curta primeiro, detalhes sob demanda. A V2 evolui para um agente orquestrador que direciona perguntas para agentes especialistas e dados de APIs em tempo real."
    },
    design: [
      { en: "Answer-first format: the action comes in the first line, policy details follow.", pt: "Formato resposta-primeiro: a ação vem na primeira linha, os detalhes da política depois." },
      { en: "Knowledge curated into 5 approved bases, rewritten to be RAG-friendly.", pt: "Conhecimento curado em 5 bases aprovadas, reescritas para funcionar bem com RAG." },
      { en: "Fallbacks that say what the agent doesn't know and where to look instead.", pt: "Fallbacks que dizem o que o agente não sabe e onde procurar." },
      { en: "Tested with 16 store collaborators before the rollout.", pt: "Testado com 16 colaboradores das lojas antes do rollout." }
    ],
    metrics: [
      { value: "97%",   kind: "result", label: { en: "assertiveness", pt: "de assertividade" } },
      { value: "−90%",  kind: "result", label: { en: "average search time (goal was −50%)", pt: "no tempo médio de busca (meta era −50%)" } },
      { value: "80%",   kind: "result", label: { en: "adoption among store teams", pt: "de adoção entre os times das lojas" } },
      { value: "2,820", valuePt: "2.820", kind: "result", label: { en: "interactions in V1", pt: "interações na V1" } }
    ],
    compare: { label: { en: "Average search time reduction", pt: "Redução do tempo médio de busca" }, goal: 50, result: 90 },
    architecture: {
      channel: "Teams",
      core: { en: "LIA orchestrator (V2)", pt: "Orquestrador LIA (V2)" },
      children: [
        { en: "Store knowledge agent", pt: "Agente de conhecimento" },
        { en: "Specialist agents", pt: "Agentes especialistas" }
      ],
      sources: [
        { en: "5 curated knowledge bases", pt: "5 bases curadas" },
        { en: "Business APIs", pt: "APIs de negócio" }
      ]
    },
    next: {
      en: "Roll out V2 with orchestration and API integrations, so answers can include live operational data and not only documents.",
      pt: "Lançar a V2 com orquestração e integrações via API, para que as respostas incluam dados operacionais em tempo real e não apenas documentos."
    }
  },

  {
    id: "gal",
    name: "GAL Copilot 2.0",
    featured: true,
    status: "live",
    stage: 4,
    version: "2.0 rolled out Feb 2026",
    versionPt: "2.0 lançada em fev/2026",
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
      { value: "2.0", kind: "result", label: { en: "rolled out company-wide in February 2026", pt: "lançada para toda a empresa em fevereiro de 2026" } },
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
    id: "mentor-a3",
    name: "Mentor A3 Lean",
    featured: true,
    status: "live",
    stage: 4,
    version: "V1 live Aug 2026 · V2 in validation",
    versionPt: "V1 em produção desde ago/2026 · V2 em validação",
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
    status: "testing",
    stage: 3,
    version: "QA with 4 collaborators",
    versionPt: "QA com 4 colaboradores",
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
    id: "magno",
    name: "Magno Service Writer",
    namePt: "Agente de Atendimento Magno",
    featured: false,
    status: "testing",
    stage: 3,
    version: "Usability testing",
    versionPt: "Testes de usabilidade",
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
    id: "medif",
    name: "MEDIF/FREMEC Service Agent",
    namePt: "Agente de Atendimento MEDIF/FREMEC",
    featured: false,
    status: "building",
    stage: 2,
    version: "In development",
    versionPt: "Em desenvolvimento",
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
      en: "Medical clearance requests (MEDIF/FREMEC) involve sensitive decisions, regulatory exceptions and clinical variation. Collaborators had few templates and tight deadlines, with real risk of answers that were legally sensitive or lacked empathy.",
      pt: "Os pedidos de autorização médica (MEDIF/FREMEC) envolvem decisões sensíveis, exceções regulatórias e variação clínica. Os colaboradores tinham poucos modelos e prazos curtos, com risco real de respostas juridicamente sensíveis ou pouco empáticas."
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
      core: { en: "Service agent", pt: "Agente de atendimento" },
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
  },

  {
    id: "ground-logistics",
    name: "Ground Logistics Requests",
    namePt: "Pedidos de Logística Terrestre",
    featured: false,
    status: "planned",
    stage: 1,
    version: "MVP approved Sep 2026",
    versionPt: "MVP aprovado em set/2026",
    channel: "Microsoft Teams",
    stack: ["Copilot Studio", "Adaptive Cards", "Dataverse", "Power Automate", "SharePoint"],
    flow: [
      { en: ["Guided request", "An Adaptive Card asks only what the trip needs."], pt: ["Pedido guiado", "Um Adaptive Card pergunta só o que a viagem precisa."] },
      { en: ["Validation", "Missing or inconsistent data is caught before it reaches the analyst."], pt: ["Validação", "Dados faltantes ou inconsistentes são barrados antes de chegar ao analista."] },
      { en: ["Protocol + notification", "The requester gets a protocol number; the team is notified."], pt: ["Protocolo + notificação", "O solicitante recebe um protocolo; o time é notificado."] },
      { en: ["Status in the chat", "Anyone can check progress without calling."], pt: ["Status no chat", "Qualquer pessoa acompanha o andamento sem precisar ligar."] }
    ],
    title: {
      en: "One channel for every ground transport request",
      pt: "Um canal único para todos os pedidos de transporte terrestre"
    },
    short: {
      en: "Replaces emails, calls and chat messages with one guided request, a protocol number and status tracking.",
      pt: "Substitui e-mails, ligações e mensagens por um pedido guiado, com número de protocolo e acompanhamento de status."
    },
    role: {
      en: "Product owner and solution designer",
      pt: "Product owner e designer da solução"
    },
    pain: {
      en: "Transport requests arrived by email, phone, Teams and WhatsApp with no standard. Hundreds of requests a month had to be checked manually, causing rework, no traceability and days of consolidation at every month's close.",
      pt: "Os pedidos de transporte chegavam por e-mail, telefone, Teams e WhatsApp, sem padrão. Centenas de pedidos por mês precisavam ser conferidos manualmente, gerando retrabalho, falta de rastreabilidade e dias de consolidação a cada fechamento."
    },
    solution: {
      en: "A single channel in Teams with a conversational Adaptive Card form, automatic protocol number, notifications and status lookup — so requests arrive complete the first time and every step is traceable.",
      pt: "Um canal único no Teams com formulário conversacional em Adaptive Card, número de protocolo automático, notificações e consulta de status — para que os pedidos cheguem completos na primeira vez e cada etapa seja rastreável."
    },
    design: [
      { en: "The form asks only what the operation needs, in the order people think about a trip.", pt: "O formulário pergunta só o que a operação precisa, na ordem em que as pessoas pensam uma viagem." },
      { en: "Status lookup in the same chat, so nobody has to call to ask.", pt: "Consulta de status no mesmo chat, para ninguém precisar ligar para perguntar." }
    ],
    metrics: [
      { value: "−50%", kind: "goal", label: { en: "average service time", pt: "no tempo médio de atendimento" } },
      { value: "≥80%", kind: "goal", label: { en: "error-free executions", pt: "de execuções sem erro" } }
    ],
    architecture: {
      channel: "Teams",
      core: { en: "Request agent", pt: "Agente de pedidos" },
      children: [
        { en: "Adaptive Card form", pt: "Formulário Adaptive Card" },
        { en: "Notifications & status", pt: "Notificações e status" }
      ],
      sources: [
        { en: "Dataverse", pt: "Dataverse" },
        { en: "Power Automate flows", pt: "Fluxos Power Automate" }
      ]
    },
    next: {
      en: "Build the MVP starting in November and measure service time against the current baseline.",
      pt: "Construir o MVP a partir de novembro e medir o tempo de atendimento contra a linha de base atual."
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
    text: { en: "GOL's first Alexa skill, Smart Fare, GOL ID biometric boarding, GOLLOG Online Sales and the Employee App — as UX lead in agile, cross-functional squads.", pt: "Primeira skill da GOL para Alexa, Tarifa Inteligente, embarque biométrico GOL ID, GOLLOG Vendas Online e o App dos Colaboradores — como UX lead em squads ágeis e multidisciplinares." } },
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
