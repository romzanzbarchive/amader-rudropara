/* ==========================================================
   কার্ড জেনারেটর: ডিজিটাল কার্ড ও ফটো কার্ড
   সব প্রক্রিয়া ব্রাউজারে হয়; কোনো সার্ভারে ছবি যায় না।
   ========================================================== */
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);

  const PC_HEADS = {
    "pc-greeting": "শুভেচ্ছা", "pc-birthday": "শুভ জন্মদিন", "pc-eid": "ঈদ মোবারক",
    "pc-independence": "স্বাধীনতা দিবসের শুভেচ্ছা", "pc-victory": "বিজয় দিবসের শুভেচ্ছা",
    "pc-memory": "গ্রামের স্মৃতি", "pc-announce": "বিশেষ ঘোষণা"
  };

  // ছবি পড়া (ব্রাউজারে, data URL হিসেবে)
  function readImage(input, cb) {
    const f = input.files && input.files[0];
    if (!f) return cb(null);
    if (!f.type.startsWith("image/")) { alert("শুধু ছবি ফাইল আপলোড করুন।"); input.value = ""; return cb(null); }
    const r = new FileReader();
    r.onload = () => cb(r.result);
    r.onerror = () => alert("ছবিটি পড়া যায়নি।");
    r.readAsDataURL(f);
  }

  // কার্ড থেকে PNG Blob তৈরি
  function toPng(el) {
    if (typeof html2canvas === "undefined") {
      alert("ইন্টারনেট সংযোগ দেখুন; কার্ড তৈরির লাইব্রেরি লোড হয়নি।");
      return Promise.reject();
    }
    return html2canvas(el, { scale: 2, useCORS: true, backgroundColor: null })
      .then((c) => new Promise((res) => c.toBlob(res, "image/png")));
  }

  function download(el, name) {
    toPng(el).then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    }).catch(() => alert("কার্ড ডাউনলোড করা যায়নি।"));
  }

  function share(el, name, text) {
    toPng(el).then((blob) => {
      const file = new File([blob], name, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        return navigator.share({ files: [file], title: "আমাদের রুদ্রপাড়া", text });
      }
      download(el, name); // ফাইল শেয়ার সমর্থিত না হলে ডাউনলোড
    }).catch(() => { /* ব্যবহারকারী বাতিল করলে কিছু না */ });
  }

  // ---------- ডিজিটাল কার্ড ----------
  if ($("#dCard")) {
    const fields = { dName: "#pName", dDesig: "#pDesig", dVillage: "#pVillage" };
    const card = $("#dCard");
    const img = $("#dImg"), init = $("#dInit");

    function updateDigital() {
      for (const [inId, outSel] of Object.entries(fields)) {
        $(outSel).textContent = $("#" + inId).value.trim();
      }
      $("#pDesig").textContent = $("#dDesig").value.trim();
      const name = $("#dName").value.trim();
      init.textContent = name ? name.charAt(0) : "";
      card.className = "card-face digital " + $("#dTpl").value;
    }
    document.querySelectorAll("#dName,#dDesig,#dVillage,#dTpl").forEach((el) =>
      el.addEventListener("input", updateDigital));
    $("#dTpl").addEventListener("change", updateDigital);
    $("#dPhoto").addEventListener("change", function () {
      readImage(this, (src) => { img.src = src || ""; img.hidden = !src; init.hidden = !!src; });
    });
    $("#dDownload").addEventListener("click", () => download(card, "digital-card.png"));
    $("#dShare").addEventListener("click", () =>
      share(card, "digital-card.png", "আমার ডিজিটাল পরিচিতি কার্ড — আমাদের রুদ্রপাড়া"));
    updateDigital();
  }

  // ---------- ফটো কার্ড ----------
  if ($("#pcCard")) {
    const card = $("#pcCard"), img = $("#pcImg");

    function updatePhoto() {
      const tpl = $("#pcTpl").value;
      card.className = "card-face photo " + tpl;
      card.style.background = $("#pcBg").value;
      card.style.color = $("#pcColor").value;
      $("#pcHead").textContent = PC_HEADS[tpl] || "";
      $("#pcOut").textContent = $("#pcText").value.trim();
      const msg = "আমাদের রুদ্রপাড়া থেকে — " + $("#pcOut").textContent;
      const url = location.href.split("/").slice(0, -1).join("/") + "/";
      $("#pcWa").href = "https://wa.me/?text=" + encodeURIComponent(msg + " " + url);
      $("#pcFb").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    }
    ["#pcTpl", "#pcText", "#pcColor", "#pcBg"].forEach((s) => $(s).addEventListener("input", updatePhoto));
    $("#pcTpl").addEventListener("change", updatePhoto);
    $("#pcPhoto").addEventListener("change", function () {
      readImage(this, (src) => { img.src = src || ""; img.hidden = !src; });
    });
    $("#pcDownload").addEventListener("click", () => download(card, "photo-card.png"));
    $("#pcShare").addEventListener("click", () => share(card, "photo-card.png", "আমাদের রুদ্রপাড়া"));
    updatePhoto();
  }
})();
