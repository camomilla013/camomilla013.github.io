/* ==========================================================================
   PRODUCT MANAGEMENT PAGE (product.html) — content and texts.
   This page is not linked from the navigation or the home page: share the
   URL directly in Product Manager applications.
   It is loaded only by product.html, so it adds no weight to other pages.

   Each product:
   - id: unique, no spaces
   - stage: pill style → live | testing | building | foundation
   - stageLabel: the text on the pill { en, pt }
   - role: your role in this product { en, pt }
   - problem: the business problem, one paragraph { en, pt }
   - decisions: product decisions and trade-offs [{ en, pt }, …]
   - metrics: kind "result" (measured) or "goal" (target)
   - stakeholders: who you aligned with { en, pt }
   - stack: tags
   - caseId: optional → links to agent.html?id=... (the full case)
   ========================================================================== */
(function () {
  "use strict";
  const P = window.PORTFOLIO;

  const PM = { en: "Product manager", pt: "Product manager" };

  P.pm = {
    /* Summary numbers at the top of the page */
    summary: [
      { value: "7", label: { en: "AI and automation products I led as product manager", pt: "produtos de IA e automação em que atuei como product manager" } },
      { value: "2", label: { en: "agents in production, including GOL's most-used agent", pt: "agentes em produção, entre eles o agente mais usado da GOL" } },
      { value: "3", label: { en: "MVPs in validation, each with success goals set up front", pt: "MVPs em validação, todos com metas de sucesso definidas antes" } },
      { value: "1", label: { en: "release standard (Dev → Test → Prod) shared by the squad", pt: "padrão de release (Dev → HML → Prod) compartilhado pelo squad" } }
    ],

    /* How I run a product — 5 steps */
    process: [
      { en: ["Frame the problem", "Discovery with the business area in Miro and FigJam: the pain, who feels it and what it costs today."], pt: ["Enquadrar o problema", "Discovery com a área de negócio no Miro e no FigJam: qual é a dor, quem sente e quanto ela custa hoje."] },
      { en: ["Scope the MVP", "Prioritise the smallest version that proves value — and agree on what stays out."], pt: ["Recortar o MVP", "Priorizar a menor versão que prova valor — e combinar o que fica de fora."] },
      { en: ["Define success first", "Goals agreed before building: adoption, assertiveness, time saved, compliance."], pt: ["Definir o sucesso antes", "Metas acordadas antes de construir: adoção, assertividade, tempo economizado, conformidade."] },
      { en: ["Deliver with the squad", "Backlog and rituals in Jira and Azure DevOps. I also design and build, so ideas become testable fast."], pt: ["Entregar com o squad", "Backlog e rituais no Jira e no Azure DevOps. Também desenho e construo, então as ideias viram algo testável rápido."] },
      { en: ["Roll out and learn", "Release through Dev, Test and Prod, then track usage, gaps and quality in Power BI, Datadog and Databricks to plan the next version."], pt: ["Lançar e aprender", "Release por Dev, HML e Prod, depois acompanhar uso, lacunas e qualidade no Power BI, Datadog e Databricks para planejar a próxima versão."] }
    ],

    products: [
      {
        id: "gal",
        name: "GAL",
        stage: "live",
        stageLabel: { en: "In production since 2024 · company-wide", pt: "Em produção desde 2024 · toda a empresa" },
        role: PM,
        title: { en: "GOL's first generative-AI assistant — and its most-used agent every day", pt: "O primeiro assistente de IA generativa da GOL — e o agente mais usado todos os dias" },
        problem: {
          en: "GAL answers employees' questions in Teams, grounded in internal manuals that change often. Version 1.0 launched to the whole company in February 2024 — and as usage grew, every knowledge update meant manual reconfiguration between environments: slow, risky and a blocker to keeping answers current.",
          pt: "A GAL responde dúvidas dos colaboradores no Teams, com base em manuais internos que mudam com frequência. A versão 1.0 foi lançada para a empresa toda em fevereiro de 2024 — e, com o uso crescendo, cada atualização de conhecimento exigia reconfiguração manual entre ambientes: lenta, arriscada e um bloqueio para manter as respostas atualizadas."
        },
        decisions: [
          { en: "Led the relaunch as GAL 2.0 (February 2026) on a new Copilot Studio architecture, with knowledge maintenance in scope: separate Dev and Prod knowledge spaces and one release path, so content changes without breaking production.", pt: "Conduzi o relançamento como GAL 2.0 (fevereiro de 2026) em uma nova arquitetura no Copilot Studio, com a manutenção do conhecimento no escopo: bases separadas de Dev e Prod e um caminho único de release, para o conteúdo mudar sem quebrar a produção." },
          { en: "Created a usage dashboard — usage, knowledge gaps and answer quality — to decide what to improve next with data.", pt: "Criei um dashboard de uso — uso, lacunas de conhecimento e qualidade das respostas — para decidir com dados o que melhorar." },
          { en: "Delivered recurring reports to internal client areas on usage and performance by subject.", pt: "Entreguei relatórios recorrentes às áreas clientes internas sobre uso e desempenho por assunto." }
        ],
        metrics: [
          { value: "1st", valuePt: "1º", kind: "result", label: { en: "generative-AI assistant at GOL", pt: "assistente de IA generativa da GOL" } },
          { value: "#1", valuePt: "nº 1", kind: "result", label: { en: "most-used agent at GOL every day — around 300 users a day", pt: "agente mais usado da GOL todos os dias — cerca de 300 usuários por dia" } },
          { value: "Feb 2024", valuePt: "fev/2024", kind: "result", label: { en: "GAL 1.0 launched to the whole company", pt: "GAL 1.0 lançada para a empresa toda" } },
          { value: "Feb 2026", valuePt: "fev/2026", kind: "result", label: { en: "GAL 2.0 relaunched on a new Copilot Studio architecture", pt: "GAL 2.0 relançada em nova arquitetura no Copilot Studio" } }
        ],
        stakeholders: { en: "Internal client areas that own the knowledge, IT and the GOL Labs squad", pt: "Áreas clientes internas donas do conhecimento, TI e o squad do GOL Labs" },
        stack: ["Copilot Studio", "Teams", "SharePoint", "Usage dashboard"],
        caseId: "gal"
      },
      {
        id: "lean-mentor",
        name: "Lean Mentor",
        namePt: "Mentor Lean",
        stage: "live",
        stageLabel: { en: "V1 in production · V2 in validation", pt: "V1 em produção · V2 em validação" },
        role: PM,
        title: { en: "A digital mentor that removes a bottleneck in Lean problem solving", pt: "Um mentor digital que tira o gargalo da resolução de problemas Lean" },
        problem: {
          en: "Employees depended on a few Lean mentors to apply the A3 method, and each PDCA cycle took 2–3 hours of manual analysis. The result: a bottleneck, slow feedback and inconsistent use of the method.",
          pt: "Os colaboradores dependiam de poucos mentores Lean para aplicar o método A3, e cada ciclo PDCA levava de 2 a 3 horas de análise manual. O resultado: gargalo, feedback lento e uso inconsistente do método."
        },
        decisions: [
          { en: "Split the roadmap in two releases: V1 ships the mentoring conversation; V2 adds automatic scoring once the rubric is validated.", pt: "Dividi o roadmap em duas entregas: a V1 lança a conversa de mentoria; a V2 adiciona a pontuação automática depois que a rubrica for validada." },
          { en: "A fixed scoring rubric, validated with Lean specialists before V2 goes live, so every score is consistent.", pt: "Uma rubrica de pontuação fixa, validada com especialistas Lean antes de a V2 entrar no ar, para toda nota ser consistente." }
        ],
        metrics: [
          { value: "Aug 2026", valuePt: "ago/2026", kind: "result", label: { en: "V1 published", pt: "V1 publicada" } },
          { value: "2h → 1h", kind: "goal", label: { en: "mentoring time per PDCA cycle", pt: "de mentoria por ciclo PDCA" } },
          { value: ">80%", kind: "goal", label: { en: "assertiveness", pt: "de assertividade" } }
        ],
        stakeholders: { en: "Lean mentors and specialists, and the employees who write A3 reports", pt: "Mentores e especialistas Lean, e os colaboradores que escrevem relatórios A3" },
        stack: ["Copilot Studio", "Multi-agent", "Evaluation rubric"],
        caseId: "lean-mentor"
      },
      {
        id: "continuous-improvement",
        name: "Continuous Improvement Research Agent",
        namePt: "Agente de Pesquisa de Melhoria Contínua",
        stage: "testing",
        stageLabel: { en: "MVP · QA with users", pt: "MVP · QA com usuários" },
        role: PM,
        title: { en: "Years of improvement projects, searchable in plain language", pt: "Anos de projetos de melhoria, pesquisáveis em linguagem natural" },
        problem: {
          en: "The area's project history was scattered across folders and formats. Finding a past initiative depended on whoever took part in it, and valuable lessons were rarely reused.",
          pt: "O histórico de projetos da área estava espalhado em pastas e formatos diferentes. Encontrar uma iniciativa passada dependia de quem participou dela, e lições valiosas raramente eram reaproveitadas."
        },
        decisions: [
          { en: "Scoped the MVP to a controlled knowledge base, to keep answers reliable from day one.", pt: "Recortei o MVP em uma base de conhecimento controlada, para as respostas serem confiáveis desde o primeiro dia." },
          { en: "Made source citations mandatory, so people can verify an answer before reusing it.", pt: "Tornei obrigatória a citação de fontes, para as pessoas verificarem a resposta antes de reutilizá-la." },
          { en: "Put access in the hands of the business area, through a distribution list — secure, simple and without IT tickets.", pt: "Deixei o acesso nas mãos da área de negócio, por uma lista de distribuição — seguro, simples e sem chamados de TI." }
        ],
        metrics: [
          { value: "4", kind: "result", label: { en: "collaborators in QA", pt: "colaboradores em QA" } },
          { value: "≥70%", kind: "goal", label: { en: "assertiveness", pt: "de assertividade" } },
          { value: "≥80%", kind: "goal", label: { en: "positive feedback", pt: "de feedback positivo" } }
        ],
        stakeholders: { en: "Continuous Improvement area (knowledge and access owners) and QA testers", pt: "Área de Melhoria Contínua (dona do conhecimento e do acesso) e testadores de QA" },
        stack: ["Copilot Studio", "RAG", "SharePoint", "Entra ID"],
        caseId: "continuous-improvement"
      },
      {
        id: "magno-writer",
        name: "Magno Writer Agent",
        namePt: "Agente Redator Magno",
        stage: "testing",
        stageLabel: { en: "MVP · usability testing", pt: "MVP · teste de usabilidade" },
        role: PM,
        title: { en: "Faster, more personal messages for GOL's top-tier customers", pt: "Mensagens mais rápidas e pessoais para os clientes de mais alto nível da GOL" },
        problem: {
          en: "Serving Magno, GOL's top customer tier, calls for delight and personalisation. But service agents write under time pressure with few tools, so quality varies and messages risk sounding robotic.",
          pt: "Atender o cliente Magno, o nível mais alto da GOL, exige encantamento e personalização. Mas os atendentes escrevem sob pressão de tempo e com poucas ferramentas, então a qualidade varia e as mensagens correm o risco de soar robóticas."
        },
        decisions: [
          { en: "Human-in-the-loop as a product rule: the agent drafts, the service agent always decides what is sent.", pt: "Human-in-the-loop como regra de produto: o agente redige, o atendente sempre decide o que é enviado." },
          { en: "Two modes — write from scratch or improve a draft — to fit the way the team already works and ease adoption.", pt: "Dois modos — escrever do zero ou melhorar um rascunho — para encaixar no jeito que o time já trabalha e facilitar a adoção." },
          { en: "Go-live only after a usability round with the service team.", pt: "Entrada em produção só depois de uma rodada de usabilidade com o time de atendimento." }
        ],
        metrics: [
          { value: ">70%", kind: "goal", label: { en: "adequate responses", pt: "de respostas adequadas" } },
          { value: "−50%", kind: "goal", label: { en: "drafting time", pt: "no tempo de redação" } },
          { value: "≥89%", kind: "goal", label: { en: "top-box PSAT", pt: "de PSAT top" } }
        ],
        stakeholders: { en: "Magno service team and customer experience", pt: "Time de atendimento Magno e experiência do cliente" },
        stack: ["Copilot Studio", "Tone of voice", "Human-in-the-loop"],
        caseId: "magno-writer"
      },
      {
        id: "medical-forms",
        name: "Medical Forms Support Agent",
        namePt: "Agente de Apoio a Formulários Médicos",
        stage: "testing",
        stageLabel: { en: "MVP · compliance testing", pt: "MVP · testes de conformidade" },
        role: PM,
        title: { en: "Safe, empathetic answers in a regulated, sensitive journey", pt: "Respostas seguras e empáticas em uma jornada sensível e regulada" },
        problem: {
          en: "Medical clearance requests involve sensitive decisions, regulatory exceptions and clinical variation. Collaborators had few templates and tight deadlines, with real risk of answers that were legally sensitive or lacked empathy.",
          pt: "Os pedidos de autorização médica envolvem decisões sensíveis, exceções regulatórias e variação clínica. Os colaboradores tinham poucos modelos e prazos curtos, com risco real de respostas juridicamente sensíveis ou pouco empáticas."
        },
        decisions: [
          { en: "Drew a hard product boundary: the agent suggests wording and never makes a medical or legal decision.", pt: "Defini um limite claro de produto: o agente sugere o texto e nunca toma uma decisão médica ou jurídica." },
          { en: "Grounded answers only in a response library validated by the Medical and Legal teams.", pt: "Baseei as respostas apenas em uma biblioteca validada pelos times Médico e Jurídico." },
          { en: "Put compliance testing with Medical and Legal before any pilot with the service team.", pt: "Coloquei os testes de conformidade com o Médico e o Jurídico antes de qualquer piloto com o atendimento." }
        ],
        metrics: [
          { value: ">90%", kind: "goal", label: { en: "compliance", pt: "de conformidade" } },
          { value: "−50%", kind: "goal", label: { en: "email drafting time", pt: "no tempo de redação de e-mails" } }
        ],
        stakeholders: { en: "Medical and Legal teams, and the customer service team", pt: "Times Médico e Jurídico, e o time de atendimento" },
        stack: ["Copilot Studio", "RAG", "Guardrails", "Responsible AI"],
        caseId: "medical-forms"
      },
      {
        id: "ground-logistics",
        name: "Ground Logistics Requests",
        namePt: "Pedidos de Logística Terrestre",
        stage: "building",
        stageLabel: { en: "MVP plan approved · in development", pt: "Plano do MVP aprovado · em desenvolvimento" },
        role: PM,
        title: { en: "One channel for ground transport requests, with full traceability", pt: "Um canal único para pedidos de transporte terrestre, com rastreabilidade" },
        problem: {
          en: "Ground transport requests arrived by email, phone, Teams and WhatsApp, with no standard. The team checked data by hand, which caused rework and no traceability — more than 500 requests in a single month, and about two days of consolidation at every closing.",
          pt: "Os pedidos de transporte terrestre chegavam por e-mail, telefone, Teams e WhatsApp, sem padrão. O time conferia os dados à mão, o que gerava retrabalho e falta de rastreabilidade — mais de 500 pedidos em um único mês e cerca de dois dias de consolidação a cada fechamento."
        },
        decisions: [
          { en: "Replaced four entry channels with a single one in Teams, with a structured form, a protocol number, notifications and status lookup.", pt: "Troquei quatro canais de entrada por um único no Teams, com formulário estruturado, número de protocolo, notificações e consulta de status." },
          { en: "Built the MVP plan with the area, approved in September 2026, with development starting in November.", pt: "Construí o plano do MVP com a área, aprovado em setembro de 2026, com desenvolvimento a partir de novembro." },
          { en: "Built on the Microsoft stack already in use — Copilot Studio, Power Automate, Dataverse and SharePoint.", pt: "Construído na stack Microsoft que já é usada — Copilot Studio, Power Automate, Dataverse e SharePoint." }
        ],
        metrics: [
          { value: "Sep 2026", valuePt: "set/2026", kind: "result", label: { en: "MVP plan approved", pt: "plano do MVP aprovado" } },
          { value: "−50%", kind: "goal", label: { en: "average service time", pt: "no tempo médio de atendimento" } },
          { value: "≥80%", kind: "goal", label: { en: "error-free executions", pt: "de execuções sem erro" } }
        ],
        stakeholders: { en: "Ground logistics team and the areas that request transport", pt: "Time de logística terrestre e as áreas que solicitam transporte" },
        stack: ["Copilot Studio", "Adaptive Cards", "Power Automate", "Dataverse", "SharePoint"]
      },
      {
        id: "alm",
        name: "ALM for Power Platform",
        namePt: "ALM para Power Platform",
        stage: "foundation",
        stageLabel: { en: "Platform foundation", pt: "Fundação da plataforma" },
        role: PM,
        title: { en: "One reliable release path for every agent the squad ships", pt: "Um caminho de release confiável para todos os agentes do squad" },
        problem: {
          en: "Moving agents and automations between Dev, Test and Prod caused pipeline failures and unexpected behaviour. Each release depended on manual steps, which slowed every product in the squad and put production at risk.",
          pt: "Levar agentes e automações entre Dev, HML e Prod causava falhas de pipeline e comportamentos inesperados. Cada release dependia de passos manuais, o que atrasava todos os produtos do squad e colocava a produção em risco."
        },
        decisions: [
          { en: "Treated the release process as an internal product, with the squad as its users.", pt: "Tratei o processo de release como um produto interno, com o squad como usuário." },
          { en: "Standardised deployment pipelines and Build Tools across environments.", pt: "Padronizei pipelines de deploy e Build Tools entre os ambientes." },
          { en: "Set the model first applied to GAL as the default for every new agent.", pt: "Defini o modelo aplicado primeiro na GAL como padrão para todo novo agente." }
        ],
        metrics: [
          { value: "3", kind: "result", label: { en: "environments with one standard release path", pt: "ambientes com um caminho padrão de release" } },
          { value: "Default", valuePt: "Padrão", kind: "goal", label: { en: "model for every new squad agent", pt: "para todo novo agente do squad" } }
        ],
        stakeholders: { en: "GOL Labs squad, platform and IT governance", pt: "Squad do GOL Labs, plataforma e governança de TI" },
        stack: ["Power Platform", "Managed solutions", "Pipelines", "Build Tools"]
      }
    ],

    /* Product toolkit — chips by group (cluster sets the color) */
    toolkit: [
      { cluster: "craft", group: { en: "Discovery & strategy", pt: "Discovery e estratégia" },
        items: { en: ["Problem framing", "User research", "Business case", "Double Diamond", "Design Thinking", "Prioritisation", "Miro", "FigJam"], pt: ["Enquadramento do problema", "Pesquisa com usuários", "Business case", "Double Diamond", "Design Thinking", "Priorização", "Miro", "FigJam"] } },
      { cluster: "talk", group: { en: "Delivery", pt: "Entrega" },
        items: { en: ["Backlog management", "MVP scoping", "Scrum", "Kanban", "Lean", "Jira", "Azure DevOps"], pt: ["Gestão de backlog", "Recorte de MVP", "Scrum", "Kanban", "Lean", "Jira", "Azure DevOps"] } },
      { cluster: "product", group: { en: "Metrics & governance", pt: "Métricas e governança" },
        items: { en: ["Success metrics & KPIs", "Adoption", "Usage dashboards", "Power BI", "Datadog", "Databricks", "Responsible AI", "LGPD", "Dev/Test/Prod release governance"], pt: ["Métricas de sucesso e KPIs", "Adoção", "Dashboards de uso", "Power BI", "Datadog", "Databricks", "IA responsável", "LGPD", "Governança de release Dev/HML/Prod"] } },
      { cluster: "build", group: { en: "Hands-on", pt: "Mão na massa" },
        items: { en: ["Copilot Studio", "Claude", "Power Automate", "Dataverse", "SharePoint", "Prototyping", "Technical documentation"], pt: ["Copilot Studio", "Claude", "Power Automate", "Dataverse", "SharePoint", "Prototipação", "Documentação técnica"] } }
    ]
  };

  /* Page texts (EN is in product.html; PT here) */
  Object.assign(window.STRINGS, {
    "title.product": { en: "Product management — Camilla Rebouças", pt: "Gestão de produto — Camilla Rebouças" },
    "pm.label":   { en: "product management portfolio", pt: "portfólio de gestão de produto" },
    "pm.title":   { en: "AI products, owned from problem to rollout", pt: "Produtos de IA, do problema ao rollout" },
    "pm.lede":    {
      en: "As product manager at GOL Labs, GOL Airlines' innovation lab, I take AI and automation products from discovery to enterprise rollout: framing the problem with the business, scoping the MVP, setting success metrics up front and leading a cross-functional squad through delivery and iteration.",
      pt: "Como product manager no GOL Labs, o laboratório de inovação da GOL Linhas Aéreas, levo produtos de IA e automação do discovery ao rollout corporativo: enquadro o problema com o negócio, recorto o MVP, defino as métricas de sucesso antes de construir e conduzo um squad multidisciplinar na entrega e na evolução."
    },
    "pm.summaryLabel": { en: "Product portfolio at a glance", pt: "Portfólio de produtos em números" },
    "pm.processTitle": { en: "How I run a product", pt: "Como eu conduzo um produto" },
    "pm.processLede":  { en: "The same five steps in every product below, from a one-channel form to a multi-agent mentor.", pt: "Os mesmos cinco passos em todos os produtos abaixo, de um formulário em canal único a um mentor multiagente." },
    "pm.listTitle":    { en: "Products I led", pt: "Produtos que conduzi" },
    "pm.listLede":     {
      en: "Seven AI and automation products where I was the product manager. For each: the business problem, the product decisions I made and how success is measured — results when measured, goals while in validation.",
      pt: "Sete produtos de IA e automação em que fui a product manager. Em cada um: o problema de negócio, as decisões de produto que tomei e como o sucesso é medido — resultados quando já medidos, metas enquanto estão em validação."
    },
    "pm.confidential": { en: "Screens, internal documents and operational data are omitted for confidentiality.", pt: "Telas, documentos internos e dados operacionais foram omitidos por confidencialidade." },
    "pm.problem":   { en: "Business problem", pt: "Problema de negócio" },
    "pm.decisions": { en: "Product decisions", pt: "Decisões de produto" },
    "pm.success":   { en: "Success metrics", pt: "Métricas de sucesso" },
    "pm.role":      { en: "My role", pt: "Meu papel" },
    "pm.stakeholders": { en: "Stakeholders", pt: "Stakeholders" },
    "pm.stack":     { en: "Stack", pt: "Stack" },
    "pm.case":      { en: "Read the full case", pt: "Ver o case completo" },
    "pm.toolkitTitle": { en: "Product toolkit", pt: "Ferramentas de produto" },
    "pm.toolkitLede":  { en: "Methods and tools I use day to day as a PM — and the hands-on skills that let me prototype and build with the squad.", pt: "Métodos e ferramentas que uso no dia a dia como PM — e as habilidades práticas que me permitem prototipar e construir junto com o squad." },
    "pm.ctaLabel": { en: "next step", pt: "próximo passo" },
    "pm.ctaTitle": { en: "Looking for a PM who can also build?", pt: "Procurando uma PM que também sabe construir?" },
    "pm.ctaText":  { en: "I'm open to Product Manager roles in AI and digital products — in Brazil or remote. Let's talk on LinkedIn.", pt: "Estou aberta a posições de Product Manager em produtos digitais e de IA — no Brasil ou remotas. Vamos conversar no LinkedIn." },
    "pm.ctaBtn":   { en: "Message me on LinkedIn", pt: "Falar comigo no LinkedIn" },
    "pm.ctaAgents": { en: "See the AI agents portfolio", pt: "Ver o portfólio de agentes de IA" }
  });
})();
