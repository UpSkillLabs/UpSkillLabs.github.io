// ── App state ──
let deck = [], current = 0, known = 0, unsure = 0;
let flipped = false, activeTopics = new Set(['All Topics']);
let currentMode = 'all', cardResults = {};

// ── Type config ──
const TYPE_CONFIG = {
  def:      { cls: 'type-def',      label: 'Definition' },
  concept:  { cls: 'type-concept',  label: 'Concept'    },
  scenario: { cls: 'type-scenario', label: 'Scenario'   },
  compare:  { cls: 'type-compare',  label: 'Compare'    },
  exam:     { cls: 'type-exam',     label: 'Exam Tip'   },
};

function initApp() {
  if (typeof METADATA === 'undefined' || typeof ALL_CARDS === 'undefined') {
    document.getElementById('loading').textContent =
      'Error: data file must export METADATA and ALL_CARDS.';
    return;
  }

  document.title = METADATA.title;
  document.getElementById('appTitle').textContent    = METADATA.title;
  document.getElementById('appSubtitle').textContent = METADATA.subtitle;

  document.getElementById('loading').style.display      = 'none';
  document.getElementById('appTitle').style.display     = '';
  document.getElementById('modeBar').style.display      = '';
  document.getElementById('statsBar').style.display     = '';
  document.getElementById('progressWrap').style.display = '';
  document.getElementById('cardContainer').style.display = '';
  document.getElementById('controls1').style.display    = '';
  document.getElementById('kbHint').style.display       = '';

  buildFilters();
  buildDeck();
  updateStats();
  showCard();
  initSwipe();
}

// ── Filters ──
function getTopics() {
  const seen = new Set(), ordered = [];
  ALL_CARDS.forEach(c => { if (!seen.has(c.topic)) { seen.add(c.topic); ordered.push(c.topic); } });
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
      (!activeTopics.has('All Topics') && activeTopics.has(t)) ? ' active' : ''
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

// ── Mode ──
function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('mode-' + mode).classList.add('active');
  mode === 'unsure' ? reviewUnsure() : restartFiltered();
}

// ── Restart ──
function restartFiltered() {
  buildDeck();
  current = 0; known = 0; unsure = 0; flipped = false;
  document.getElementById('completeScreen').classList.remove('visible');
  document.getElementById('cardContainer').style.display = '';
  updateStats();
  showCard();
  document.getElementById('controls2').style.display = 'none';

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

// ── Card render ──
function showCard() {
  if (current >= deck.length) { showComplete(); return; }
  const c = deck[current];
  const card = document.getElementById('card');

  // Reset flip instantly
  card.style.transition = 'none';
  card.classList.remove('flipped');
  flipped = false;
  void card.offsetWidth; // force reflow
  card.style.transition = ''; // restore

  const tc = TYPE_CONFIG[c.type] || { cls: 'type-def', label: c.type || '' };
  document.getElementById('topicTag').textContent    = c.topic || '';
  document.getElementById('topicTagB').textContent   = c.topic || '';
  document.getElementById('typeTag').className       = 'tag ' + tc.cls;
  document.getElementById('typeTag').textContent     = tc.label;
  document.getElementById('questionText').textContent = c.front;
  document.getElementById('answerText').innerHTML    = c.back;
  document.getElementById('cardNum').textContent     = (current + 1) + ' / ' + deck.length;
}

function flipCard() {
  flipped = !flipped;
  document.getElementById('card').classList.toggle('flipped', flipped);
}

function markCard(isKnown) {
  if (!flipped) { flipCard(); return; }
  cardResults[deck[current].id] = isKnown ? 'known' : 'unsure';
  if (isKnown) known++; else unsure++;

  // swipe pop animation
  const hint = document.getElementById(isKnown ? 'swipeRight' : 'swipeLeft');
  hint.style.opacity = '1';
  setTimeout(() => { hint.style.opacity = '0'; }, 260);

  current++;
  updateStats();
  setTimeout(showCard, 260);
}

// ── Stats / progress ──
function updateStats() {
  const left = Math.max(0, deck.length - current);
  document.getElementById('statTotal').textContent  = deck.length;
  document.getElementById('statKnow').textContent   = known;
  document.getElementById('statUnsure').textContent = unsure;
  document.getElementById('statLeft').textContent   = left;
  const pct = deck.length > 0 ? (current / deck.length * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
}

// ── Complete ──
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

  // Animate SVG ring
  const circumference = 2 * Math.PI * 34; // r=34 → 213.6
  const ring = document.getElementById('ringFill');
  ring.style.strokeDasharray  = circumference;
  ring.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ring.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    });
  });
  document.getElementById('controls2').style.display = 'flex';
}

// ── Keyboard ──
let cardKeyboardActive = true;

// Disable card keys when any filter/mode button is clicked,
// re-enable when card stage or body is clicked
document.getElementById('filterBar').addEventListener('click', () => {
  cardKeyboardActive = false;
  setTimeout(() => { document.activeElement?.blur(); }, 0);
});
document.getElementById('modeBar').addEventListener('click', () => {
  cardKeyboardActive = false;
  setTimeout(() => { document.activeElement?.blur(); }, 0);
});
document.getElementById('cardContainer').addEventListener('click', () => {
  cardKeyboardActive = true;
});

document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  const isInteractive = tag === 'BUTTON' || tag === 'INPUT' ||
                        tag === 'SELECT' || tag === 'TEXTAREA' ||
                        document.activeElement.isContentEditable;
  if (isInteractive || !cardKeyboardActive) return;

  if (e.code === 'Space')           { e.preventDefault(); flipCard(); }
  else if (e.code === 'ArrowRight') markCard(true);
  else if (e.code === 'ArrowLeft')  markCard(false);
});

// ── Swipe with live tilt ──
function initSwipe() {
  const stage = document.getElementById('cardContainer');
  let startX = 0, startY = 0, dragging = false;

  stage.addEventListener('touchstart', e => {
    if (e.target.closest('.card-body')) return; // already there or add it
    dragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  stage.addEventListener('touchmove', e => {
  if (!dragging) return;
  if (e.target.closest('.card-body')) return; // ← ADD THIS

  const dx = e.touches[0].clientX - startX;
  const dy = e.touches[0].clientY - startY;
  if (Math.abs(dx) > Math.abs(dy) + 8) {
    const card = document.getElementById('card');
    const rot  = Math.min(Math.max(dx * 0.07, -10), 10);
    const base = flipped ? 'rotateY(180deg)' : '';
    card.style.transition = 'none';
    card.style.transform  = `${base} rotate(${rot}deg) translateX(${dx * 0.25}px)`;
    document.getElementById('swipeLeft').style.opacity  =
      dx < -30 ? Math.min((-dx - 30) / 80, 1) : 0;
    document.getElementById('swipeRight').style.opacity =
      dx >  30 ? Math.min((dx  - 30) / 80, 1) : 0;
  }
}, { passive: true });

  stage.addEventListener('touchend', e => {
  if (!dragging) return; // ← ADD: bail if we never started a drag
    dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    const card = document.getElementById('card');
    card.style.transition = '';
    card.style.transform  = flipped ? 'rotateY(180deg)' : '';
    document.getElementById('swipeLeft').style.opacity  = 0;
    document.getElementById('swipeRight').style.opacity = 0;

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) { flipCard(); return; }
    if (Math.abs(dx) > Math.abs(dy) + 8) {
      if (dx >  60) markCard(true);
      else if (dx < -60) markCard(false);
    }
  });
}

initApp();