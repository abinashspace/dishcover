/* Dishcover app logic — no dependencies. */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const DISHES = window.DISHES, CATS = window.CATEGORIES;
  const byId = Object.fromEntries(DISHES.map(d => [d.id, d]));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- Storage ---------------- */
  const KEY = "dishcover.v1";
  let mem = null;
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) return { liked: s.liked || [], tried: s.tried || [], reviews: s.reviews || {} }; } catch (e) {}
    return mem || { liked: [], tried: [], reviews: {} };
  }
  function save() { mem = state; try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  let state = load();

  /* ---------------- Mascot: "Bao" the steamed-bun chef ---------------- */
  function mascot(expr = "happy") {
    const ink = "#2B2118";
    const eye = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="4.2" ry="5.6" fill="${ink}"/><circle cx="${x + 1.4}" cy="${y - 2}" r="1.5" fill="#fff"/>`;
    const heart = (x, y) => `<path d="M${x} ${y + 5} l-5.5 -5.5 a3.3 3.3 0 0 1 5.5 -3.8 a3.3 3.3 0 0 1 5.5 3.8z" fill="#FF5A7A"/>`;
    let eyes, mouth, extra = "";
    switch (expr) {
      case "wink":
        eyes = `<g class="eyes">${eye(46, 71)}</g><path d="M68 72 q6 -6 12 0" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
        mouth = `<path d="M52 82 q8 10 16 0 z" fill="#7A2E22"/>`; break;
      case "thinking":
        eyes = `<g class="eyes"><ellipse cx="49" cy="68" rx="4" ry="5.2" fill="${ink}"/><ellipse cx="77" cy="68" rx="4" ry="5.2" fill="${ink}"/><circle cx="50.5" cy="66" r="1.4" fill="#fff"/><circle cx="78.5" cy="66" r="1.4" fill="#fff"/></g>`;
        mouth = `<path d="M55 86 q6 -3 11 0" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        extra = `<circle cx="104" cy="40" r="3" fill="#C9C3D6"/><circle cx="111" cy="30" r="4.5" fill="#C9C3D6"/><circle cx="120" cy="17" r="6.5" fill="#C9C3D6"/>`; break;
      case "love":
        eyes = `<g>${heart(46, 69)}${heart(74, 69)}</g>`;
        mouth = `<path d="M51 82 q9 12 18 0 z" fill="#7A2E22"/><path d="M55 85 q5 4 10 0" fill="#FF8A8A"/>`; break;
      case "wow":
        eyes = `<g class="eyes"><ellipse cx="46" cy="70" rx="5" ry="6.5" fill="${ink}"/><ellipse cx="74" cy="70" rx="5" ry="6.5" fill="${ink}"/><circle cx="47.6" cy="67.5" r="1.8" fill="#fff"/><circle cx="75.6" cy="67.5" r="1.8" fill="#fff"/></g>`;
        mouth = `<ellipse cx="60" cy="86" rx="5" ry="6" fill="#7A2E22"/>`;
        extra = `<path d="M14 40 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3z" fill="#FFD476"/><path d="M104 30 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2z" fill="#FFD476"/>`; break;
      default:
        eyes = `<g class="eyes">${eye(46, 71)}${eye(74, 71)}</g>`;
        mouth = `<path d="M52 82 q8 10 16 0 z" fill="#7A2E22"/>`;
    }
    const armL = expr === "thinking"
      ? `<ellipse cx="66" cy="94" rx="7" ry="5.5" fill="#FFF7EA" stroke="${ink}" stroke-width="3"/>`
      : `<ellipse cx="19" cy="86" rx="6" ry="8" fill="#FFF7EA" stroke="${ink}" stroke-width="3" transform="rotate(25 19 86)"/>`;
    return `<svg viewBox="0 0 124 124" aria-hidden="true">
      <ellipse cx="60" cy="114" rx="30" ry="5" fill="rgba(20,20,20,.10)"/>
      ${armL}
      <g class="arm-r"><ellipse cx="101" cy="84" rx="6" ry="8" fill="#FFF7EA" stroke="${ink}" stroke-width="3" transform="rotate(-25 101 84)"/></g>
      <path d="M20 82 C20 52 38 40 60 40 C82 40 100 52 100 82 C100 100 83 108 60 108 C37 108 20 100 20 82 Z" fill="#FFF7EA" stroke="${ink}" stroke-width="3.2"/>
      <path d="M40 50 q6 6 4 12 M80 50 q-6 6 -4 12" stroke="#E9DCC5" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g>
        <rect x="42" y="26" width="36" height="16" rx="5" fill="#FFD476" stroke="${ink}" stroke-width="3"/>
        <path d="M44 28 C30 28 30 8 46 11 C48 0 72 0 74 11 C90 8 90 28 76 28 Z" fill="#fff" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M52 22 q2 -6 0 -9 M68 22 q-2 -6 0 -9" stroke="#E7E3EE" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      </g>
      <ellipse cx="36" cy="82" rx="7" ry="4.2" fill="#FFB0A8" opacity=".85"/>
      <ellipse cx="84" cy="82" rx="7" ry="4.2" fill="#FFB0A8" opacity=".85"/>
      ${eyes}${mouth}${extra}
    </svg>`;
  }
  function setMascot(el, expr, anim) {
    el.innerHTML = mascot(expr);
    if (anim) { el.classList.remove(anim); void el.offsetWidth; el.classList.add(anim); setTimeout(() => el.classList.remove(anim), 1900); }
  }

  /* ---------------- Toast ---------------- */
  let toastT;
  function toast(text, expr = "happy") {
    $("#toastMascot").innerHTML = mascot(expr);
    $("#toastText").textContent = text;
    const t = $("#toast"); t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------------- Helpers ---------------- */
  const TASTES = [
    ["sweet", "Sweet", "#FF9EB5"], ["spicy", "Spicy", "#FF6B4A"], ["sour", "Sour", "#B8D94A"],
    ["salty", "Salty", "#7EB6FF"], ["bitter", "Bitter", "#9B7A5B"], ["mild", "Mild", "#C9B8F2"]
  ];
  const DIET = { veg: "🟢 Vegetarian", egg: "🟡 Veg, has egg", both: "🟢🔴 Veg & non-veg", eggboth: "🟡🔴 Egg & non-veg", nonveg: "🔴 Non-veg" };
  /* Quiz diet rule: strict veg -> only "veg"; eggs ok -> "veg" + "egg"; anything -> all. */
  const DIET_OK = { veg: ["veg"], egg: ["veg", "egg"], any: null };
  const topTastes = d => TASTES.filter(([k]) => d.taste[k] >= 3).sort((a, b) => d.taste[b[0]] - d.taste[a[0]]).slice(0, 2).map(t => t[1]);
  const stars = n => "★★★★★".slice(0, Math.round(n)) + "☆☆☆☆☆".slice(0, 5 - Math.round(n));
  const heartSVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" stroke="#141414" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
  const isLiked = id => state.liked.includes(id);
  const isTried = id => state.tried.includes(id);
  function hl(text, q) {
    if (!q) return esc(text);
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }

  /* Photo with gentle fade-in; falls back to the emoji if the file can't load. */
  function photo(d, eager) {
    if (!d.photo) return `<span class="emoji-fb" style="opacity:1">${d.emoji}</span>`;
    return `<span class="emoji-fb">${d.emoji}</span><img class="photo" src="${d.photo.src}" alt="Photo of ${esc(d.name)}" ${eager ? "" : 'loading="lazy"'} decoding="async"
      onload="this.classList.add('loaded')" onerror="this.parentNode.classList.add('noimg');this.remove()">`;
  }
  function credit(d) {
    const p = d.photo; if (!p) return "";
    const lic = p.licenseUrl ? `<a href="${esc(p.licenseUrl)}" target="_blank" rel="noopener">${esc(p.license)}</a>` : esc(p.license);
    return `<p class="credit">Photo: <a href="${esc(p.source)}" target="_blank" rel="noopener">${esc(p.author)}</a> / ${lic} · Wikimedia Commons</p>`;
  }

  function cardHTML(d, i, q) {
    const tt = topTastes(d);
    return `<article class="card" data-id="${d.id}" tabindex="0" role="button" aria-label="Open ${esc(d.name)}" style="animation-delay:${Math.min(i, 12) * 35}ms">
      <div class="thumb ph" style="background:${d.color}">${photo(d)}</div>
      ${isTried(d.id) ? `<span class="tried-badge">✓ Tried</span>` : ""}
      <button class="heart ${isLiked(d.id) ? "on" : ""}" data-like="${d.id}" aria-pressed="${isLiked(d.id)}" aria-label="Save ${esc(d.name)}">${heartSVG}</button>
      <h4>${hl(d.name, q)}</h4>
      <div class="cuisine">${esc(d.cuisine)}</div>
      <div class="mini-taste">${(tt.length ? tt : ["Mild"]).map(t => `<span class="tchip">${t}</span>`).join("")}</div>
    </article>`;
  }

  /* ---------------- Home ---------------- */
  let cat = "all", vegOnly = false, query = "";
  const tips = [
    "Hi, I'm <b>Bao</b>! 👋 Seen a dish name you don't know? Search it and I'll explain.",
    "Tap any dish to see its <b>taste</b>, <b>reviews</b> and <b>how to eat it</b>.",
    "Tip: tap the 🔊 pronunciation so you can order with confidence!",
    "Can't choose? Try the <b>Help me choose</b> quiz below.",
    "Tap ♥ to save dishes you want to try next time."
  ];
  let tipI = 0;
  function sayHome(html, expr = "happy", anim) {
    const b = $("#homeBubble");
    b.classList.add("swap");
    setTimeout(() => { b.innerHTML = html; b.classList.remove("swap"); }, 180);
    setMascot($("#homeMascot"), expr, anim);
  }
  function nextTip() {
    tipI = (tipI + 1) % (tips.length + 1);
    if (tipI === tips.length) { const d = DISHES[Math.floor(Math.random() * DISHES.length)]; sayHome(`${d.emoji} <b>${esc(d.name)}:</b> ${esc(d.tip)}`, "wink", "pop"); }
    else sayHome(tips[tipI], tipI % 2 ? "wink" : "happy", "pop");
  }

  function renderChips() {
    $("#chips").innerHTML = CATS.map(c => `<button class="chip ${c.id === cat ? "on" : ""}" data-cat="${c.id}" role="tab" aria-selected="${c.id === cat}">${c.emoji} ${c.label}</button>`).join("")
      + `<button class="chip veg ${vegOnly ? "on" : ""}" data-veg="1" aria-pressed="${vegOnly}">🟢 Veg-friendly</button>`;
  }
  function matches(d, q) {
    if (!q) return true;
    return q.toLowerCase().split(/\s+/).every(w => hayOf(d).includes(w));
  }
  const HAY = {};
  function hayOf(d) {
    if (HAY[d.id]) return HAY[d.id];
    const tastes = TASTES.filter(([k]) => d.taste[k] >= 3).map(t => t[1]);
    const diet = { veg: "veg vegetarian", egg: "egg eggetarian", both: "veg vegetarian non-veg", eggboth: "egg non-veg", nonveg: "non-veg nonveg meat" }[d.diet];
    const c = CATS.find(x => x.id === d.cat);
    return (HAY[d.id] = [d.name, d.pron, d.cuisine, c ? c.label : "", d.type, diet, ...tastes, d.what, ...d.ingredients, ...d.goodFor, ...d.texture].join(" ").toLowerCase());
  }
  function renderGrid(quiet) {
    const q = query.trim();
    const list = DISHES.filter(d => (cat === "all" || d.cat === cat) && (!vegOnly || ["veg", "egg", "both"].includes(d.diet)) && matches(d, q));
    // name matches first
    if (q) list.sort((a, b) => (b.name.toLowerCase().includes(q.toLowerCase()) - a.name.toLowerCase().includes(q.toLowerCase())));
    const c = CATS.find(x => x.id === cat);
    $("#listTitle").textContent = q ? `Results for “${q}”` : (cat === "all" ? "All dishes" : c.label);
    $("#count").textContent = `${list.length} dish${list.length === 1 ? "" : "es"}`;
    const g = $("#grid"); g.classList.toggle("quiet", !!quiet);
    g.innerHTML = list.length ? list.map((d, i) => cardHTML(d, i, q)).join("")
      : `<div class="empty" style="grid-column:1/-1"><div class="mascot" id="emptyMascot">${mascot("thinking")}</div><p><b>Hmm, I don't know “${esc(q)}” yet.</b><br>Try another spelling, or a word like “spicy”, “coffee” or “noodles”.</p></div>`;
    $("#hint").textContent = q ? (list.length ? `Bao found ${list.length} match${list.length === 1 ? "" : "es"} ✨` : "") : "";
  }
  let searchT;
  function onSearch(e) {
    query = e.target.value;
    $("#clearSearch").classList.toggle("show", !!query);
    clearTimeout(searchT);
    searchT = setTimeout(() => {
      renderGrid(true);
      if (query.trim()) sayHome(`Looking for <b>“${esc(query.trim())}”</b>… 🔍`, "thinking");
      else sayHome(tips[0], "happy");
    }, 120);
  }

  /* ---------------- Detail sheet ---------------- */
  let currentId = null, stepIdx = 0, reviewStars = 0;
  function openDish(id) {
    const d = byId[id]; if (!d) return;
    currentId = id; stepIdx = 0; reviewStars = 0;
    const mine = state.reviews[id] || [];
    const sc = $("#sheetScroll");
    sc.innerHTML = `
      <div class="sheet-head">
        <button class="icon-btn" id="closeSheet" aria-label="Close">✕</button>
        <button class="icon-btn ${isLiked(id) ? "on" : ""}" id="sheetLike" aria-pressed="${isLiked(id)}" aria-label="Save dish">${heartSVG}</button>
      </div>
      <div class="d-hero ph" style="background:${d.color}">${photo(d, true)}
        <div class="tag">${esc(d.cuisine)}</div><div class="tag diet">${DIET[d.diet]}</div></div>
      ${credit(d)}
      <h2 class="d-name">${esc(d.name)}</h2>
      <button class="pron" id="say" aria-label="Hear pronunciation">🔊 Say it: <b>${esc(d.pron)}</b></button>

      <div class="box"><h3>🍽️ What is it?</h3><p>${esc(d.what)}</p></div>

      <div class="box"><h3>🧺 Main ingredients</h3><div class="tags">${d.ingredients.map(x => `<span class="tag2">${esc(x)}</span>`).join("")}</div></div>

      <div class="box"><h3>👅 Taste profile</h3>
        ${TASTES.map(([k, l, c]) => `<div class="meter"><span>${l}</span><div class="bar"><i data-w="${d.taste[k] * 20}" style="background:${c}"></i></div><em>${d.taste[k]}/5</em></div>`).join("")}
        <h3 style="margin-top:14px">🤌 Texture</h3><div class="tags">${d.texture.map(x => `<span class="tag2 y">${esc(x)}</span>`).join("")}</div>
      </div>

      <div class="box" id="howto"><h3>👣 How to eat it <span class="muted" style="font-weight:500;font-size:12px;margin-left:auto">swipe →</span></h3>
        <div class="steps" id="steps">${d.steps.map((s, i) => `<div class="step ${i === 0 ? "cur" : ""}"><span class="num">STEP ${i + 1} OF ${d.steps.length}</span><span class="ico">${s.icon}</span><p>${esc(s.text)}</p></div>`).join("")}</div>
        <div class="step-nav"><div class="dots" id="dots">${d.steps.map((_, i) => `<b class="${i === 0 ? "on" : ""}"></b>`).join("")}</div>
          <div class="nav-btns"><button class="round" id="prevStep" aria-label="Previous step" disabled>←</button><button class="round dark" id="nextStep" aria-label="Next step">→</button></div></div>
      </div>

      <div class="box"><h3>💡 Bao's tip</h3><p>${esc(d.tip)}</p></div>

      <div class="box" id="reviewsBox"><h3>💬 Reviews</h3>
        <div class="rating-row"><span class="big-rate">${d.reviews.rating.toFixed(1)}</span><div><div class="stars">${stars(d.reviews.rating)}</div><div class="muted" style="font-size:12px">sample rating</div></div></div>
        <p>${esc(d.reviews.summary)}</p>
        <div class="pc"><div><b>👍 People love</b>${d.reviews.loved.map(esc).join("<br>")}</div><div><b>⚠️ Watch out</b>${d.reviews.watch.map(esc).join("<br>")}</div></div>
        <div class="sample-flag">ℹ️ Sample reviews — written to illustrate the app, not from real customers.</div>
        <div id="myReviews">${mine.map((r, i) => reviewHTML(r, true, i)).join("")}</div>
        ${d.reviews.samples.map(r => reviewHTML(r, false)).join("")}
        <div class="collapse" id="formWrap"><div>
          <div class="form" style="padding-top:12px;border-top:1px solid var(--line);margin-top:6px">
            <h3>✍️ Your review</h3>
            <div class="star-pick" id="starPick">${[1, 2, 3, 4, 5].map(n => `<button data-star="${n}" aria-label="${n} star${n > 1 ? "s" : ""}">★</button>`).join("")}</div>
            <input type="text" id="revName" placeholder="Your name (optional)" maxlength="30">
            <textarea id="revText" rows="3" placeholder="How was it? Any tip for first-timers?" maxlength="300" style="margin-top:8px"></textarea>
            <div class="row"><button class="cta ghost" id="cancelRev">Cancel</button><button class="cta" id="submitRev">Post review</button></div>
            <p class="muted" style="font-size:12px;margin-top:8px">Saved only on this device.</p>
          </div></div></div>
      </div>

      <div class="box"><h3>🎯 Good for people who like</h3><div class="tags">${d.goodFor.map(x => `<span class="tag2 y">${esc(x)}</span>`).join("")}</div></div>
      <div class="box"><h3>🧭 Similar dishes</h3><div class="alt" id="similar">${similar(d).map(s => `<button data-open="${s.id}"><span class="mini-ph ph" style="background:${s.color}">${photo(s)}</span>${esc(s.name)}</button>`).join("")}</div></div>
    `;
    renderActions();
    sc.scrollTop = 0;
    $("#scrim").classList.add("show");
    $("#sheet").classList.add("show");
    $("#phone").classList.add("sheet-open");
    setTimeout(() => $$(".bar i", sc).forEach(b => (b.style.width = b.dataset.w + "%")), 260);
    bindSheet(d);
  }
  function similar(d) {
    const dist = o => TASTES.reduce((s, [k]) => s + Math.abs(o.taste[k] - d.taste[k]), 0) + (o.type === d.type ? 0 : 3) + (o.cat === d.cat ? 0 : 1.5);
    return DISHES.filter(o => o.id !== d.id).sort((a, b) => dist(a) - dist(b)).slice(0, 2);
  }
  function reviewHTML(r, mine, i) {
    return `<div class="review"><span class="avatar" style="background:${mine ? "#D9F2E8" : "var(--bg)"}">${esc((r.name || "Y")[0].toUpperCase())}</span>
      <div style="flex:1"><div class="who">${esc(r.name || "You")} <span class="stars" style="font-size:12px">${stars(r.stars)}</span>
      <small class="${mine ? "mine" : ""}">${mine ? "Your review" : "Sample"}</small>${mine ? `<button class="del" data-del="${i}">Delete</button>` : ""}</div>
      <p>${esc(r.text)}</p></div></div>`;
  }
  function renderActions() {
    const tried = isTried(currentId);
    $("#sheetActions").innerHTML = `<button class="cta ghost" id="writeRev">✍️ Review</button>
      <button class="cta ${tried ? "done" : ""}" id="triedBtn" aria-pressed="${tried}">${tried ? "✓ I tried it!" : "😋 I tried it"}</button>`;
    $("#writeRev").onclick = () => openForm(true);
    $("#triedBtn").onclick = toggleTried;
  }
  function toggleTried() {
    const id = currentId;
    if (isTried(id)) { state.tried = state.tried.filter(x => x !== id); toast("Removed from tried", "thinking"); }
    else {
      state.tried.push(id);
      toast(`Yay! ${state.tried.length}/${DISHES.length} dishes tried 🎉`, "wow");
      setTimeout(() => { if (!(state.reviews[id] || []).length) openForm(true); }, 500);
    }
    save(); renderActions(); refreshCounts();
  }
  function openForm(open) {
    const w = $("#formWrap"); if (!w) return;
    w.classList.toggle("open", open);
    if (open) setTimeout(() => {
      const sc = $("#sheetScroll"), box = $("#reviewsBox");
      sc.scrollTo({ top: sc.scrollTop + box.getBoundingClientRect().bottom - sc.getBoundingClientRect().bottom + 90, behavior: "smooth" });
      $("#revText").focus({ preventScroll: true });
    }, 480);
  }
  function setStars(n) { reviewStars = n; $$("#starPick button").forEach(b => b.classList.toggle("on", +b.dataset.star <= n)); }
  function goStep(i) {
    const steps = $("#steps"); const n = steps.children.length;
    stepIdx = Math.max(0, Math.min(n - 1, i));
    steps.scrollTo({ left: steps.children[stepIdx].offsetLeft - steps.children[0].offsetLeft, behavior: "smooth" });
    updateDots();
  }
  function updateDots() {
    const steps = $("#steps"); if (!steps) return; const n = steps.children.length;
    $$("#dots b").forEach((b, j) => b.classList.toggle("on", j === stepIdx));
    $$(".step", steps).forEach((s, j) => s.classList.toggle("cur", j === stepIdx));
    $("#prevStep").disabled = stepIdx === 0;
    const nx = $("#nextStep");
    nx.textContent = stepIdx === n - 1 ? "✓" : "→";
    nx.setAttribute("aria-label", stepIdx === n - 1 ? "Done" : "Next step");
  }
  function bindSheet(d) {
    $("#closeSheet").onclick = closeSheet;
    $("#sheetLike").onclick = e => toggleLike(d.id, e.currentTarget);
    $("#say").onclick = () => {
      try {
        const u = new SpeechSynthesisUtterance(d.name.replace(/\(.*\)/, ""));
        u.rate = 0.8; speechSynthesis.cancel(); speechSynthesis.speak(u);
      } catch (e) {}
      toast(`Say: “${d.pron.split("(")[0].trim()}”`, "wink");
    };
    const steps = $("#steps"); let st;
    steps.addEventListener("scroll", () => {
      clearTimeout(st);
      st = setTimeout(() => { stepIdx = Math.round(steps.scrollLeft / steps.clientWidth); updateDots(); }, 60);
    }, { passive: true });
    $("#prevStep").onclick = () => goStep(stepIdx - 1);
    $("#nextStep").onclick = () => {
      if (stepIdx >= d.steps.length - 1) { toast("You're ready to eat like a pro! 🙌", "wink"); goStep(0); }
      else goStep(stepIdx + 1);
    };
    $("#starPick").onclick = e => { const b = e.target.closest("[data-star]"); if (b) setStars(+b.dataset.star); };
    $("#cancelRev").onclick = () => openForm(false);
    $("#submitRev").onclick = () => {
      const text = $("#revText").value.trim();
      if (!reviewStars) { toast("Tap the stars to rate first ⭐", "thinking"); return; }
      if (text.length < 3) { toast("Write a few words, please ✍️", "thinking"); $("#revText").focus(); return; }
      const r = { name: $("#revName").value.trim() || "You", stars: reviewStars, text, at: Date.now() };
      (state.reviews[d.id] = state.reviews[d.id] || []).unshift(r);
      if (!isTried(d.id)) state.tried.push(d.id);
      save(); refreshCounts(); renderActions();
      $("#myReviews").innerHTML = state.reviews[d.id].map((x, i) => reviewHTML(x, true, i)).join("");
      $("#revText").value = ""; $("#revName").value = ""; setStars(0); openForm(false);
      toast("Thanks! Your review is saved 💛", "love");
    };
    $("#myReviews").onclick = e => {
      const b = e.target.closest("[data-del]"); if (!b) return;
      state.reviews[d.id].splice(+b.dataset.del, 1); save();
      $("#myReviews").innerHTML = state.reviews[d.id].map((x, i) => reviewHTML(x, true, i)).join("");
      toast("Review deleted", "thinking");
    };
    $("#similar").onclick = e => { const b = e.target.closest("[data-open]"); if (b) openDish(b.dataset.open); };
  }
  function closeSheet() {
    $("#sheet").classList.remove("show"); $("#scrim").classList.remove("show"); $("#phone").classList.remove("sheet-open");
    currentId = null; refreshViews();
  }
  // drag-down to close
  (function () {
    let y0 = null, dy = 0; const sheet = $("#sheet");
    const start = e => { if ($("#sheetScroll").scrollTop > 0 && !e.target.closest("#grab")) return; y0 = (e.touches ? e.touches[0] : e).clientY; dy = 0; sheet.style.transition = "none"; };
    const move = e => { if (y0 == null) return; dy = Math.max(0, (e.touches ? e.touches[0] : e).clientY - y0); sheet.style.transform = `translateY(${dy}px)`; };
    const end = () => { if (y0 == null) return; sheet.style.transition = ""; sheet.style.transform = ""; if (dy > 110) closeSheet(); y0 = null; };
    $("#grab").addEventListener("pointerdown", start);
    sheet.addEventListener("touchstart", e => { if (e.target.closest(".sheet-head,#grab")) start(e); }, { passive: true });
    window.addEventListener("pointermove", move); window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("pointerup", end); window.addEventListener("touchend", end);
  })();

  /* ---------------- Like ---------------- */
  const loveLines = ["Ooh, good pick! Saved 💛", "Added to your list! 😋", "Yum! I saved it for you", "Great taste! ♥ Saved"];
  function toggleLike(id, btn) {
    const d = byId[id];
    if (isLiked(id)) { state.liked = state.liked.filter(x => x !== id); toast(`Removed ${d.name}`, "thinking"); }
    else { state.liked.push(id); toast(loveLines[Math.floor(Math.random() * loveLines.length)], "love"); setMascot($("#homeMascot"), "love", "pop"); }
    save();
    const on = isLiked(id);
    $$(`[data-like="${id}"]`).forEach(b => { b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
    if (btn) { btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", on); btn.classList.remove("burst"); void btn.offsetWidth; btn.classList.add("burst"); }
    refreshCounts();
    if (activeTab === "saved") renderSaved();
  }

  /* ---------------- Quiz ---------------- */
  const QUESTIONS = [
    { k: "type", q: "What are you in the mood for?", o: [["drink", "☕", "A drink", "Coffee, tea & more"], ["snack", "🥨", "A light snack", "Something small"], ["meal", "🍜", "A proper meal", "I'm hungry!"], ["sweet", "🍰", "Something sweet", "Dessert time"]] },
    { k: "spice", q: "How do you feel about spice?", o: [["0", "🧊", "No spice, please", "Keep it gentle"], ["1", "🌶️", "A little is nice", "Medium heat"], ["2", "🔥", "Bring the heat!", "The spicier the better"]] },
    { k: "flavour", q: "Which flavour makes you happiest?", o: [["sweet", "🍯", "Sweet", "Sugary & rich"], ["salty", "🧂", "Savoury & salty", "Umami goodness"], ["sour", "🍋", "Tangy & zesty", "Lime, tamarind…"], ["mild", "🥛", "Mild & comforting", "Soft, gentle flavours"]] },
    { k: "diet", q: "Any food preference?", o: [["veg", "🥦", "Vegetarian (no egg)", "Pure veg"], ["egg", "🥚", "Vegetarian + eggs", "Eggs are fine"], ["any", "🍗", "I eat everything", "Non-veg is fine"]] },
    { k: "adv", q: "How adventurous are you feeling?", o: [["1", "🛟", "Play it safe", "Something close to what I know"], ["2", "🧭", "A little new", "Familiar but different"], ["3", "🚀", "Surprise me!", "A totally new experience"]] }
  ];
  let qi = 0, answers = {};
  function renderQuiz() {
    const el = $("#quiz");
    if (qi >= QUESTIONS.length) return renderResult();
    const Q = QUESTIONS[qi];
    const lines = ["Let's find your dish! 🍽️", "Be honest — I won't judge 😄", "Mmm, tell me more…", "Good to know!", "Last one!"];
    el.innerHTML = `<div class="q-progress"><i style="width:${(qi / QUESTIONS.length) * 100}%"></i></div>
      <div class="q-wrap"><div class="mascot">${mascot(qi % 2 ? "thinking" : "happy")}</div><div class="bubble" style="margin-bottom:24px">${lines[qi]}</div></div>
      <div class="muted" style="font-size:13px;font-weight:600;margin-bottom:6px">QUESTION ${qi + 1} OF ${QUESTIONS.length}</div>
      <h2 class="q-title">${Q.q}</h2>
      <div class="options">${Q.o.map(([v, e, t, s], i) => `<button class="opt ${answers[Q.k] === v ? "sel" : ""}" data-v="${v}" style="animation-delay:${i * 60}ms"><span class="e">${e}</span><span>${t}<small>${s}</small></span></button>`).join("")}</div>
      ${qi > 0 ? `<button class="pill-btn q-back" id="qBack">← Back</button>` : ""}`;
    requestAnimationFrame(() => { const i = $(".q-progress i", el); if (i) i.style.width = ((qi + 0.5) / QUESTIONS.length) * 100 + "%"; });
    $(".options", el).onclick = e => {
      const b = e.target.closest(".opt"); if (!b) return;
      $$(".opt", el).forEach(x => x.classList.remove("sel")); b.classList.add("sel");
      answers[Q.k] = b.dataset.v;
      setTimeout(() => { qi++; renderQuiz(); $("#screen-quiz").scrollTop = 0; }, 320);
    };
    const back = $("#qBack", el); if (back) back.onclick = () => { qi--; renderQuiz(); };
  }
  function scoreDish(d, a) {
    const ok = DIET_OK[a.diet];
    if (ok && !ok.includes(d.diet)) return -99;
    let s = 0; const why = [];
    if (d.type === a.type) { s += 6; why.push({ drink: "It's a drink ☕", snack: "Light snack, as you wanted 🥨", meal: "A proper, filling meal 🍜", sweet: "Sweet treat 🍰" }[a.type]); }
    else if (a.type === "sweet" && d.taste.sweet >= 4) { s += 4; why.push("Nice and sweet 🍰"); }
    const sp = d.taste.spicy, want = +a.spice;
    if (want === 0) { s += sp <= 1 ? 4 : -sp * 1.5; if (sp <= 1) why.push("Little to no spice 🧊"); }
    else if (want === 1) { s += 4 - Math.abs(sp - 2) * 1.5; if (sp >= 1 && sp <= 3) why.push("Just a little heat 🌶️"); }
    else { s += sp; if (sp >= 3) why.push("Plenty of spice 🔥"); }
    const f = d.taste[a.flavour]; s += f;
    if (f >= 3) why.push({ sweet: "Sweet flavour you love 🍯", salty: "Savoury & satisfying 🧂", sour: "Tangy & zesty 🍋", mild: "Mild & comforting 🥛" }[a.flavour]);
    const adv = +a.adv;
    s += 4 - Math.abs(d.adventure - adv) * 2;
    if (d.adventure === adv) why.push(adv === 1 ? "Close to food you know 🛟" : adv === 2 ? "Familiar, with a new twist 🧭" : "A brand-new experience 🚀");
    if (a.diet === "veg" && d.diet === "veg") why.push("Fully vegetarian 🥦");
    return { s, why };
  }
  function renderResult() {
    const ranked = DISHES.map(d => ({ d, r: scoreDish(d, answers) })).filter(x => x.r !== -99).sort((a, b) => b.r.s - a.r.s);
    const top = ranked[0], alts = ranked.slice(1, 3);
    const pct = Math.max(62, Math.min(98, Math.round(55 + (top.r.s / 19) * 43)));
    const d = top.d;
    $("#quiz").innerHTML = `<div class="q-progress"><i style="width:100%"></i></div>
      <div class="q-wrap"><div class="mascot pop" id="resMascot">${mascot("wow")}</div><div class="bubble" style="margin-bottom:24px">Ta-da! I think you'll love <b>${esc(d.name)}</b>! 🎉</div></div>
      <div class="result-card"><div class="thumb ph" style="background:${d.color}">${photo(d, true)}</div>
        <div class="body"><span class="match">${pct}% match</span><h3>${esc(d.name)}</h3><div class="muted" style="font-size:13px">${esc(d.cuisine)} · ${esc(d.pron)}</div>
        <p style="color:var(--ink2);line-height:1.5;margin:10px 0 0">${esc(d.what)}</p>
        <ul class="why">${top.r.why.slice(0, 4).map(w => `<li>✓ ${w}</li>`).join("")}</ul>
        <button class="cta" id="openRes" style="width:100%">See how to eat it →</button></div></div>
      <h2 class="section">Also worth a try</h2>
      <div class="alt">${alts.map(x => `<button data-open="${x.d.id}"><span class="mini-ph ph" style="background:${x.d.color}">${photo(x.d)}</span>${esc(x.d.name)}</button>`).join("")}</div>
      <button class="pill-btn q-back" id="retake">↺ Retake quiz</button>`;
    $("#openRes").onclick = () => openDish(d.id);
    $(".alt", $("#quiz")).onclick = e => { const b = e.target.closest("[data-open]"); if (b) openDish(b.dataset.open); };
    $("#retake").onclick = () => { qi = 0; answers = {}; renderQuiz(); };
    confetti();
  }
  function confetti() {
    const c = document.createElement("div"); c.className = "confetti";
    const cols = ["#FFD476", "#FF7A93", "#7EB6FF", "#B8D94A", "#C9B8F2", "#141414"];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%"; p.style.background = cols[i % cols.length];
      p.style.animationDelay = Math.random() * 0.5 + "s"; p.style.animationDuration = 1.2 + Math.random() + "s";
      c.appendChild(p);
    }
    $("#phone").appendChild(c); setTimeout(() => c.remove(), 2800);
  }

  /* ---------------- Saved ---------------- */
  let savedSeg = "liked";
  function renderSaved() {
    const tried = state.tried.length, total = DISHES.length, pct = tried / total;
    const C = 2 * Math.PI * 27;
    const list = (savedSeg === "liked" ? state.liked : state.tried).map(id => byId[id]).filter(Boolean);
    $("#saved").innerHTML = `
      <div class="passport"><svg class="ring" viewBox="0 0 66 66"><circle cx="33" cy="33" r="27" stroke="#333" stroke-width="8" fill="none"/>
        <circle cx="33" cy="33" r="27" stroke="#FFD476" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}" transform="rotate(-90 33 33)" id="ringArc" style="transition:stroke-dashoffset 1s cubic-bezier(.22,1,.36,1)"/>
        <text x="33" y="38" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" font-family="inherit">${tried}</text></svg>
        <div><h3>${tried ? `You've tried ${tried} of ${total} dishes` : "Your food adventure starts here"}</h3><p>${tried ? "Keep going — every new dish is a stamp in your passport!" : "Tap “I tried it” on a dish to collect your first stamp."}</p></div></div>
      <div class="seg" role="tablist"><button data-seg="liked" class="${savedSeg === "liked" ? "on" : ""}">♥ Saved (${state.liked.length})</button><button data-seg="tried" class="${savedSeg === "tried" ? "on" : ""}">✓ Tried (${tried})</button></div>
      <div class="grid">${list.length ? list.map((d, i) => cardHTML(d, i, "")).join("") :
        `<div class="empty" style="grid-column:1/-1"><div class="mascot">${mascot("wink")}</div><p><b>${savedSeg === "liked" ? "No saved dishes yet." : "Nothing tried yet."}</b><br>${savedSeg === "liked" ? "Tap ♥ on any dish to save it here." : "Open a dish and tap “I tried it”."}</p><button class="pill-btn" data-tab-go="home">Explore dishes →</button></div>`}</div>`;
    requestAnimationFrame(() => setTimeout(() => { const a = $("#ringArc"); if (a) a.style.strokeDashoffset = C * (1 - pct); }, 50));
  }

  /* ---------------- Tabs / global ---------------- */
  let activeTab = "home";
  function showTab(t) {
    activeTab = t;
    $$(".tab").forEach(b => b.classList.toggle("on", b.dataset.tab === t));
    $$(".screen").forEach(s => s.classList.toggle("active", s.id === "screen-" + t));
    if (t === "quiz" && qi >= QUESTIONS.length) { /* keep result */ } else if (t === "quiz") renderQuiz();
    if (t === "saved") renderSaved();
    if (t === "home") renderGrid();
  }
  function refreshCounts() {
    const n = state.liked.length, c = $("#savedCount");
    c.hidden = !n; c.textContent = n;
  }
  function refreshViews() { if (activeTab === "home") renderGrid(); if (activeTab === "saved") renderSaved(); }

  document.addEventListener("click", e => {
    const like = e.target.closest("[data-like]");
    if (like) { e.stopPropagation(); toggleLike(like.dataset.like, like); return; }
    const card = e.target.closest(".card[data-id]");
    if (card) { openDish(card.dataset.id); return; }
    const chip = e.target.closest("[data-cat]");
    if (chip) {
      cat = chip.dataset.cat; renderChips(); renderGrid();
      const c = CATS.find(x => x.id === cat);
      if (cat !== "all") sayHome(`${c.emoji} <b>${c.label}</b> — great choice! Tap a dish to learn more.`, "wink");
      const row = $("#chips"); row.scrollTo({ left: chip.offsetLeft - row.clientWidth / 2 + chip.offsetWidth / 2, behavior: "smooth" });
      return;
    }
    if (e.target.closest("[data-veg]")) { vegOnly = !vegOnly; renderChips(); renderGrid(); if (vegOnly) sayHome("🟢 Showing veg-friendly dishes (some have veg versions — ask for them!)", "happy"); return; }
    const tab = e.target.closest("[data-tab]"); if (tab) { showTab(tab.dataset.tab); return; }
    const go = e.target.closest("[data-tab-go]"); if (go) { showTab(go.dataset.tabGo); return; }
    const seg = e.target.closest("[data-seg]"); if (seg) { savedSeg = seg.dataset.seg; renderSaved(); }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && currentId) closeSheet();
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card[data-id]")) { e.preventDefault(); openDish(e.target.dataset.id); }
    if ((e.key === "Enter" || e.key === " ") && e.target.id === "homeMascot") { e.preventDefault(); nextTip(); }
    if (currentId && document.activeElement && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      if (e.key === "ArrowRight") goStep(stepIdx + 1);
      if (e.key === "ArrowLeft") goStep(stepIdx - 1);
    }
  });
  $("#scrim").onclick = closeSheet;
  $("#search").addEventListener("input", onSearch);
  $("#clearSearch").onclick = e => { e.preventDefault(); const s = $("#search"); s.value = ""; onSearch({ target: s }); s.focus(); };
  $("#homeMascot").onclick = nextTip;
  $("#quizBanner").onclick = () => { qi = 0; answers = {}; showTab("quiz"); };
  $("#surpriseBtn").onclick = () => { const d = DISHES[Math.floor(Math.random() * DISHES.length)]; openDish(d.id); };

  /* ---------------- Init ---------------- */
  $$("[data-total]").forEach(el => (el.textContent = DISHES.length));
  renderChips(); renderGrid(); refreshCounts();
  $("#homeBubble").innerHTML = tips[0];
  setMascot($("#homeMascot"), "happy", "wave");
  setInterval(() => { if (activeTab === "home" && !currentId && !query && document.activeElement !== $("#search")) nextTip(); }, 15000);
  window.Dishcover = { openDish, showTab };
})();
