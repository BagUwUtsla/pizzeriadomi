// Opening hours, indexed by Date.getDay() (0 = Sunday). null = closed.
const HOURS = {
  0: [18, 22],
  1: null,
  2: null,
  3: [18, 22],
  4: [18, 22],
  5: [18, 22],
  6: [18, 22.5],
};

const fmt = (h) => (h % 1 ? `${Math.floor(h)}h30` : `${h}h`);

function updateStatus() {
  const el = document.querySelector('[data-status]');
  if (!el) return;
  const now = new Date();
  const today = HOURS[now.getDay()];
  const h = now.getHours() + now.getMinutes() / 60;

  let state = 'closed';
  let text = 'Fermé · ouvert du mercredi au dimanche dès 18h';
  if (today && h >= today[0] && h < today[1]) {
    state = 'open';
    text = `Ouvert maintenant · jusqu’à ${fmt(today[1])}`;
  } else if (today && h < today[0]) {
    state = 'soon';
    text = `Ouvre ce soir à ${fmt(today[0])}`;
  }
  el.dataset.state = state;
  el.querySelector('.status-text').textContent = text;
}

function highlightToday() {
  const day = String(new Date().getDay());
  document.querySelectorAll('[data-hours] li').forEach((li) => {
    const isToday = li.dataset.day === day;
    li.classList.toggle('is-today', isToday);
    const label = li.firstElementChild;
    if (isToday && !label.textContent.includes('aujourd')) {
      label.textContent += " · aujourd'hui";
    }
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.menu-list li');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      items.forEach((li) => {
        const show = f === 'all' || (f === 'veg' ? li.hasAttribute('data-veg') : li.dataset.base === f);
        li.hidden = !show;
      });
    });
  });
}

updateStatus();
highlightToday();
setupFilters();
setInterval(updateStatus, 60 * 1000);
