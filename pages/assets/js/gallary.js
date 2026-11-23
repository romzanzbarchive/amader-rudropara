/* ===== গ্যালারি পেজ লজিক ===== */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('galleryGrid');
  const filterBar = document.getElementById('galleryFilter');
  if (!grid) return;

  const categories = ['সব', ...new Set(galleryImages.map(i => i.category))];
  let currentCat = 'সব';

  filterBar.innerHTML = categories.map(c =>
    `<button class="filter-btn ${c === 'সব' ? 'active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');

  function render() {
    const list = currentCat === 'সব' ? galleryImages : galleryImages.filter(i => i.category === currentCat);
    grid.innerHTML = list.map((img) => `
      <div class="gallery-item" onclick="openGalleryModal(${galleryImages.indexOf(img)})">
        <img src="${resolveImg(img.image)}" alt="${img.title}" loading="lazy">
        <div class="gallery-caption">${img.title}</div>
      </div>
    `).join('');
  }

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  });

  render();
});
