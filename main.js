/* ==========================================================
   মূল স্ক্রিপ্ট: রেন্ডার, থিম, খোঁজ, মেনু ও শেয়ার
   ========================================================== */
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---- Render ----
  function render() {
    $("#heroWelcome").textContent = SITE.welcome;
    $("#introCard").innerHTML = `<p>${esc(SITE.intro)}</p>`;
    $("#infoGrid").innerHTML = INFO.map((i) =>
      `<article class="card"><div class="icon">${i.icon}</div><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`).join("");
    $("#noticeGrid").innerHTML = NOTICES.map((n) =>
      `<article class="card"><span class="badge ${n.urgent ? "urgent" : ""}">${esc(n.tag)}</span>
       <h3>${esc(n.title)}</h3><p class="placeholder">${esc(n.date)}</p><p>${esc(n.text)}</p></article>`).join("");
    $("#quickGrid").innerHTML = QUICK.map((q) =>
      `<a class="card" href="${esc(q.href || "#")}"><div class="icon">${q.icon}</div><h3>${esc(q.title)}</h3><p>${esc(q.text)}</p></a>`).join("");
    $("#contactGrid").innerHTML = CONTACTS.map((c) =>
      `<article class="card"><div class="icon">${c.icon}</div><h3>${esc(c.title)}</h3>
       <a class="tel" href="tel:${esc(c.phone)}">📞 ${esc(c.phone)}</a></article>`).join("");
  }

  // ---- Theme (saved in localStorage) ----
  function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); }
  let saved = null;
  try { saved = localStorage.getItem("rudrapara-theme"); } catch (e) { /* storage বন্ধ থাকলে উপেক্ষা */ }
  applyTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("#themeBtn").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("rudrapara-theme", next); } catch (e) {}
  });

  // ---- Search (filters cards) ----
  const sb = $("#searchBar"), si = $("#searchInput");
  $("#searchBtn").addEventListener("click", () => {
    sb.hidden = !sb.hidden;
    if (!sb.hidden) si.focus();
  });
  si.addEventListener("input", () => {
    const q = si.value.trim().toLowerCase();
    document.querySelectorAll(".card").forEach((c) => {
      c.style.display = !q || c.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });

  // ---- Three-dot menu ----
  const menuBtn = $("#menuBtn"), menu = $("#moreMenu");
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
    menuBtn.setAttribute("aria-expanded", String(!menu.hidden));
  });
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) { menu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // ---- Share ----
  const pageUrl = location.href.split("#")[0];
  const msg = `${SITE.shareText} ${pageUrl}`;
  const actions = {
    copy: async () => {
      try { await navigator.clipboard.writeText(pageUrl); alert("লিংক কপি হয়েছে ✅"); }
      catch (e) { alert("কপি করা যায়নি। লিংক: " + pageUrl); }
    },
    whatsapp: () => window.open("https://wa.me/?text=" + encodeURIComponent(msg), "_blank", "noopener"),
    facebook: () => window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl), "_blank", "noopener"),
    native: async () => {
      if (!navigator.share) return actions.copy();
      try { await navigator.share({ title: "আমাদের রুদ্রপাড়া", text: SITE.shareText, url: pageUrl }); }
      catch (e) { /* ব্যবহারকারী বাতিল করলে কিছু না */ }
    }
  };
  document.querySelectorAll("[data-share]").forEach((b) =>
    b.addEventListener("click", () => { actions[b.dataset.share](); menu.hidden = true; }));

  render();
})();
