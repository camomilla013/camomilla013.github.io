/* ==========================================================================
   skills-flow.js — animated infographic: career chapters → skills → what
   each skill builds in an AI agent. Data lives in data.js (skillsFlow).
   Nodes are real buttons (keyboard + screen reader friendly); the curves
   are an SVG layer redrawn from the nodes' positions, so it stays
   responsive at any width.
   ========================================================================== */
(function () {
  "use strict";
  const SVGNS = "http://www.w3.org/2000/svg";
  let state = null; // persists across language re-renders

  function render(root, ctx) {
    if (!root) return;
    const { t, s } = ctx;
    const F = window.PORTFOLIO.skillsFlow;
    const byId = {};
    [...F.origins, ...F.skills, ...F.outcomes].forEach((n) => (byId[n.id] = n));
    const clusterOf = (id) => (byId[id] && byId[id].cluster) || null;

    // adjacency for highlighting
    const links = F.links.map(([a, b, w]) => ({ a, b, w, cluster: clusterOf(a) || clusterOf(b) }));
    const ups = {}, downs = {};
    links.forEach((l) => { (downs[l.a] ||= []).push(l.b); (ups[l.b] ||= []).push(l.a); });

    const node = (n, extra) => `<button type="button" class="flow__node ${extra || ""}" data-id="${n.id}" ${n.cluster ? `data-cluster="${n.cluster}"` : ""}>
        ${t(n)}${n.years ? `<small>${n.years.replace("now", s("flow.now"))}</small>` : ""}</button>`;

    const tableOpen = state && state.tableOpen;
    root.innerHTML = `
      <div class="flow-legend" role="group" aria-label="${s("flow.legend")}">
        ${Object.entries(F.clusters).map(([k, v]) => `<button type="button" data-cluster-filter="${k}" aria-pressed="false"><i style="background:var(--viz-${k})"></i>${t(v)}</button>`).join("")}
        <span class="flow-hint">${s("flow.hint")}</span>
      </div>
      <div class="flow flow__titles" aria-hidden="true"><span>${s("flow.col1")}</span><span>${s("flow.col2")}</span><span>${s("flow.col3")}</span></div>
      <div class="flow" id="flow">
        <svg class="flow__links" aria-hidden="true"></svg>
        <div class="flow__col">${F.origins.map((n) => node(n)).join("")}</div>
        <div class="flow__col">${F.skills.map((n) => node(n)).join("")}</div>
        <div class="flow__col">${F.outcomes.map((n) => node(n, "is-outcome")).join("")}</div>
      </div>
      <p class="sr-only" aria-live="polite" id="flow-live"></p>
      <div class="flow-caption">
        <p id="flow-readout">${s("flow.caption")}</p>
        <button type="button" class="link-btn" id="flow-table-btn" aria-expanded="${!!tableOpen}" aria-controls="flow-table">${s(tableOpen ? "flow.hideTable" : "flow.showTable")}</button>
      </div>
      <div id="flow-table" ${tableOpen ? "" : "hidden"}>
        <table class="flow-table">
          <caption class="sr-only">${s("flow.title")}</caption>
          <thead><tr><th scope="col">${s("flow.col2")}</th><th scope="col">${s("flow.col1")}</th><th scope="col">${s("flow.col3")}</th></tr></thead>
          <tbody>${F.skills.map((k) => `<tr><th scope="row">${t(k)}</th><td>${(ups[k.id] || []).map((id) => t(byId[id])).join(", ")}</td><td>${(downs[k.id] || []).map((id) => t(byId[id])).join(", ")}</td></tr>`).join("")}</tbody>
        </table>
      </div>`;

    const flow = root.querySelector("#flow");
    const svg = flow.querySelector("svg");
    const live = root.querySelector("#flow-live");
    const readout = root.querySelector("#flow-readout");
    const defaultReadout = readout.innerHTML;
    const nodes = {};
    flow.querySelectorAll(".flow__node").forEach((b) => (nodes[b.dataset.id] = b));

    /* ---- draw curves ---- */
    let paths = [];
    let pending = !state || !state.drawn; // the draw-in animation hasn't played yet
    function draw() {
      const animate = pending;
      const box = flow.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      svg.innerHTML = "";
      paths = links.map((l, i) => {
        const A = nodes[l.a].getBoundingClientRect(), B = nodes[l.b].getBoundingClientRect();
        const x1 = A.right - box.left, y1 = A.top + A.height / 2 - box.top;
        const x2 = B.left - box.left, y2 = B.top + B.height / 2 - box.top;
        const mx = (x1 + x2) / 2;
        const p = document.createElementNS(SVGNS, "path");
        p.setAttribute("d", `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`);
        p.setAttribute("stroke", `var(--viz-${l.cluster})`);
        p.setAttribute("stroke-width", (0.8 + l.w * 1.1).toFixed(1));
        p.setAttribute("stroke-opacity", "0.7");
        p.dataset.a = l.a; p.dataset.b = l.b;
        svg.appendChild(p);
        if (animate) {
          const len = p.getTotalLength();
          p.style.setProperty("--len", len);
          const firstHop = byId[l.a] && F.origins.includes(byId[l.a]);
          p.style.setProperty("--d", (firstHop ? 0 : 0.7) + (i % 8) * 0.06 + "s");
          p.classList.add("draw");
        }
        return p;
      });
      applyFocus();
    }

    /* ---- focus / highlight ---- */
    let focusIds = state && state.focus ? state.focus : null;
    let clusterFilter = state && state.cluster ? state.cluster : null;

    function connected(id) {
      const set = new Set([id]);
      const walk = (start, map) => {
        const stack = [start];
        while (stack.length) { const cur = stack.pop(); (map[cur] || []).forEach((n) => { if (!set.has(n)) { set.add(n); stack.push(n); } }); }
      };
      walk(id, downs); walk(id, ups);
      return set;
    }

    function applyFocus(previewId) {
      let lit = null;
      const lead = previewId || focusIds;
      if (lead) lit = connected(lead);
      else if (clusterFilter) {
        lit = new Set();
        F.skills.filter((k) => k.cluster === clusterFilter).forEach((k) => { lit.add(k.id); (ups[k.id] || []).forEach((x) => lit.add(x)); (downs[k.id] || []).forEach((x) => lit.add(x)); });
      }
      flow.classList.toggle("is-focus", !!lit);
      Object.values(nodes).forEach((b) => { b.classList.toggle("is-lit", !!lit && lit.has(b.dataset.id)); b.classList.toggle("is-active", b.dataset.id === lead); b.setAttribute("aria-pressed", b.dataset.id === focusIds); });
      paths.forEach((p) => {
        const on = !!lit && lit.has(p.dataset.a) && lit.has(p.dataset.b) &&
          (!clusterFilter || lead || clusterOf(p.dataset.a) === clusterFilter || clusterOf(p.dataset.b) === clusterFilter);
        p.classList.toggle("is-lit", on);
      });
      root.querySelectorAll("[data-cluster-filter]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.clusterFilter === clusterFilter && !focusIds));
      // readout
      if (focusIds) {
        const n = byId[focusIds];
        const from = (ups[focusIds] || []).map((id) => t(byId[id]));
        const to = (downs[focusIds] || []).map((id) => t(byId[id]));
        let msg = `<b>${t(n)}</b>`;
        if (from.length) msg += ` — ${s("flow.from")} ${from.join(", ")}`;
        if (to.length) msg += `${from.length ? ";" : " —"} ${s("flow.to")} ${to.join(", ")}`;
        readout.innerHTML = msg + ".";
        live.textContent = readout.textContent;
      } else {
        readout.innerHTML = defaultReadout;
      }
      state = Object.assign(state || {}, { focus: focusIds, cluster: clusterFilter });
    }

    Object.values(nodes).forEach((b) => {
      b.addEventListener("click", () => { focusIds = focusIds === b.dataset.id ? null : b.dataset.id; clusterFilter = null; applyFocus(); });
      b.addEventListener("mouseenter", () => { if (window.matchMedia("(hover: hover)").matches) applyFocus(b.dataset.id); });
      b.addEventListener("mouseleave", () => { if (window.matchMedia("(hover: hover)").matches) applyFocus(); });
    });
    root.querySelectorAll("[data-cluster-filter]").forEach((b) => b.addEventListener("click", () => {
      clusterFilter = clusterFilter === b.dataset.clusterFilter ? null : b.dataset.clusterFilter; focusIds = null; applyFocus();
    }));
    root.addEventListener("keydown", (e) => { if (e.key === "Escape") { focusIds = null; clusterFilter = null; applyFocus(); } });

    const tableBtn = root.querySelector("#flow-table-btn");
    tableBtn.addEventListener("click", () => {
      const tbl = root.querySelector("#flow-table");
      const open = tbl.hasAttribute("hidden");
      tbl.toggleAttribute("hidden", !open);
      tableBtn.setAttribute("aria-expanded", open);
      tableBtn.textContent = s(open ? "flow.hideTable" : "flow.showTable");
      state.tableOpen = open;
    });

    /* ---- first draw + animate when visible ---- */
    const firstTime = pending;
    state = Object.assign(state || {}, { drawn: true });
    requestAnimationFrame(() => {
      draw();
      if (firstTime) {
        window.observeOnce(flow);
        // once the last curve has drawn, drop the dash so later redraws are instant
        let done = 0;
        flow.addEventListener("animationend", () => {
          if (++done >= links.length) { pending = false; flow.querySelectorAll("path.draw").forEach((p) => p.classList.remove("draw")); }
        });
      } else {
        flow.classList.add("is-visible");
      }
    });

    if ("ResizeObserver" in window) {
      let raf;
      const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); });
      ro.observe(flow);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => draw());
  }

  window.SkillsFlow = { render };
})();
