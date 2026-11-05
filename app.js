/* Dishcover app logic — no dependencies. */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  /* Expand the slim index rows (see data/index.js header) into dish objects. */
  const CATS = window.CATEGORIES, TK = ["sweet", "spicy", "sour", "salty", "bitter", "mild"], TY = ["meal", "snack", "sweet", "drink"], DI = ["veg", "egg", "both", "eggboth", "nonveg"];
  const PAL = Object.fromEntries(CATS.map(c => [c.id, c.pal]));
  const DISHES = window.DISHES = window.DISH_ROWS.map(r => {
    const [id, name, emoji, cuisine, cat, ty, di, adventure, t, col, side] = r;
    const d = { id, name, emoji, cuisine, cat, type: TY[ty], diet: DI[di], adventure, taste: {}, color: typeof col === "number" ? PAL[cat][col] : col,
      photo: { src: `images/${id}.jpg`, thumb: `images/thumb/${id}.jpg` } };
    TK.forEach((k, i) => d.taste[k] = +t[i]); if (side) d.side = true; return d;
  });
  const byId = Object.fromEntries(DISHES.map(d => [d.id, d]));
  const popularIds = new Set(DISHES.slice(0, 274).map(d => d.id));
  /* Details (steps, sample reviews, photo credit) live in data/detail/<cat>.js — loaded on demand with a script tag (works from file://). */
  const DET = window.DishcoverDetail = window.DishcoverDetail || { q: [] };
  const loaded = {}, loading = {};
  DET.add = () => { while (DET.q.length) { const [c, m] = DET.q.shift(); for (const id in m) if (byId[id]) Object.assign(byId[id], m[id]); loaded[c] = true; } };
  DET.add();
  function loadDetail(c) {
    if (loaded[c]) return Promise.resolve();
    return loading[c] || (loading[c] = new Promise((res, rej) => {
      const s = document.createElement("script"); s.src = `data/detail/${c}.js`; s.async = true;
      s.onload = () => { DET.add(); loaded[c] ? res() : rej(new Error("detail " + c)); };
      s.onerror = () => { delete loading[c]; s.remove(); rej(new Error("detail " + c)); };
      document.head.appendChild(s);
    }));
  }
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

  /* ---------------- Mascot: "Bae" the steamed-bun chef ---------------- */
  /* Bae: kawaii chef onigiri (AI-generated art, mascot/). Expressions are small emoji accents next to her. */
  const BAE_FX = { happy: "", wink: "✨", thinking: "💭", love: "💖", wow: "⭐" };
  function mascot(expr = "happy") {
    return `<img class="bae" src="mascot/bae-256.webp" srcset="mascot/bae-128.webp 128w, mascot/bae-256.webp 256w, mascot/bae-512.webp 512w" sizes="(min-width: 700px) 120px, 96px"
      alt="" draggable="false" onerror="this.onerror=null;this.removeAttribute('srcset');this.src='mascot/bae-512.jpg'">${BAE_FX[expr] ? `<span class="bae-fx bae-${expr}" aria-hidden="true">${BAE_FX[expr]}</span>` : ""}`;
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
    ["sweet", "Sweet", "#F8AE88"], ["spicy", "Spicy", "#FF6B4A"], ["sour", "Sour", "#B8D94A"],
    ["salty", "Salty", "#52A8FE"], ["bitter", "Bitter", "#9B7A5B"], ["mild", "Mild", "#7BD3FE"]
  ];
  const DIET = { veg: "🟢 Vegetarian", egg: "🟡 Veg, has egg", both: "🟢🔴 Veg & non-veg", eggboth: "🟡🔴 Egg & non-veg", nonveg: "🔴 Non-veg" };
  /* Quiz diet rule: strict veg -> only "veg"; eggs ok -> "veg" + "egg"; anything -> all. */
  const DIET_OK = { veg: ["veg"], egg: ["veg", "egg"], any: null };
  const topTastes = d => TASTES.filter(([k]) => d.taste[k] >= 3).sort((a, b) => d.taste[b[0]] - d.taste[a[0]]).slice(0, 2).map(t => t[1]);
  const stars = n => "★★★★★".slice(0, Math.round(n)) + "☆☆☆☆☆".slice(0, 5 - Math.round(n));
  const heartSVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" stroke="#141A33" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
  const isLiked = id => state.liked.includes(id);
  const isTried = id => state.tried.includes(id);
  function hl(text, q) {
    if (!q) return esc(text);
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }

  /* Photo with gentle fade-in; falls back to the emoji if the file can't load. */
  function photo(d, eager, big) {
    if (!d.photo) return `<span class="emoji-fb" style="opacity:1">${d.emoji}</span>`;
    return `<span class="emoji-fb">${d.emoji}</span><img class="photo" src="${big ? d.photo.src : (d.photo.thumb || d.photo.src)}" alt="Photo of ${esc(d.name)}" ${eager ? "" : 'loading="lazy"'} decoding="async"
      onload="this.classList.add('loaded')" onerror="this.parentNode.classList.add('noimg');this.remove()">`;
  }
  function credit(d) {
    const p = d.photo; if (!p) return "";
    const lic = p.licenseUrl ? `<a href="${esc(p.licenseUrl)}" target="_blank" rel="noopener">${esc(p.license)}</a>` : esc(p.license);
    return `<p class="credit">Photo: <a href="${esc(p.source)}" target="_blank" rel="noopener">${esc(p.author)}</a> / ${lic} · Wikimedia Commons</p>`;
  }

  function cardHTML(d, i, q) {
    const tt = topTastes(d);
    const dietLab = ({ veg: "VEG", egg: "EGG", both: "VEG & NON-VEG", eggboth: "EGG & NON-VEG", nonveg: "NON-VEG" })[d.diet] || "";
    const dietCls = (d.diet === "veg" || d.diet === "egg") ? "veg" : (d.diet === "nonveg" ? "hot" : "");
    const spicy = (d.taste && (d.taste.spicy || 0) >= 3);
    const rate = d.reviews && d.reviews.rating ? d.reviews.rating : null;
    const rcount = d.reviews && (d.reviews.count || (d.reviews.samples && d.reviews.samples.length));
    const foot = rate ? `<div class="card-foot"><span class="rate-pill"><span class="star">★</span> ${rate.toFixed(1)}</span>${rcount ? `<span class="rate-count">${rcount >= 1000 ? (rcount/1000).toFixed(1).replace(/\.0$/,"") + "k" : rcount}</span>` : ""}</div>` : "";
    return `<article class="card" data-id="${d.id}" tabindex="0" role="button" aria-label="Open ${esc(d.name)}" style="animation-delay:${Math.min(i, 12) * 35}ms">
      <div class="thumb ph" style="background:${d.color}">${photo(d)}</div>
      ${isTried(d.id) ? `<span class="tried-badge">✓ Tried</span>` : ""}
      <button class="heart ${isLiked(d.id) ? "on" : ""}" data-like="${d.id}" aria-pressed="${isLiked(d.id)}" aria-label="Save ${esc(d.name)}">${heartSVG}</button>
      <div class="cuisine">${esc(d.cuisine)}</div>
      ${popularIds.has(d.id) && (d.diet === "veg" || d.diet === "egg") ? `<div class="badge-good">VEG PICK</div>` : popularIds.has(d.id) ? `<div class="badge-good">POPULAR</div>` : ""}
      <h4>${hl(d.name, q)}</h4>
      <div class="card-meta">
        ${dietLab ? `<span class="meta-pill ${dietCls}">${dietLab}</span>` : ""}
        ${spicy ? `<span class="meta-pill hot">SPICY</span>` : ""}
      </div>
      <div class="mini-taste">${(tt.length ? tt : ["Mild"]).map(t => `<span class="tchip">${t}</span>`).join("")}</div>
      ${foot}
    </article>`;
  }

  /* ---------------- Home ---------------- */
  let cat = "all", vegOnly = false, query = "";
  const tips = [
    "Hi, I'm <b>Bae</b>! 👋 Seen a dish name you don't know? Search it and I'll explain.",
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
    if (tipI === tips.length) { const d = DISHES[Math.floor(Math.random() * DISHES.length)]; loadDetail(d.cat).then(() => sayHome(`${d.emoji} <b>${esc(d.name)}:</b> ${esc(d.tip)}`, "wink", "pop")).catch(() => sayHome(tips[0], "happy", "pop")); }
    else sayHome(tips[tipI], tipI % 2 ? "wink" : "happy", "pop");
  }

  function renderChips() {
    $("#chips").innerHTML = CATS.map(c => `<button class="chip ${c.id === cat ? "on" : ""}" data-cat="${c.id}" role="tab" aria-selected="${c.id === cat}">${c.emoji} ${c.label}</button>`).join("")
      + `<button class="chip veg ${vegOnly ? "on" : ""}" data-veg="1" aria-pressed="${vegOnly}">🟢 Veg-friendly</button>`;
  }
  /* ---------------- Smart search ----------------
     Words are normalised (case, accents, plurals, filler like "food"/"dishes").
     Every remaining word must match something: a diet label, a taste, a cuisine/region,
     a category/type, or a word (prefix) in the dish's name/cuisine/keywords. */
  const norm = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const FILLER = new Set("food foods dish dishes recipe recipes cuisine cuisines item items style the a an of and with in from for me show some any all list best popular famous good type types kind kinds".split(" "));
  /* Diet words match the diet label, not text ("veg" must not hit "non-veg" or "vegetables"). */
  const DIET_WORDS = {
    veg: ["veg", "both"], vegetarian: ["veg", "both"], veggie: ["veg", "both"], vegan: ["veg", "both"],
    eggetarian: ["veg", "egg", "both", "eggboth"],
    nonveg: ["nonveg", "both", "eggboth"], meat: ["nonveg", "both", "eggboth"]
  };
  const TASTE_WORDS = { spicy: "spicy", hot: "spicy", sweet: "sweet", sour: "sour", tangy: "sour", salty: "salty", bitter: "bitter", mild: "mild" };
  const rx = s => new RegExp(s, "i");
  const isCat = (...ids) => d => ids.includes(d.cat);
  const cu = re => d => re.test(d.cuisine);
  const or = (...fs) => d => fs.some(f => f(d));
  const IND = /indian|india|punjab|gujarat|kerala|tamil|bengal|odia|mughlai|hyderabad|rajasthan|maharasht|mumbai|kolkata|parsi|karnataka|andhra|telangana|goan|kashmir|udupi|mangalore|malabar|chettinad|awadhi|delhi|surat|indori|kutchi/i;
  const SOUTH_IND = /south indian|kerala|tamil|karnataka|andhra|telangana|udupi|mangalore|malabar|chettinad|hyderabad|tulu/i;
  /* Concepts: label shown in the count, primary = cuisine field starts with it (ranked first). */
  const CONCEPTS = {
    chinese: { label: "Chinese", primary: /^(chinese|cantonese|sichuan|beijing|hong kong|taiwanese|shanghai)/i,
      f: or(cu(/chinese|cantonese|sichuan|szechuan|taiwan|hong kong|macau|hokkien|teochew|hakka|fujian|shanghai|beijing|hui muslim|uyghur|dim sum|chifa/i), d => d.cat === "chinese" && !/tibet|nepal|bhutan|mongol|himalaya|newar/i.test(d.cuisine)) },
    indian: { label: "Indian", primary: IND, f: or(isCat("indian-street", "south-indian", "indian-mains", "indian-sweets"), cu(IND)) },
    "south indian": { label: "South Indian", primary: SOUTH_IND, f: or(isCat("south-indian"), cu(SOUTH_IND)) },
    "north indian": { label: "North Indian", primary: /north indian|punjab|mughlai/i, f: cu(/north indian|punjab|mughlai|delhi|rajasthan|kashmir|awadhi|lucknow|indori/i) },
    japanese: { label: "Japanese", primary: /^japan/i, f: cu(/japan|okinawa/i) },
    korean: { label: "Korean", primary: /^korean/i, f: cu(/korea/i) },
    thai: { label: "Thai", primary: /^thai/i, f: cu(/thai|isan/i) },
    vietnamese: { label: "Vietnamese", primary: /^vietnam/i, f: cu(/vietnam/i) },
    italian: { label: "Italian", primary: /^italian/i, f: or(isCat("italian"), cu(/italian|sicil|neapolitan|roman \(|venetian|tuscan|sardinian/i)) },
    mexican: { label: "Mexican", primary: /^mexican/i, f: or(isCat("mexican"), cu(/mexic|tex mex|tex-mex|yucat|oaxac/i)) },
    french: { label: "French", primary: /^french/i, f: cu(/french|breton|provenc|alsatian|lyonnais|parisian/i) },
    spanish: { label: "Spanish", primary: /^spanish/i, f: cu(/spanish|spain|catalan|basque|andalus|galician|valencian/i) },
    american: { label: "American", primary: /^american/i, f: cu(/american|cajun|creole|tex-mex|hawaiian|new england|southern/i) },
    british: { label: "British", primary: /^(british|english)/i, f: cu(/british|english|scottish|welsh|cornish|cornwall/i) },
    "middle eastern": { label: "Middle Eastern", primary: /middle eastern|levantine|lebanese/i, f: or(isCat("mideast"), cu(/middle eastern|levant|lebanese|syrian|palestin|jordan|iraqi|persian|iranian|arab|gulf|yemen|israeli/i)) },
    african: { label: "African", primary: /african/i, f: or(isCat("african"), cu(/african/i)) },
    european: { label: "European", primary: /european/i, f: isCat("european", "italian") },
    asian: { label: "Asian", primary: /^(chinese|japanese|korean|thai|vietnamese|indian)/i, f: isCat("chinese", "japan-korea", "seasia", "indian-street", "south-indian", "indian-mains", "indian-sweets") },
    "southeast asian": { label: "Southeast Asian", primary: /^(thai|vietnam|indonesia|malay|filipino|singapor|burmese)/i, f: isCat("seasia") },
    persian: { label: "Persian", primary: /^(persian|iranian)/i, f: cu(/persian|iranian/i) },
    "street food": { label: "street food", primary: /street/i, f: d => d.cat === "indian-street" || /street/i.test(d.cuisine) || hayOf(d).includes(" street") }
  };
  const ALIAS = { china: "chinese", india: "indian", desi: "indian", japan: "japanese", korea: "korean", thailand: "thai", vietnam: "vietnamese",
    italy: "italian", mexico: "mexican", france: "french", spain: "spanish", usa: "american", america: "american", uk: "british", england: "british", english: "british",
    mideast: "middle eastern", arabic: "middle eastern", arab: "middle eastern", africa: "african", europe: "european", asia: "asian", iranian: "persian", iran: "persian" };
  const TYPES = { sweet: ["sweet", "Sweets"], dessert: ["sweet", "Desserts"], mithai: ["sweet", "Sweets"], snack: ["snack", "Snacks"], drink: ["drink", "Drinks"], beverage: ["drink", "Drinks"], meal: ["meal", "Meals"], main: ["meal", "Mains"] };
  /* Plural/stem: "foods"->"food", "noodles"->"noodle", "curries"->"curry", "dishes"->"dish". */
  function stem(w) {
    if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
    if (w.length > 4 && /(ches|shes|xes|sses)$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith("s") && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
    return w;
  }
  const HAY = {};
  function hayOf(d) {
    if (HAY[d.id]) return HAY[d.id];
    const c = CATS.find(x => x.id === d.cat);
    const diet = { veg: "", egg: "egg", both: "", eggboth: "egg", nonveg: "" }[d.diet];
    const base = " " + norm([d.name, d.id.replace(/-/g, " "), d.cuisine, c ? c.label : "", d.type, diet].join(" ")) + " ";
    const kw = window.DishcoverSearch && window.DishcoverSearch[d.id];
    if (!kw) return base; // keywords not loaded yet
    return (HAY[d.id] = base + norm(kw) + " ");
  }
  const nameOf = d => d._n || (d._n = " " + norm(d.name) + " ");
  let VOCAB = null;
  function vocab() {
    if (VOCAB && window.DishcoverSearch) return VOCAB;
    const m = new Map(); DISHES.forEach(d => hayOf(d).split(" ").forEach(w => w.length > 3 && m.set(w, (m.get(w) || 0) + 1)));
    Object.keys(CONCEPTS).concat(Object.keys(ALIAS), Object.keys(TASTE_WORDS), Object.keys(TYPES), Object.keys(DIET_WORDS)).forEach(w => !w.includes(" ") && m.set(w, (m.get(w) || 0) + 1000));
    return (VOCAB = m);
  }
  function edit1or2(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return false;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i]; let best = i;
      for (let j = 1; j <= b.length; j++) { cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); best = Math.min(best, cur[j]); }
      if (best > max) return false; prev = cur;
    }
    return prev[b.length] <= max;
  }
  /* Turn a query into a list of terms, each {kind, test(d), weight(d), label}. */
  function parseQuery(q) {
    let s = " " + norm(q.replace(/\bnon[\s-]*veg(etarian)?\b/gi, "nonveg")) + " ";
    const terms = [], fixed = [];
    // multi-word concepts first
    Object.keys(CONCEPTS).filter(k => k.includes(" ")).forEach(k => {
      const re = new RegExp(" " + k.replace(" ", " ") + "(s|es)? ");
      if (re.test(s)) { s = s.replace(re, " "); terms.push(conceptTerm(k)); }
    });
    s.split(" ").filter(Boolean).forEach(raw => {
      if (FILLER.has(raw)) return;
      const w = raw, st = stem(raw);
      if (FILLER.has(st)) return;
      const t = termFor(w, st); if (t) return terms.push(t);
      // typo fallback: nothing in any dish starts with this word
      const fx = fixTypo(st);
      if (fx) { fixed.push([raw, fx]); terms.push(termFor(fx, stem(fx)) || wordTerm(fx)); }
      else terms.push(wordTerm(st));
    });
    return { terms, fixed };
  }
  function conceptTerm(k) { const c = CONCEPTS[k]; return { kind: "cuisine", label: c.label, test: c.f, weight: d => (c.primary.test(d.cuisine) ? 6 : 3) }; }
  function termFor(w, st) {
    if (DIET_WORDS[w] || DIET_WORDS[st]) { const ok = DIET_WORDS[w] || DIET_WORDS[st]; return { kind: "diet", label: w === "meat" || st === "nonveg" ? "non-veg" : "veg", test: d => ok.includes(d.diet), weight: () => 0 }; }
    let ck = CONCEPTS[w] ? w : CONCEPTS[st] ? st : ALIAS[w] || ALIAS[st];
    if (!ck && w.length >= 4) { // partial word: "chin", "japanes", "ital" -> the cuisine it starts
      const hits = Object.keys(CONCEPTS).filter(k => !k.includes(" ") && k.startsWith(w));
      if (hits.length === 1) ck = hits[0];
    }
    if (ck) return conceptTerm(ck);
    if (TYPES[st] && !(st === "sweet" && w === "sweet")) { const [ty, label] = TYPES[st]; return { kind: "type", label, test: d => d.type === ty || (ty === "sweet" && d.cat === "indian-sweets") || (ty === "drink" && d.cat === "drinks"), weight: () => 1 }; }
    if (TASTE_WORDS[w]) { const k = TASTE_WORDS[w]; return { kind: "taste", label: w, test: d => d.taste[k] >= 3 || (k === "sweet" && d.type === "sweet"), weight: d => d.taste[k] }; }
    return null;
  }
  function wordTerm(w) {
    const p = " " + w;
    return { kind: "word", label: w, w,
      test: d => hayOf(d).includes(p) || (w.length >= 4 && nameOf(d).includes(w)),
      weight: d => (nameOf(d).includes(p) ? (nameOf(d).startsWith(p) ? 14 : 10) : nameOf(d).includes(w) ? 7 : (" " + norm(d.cuisine)).includes(p) ? 5 : 0) };
  }
  function fixTypo(w) {
    if (w.length < 4 || DISHES.some(d => hayOf(d).includes(" " + w) || nameOf(d).includes(w))) return null;
    const max = w.length >= 7 ? 2 : 1; let best = null, bestN = 0;
    for (const [v, n] of vocab()) if (n > bestN && v[0] === w[0] && edit1or2(w, v, max)) { best = v; bestN = n; }
    return best;
  }
  const POPULAR = 274; // Batches 0-1 (the best-known dishes) come first within a tier
  const idx = Object.fromEntries(DISHES.map((d, i) => [d.id, i]));
  function search(q, pool) {
    const { terms, fixed } = parseQuery(q);
    if (!terms.length) return { list: pool.slice(), terms, fixed };
    const scored = [];
    for (const d of pool) {
      let ok = true, sc = 0;
      for (const t of terms) { if (!t.test(d)) { ok = false; break; } sc += t.weight(d); }
      if (ok) scored.push([sc, d]);
    }
    scored.sort((a, b) => b[0] - a[0] || rank(a[1], b[1]));
    return { list: scored.map(x => x[1]), terms, fixed };
  }
  function rank(a, b) {
    const pa = idx[a.id] < POPULAR, pb = idx[b.id] < POPULAR;
    if (pa !== pb) return pa ? -1 : 1;
    return pa ? idx[a.id] - idx[b.id] : a.name.localeCompare(b.name);
  }
  function resultLabel(n, terms) {
    const adj = terms.filter(t => t.kind === "taste" || t.kind === "diet").map(t => t.label);
    const cuis = terms.filter(t => t.kind === "cuisine").map(t => t.label);
    const ty = terms.find(t => t.kind === "type");
    const words = terms.filter(t => t.kind === "word");
    if (!cuis.length && !ty && !adj.length) return null;
    const noun = ty ? (n === 1 ? ty.label.replace(/s$/, "").toLowerCase() : ty.label.toLowerCase()) : (n === 1 ? "dish" : "dishes");
    const sf = cuis.includes("street food");
    return `${n} ${[...adj, ...cuis.filter(c => c !== "street food")].join(" ")}${sf ? " street-food" : ""} ${noun}${words.length ? " with “" + words.map(w => w.label).join(" ") + "”" : ""}`.replace(/\s+/g, " ");
  }
  /* Keyword file loads after first paint (or on first search), then re-runs any active search. */
  let searchReq = false;
  function loadSearch() {
    if (searchReq) return; searchReq = true;
    window.DishcoverSearchReady = () => { if (query.trim()) renderGrid(true); };
    const s = document.createElement("script"); s.src = "data/search.js"; s.async = true;
    s.onerror = () => { searchReq = false; s.remove(); };
    document.head.appendChild(s);
  }
  const PAGE = 40; let shown = PAGE, lastList = [], lastQ = "";
  function renderGrid(quiet, more) {
    if (more) {
      const from = shown; shown += PAGE;
      $("#grid").insertAdjacentHTML("beforeend", lastList.slice(from, shown).map((d, i) => cardHTML(d, i, lastQ)).join(""));
      return renderMore();
    }
    shown = PAGE;
    const q = query.trim();
    const pool = DISHES.filter(d => (cat === "all" || d.cat === cat) && (!vegOnly || ["veg", "egg", "both"].includes(d.diet)));
    const res = q ? search(q, pool) : { list: pool, terms: [], fixed: [] };
    const list = res.list;
    const c = CATS.find(x => x.id === cat);
    const lab = q && resultLabel(list.length, res.terms);
    $("#listTitle").textContent = q ? (lab || `Results for “${q}”`) : (cat === "all" ? "All dishes" : c.label);
    $("#count").textContent = `${list.length} dish${list.length === 1 ? "" : "es"}${res.fixed.length ? " · showing “" + res.fixed.map(f => f[1]).join(" ") + "”" : ""}`;
    const hq = (res.terms.find(t => t.kind === "word") || {}).w || "";
    const g = $("#grid"); g.classList.toggle("quiet", !!quiet);
    lastList = list; lastQ = hq;
    g.innerHTML = list.length ? list.slice(0, shown).map((d, i) => cardHTML(d, i, hq)).join("")
      : `<div class="empty" style="grid-column:1/-1"><div class="mascot" id="emptyMascot">${mascot("thinking")}</div><p><b>Hmm, I don't know “${esc(q)}” yet.</b><br>Try another spelling, or a word like “spicy”, “coffee” or “noodles”.</p></div>`;
    $("#hint").textContent = q ? (list.length ? `Bae found ${list.length} match${list.length === 1 ? "" : "es"} ✨` : "") : "";
    renderMore();
  }
  function renderMore() {
    const left = lastList.length - shown, w = $("#moreWrap");
    w.innerHTML = left > 0 ? `<button class="pill-btn more-btn" id="moreBtn">Show more <span class="muted">(${left} more)</span></button>` : "";
  }
  let searchT;
  function onSearch(e) {
    query = e.target.value; loadSearch();
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
  let openReq = 0;
  function openDish(id) {
    const d = byId[id]; if (!d) return Promise.resolve();
    if (!d.steps) {
      const req = ++openReq;
      return loadDetail(d.cat).then(() => { if (req === openReq) return openDish(id); })
        .catch(() => toast("Couldn't load that dish — please try again.", "thinking"));
    }
    openReq++;
    currentId = id; stepIdx = 0; reviewStars = 0;
    const mine = state.reviews[id] || [];
    const sc = $("#sheetScroll");
    sc.innerHTML = `
      <div class="sheet-head">
        <button class="icon-btn" id="closeSheet" aria-label="Close">✕</button>
        <button class="icon-btn ${isLiked(id) ? "on" : ""}" id="sheetLike" aria-pressed="${isLiked(id)}" aria-label="Save dish">${heartSVG}</button>
      </div>
      <div class="d-hero ph" style="background:${d.color}">${photo(d, true, true)}
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

      <div class="box"><h3>💡 Bae's tip</h3><p>${esc(d.tip)}</p></div>

      <div class="box" id="reviewsBox"><h3>💬 Reviews</h3>
        <div class="rating-row"><span class="big-rate">${d.reviews.rating.toFixed(1)}</span><div><span class="rate-pill"><span class="star">★</span> ${d.reviews.rating.toFixed(1)}</span> <span class="rate-count">${(d.reviews.samples||[]).length} samples</span><div class="muted" style="font-size:12px;margin-top:4px">sample rating</div></div></div>
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
    return `<div class="review"><span class="avatar" style="background:${mine ? "#E6EEFF" : "var(--bg)"}">${esc((r.name || "Y")[0].toUpperCase())}</span>
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
    if (d.side) return -99; // condiments, dips, breads & side-only items are never quiz picks
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
    if (!top.d.what) { $("#quiz").innerHTML = `<div class="q-wrap"><div class="bubble">Thinking… 🤔</div></div>`; return loadDetail(top.d.cat).then(renderResult).catch(() => toast("Couldn't load that dish — please try again.", "thinking")); }
    const pct = Math.max(62, Math.min(98, Math.round(55 + (top.r.s / 19) * 43)));
    const d = top.d;
    $("#quiz").innerHTML = `<div class="q-progress"><i style="width:100%"></i></div>
      <div class="q-wrap"><div class="mascot pop" id="resMascot">${mascot("wow")}</div><div class="bubble" style="margin-bottom:24px">Ta-da! I think you'll love <b>${esc(d.name)}</b>! 🎉</div></div>
      <div class="result-card"><div class="thumb ph" style="background:${d.color}">${photo(d, true, true)}</div>
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
    const cols = ["#0050FF", "#FF5200", "#52A8FE", "#F8AE88", "#7BD3FE", "#0B1F5C"];
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
      <div class="passport"><svg class="ring" viewBox="0 0 66 66"><circle cx="33" cy="33" r="27" stroke="#2A3A78" stroke-width="8" fill="none"/>
        <circle cx="33" cy="33" r="27" stroke="#FF5200" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}" transform="rotate(-90 33 33)" id="ringArc" style="transition:stroke-dashoffset 1s cubic-bezier(.22,1,.36,1)"/>
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
    if (e.target.closest("#moreBtn")) { renderGrid(false, true); return; }
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
  $("#scrim").onclick = () => { if ($("#randSheet").classList.contains("show")) closeRand(); else closeSheet(); };
  $("#search").addEventListener("input", onSearch);
  $("#clearSearch").onclick = e => { e.preventDefault(); const s = $("#search"); s.value = ""; onSearch({ target: s }); s.focus(); };
  $("#homeMascot").onclick = nextTip;
  $("#quizBanner").onclick = () => { qi = 0; answers = {}; showTab("quiz"); };

  /* ---------------- Random picker with constraints ----------------
     The user picks what they feel like (kind, diet, cuisine); Bae only picks inside that group.
     Side items (condiments, dips, breads) are never picked, like the quiz. Sweets never include spicy dishes. */
  const R_TYPES = [["any", "🍽️", "Anything"], ["sweet", "🍰", "Sweets"], ["snack", "🥟", "Snacks"], ["meal", "🍛", "Meals"], ["drink", "🥤", "Drinks"]];
  const R_DIETS = [["any", "Any"], ["veg", "🟢 Veg only"], ["egg", "🟡 Veg + egg"], ["nonveg", "🔴 Non-veg"]];
  const R_CUIS = ["any", "indian", "south indian", "chinese", "japanese", "korean", "thai", "italian", "mexican", "french", "middle eastern", "american"];
  const R_DIET_OK = { veg: ["veg"], egg: ["veg", "egg"], nonveg: ["nonveg", "both", "eggboth"] };
  const rand = { type: "any", diet: "any", cuisine: "any", recent: [], last: null };
  function randPool(c = rand) {
    return DISHES.filter(d => !d.side
      && (c.type === "any" || (d.type === c.type && (c.type !== "sweet" || d.taste.spicy < 2)))
      && (c.diet === "any" || R_DIET_OK[c.diet].includes(d.diet))
      && (c.cuisine === "any" || CONCEPTS[c.cuisine].f(d)));
  }
  function randLabel(c = rand) {
    const t = { any: "dish", sweet: "sweet", snack: "snack", meal: "meal", drink: "drink" }[c.type];
    const di = { any: "", veg: "veg", egg: "veg/egg", nonveg: "non-veg" }[c.diet];
    const cu = c.cuisine === "any" ? "" : CONCEPTS[c.cuisine].label;
    return ["Random", di, cu, t].filter(Boolean).join(" ");
  }
  function randPick(c = rand) {
    const pool = randPool(c); if (!pool.length) return null;
    const key = c.type + c.diet + c.cuisine; if (rand.key !== key) { rand.key = key; rand.recent = []; }
    const avoid = new Set(rand.recent.slice(-Math.min(10, pool.length - 1)));
    const free = pool.filter(d => !avoid.has(d.id));
    const d = (free.length ? free : pool)[Math.floor(Math.random() * (free.length || pool.length))];
    rand.recent.push(d.id); if (rand.recent.length > 20) rand.recent.shift();
    return d;
  }
  window.DishcoverRandom = { pool: randPool, pick: randPick, label: randLabel };
  function renderRandChips() {
    $("#randType").innerHTML = R_TYPES.map(([k, e, l]) => `<button class="chip ${rand.type === k ? "on" : ""}" data-rtype="${k}" aria-pressed="${rand.type === k}">${e} ${l}</button>`).join("");
    $("#randDiet").innerHTML = R_DIETS.map(([k, l]) => `<button class="chip ${rand.diet === k ? "on" : ""}" data-rdiet="${k}" aria-pressed="${rand.diet === k}">${l}</button>`).join("");
    $("#randCuisine").innerHTML = R_CUIS.map(k => `<button class="chip ${rand.cuisine === k ? "on" : ""}" data-rcui="${k}" aria-pressed="${rand.cuisine === k}">${k === "any" ? "🌍 Any" : CONCEPTS[k].label}</button>`).join("");
    const n = randPool().length;
    $("#randSub").textContent = n ? `Bae will only pick from these ${n} dish${n === 1 ? "" : "es"}.` : "Nothing matches that combo. Try loosening a filter.";
    $("#randGo").disabled = !n;
    $("#randGo").textContent = rand.last ? "🎲 Another one" : "🎲 Pick for me";
  }
  function randShow(d) {
    rand.last = d;
    $("#randResult").innerHTML = d ? `<div class="rs-card" data-rid="${d.id}">
      <div class="thumb" style="background:${d.color}">${d.emoji}<img src="${d.photo.thumb}" alt="Photo of ${esc(d.name)}" onerror="this.remove()"></div>
      <div><span class="tag" id="randTag">🎲 ${esc(randLabel())}</span><h4>${esc(d.name)}</h4><div class="cuisine">${esc(d.cuisine)} · ${DIET[d.diet]}</div><button class="open" data-ropen="${d.id}">See how to eat it →</button></div></div>` : "";
    setMascot($("#randMascot"), d ? "wow" : "thinking", "pop");
    renderRandChips();
  }
  function openRand() {
    rand.last = null; $("#randResult").innerHTML = ""; setMascot($("#randMascot"), "happy");
    renderRandChips();
    $("#scrim").classList.add("show"); $("#randSheet").classList.add("show");
  }
  function closeRand() { $("#randSheet").classList.remove("show"); if (!$("#sheet").classList.contains("show")) $("#scrim").classList.remove("show"); }
  $("#randSheet").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.rtype) rand.type = b.dataset.rtype; else if (b.dataset.rdiet) rand.diet = b.dataset.rdiet; else if (b.dataset.rcui) rand.cuisine = b.dataset.rcui;
    else if (b.id === "randGo") return randShow(randPick());
    else if (b.dataset.ropen) { closeRand(); return openDish(b.dataset.ropen); }
    else if (b.id === "randClose") return closeRand();
    else return;
    rand.last = null; $("#randResult").innerHTML = ""; renderRandChips();
  });
  $("#surpriseBtn").onclick = openRand;


  /* ---------------- Init ---------------- */
  $$("[data-total]").forEach(el => (el.textContent = DISHES.length));
  renderChips(); renderGrid(); refreshCounts();
  $("#homeBubble").innerHTML = tips[0];
  setMascot($("#homeMascot"), "happy", "wave");
  setInterval(() => { if (activeTab === "home" && !currentId && !query && document.activeElement !== $("#search")) nextTip(); }, 15000);
  if (document.readyState === "complete") setTimeout(loadSearch, 300); else window.addEventListener("load", () => setTimeout(loadSearch, 300));
  window.Dishcover = { openDish, showTab };
})();
