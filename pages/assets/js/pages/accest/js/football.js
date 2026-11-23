/* ===== ফুটবল ক্লাব পেজ ===== */
document.addEventListener('DOMContentLoaded', () => {

  /* খেলোয়াড় রেন্ডার */
  const playersGrid = document.getElementById('playersGrid');
  if (playersGrid) {
    playersGrid.innerHTML = players.map(p => `
      <div class="player-card">
        <span class="jersey-num">${bnNum(p.number)}</span>
        <img src="${resolveImg(p.image)}" alt="${p.name}" class="player-photo">
        <div class="player-info">
          <div class="player-name">${p.name}</div>
          <div class="player-position">${p.position}</div>
        </div>
      </div>
    `).join('');
  }

  /* ম্যাচ রেন্ডার */
  const matchList = document.getElementById('matchList');
  if (matchList) {
    matchList.innerHTML = matches.map(m => `
      <div class="match-card">
        <div class="match-teams">
          <div class="team">
            <div class="team-name">${m.home}</div>
          </div>
          <div class="match-score">
            ${m.status === 'সম্পন্ন' ? `${m.homeScore} - ${m.awayScore}` : 'VS'}
          </div>
          <div class="team">
            <div class="team-name">${m.away}</div>
          </div>
        </div>
        <div class="card-meta" style="justify-content:center;border:none;padding:0">
          <span>📅 ${m.date}</span>
          <span>📍 ${m.venue}</span>
          <span>${m.status}</span>
        </div>
      </div>
    `).join('');
  }

  /* ট্রফি রেন্ডার */
  const trophyList = document.getElementById('trophyList');
  if (trophyList) {
    trophyList.innerHTML = trophies.map(t => `
      <div class="trophy-card">
        <div class="trophy-icon">${t.icon}</div>
        <div class="trophy-title">${t.title}</div>
        <div class="trophy-year">${t.year}</div>
      </div>
    `).join('');
  }

  /* ফুটবল গ্যালারি */
  const gallery = document.getElementById('footballGallery');
  if (gallery) {
    gallery.innerHTML = footballPhotos.map(p => `
      <div class="gallery-item">
        <img src="${resolveImg(p.image)}" alt="${p.title}" loading="lazy">
        <div class="gallery-caption">${p.title}</div>
      </div>
    `).join('');
  }
});
