const BASE = window.location.pathname.includes('/pages/') ? '..' : '.';

function bnNum(n) {
  const map = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
  return String(n).split('').map(c => map[c] || c).join('');
}

function resolveImg(src) {
  if (!src) return '';
  if (src.startsWith('data:') || src.startsWith('http')) return src;
  return `${BASE}/assets/images/${src}`;
}

function initTheme() {
  const saved = localStorage.getItem('rudrapara-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('rudrapara-theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.title = isDark ? 'লাইট মোড' : 'ডার্ক মোড';
}

function initMoreMenu() {
  const moreBtn = document.getElementById('moreMenuBtn');
  const dropdown = document.getElementById('moreDropdown');
  if (!moreBtn || !dropdown) return;
  moreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function shareWhatsApp(title, text, url) {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title}\n\n${text}\n\n${url || location.href}`)}`;
  window.open(shareUrl, '_blank');
}

function shareFacebook(url) {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url || location.href)}`, '_blank');
}

function copyLink(url) {
  navigator.clipboard.writeText(url || location.href).then(() => {
    showToast('✅ লিংক কপি হয়েছে');
  }).catch(() => showToast('❌ কপি করা যায়নি'));
}

function nativeShare(title, text, url) {
  if (navigator.share) {
    navigator.share({ title, text, url: url || location.href }).catch(() => {});
  } else {
    copyLink(url);
  }
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = `position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:#0a1a33;color:white;padding:12px 24px;border-radius:12px;font-size:14px;z-index:9999;box-shadow:0 10px 30px rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;pointer-events:none;`;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

function renderNotices(container, limit) {
  if (!container) return;
  const list = limit ? notices.slice(0, limit) : notices;
  container.innerHTML = list.map(n => `
    <div class="notice-card ${n.urgent ? 'urgent' : ''}">
      <span class="notice-tag">${n.category}</span>
      <h4>${n.title}</h4>
      <p>${n.body}</p>
      <span class="notice-date">📅 ${n.date}</span>
    </div>
  `).join('');
}

function renderGalleryPreview(container, limit = 8) {
  if (!container) return;
  container.innerHTML = galleryImages.slice(0, limit).map((img, i) => `
    <div class="gallery-item" onclick="openGalleryModal(${i})">
      <img src="${resolveImg(img.image)}" alt="${img.title}" loading="lazy">
      <div class="gallery-caption">${img.title}</div>
    </div>
  `).join('');
}

function openGalleryModal(index) {
  const img = galleryImages[index];
  if (!img) return;
  let overlay = document.getElementById('galleryModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'galleryModal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal-content"><button class="modal-close" onclick="document.getElementById('galleryModal').classList.remove('open')">✕</button><img id="galleryModalImg" src="" alt=""></div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }
  document.getElementById('galleryModalImg').src = resolveImg(img.image);
  overlay.classList.add('open');
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMoreMenu();
  initReveal();
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  renderNotices(document.getElementById('homeNotices'), 3);
  renderGalleryPreview(document.getElementById('homeGallery'), 8);
});
