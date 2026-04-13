// ... all your state variables and functions including initApp() ...

// ── App state ──
let deck = [], current = 0, known = 0, unsure = 0;
let flipped = false, activeTopics = new Set(['All Topics']);
let currentMode = 'all', cardResults = {};

// ── Type config — extend here if you add new types to your data ──
const TYPE_CONFIG = {
  def:      { cls: 'type-def',      label: 'Definition' },
  concept:  { cls: 'type-concept',  label: 'Concept'    },
  scenario: { cls: 'type-scenario', label: 'Scenario'   },
  compare:  { cls: 'type-compare',  label: 'Compare'    },
  exam:     { cls: 'type-exam',     label: 'Exam Tip'   },
};

function initApp() {
  // Validate globals exist
  if (typeof METADATA === 'undefined' || typeof ALL_CARDS === 'undefined') {
    document.getElementById('loading').textContent =
      'Error: data file must export METADATA and ALL_CARDS.';
    return;
  }

  // Apply metadata
  document.title = METADATA.title;
  document.getElementById('appTitle').textContent = METADATA.title;
  document.getElementById('appSubtitle').textContent = METADATA.subtitle;

  // Show UI
  document.getElementById('loading').style.display = 'none';
  document.getElementById('appTitle').style.display = '';
  document.getElementById('modeBar').style.display = '';
  document.getElementById('statsBar').style.display = '';
  document.getElementById('progressWrap').style.display = '';
  document.getElementById('cardContainer').style.display = '';
  document.getElementById('controls1').style.display = '';
  document.getElementById('kbHint').style.display = '';
  document.getElementById('controls2').style.display = '';

  buildFilters();
  buildDeck();
  updateStats();
  showCard();
}

// ── Derive topics from card data, preserving insertion order ──
function getTopics() {
  const seen = new Set();
  const ordered = [];
  ALL_CARDS.forEach(c => {
    if (!seen.has(c.topic)) { seen.add(c.topic); ordered.push(c.topic); }
  });
  return ordered;
}

function buildFilters() {
  const topics = ['All Topics', ...getTopics()];
  const bar = document.getElementById('filterBar');
  bar.innerHTML = '';
  topics.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (
      (activeTopics.has('All Topics') && t === 'All Topics') ||
      (!activeTopics.has('All Topics') && activeTopics.has(t))
        ? ' active' : ''
    );
    btn.textContent = t;
    btn.onclick = () => toggleTopic(t);
    bar.appendChild(btn);
  });
}

function toggleTopic(t) {
  if (t === 'All Topics') {
    activeTopics = new Set(['All Topics']);
  } else {
    activeTopics.delete('All Topics');
    activeTopics.has(t) ? activeTopics.delete(t) : activeTopics.add(t);
    if (activeTopics.size === 0) activeTopics = new Set(['All Topics']);
  }
  buildFilters();
  restartFiltered();
}

function getFilteredCards() {
  if (activeTopics.has('All Topics')) return ALL_CARDS;
  return ALL_CARDS.filter(c => activeTopics.has(c.topic));
}

function buildDeck() {
  let cards = getFilteredCards();
  if (currentMode === 'shuffle') cards = [...cards].sort(() => Math.random() - 0.5);
  deck = cards.map((c, i) => ({ ...c, idx: i }));
}

function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('mode-' + mode).classList.add('active');
  mode === 'unsure' ? reviewUnsure() : restartFiltered();
}

function restartFiltered() {
  buildDeck();
  current = 0; known = 0; unsure = 0; flipped = false;
  document.getElementById('completeScreen').classList.remove('visible');
  document.getElementById('cardContainer').style.display = '';
  updateStats();
  showCard();
}

function restart() { restartFiltered(); }

function restartAll() {
  cardResults = {};
  currentMode = 'all';
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('mode-all').classList.add('active');
  activeTopics = new Set(['All Topics']);
  buildFilters();
  restartFiltered();
}

function reviewUnsure() {
  const unsureCards = ALL_CARDS.filter(c => {
    const inFilter = activeTopics.has('All Topics') || activeTopics.has(c.topic);
    return inFilter && cardResults[c.id] === 'unsure';
  });
  deck = (unsureCards.length > 0 ? unsureCards : getFilteredCards())
    .map((c, i) => ({ ...c, idx: i }));
  if (currentMode === 'shuffle') deck.sort(() => Math.random() - 0.5);
  current = 0; known = 0; unsure = 0; flipped = false;
  document.getElementById('completeScreen').classList.remove('visible');
  document.getElementById('cardContainer').style.display = '';
  updateStats();
  showCard();
}

function showCard() {
  if (current >= deck.length) { showComplete(); return; }
  const c = deck[current];
  flipped = false;
  document.getElementById('card').classList.remove('flipped');

  const tc = TYPE_CONFIG[c.type] || { cls: 'type-def', label: c.type };
  document.getElementById('topicTag').textContent  = 'Topic ' + c.topic;
  document.getElementById('topicTagB').textContent = 'Topic ' + c.topic;
  document.getElementById('typeTag').className     = 'card-type-tag ' + tc.cls;
  document.getElementById('typeTag').textContent   = tc.label;
  document.getElementById('questionText').textContent = c.front;
  document.getElementById('answerText').innerHTML  = c.back;
  document.getElementById('cardNum').textContent   = (current + 1) + ' / ' + deck.length;
}

function flipCard() {
  flipped = !flipped;
  document.getElementById('card').classList.toggle('flipped', flipped);
}

function markCard(isKnown) {
  if (!flipped) { flipCard(); return; }
  cardResults[deck[current].id] = isKnown ? 'known' : 'unsure';
  if (isKnown) known++; else unsure++;
  current++;
  updateStats();
  showCard();
}

function updateStats() {
  const left = Math.max(0, deck.length - current);
  document.getElementById('statTotal').textContent = deck.length;
  document.getElementById('statKnow').textContent  = known;
  document.getElementById('statUnsure').textContent = unsure;
  document.getElementById('statLeft').textContent  = left;
  const pct = deck.length > 0 ? (current / deck.length * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
}

function showComplete() {
  document.getElementById('cardContainer').style.display = 'none';
  document.getElementById('completeScreen').classList.add('visible');
  const total = known + unsure;
  const pct   = total > 0 ? Math.round(known / total * 100) : 0;
  document.getElementById('scorePct').textContent = pct + '%';
  const unsureCount = Object.values(cardResults).filter(v => v === 'unsure').length;
  document.getElementById('completeSub').innerHTML =
    `You reviewed <strong>${deck.length}</strong> cards.<br>` +
    `<strong style="color:#4ade80">${known} known</strong> · ` +
    `<strong style="color:#f87171">${unsure} unsure</strong><br>` +
    (unsureCount > 0
      ? `<span style="color:#fbbf24">${unsureCount} cards marked unsure — review them to reinforce.</span>`
      : `<span style="color:#4ade80">All cards marked known! 🏆</span>`);
}

// ── Keyboard ──
document.addEventListener('keydown', e => {
  if (e.code === 'Space')       { e.preventDefault(); flipCard(); }
  else if (e.code === 'ArrowRight') markCard(true);
  else if (e.code === 'ArrowLeft')  markCard(false);
});

// ── Swipe ──
let touchStartX = 0;
document.getElementById('cardContainer').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.getElementById('cardContainer').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) < 40) { flipCard(); return; }
  if (dx > 60) markCard(true); else if (dx < -60) markCard(false);
});

initApp();