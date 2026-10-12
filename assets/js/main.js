/* ==========================================================================
   main.js — shared components (header, footer, language, theme) and
   the renderers for every page. Each page sets <body data-page="...">.
   ========================================================================== */
(function () {
  "use strict";

  const P = window.PORTFOLIO;
  const S = window.STRINGS;
  const LANGS = ["en", "pt"];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- storage (never breaks the page if blocked) ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  /* ---------- language ---------- */
  let lang = (function () {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) { store.set("lang", q); return q; }
    const saved = store.get("lang");
    return LANGS.includes(saved) ? saved : "en"; // English is the default
  })();

  /** Pick the right language from a {en, pt} object (or return a plain string). */
  const t = (v) => (v == null ? "" : typeof v === "string" ? v : (v[lang] ?? v.en ?? ""));
  /** UI string by key from i18n.js */
  const s = (key) => (S[key] ? t(S[key]) : key);
  const nameOf = (item) => (lang === "pt" && item.namePt ? item.namePt : item.name);
  const valueOf = (m) => (lang === "pt" && m.valuePt ? m.valuePt : m.value);
  /** Internal link that keeps the chosen language when it isn't the default. */
  const href = (url) => {
    if (lang === "en") return url;
    return url + (url.includes("?") ? "&" : "?") + "lang=" + lang;
  };
  const esc = (str) => String(str).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- icons (one inline sprite, referenced with <use>) ---------- */
  const ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    persona: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    dialog: '<path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M19 9h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3-3h-4"/>',
    book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    nodes: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5l-5.5 5.5M12 11.5l5.5 5.5"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    send: '<path d="M4 12l16-8-6 16-2-7z"/>'
  };
  const icon = (name) => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><use href="#i-${name}"/></svg>`;
  function injectSprite() {
    const sprite = Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("");
    document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${sprite}</svg>`);
  }

  /* ---------- header & footer ---------- */
  const NAV = [
    { page: "agents", url: "agents.html", key: "nav.agents" },
    { page: "work", url: "work.html", key: "nav.work" },
    { page: "about", url: "about.html", key: "nav.about" },
    { page: "contact", url: "contact.html", key: "nav.contact" }
  ];
  const page = document.body.dataset.page;
  const activeNav = { agent: "agents", project: "work" }[page] || page;

  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.className = "site-header";
    el.innerHTML = `
      <div class="container">
        <a class="brand" href="${href("index.html")}" aria-label="Camilla Rebouças — ${esc(s("nav.home"))}">
          <span class="brand__mark" aria-hidden="true">CR</span>
          <span class="brand__name">Camilla Rebouças</span>
        </a>
        <nav class="nav" id="site-nav" aria-label="${esc(s("nav.label"))}">
          ${NAV.map((n) => `<a href="${href(n.url)}"${n.page === activeNav ? ' aria-current="page"' : ""}>${esc(s(n.key))}</a>`).join("")}
        </nav>
        <div class="header-tools">
          <div class="seg" role="group" aria-label="${esc(s("ui.language"))}">
            <button type="button" data-lang="en" lang="en" aria-pressed="${lang === "en"}" aria-label="English">EN</button>
            <button type="button" data-lang="pt" lang="pt-BR" aria-pressed="${lang === "pt"}" aria-label="Português">PT</button>
          </div>
          <button type="button" class="icon-btn" id="theme-toggle" aria-label="${esc(s("ui.theme"))}">${icon(isLight() ? "moon" : "sun")}</button>
          <button type="button" class="icon-btn menu-btn" id="menu-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="${esc(s("ui.menu"))}">${icon("menu")}</button>
        </div>
      </div>`;

    el.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    el.querySelector("#theme-toggle").addEventListener("click", toggleTheme);
    const menuBtn = el.querySelector("#menu-toggle");
    const nav = el.querySelector("#site-nav");
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.innerHTML = icon(open ? "close" : "menu");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { menuBtn.click(); menuBtn.focus(); }
    });
  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.className = "site-footer";
    el.innerHTML = `
      <div class="container">
        <p>© ${new Date().getFullYear()} Camilla Alves Rebouças. ${esc(s("footer.made"))}</p>
        <div class="footer-links">
          <a href="${P.links.linkedin}" target="_blank" rel="noopener">${icon("linkedin")} LinkedIn</a>
        </div>
      </div>`;
  }

  /* ---------- theme (dark by default) ---------- */
  function isLight() { return document.documentElement.dataset.theme === "light"; }
  function toggleTheme() {
    const next = isLight() ? "dark" : "light";
    if (next === "dark") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = "light";
    store.set("theme", next);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.innerHTML = icon(next === "light" ? "moon" : "sun");
    document.dispatchEvent(new CustomEvent("themechange"));
  }

  /* ---------- static text translation ---------- */
  function applyStaticText() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el._en === undefined) el._en = el.innerHTML;
      const entry = S[el.dataset.i18n];
      el.innerHTML = lang === "en" || !entry ? el._en : entry.pt;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        const store_ = "_en_" + attr;
        if (el[store_] === undefined) el[store_] = el.getAttribute(attr);
        el.setAttribute(attr, lang === "en" || !S[key] ? el[store_] : S[key].pt);
      });
    });
    // keep internal links in the chosen language
    document.querySelectorAll("main a[data-internal]").forEach((a) => {
      if (!a._base) a._base = a.getAttribute("href");
      a.setAttribute("href", href(a._base));
    });
    if (document._enTitle === undefined) document._enTitle = document.title;
    const titleKey = "title." + page;
    if (!document.body.dataset.dynamicTitle) document.title = lang === "pt" && S[titleKey] ? S[titleKey].pt : document._enTitle;
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    store.set("lang", lang);
    const url = new URL(location.href);
    if (lang === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    renderAll(false);
  }

  /* ---------- reusable pieces ---------- */
  const statusPill = (key) => `<span class="status status--${key}">${esc(t(P.status[key]))}</span>`;

  function agentCard(a) {
    const m = a.metrics[0];
    const kpiLabel = (m.kind === "goal" ? s("ui.goal") + ": " : "") + t(m.label);
    return `
      <a class="card" href="${href("agent.html?id=" + a.id)}">
        <div class="card__top"><span class="card__name">${esc(nameOf(a))}</span>${statusPill(a.status)}</div>
        <h3>${esc(t(a.title))}</h3>
        <p>${esc(t(a.short))}</p>
        <div class="tags">${a.stack.slice(0, 3).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        <div class="card__foot">
          <div class="card__kpi"><b>${esc(valueOf(m))}</b><span>${esc(kpiLabel)}</span></div>
          <span class="card__go">${esc(s("ui.readCase"))} ${icon("arrow")}</span>
        </div>
      </a>`;
  }

  function projectCard(p) {
    return `
      <a class="card" href="${href("project.html?id=" + p.id)}">
        <div class="thumb">${thumb(p.kind)}</div>
        <span class="card__meta">${esc(p.company)}, ${esc(p.year)}</span>
        <h3>${esc(nameOf(p))}</h3>
        <p>${esc(t(p.short))}</p>
        <div class="card__foot">
          <div class="tags">${p.tags.slice(0, 2).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
          <span class="card__go">${esc(s("ui.readCase"))} ${icon("arrow")}</span>
        </div>
      </a>`;
  }

  /* Illustrative thumbnails — no real screens, no confidential data */
  function thumb(kind) {
    const L = 'style="stroke:var(--line-strong)"', C = "var(--cyan)", Pp = "var(--purple)", B = "var(--blue)";
    const base = (inner) => `<svg viewBox="0 0 400 225" fill="none" aria-hidden="true">${inner}</svg>`;
    switch (kind) {
      case "voice": {
        let bars = "";
        for (let i = 0; i < 34; i++) {
          const h = 10 + Math.abs(Math.sin(i * 0.55) * 52) + (i % 3) * 6;
          bars += `<rect x="${54 + i * 9}" y="${130 - h / 2}" width="4" height="${h}" rx="2" style="fill:${i > 12 && i < 24 ? C : "var(--line-strong)"}"/>`;
        }
        return base(`${bars}<rect x="120" y="34" width="160" height="34" rx="17" style="fill:var(--surface);stroke:${Pp}"/><rect x="138" y="48" width="96" height="6" rx="3" style="fill:${Pp}"/>`);
      }
      case "commerce":
        return base(["Quote", "Book", "Pay", "Track"].map((x, i) =>
          `<rect x="${40 + i * 84}" y="86" width="68" height="54" rx="10" style="fill:var(--surface);stroke:${i === 2 ? C : "var(--line-strong)"}"/><rect x="${52 + i * 84}" y="104" width="${30 + i * 4}" height="6" rx="3" style="fill:${i === 2 ? C : "var(--faint)"}"/><rect x="${52 + i * 84}" y="118" width="40" height="5" rx="2.5" style="fill:var(--line-strong)"/>` +
          (i < 3 ? `<path d="M${110 + i * 84} 113h12" ${L} stroke-width="2"/>` : "")).join(""));
      case "cargo":
        return base(`<path d="M70 160 C140 160 150 70 230 70 S320 110 340 70" style="stroke:var(--line-strong)" stroke-width="2" stroke-dasharray="6 6"/><circle cx="70" cy="160" r="7" style="fill:${Pp}"/><circle cx="340" cy="70" r="7" style="fill:var(--line-strong)"/><rect x="212" y="52" width="36" height="36" rx="6" style="fill:var(--surface);stroke:${C}" stroke-width="2"/><path d="M212 64h36M230 52v12" style="stroke:${C}" stroke-width="2"/><rect x="60" y="182" width="120" height="6" rx="3" style="fill:var(--line-strong)"/><rect x="60" y="182" width="78" height="6" rx="3" style="fill:${C}"/>`);
      case "biometrics": {
        let dots = "";
        for (let y = 0; y < 7; y++) for (let x = 0; x < 9; x++) dots += `<circle cx="${130 + x * 18}" cy="${58 + y * 18}" r="1.6" style="fill:var(--line-strong)"/>`;
        return base(`${dots}<path d="M170 62 q30 -18 60 0 q14 30 0 66 q-30 28 -60 0 q-14 -36 0 -66z" style="stroke:${C}" stroke-width="2"/><path d="M186 92h6M208 92h6M196 112q4 4 8 0" style="stroke:${C}" stroke-width="2" stroke-linecap="round"/><path d="M150 50h-14v14M250 50h14v14M150 176h-14v-14M250 176h14v-14" style="stroke:${Pp}" stroke-width="2"/>`);
      }
      case "mobile":
        return base(`<rect x="150" y="22" width="100" height="186" rx="16" style="fill:var(--surface);stroke:var(--line-strong)" stroke-width="2"/><rect x="164" y="44" width="72" height="34" rx="8" style="fill:${Pp};opacity:.85"/>${[0, 1, 2].map((i) => `<rect x="164" y="${90 + i * 30}" width="72" height="22" rx="6" style="fill:var(--surface-2);stroke:var(--line)"/><circle cx="176" cy="${101 + i * 30}" r="5" style="fill:${i === 0 ? C : "var(--line-strong)"}"/>`).join("")}`);
      case "fintech":
        return base(`<rect x="60" y="56" width="150" height="94" rx="12" style="fill:var(--surface);stroke:${B}" stroke-width="2"/><rect x="76" y="76" width="26" height="18" rx="4" style="fill:${B};opacity:.7"/><rect x="76" y="124" width="90" height="6" rx="3" style="fill:var(--faint)"/><path d="M236 150 L262 120 L288 132 L314 92 L340 104" style="stroke:${C}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M236 166h104" ${L}/>`);
      case "infographic":
        return base(`<path d="M70 150 q40 -60 90 -40 t90 -30 t80 10" style="stroke:var(--line-strong)" stroke-width="2"/>${[[96, 130, 6], [160, 108, 10], [228, 86, 7], [300, 82, 12]].map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" style="fill:${i === 3 ? C : Pp};opacity:${i === 3 ? 1 : .55}"/>`).join("")}${[0, 1, 2, 3, 4].map((i) => `<rect x="${80 + i * 52}" y="${190 - (14 + i * 7)}" width="30" height="${14 + i * 7}" rx="3" style="fill:${i === 4 ? C : "var(--line-strong)"}"/>`).join("")}`);
      case "brand":
      default:
        return base([0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const x = 70 + (i % 4) * 70, y = 54 + Math.floor(i / 4) * 64;
          const col = [Pp, C, "var(--line-strong)", B][i % 4];
          return i % 3 === 0 ? `<circle cx="${x + 24}" cy="${y + 24}" r="24" style="fill:${col};opacity:.8"/>` : `<rect x="${x}" y="${y}" width="48" height="48" rx="${i % 2 ? 12 : 2}" style="fill:${col};opacity:.8"/>`;
        }).join(""));
    }
  }

  /* ---------- HOME ---------- */
  let chatPlayed = false;
  function renderHome() {
    const fa = document.getElementById("featured-agents");
    if (fa) fa.innerHTML = P.agents.filter((a) => a.featured).map(agentCard).join("");
    const fw = document.getElementById("featured-work");
    if (fw) fw.innerHTML = P.projects.filter((p) => p.featured).map(projectCard).join("");
    if (window.SkillsFlow) window.SkillsFlow.render(document.getElementById("skills-flow"), { lang, t, s });
    playChat();
  }

  function playChat() {
    const chat = document.querySelector(".chat");
    if (!chat) return;
    const steps = [...chat.querySelectorAll("[data-step]")];
    const answer = chat.querySelector("[data-stream]");
    if (chatPlayed || reduceMotion) { steps.forEach((el) => el.classList.remove("is-hidden")); chatPlayed = true; return; }
    chatPlayed = true;
    const full = answer.textContent;
    steps.forEach((el) => el.classList.add("is-hidden"));
    const show = (n) => steps.filter((el) => +el.dataset.step === n).forEach((el) => el.classList.remove("is-hidden"));
    setTimeout(() => show(1), 350);
    setTimeout(() => {
      answer.textContent = "";
      const caret = document.createElement("span"); caret.className = "caret";
      answer.after(caret);
      show(2);
      let i = 0;
      const tick = () => {
        // if the language changed mid-animation, finish immediately with the new text
        if (answer.dataset.done) { caret.remove(); return; }
        i += 2;
        answer.textContent = full.slice(0, i);
        if (i < full.length) setTimeout(tick, 16);
        else { caret.remove(); answer.dataset.done = "1"; setTimeout(() => show(3), 200); setTimeout(() => show(4), 600); }
      };
      tick();
    }, 1100);
  }

  /* ---------- AGENTS PAGE ---------- */
  function renderAgents() {
    const lc = document.getElementById("lifecycle");
    if (lc) {
      const sorted = [...P.agents].sort((a, b) => b.stage - a.stage);
      lc.innerHTML = `
        <div class="lifecycle__head" aria-hidden="true"><span>${esc(s("ui.agent"))}</span>
          <div class="lifecycle__stages">${P.stages.map((st) => `<span>${esc(t(st))}</span>`).join("")}</div></div>
        <div role="list">${sorted.map((a) => `
          <a role="listitem" class="lifecycle__row" href="${href("agent.html?id=" + a.id)}"
             aria-label="${esc(nameOf(a))}: ${esc(t(P.status[a.status]))}, ${esc(lang === "pt" ? a.versionPt : a.version)}">
            <span class="lifecycle__name">${esc(nameOf(a))}</span>
            <span class="lifecycle__bar" aria-hidden="true">${P.stages.map((_, i) => `<i class="${i <= a.stage ? "on" : ""}${i === a.stage ? " now" : ""}" style="--i:${i}"></i>`).join("")}</span>
            <span class="lifecycle__label">${statusPill(a.status)}${(lang === "pt" ? a.versionPt : a.version) !== t(P.status[a.status]) ? ` <span class="muted">— ${esc(lang === "pt" ? a.versionPt : a.version)}</span>` : ""}</span>
          </a>`).join("")}</div>`;
      observeOnce(lc);
    }
    const grid = document.getElementById("agent-grid");
    if (grid) grid.innerHTML = P.agents.map(agentCard).join("");
  }

  /* ---------- WORK PAGE ---------- */
  function renderWork() {
    const grid = document.getElementById("work-grid");
    if (grid) grid.innerHTML = P.projects.map(projectCard).join("");
  }

  /* ---------- AGENT CASE ---------- */
  function caseSection(label, title, body) {
    return `<section class="case-section"><div class="container">
      <div><span class="comment">${esc(label)}</span><h2>${esc(title)}</h2></div>
      <div class="body">${body}</div></div></section>`;
  }

  function notFound(el, listUrl, listKey) {
    el.innerHTML = `<section class="case-hero"><div class="container">
      <span class="comment">404</span><h1>${esc(s("ui.notFound"))}</h1>
      <p class="lede">${esc(s("ui.notFoundText"))}</p>
      <a class="btn btn--primary" href="${href(listUrl)}">${esc(s(listKey))} ${icon("arrow")}</a></div></section>`;
  }

  function renderAgentCase() {
    const el = document.getElementById("case");
    if (!el) return;
    const id = new URLSearchParams(location.search).get("id");
    const idx = P.agents.findIndex((a) => a.id === id);
    if (idx < 0) { notFound(el, "agents.html", "ui.allAgents"); return; }
    const a = P.agents[idx];
    const next = P.agents[(idx + 1) % P.agents.length];
    document.body.dataset.dynamicTitle = "1";
    document.title = `${nameOf(a)} — Camilla Rebouças`;

    const hasResult = a.metrics.some((m) => m.kind === "result");
    const hasGoal = a.metrics.some((m) => m.kind === "goal");
    const metricsTitle = hasResult && hasGoal ? s("case.resultsGoals") : hasResult ? s("case.results") : s("case.goals");
    const flow = a.flow || S["flow.default"].list;
    const channel = t(a.channel);
    const arch = a.architecture;
    const yaml = `<span class="c"># agent.yaml — ${esc(s("case.yamlNote"))}</span>
<span class="k">name</span>: <span class="s">${esc(nameOf(a))}</span>
<span class="k">channel</span>: <span class="s">${esc(channel)}</span>
<span class="k">status</span>: <span class="g">${esc(a.status)}</span>
<span class="k">role</span>: <span class="s">${esc(t(a.role))}</span>
<span class="k">stack</span>:
${a.stack.map((x) => `  - <span class="s">${esc(x)}</span>`).join("\n")}`;

    el.innerHTML = `
      <section class="case-hero"><div class="container">
        <a class="back" href="${href("agents.html")}">${icon("back")} ${esc(s("ui.allAgents"))}</a>
        <div class="card__top" style="justify-content:flex-start;gap:16px"><span class="card__name">${esc(nameOf(a))}</span>${statusPill(a.status)}</div>
        <h1>${esc(t(a.title))}</h1>
        <p class="lede">${esc(t(a.short))}</p>
        <dl class="facts">
          <div><dt>${esc(s("case.role"))}</dt><dd>${esc(t(a.role))}</dd></div>
          <div><dt>${esc(s("case.channel"))}</dt><dd>${esc(channel)}</dd></div>
          <div><dt>${esc(s("case.stage"))}</dt><dd>${esc(lang === "pt" ? a.versionPt : a.version)}</dd></div>
          <div><dt>${esc(s("case.org"))}</dt><dd>GOL Airlines — GOL Labs</dd></div>
        </dl>
      </div></section>
      ${caseSection(s("case.l.problem"), s("case.problem"), `<p>${esc(t(a.pain))}</p>`)}
      ${caseSection(s("case.l.solution"), s("case.solution"), `<p>${esc(t(a.solution))}</p>
        <h3 style="margin:var(--s4) 0 var(--s2)">${esc(s("case.decisions"))}</h3>
        <ul class="ticks">${a.design.map((d) => `<li>${esc(t(d))}</li>`).join("")}</ul>`)}
      ${caseSection(s("case.l.arch"), s("case.arch"), `
        <div class="grid grid--2" style="align-items:start">
          <figure class="arch" style="margin:0" aria-label="${esc(s("case.arch"))}">
            <div class="arch__label">${esc(s("arch.user"))}</div>
            <div class="arch__tier"><div class="arch__box">${esc(t(arch.channel))}</div></div>
            <div class="arch__wire"></div>
            <div class="arch__label">${esc(s("arch.agent"))}</div>
            <div class="arch__tier"><div class="arch__box arch__box--core">${esc(t(arch.core))}</div></div>
            <div class="arch__wire"></div>
            <div class="arch__label">${esc(s("arch.children"))}</div>
            <div class="arch__tier">${arch.children.map((c) => `<div class="arch__box arch__box--child">${esc(t(c))}</div>`).join("")}</div>
            <div class="arch__wire"></div>
            <div class="arch__label">${esc(s("arch.sources"))}</div>
            <div class="arch__tier">${arch.sources.map((c) => `<div class="arch__box arch__box--src">${esc(t(c))}</div>`).join("")}</div>
          </figure>
          <div class="terminal"><div class="terminal__bar"><i></i><i></i><i></i><span>agent.yaml</span></div><pre>${yaml}</pre></div>
        </div>`)}
      ${caseSection(s("case.l.flow"), s("case.flow"), `
        <ol class="steps steps--row" style="--n:${flow.length}">${flow.map((f) => { const [h, d] = t(f); return `<li><b>${esc(h)}</b><span>${esc(d)}</span></li>`; }).join("")}</ol>
        ${a.flow ? "" : `<p class="muted" style="margin-top:var(--s2);font-size:var(--fs-sm)">${esc(s("flow.defaultNote"))}</p>`}`)}
      ${caseSection(s("case.l.results"), metricsTitle, `
        <div class="metrics">${a.metrics.map((m) => `<div class="metric"><em class="${m.kind === "result" ? "is-result" : ""}">${esc(m.kind === "result" ? s("ui.result") : s("ui.goal"))}</em><b>${esc(valueOf(m))}</b><span>${esc(t(m.label))}</span></div>`).join("")}</div>
        ${a.compare ? `<figure class="bullet" style="margin-top:var(--s3)"><h4>${esc(t(a.compare.label))}</h4>
          <div class="bullet__row"><span>${esc(s("ui.goal"))}</span><div class="bullet__track"><div class="bullet__fill goal" style="--w:${a.compare.goal}%"></div></div><b>−${a.compare.goal}%</b></div>
          <div class="bullet__row"><span>${esc(s("ui.result"))}</span><div class="bullet__track"><div class="bullet__fill result" style="--w:${a.compare.result}%"></div></div><b>−${a.compare.result}%</b></div>
        </figure>` : ""}`)}
      ${caseSection(s("case.l.next"), s("case.next"), `<p>${esc(t(a.next))}</p>`)}
      <section class="case-section"><div class="container" style="display:block">
        <div class="next-case">
          <a class="btn btn--ghost" href="${href("agents.html")}">${icon("back")} ${esc(s("ui.allAgents"))}</a>
          <a class="btn btn--primary" href="${href("agent.html?id=" + next.id)}">${esc(s("ui.nextAgent"))}: ${esc(nameOf(next))} ${icon("arrow")}</a>
        </div>
        <p class="muted" style="margin-top:var(--s4);font-size:var(--fs-sm)">${esc(s("ui.confidential"))}</p>
      </div></section>`;
  }

  /* ---------- UX/UI PROJECT CASE ---------- */
  function renderProjectCase() {
    const el = document.getElementById("case");
    if (!el) return;
    const id = new URLSearchParams(location.search).get("id");
    const idx = P.projects.findIndex((p) => p.id === id);
    if (idx < 0) { notFound(el, "work.html", "ui.allWork"); return; }
    const p = P.projects[idx];
    const next = P.projects[(idx + 1) % P.projects.length];
    document.body.dataset.dynamicTitle = "1";
    document.title = `${nameOf(p)} — Camilla Rebouças`;

    el.innerHTML = `
      <section class="case-hero"><div class="container">
        <a class="back" href="${href("work.html")}">${icon("back")} ${esc(s("ui.allWork"))}</a>
        <span class="card__name">${esc(nameOf(p))}</span>
        <h1>${esc(t(p.title))}</h1>
        <p class="lede">${esc(t(p.short))}</p>
        <dl class="facts">
          <div><dt>${esc(s("case.role"))}</dt><dd>${esc(t(p.role))}</dd></div>
          <div><dt>${esc(s("case.company"))}</dt><dd>${esc(p.company)}</dd></div>
          <div><dt>${esc(s("case.year"))}</dt><dd>${esc(p.year)}</dd></div>
          <div><dt>${esc(s("case.focus"))}</dt><dd>${esc(p.tags.join(", "))}</dd></div>
        </dl>
        <div class="thumb" style="margin-top:var(--s4);aspect-ratio:21/8">${thumb(p.kind)}</div>
      </div></section>
      ${p.problem ? caseSection(s("case.l.problem"), s("case.challenge"), `<p>${esc(t(p.problem))}</p>`) : ""}
      ${p.approach ? caseSection(s("case.l.approach"), s("case.approach"), `<ul class="ticks">${p.approach.map((d) => `<li>${esc(t(d))}</li>`).join("")}</ul>`) : ""}
      ${p.results ? caseSection(s("case.l.results"), s("case.results"), `<p>${esc(t(p.results))}</p>`) : ""}
      ${p.learnings ? caseSection(s("case.l.learn"), s("case.learnings"), `<p>${esc(t(p.learnings))}</p>`) : ""}
      <section class="case-section"><div class="container" style="display:block">
        <div class="next-case">
          <a class="btn btn--ghost" href="${href("work.html")}">${icon("back")} ${esc(s("ui.allWork"))}</a>
          <a class="btn btn--primary" href="${href("project.html?id=" + next.id)}">${esc(s("ui.nextProject"))}: ${esc(nameOf(next))} ${icon("arrow")}</a>
        </div>
      </div></section>`;
  }

  /* ---------- ABOUT ---------- */
  function renderAbout() {
    const tl = document.getElementById("timeline");
    if (tl) tl.innerHTML = P.timeline.map((x) => `
      <li><span class="years">${esc(lang === "pt" ? x.years.replace("now", "hoje") : x.years)}</span><h3>${esc(t(x.role))}</h3>
      <div class="org">${esc(lang === "pt" && x.orgPt ? x.orgPt : x.org)}</div><p>${esc(t(x.text))}</p></li>`).join("");
    const tk = document.getElementById("toolkit");
    if (tk) tk.innerHTML = P.toolkit.map((g) => `
      <div class="toolkit__group" data-cluster="${g.cluster}"><h3><i aria-hidden="true"></i>${esc(t(g.group))}</h3>
      <div class="toolkit__items">${g.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div></div>`).join("");
    const ed = document.getElementById("education");
    if (ed) ed.innerHTML = P.education.map((e) => `<li><b>${esc(e.school)}</b><span>${esc(t(e))}</span></li>`).join("");
  }

  /* ---------- helpers ---------- */
  function observeOnce(el) {
    if (!("IntersectionObserver" in window) || reduceMotion) { el.classList.add("is-visible"); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(el);
  }
  window.observeOnce = observeOnce;

  function renderAll(first) {
    if (!first) {
      const ans = document.querySelector("[data-stream]");
      if (ans) ans.dataset.done = "1";
    }
    renderHeader();
    renderFooter();
    applyStaticText();
    ({ home: renderHome, agents: renderAgents, work: renderWork, agent: renderAgentCase, project: renderProjectCase, about: renderAbout }[page] || (() => {}))();
  }

  injectSprite();
  renderAll(true);
})();
