/* =====================================================================
   Windows 7 Aero — Portfolio
   Vanilla JavaScript. No libraries.
   ===================================================================== */
(function () {
'use strict';

/* =====================================================================
   1. ICONS  (inline SVG, no image files)
   ===================================================================== */
const ICONS = {

computer: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="i_scr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe9ff"/><stop offset="1" stop-color="#1f6ea8"/></linearGradient>
 <linearGradient id="i_bod" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfdfe"/><stop offset="1" stop-color="#93a9bb"/></linearGradient>
</defs>
<path d="M9 34h30l5 9H4z" fill="url(#i_bod)" stroke="#546878" stroke-width="1"/>
<rect x="5" y="7" width="38" height="27" rx="2.5" fill="url(#i_bod)" stroke="#546878"/>
<rect x="8" y="10" width="32" height="20" rx="1" fill="url(#i_scr)"/>
<path d="M8 10h32v9c-11 4.5-21 4.5-32 0z" fill="#ffffff" opacity=".3"/>
</svg>`,

folder: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="i_fb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd97e"/><stop offset="1" stop-color="#dd961a"/></linearGradient>
 <linearGradient id="i_ff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3cd"/><stop offset="1" stop-color="#f2b334"/></linearGradient>
</defs>
<path d="M3 13a2.5 2.5 0 0 1 2.5-2.5H17l4.5 5.5H42.5A2.5 2.5 0 0 1 45 18.5V24H3z" fill="url(#i_fb)" stroke="#bd7f14" stroke-width=".9"/>
<path d="M3 18h42v19.5a2.5 2.5 0 0 1-2.5 2.5h-37A2.5 2.5 0 0 1 3 37.5z" fill="url(#i_ff)" stroke="#bd7f14" stroke-width=".9"/>
<path d="M3 18h42v7.5H3z" fill="#fff" opacity=".38"/>
</svg>`,

notepad: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="4" width="30" height="40" rx="2.5" fill="#ffffff" stroke="#7f93a3"/>
<path d="M9 6.5A2.5 2.5 0 0 1 11.5 4h25A2.5 2.5 0 0 1 39 6.5V12H9z" fill="#4b93d1"/>
<g stroke="#9db3c3" stroke-width="1.8" stroke-linecap="round">
<path d="M14 19h20M14 24h20M14 29h20M14 34h13"/></g>
</svg>`,

mail: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="i_ml" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d3e4f2"/></linearGradient></defs>
<rect x="3" y="11" width="42" height="27" rx="3" fill="url(#i_ml)" stroke="#5f809a"/>
<path d="M3.5 13.5L24 29 44.5 13.5" fill="none" stroke="#3d81b8" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M3.5 36.5L18 24M44.5 36.5L30 24" fill="none" stroke="#8ea9be" stroke-width="1.5"/>
</svg>`,

recycle: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="i_rb" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#cfdde8"/><stop offset=".45" stop-color="#f8fbfd"/><stop offset="1" stop-color="#aabecd"/></linearGradient></defs>
<path d="M12 15h24l-2.6 27a3 3 0 0 1-3 2.7H17.6a3 3 0 0 1-3-2.7z" fill="url(#i_rb)" stroke="#78909f" opacity=".97"/>
<ellipse cx="24" cy="14.5" rx="12" ry="3.6" fill="#eef4f9" stroke="#78909f"/>
<g fill="#35a04a">
<path d="M24 20.5l3.4 5.6h-6.8z"/>
<path d="M18.6 31.5l-2.6-4.4 3.1-1.7 2.6 4.4z"/>
<path d="M29.4 31.5l2.6-4.4-3.1-1.7-2.6 4.4z"/>
<path d="M19.5 33.5h9v3h-9z" opacity=".85"/>
</g>
</svg>`,

cmd: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="8" width="40" height="32" rx="2.5" fill="#0b0b0b" stroke="#455565"/>
<path d="M4 10.5A2.5 2.5 0 0 1 6.5 8h35a2.5 2.5 0 0 1 2.5 2.5V15H4z" fill="#3f5062"/>
<path d="M11 21l6 5-6 5" fill="none" stroke="#e6e6e6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 32h11" stroke="#e6e6e6" stroke-width="2.4" stroke-linecap="round"/>
</svg>`,

control: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="8" width="40" height="31" rx="3" fill="#f4f8fc" stroke="#748da0"/>
<path d="M4 11A3 3 0 0 1 7 8h34a3 3 0 0 1 3 3v5H4z" fill="#5fa4da"/>
<path d="M10 24h26M10 32h26" stroke="#4a7fae" stroke-width="2.6" stroke-linecap="round"/>
<circle cx="18" cy="24" r="3.6" fill="#eaf4fc" stroke="#37699b" stroke-width="2"/>
<circle cx="30" cy="32" r="3.6" fill="#eaf4fc" stroke="#37699b" stroke-width="2"/>
</svg>`,

doc: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5a2 2 0 0 1 2-2h18l9 9v31a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z" fill="#ffffff" stroke="#7f93a3"/>
<path d="M30 3l9 9h-9z" fill="#d7e5f0" stroke="#7f93a3"/>
<rect x="15" y="15" width="11" height="4" rx="1" fill="#c3daeb"/>
<g stroke="#3d81b8" stroke-width="1.9" stroke-linecap="round">
<path d="M15 24h18M15 30h18M15 36h12"/></g>
</svg>`,

code: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="7" width="40" height="34" rx="3" fill="#ffffff" stroke="#7f93a3"/>
<path d="M4 10A3 3 0 0 1 7 7h34a3 3 0 0 1 3 3v5H4z" fill="#4b93d1"/>
<path d="M18 21l-7 7 7 7" fill="none" stroke="#2b6ea8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 21l7 7-7 7" fill="none" stroke="#2b6ea8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5 19l-5 18" stroke="#7fb6e2" stroke-width="2.4" stroke-linecap="round"/>
</svg>`,

user: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="i_us" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fdcff"/><stop offset="1" stop-color="#1f6ea8"/></linearGradient></defs>
<rect x="4" y="4" width="40" height="40" rx="5" fill="url(#i_us)" stroke="#155a8c"/>
<circle cx="24" cy="19" r="7.5" fill="#ffffff" opacity=".95"/>
<path d="M9 42c1.6-8.6 7.4-13 15-13s13.4 4.4 15 13z" fill="#ffffff" opacity=".95"/>
</svg>`,

globe: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="i_gl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe9ff"/><stop offset="1" stop-color="#1b6ba6"/></linearGradient></defs>
<circle cx="24" cy="24" r="17" fill="url(#i_gl)" stroke="#14547f"/>
<g fill="none" stroke="#ffffff" stroke-width="1.5" opacity=".85">
<ellipse cx="24" cy="24" rx="8" ry="17"/><path d="M7 24h34M9.5 15h29M9.5 33h29"/></g>
<path d="M9 16c8 6 22 6 30 0" fill="#fff" opacity=".22"/>
</svg>`,

pic: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="9" width="40" height="30" rx="3" fill="#ffffff" stroke="#7f93a3"/>
<rect x="7" y="12" width="34" height="24" fill="#bfe4f7"/>
<circle cx="16" cy="19" r="3.2" fill="#ffe071"/>
<path d="M7 36l10-12 7 8 5-5 12 9z" fill="#5ba85a"/>
</svg>`,

music: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M20 34V11l18-4v22" fill="none" stroke="#7b4fc0" stroke-width="3" stroke-linecap="round"/>
<circle cx="15" cy="34" r="5.5" fill="#9a6fe0"/><circle cx="33" cy="29" r="5.5" fill="#9a6fe0"/>
</svg>`,

gear: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 6l3 5 6-1 1 6 5 3-3 5 3 5-5 3-1 6-6-1-3 5-3-5-6 1-1-6-5-3 3-5-3-5 5-3 1-6 6 1z" fill="#cdd9e3" stroke="#67809a" stroke-width="1.4" stroke-linejoin="round"/>
<circle cx="24" cy="24" r="7" fill="#f2f7fb" stroke="#67809a" stroke-width="1.6"/>
</svg>`,

info: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="14" fill="#2b8fe0" stroke="#175f97" stroke-width="1.4"/>
<rect x="14.2" y="13" width="3.6" height="11" rx="1.4" fill="#fff"/>
<circle cx="16" cy="8.8" r="2.3" fill="#fff"/>
</svg>`,

warn: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3l14.5 26H1.5z" fill="#ffd452" stroke="#c19100" stroke-width="1.4" stroke-linejoin="round"/>
<rect x="14.4" y="12" width="3.2" height="9.5" rx="1.2" fill="#3a2c00"/>
<circle cx="16" cy="24.6" r="1.9" fill="#3a2c00"/>
</svg>`,

shield: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4l16 6v14c0 11-7 17-16 20-9-3-16-9-16-20V10z" fill="#e8f2fa" stroke="#5f849f" stroke-width="1.5"/>
<path d="M24 4l16 6v14c0 11-7 17-16 20z" fill="#f7c04a" opacity=".55"/>
<path d="M24 4v40" stroke="#5f849f" stroke-width="1.2"/>
</svg>`,

help: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="19" fill="#4b93d1" stroke="#1d6199" stroke-width="1.6"/>
<path d="M18 19c0-4 3-6 6-6s6 2 6 5.5c0 4-5 4.5-5 8" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="25" cy="34" r="2.6" fill="#fff"/>
</svg>`
};

function icon(name, cls) {
  return '<span class="' + (cls || '') + '">' + (ICONS[name] || ICONS.folder) + '</span>';
}

/* =====================================================================
   2. DATA — projects, skills, desktop layout
   ===================================================================== */

const PROJECTS = [
  {
    id: 'p1',
    name: 'Ledger — Personal Finance',
    icon: 'code',
    kind: 'Web application',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    summary: 'A budgeting app that imports bank CSVs, categorises transactions automatically, and shows where the money actually went.',
    highlights: [
      'Rule-based categorisation engine with a learn-from-corrections feedback loop.',
      'Server-side aggregation so the dashboard stays fast with 100k+ transactions.',
      'CSV importer that tolerates the seven different formats banks insist on using.',
      'Full test suite with Vitest; ~85% coverage on the business logic.'
    ],
    role: 'Sole developer — design, build, deploy.',
    year: '2025'
  },
  {
    id: 'p2',
    name: 'Relay — Realtime Chat',
    icon: 'globe',
    kind: 'Full-stack, WebSockets',
    stack: ['Node.js', 'Socket.IO', 'Redis', 'React', 'Docker'],
    summary: 'A group chat service with presence, typing indicators, read receipts and message history that survives a server restart.',
    highlights: [
      'Redis pub/sub so multiple Node instances share one logical room.',
      'Optimistic UI with reconciliation — messages appear instantly, correct themselves if the server disagrees.',
      'Reconnect with backoff and gap-fill so you never silently miss messages.',
      'Dockerised, deployed behind nginx with sticky sessions.'
    ],
    role: 'Backend architecture and realtime layer.',
    year: '2024'
  },
  {
    id: 'p3',
    name: 'Scrapehouse — Data Pipeline',
    icon: 'gear',
    kind: 'Python automation',
    stack: ['Python', 'FastAPI', 'BeautifulSoup', 'Celery', 'SQLite'],
    summary: 'A scheduled scraping and reporting pipeline that replaced roughly six hours of manual spreadsheet work every week.',
    highlights: [
      'Celery beat schedules; failures retry with exponential backoff and alert on the third strike.',
      'Schema-validated output — bad rows are quarantined rather than silently written.',
      'FastAPI endpoint exposes the cleaned dataset to the rest of the business.',
      'Ran unattended for 8 months with a 99.4% successful-run rate.'
    ],
    role: 'Sole developer.',
    year: '2024'
  },
  {
    id: 'p4',
    name: 'Aero — This Portfolio',
    icon: 'computer',
    kind: 'Front-end / CSS study',
    stack: ['HTML', 'CSS', 'Vanilla JavaScript'],
    summary: 'A pixel-chasing recreation of the Windows 7 Aero desktop, built as a portfolio. The site you are currently reading.',
    highlights: [
      'Draggable, resizable, snappable windows with a real z-order and taskbar.',
      'Glass frames done with backdrop-filter and layered gradients — zero image files.',
      'Working Start menu with live search, context menus, and a small command prompt.',
      'About 1,800 lines total across three files. No frameworks, no build step.'
    ],
    role: 'Everything.',
    year: '2026'
  },
  {
    id: 'p5',
    name: 'Waypoint — API Gateway',
    icon: 'shield',
    kind: 'Backend service',
    stack: ['Go', 'PostgreSQL', 'JWT', 'GitHub Actions'],
    summary: 'A small gateway sitting in front of three internal services: auth, rate limiting, request logging and a single OpenAPI surface.',
    highlights: [
      'Token bucket rate limiter, per-key, backed by Redis with a local fallback.',
      'Structured JSON logging with request IDs traced across downstream calls.',
      'Contract tests run in CI against a mocked version of every upstream.',
      'p99 latency overhead measured at under 4ms.'
    ],
    role: 'Design and implementation.',
    year: '2023'
  }
];

const SKILL_CATEGORIES = [
  { icon: 'code',     name: 'Languages',        desc: 'TypeScript, JavaScript, Python, Go, SQL, HTML &amp; CSS' },
  { icon: 'globe',    name: 'Front-end',        desc: 'React, Next.js, semantic HTML, accessible components, CSS architecture' },
  { icon: 'gear',     name: 'Back-end',         desc: 'Node/Express, FastAPI, Django, REST &amp; GraphQL API design' },
  { icon: 'computer', name: 'Data',             desc: 'PostgreSQL, MongoDB, Redis, schema design, query tuning' },
  { icon: 'shield',   name: 'DevOps &amp; Tooling', desc: 'Git, Docker, GitHub Actions, Linux, nginx, AWS fundamentals' },
  { icon: 'doc',      name: 'Practice',         desc: 'Testing, code review, documentation, incident response' }
];

const SKILL_BARS = [
  { label: 'JavaScript / TS', pct: 92 },
  { label: 'React',           pct: 88 },
  { label: 'Python',          pct: 84 },
  { label: 'Node.js',         pct: 86 },
  { label: 'SQL / Postgres',  pct: 79 },
  { label: 'CSS / Layout',    pct: 90 },
  { label: 'Docker / CI',     pct: 72 }
];

const DESKTOP_ICONS = [
  { app: 'computer', label: 'Computer',        icon: 'computer' },
  { app: 'about',    label: 'About Me',        icon: 'user' },
  { app: 'projects', label: 'My Projects',     icon: 'folder' },
  { app: 'skills',   label: 'Skills',          icon: 'control' },
  { app: 'resume',   label: 'Resume.doc',      icon: 'doc' },
  { app: 'contact',  label: 'Contact Me',      icon: 'mail' },
  { app: 'notepad',  label: 'Notepad',         icon: 'notepad' },
  { app: 'cmd',      label: 'Command Prompt',  icon: 'cmd' },
  { app: 'links',    label: 'GitHub',          icon: 'globe' },
  { app: 'recycle',  label: 'Recycle Bin',     icon: 'recycle' }
];

const APPS = {
  about:    { title: 'System',                    icon: 'user',     tpl: 'tpl-about',    w: 860, h: 620 },
  projects: { title: 'Projects',                  icon: 'folder',   tpl: 'tpl-projects', w: 880, h: 570 },
  skills:   { title: 'All Control Panel Items',   icon: 'control',  tpl: 'tpl-skills',   w: 820, h: 580 },
  resume:   { title: 'Resume.doc - WordPad',      icon: 'doc',      tpl: 'tpl-resume',   w: 760, h: 620 },
  contact:  { title: 'New Message',               icon: 'mail',     tpl: 'tpl-contact',  w: 700, h: 520 },
  notepad:  { title: 'Untitled - Notepad',        icon: 'notepad',  tpl: 'tpl-notepad',  w: 620, h: 460 },
  computer: { title: 'Computer',                  icon: 'computer', tpl: 'tpl-computer', w: 820, h: 520 },
  recycle:  { title: 'Recycle Bin',               icon: 'recycle',  tpl: 'tpl-recycle',  w: 760, h: 460 },
  cmd:      { title: 'C:\\Windows\\system32\\cmd.exe', icon: 'cmd', tpl: 'tpl-cmd',      w: 660, h: 400 }
};

/* =====================================================================
   3. HELPERS
   ===================================================================== */
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

const desktop     = $('#desktop');
const winLayer    = $('#window-layer');
const iconLayer   = $('#icon-layer');
const taskbarBox  = $('#taskbar-items');
const startMenu   = $('#start-menu');
const startOrb    = $('#start-orb');
const ctxMenu     = $('#context-menu');

let zTop = 100;
let openWindows = [];      // { id, el, app, tbBtn, restore }
let activeWin = null;
let cascade = 0;

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function deskRect() { return desktop.getBoundingClientRect(); }

/* snap preview element */
const snapPreview = document.createElement('div');
snapPreview.id = 'snap-preview';
desktop.appendChild(snapPreview);

/* =====================================================================
   4. WINDOW MANAGER
   ===================================================================== */

function focusWindow(w) {
  if (activeWin === w && w.el.style.zIndex == zTop) return;
  activeWin = w;
  zTop += 1;
  w.el.style.zIndex = zTop;
  openWindows.forEach(o => {
    const on = (o === w);
    o.el.classList.toggle('inactive', !on);
    if (o.tbBtn) o.tbBtn.classList.toggle('active', on && !o.el.classList.contains('minimized'));
  });
  const cmdIn = $('.cmd-in', w.el);
  if (cmdIn) setTimeout(() => cmdIn.focus(), 0);
}

function makeWindow(opts) {
  // opts: id, title, icon, contentNode, w, h
  const existing = openWindows.find(o => o.id === opts.id);
  if (existing) {
    if (existing.el.classList.contains('minimized')) restoreWindow(existing);
    focusWindow(existing);
    return existing;
  }

  const r = deskRect();
  const el = document.createElement('div');
  el.className = 'win';

  const width  = Math.min(opts.w || 640, r.width  - 20);
  const height = Math.min(opts.h || 460, r.height - 20);
  const left = clamp(Math.round((r.width  - width)  / 2) + (cascade % 6) * 26 - 60, 4, Math.max(4, r.width  - width  - 4));
  const top  = clamp(Math.round((r.height - height) / 2) + (cascade % 6) * 22 - 60, 4, Math.max(4, r.height - height - 4));
  cascade++;

  el.style.left = left + 'px';
  el.style.top  = top + 'px';
  el.style.width  = width + 'px';
  el.style.height = height + 'px';

  el.innerHTML =
    '<div class="win-title">' +
      '<span class="wt-ico">' + (ICONS[opts.icon] || ICONS.folder) + '</span>' +
      '<span class="wt-text">' + esc(opts.title) + '</span>' +
      '<div class="wt-buttons">' +
        '<button class="cap cap-min" title="Minimize"><span class="cap-glyph g-min"></span></button>' +
        '<button class="cap cap-max" title="Maximize"><span class="cap-glyph g-max"></span></button>' +
        '<button class="cap cap-close" title="Close"><span class="cap-glyph g-close"></span></button>' +
      '</div>' +
    '</div>' +
    '<div class="win-body"></div>' +
    '<div class="rz rz-n"></div><div class="rz rz-s"></div><div class="rz rz-e"></div><div class="rz rz-w"></div>' +
    '<div class="rz rz-ne"></div><div class="rz rz-nw"></div><div class="rz rz-se"></div><div class="rz rz-sw"></div>';

  $('.win-body', el).appendChild(opts.contentNode);
  winLayer.appendChild(el);

  const w = { id: opts.id, el: el, app: opts.app, restore: null, resizable: opts.resizable !== false };

  // taskbar button
  if (opts.taskbar !== false) {
    const btn = document.createElement('button');
    btn.className = 'tb-btn';
    btn.innerHTML = '<span class="tb-ico">' + (ICONS[opts.icon] || ICONS.folder) + '</span>' +
                    '<span class="tb-label">' + esc(opts.title) + '</span>';
    btn.title = opts.title;
    btn.addEventListener('click', () => {
      if (el.classList.contains('minimized')) { restoreWindow(w); focusWindow(w); }
      else if (activeWin === w) { minimizeWindow(w); }
      else { focusWindow(w); }
    });
    taskbarBox.appendChild(btn);
    w.tbBtn = btn;
  }

  openWindows.push(w);

  // events
  el.addEventListener('mousedown', () => focusWindow(w), true);
  $('.cap-min', el).addEventListener('click', e => { e.stopPropagation(); minimizeWindow(w); });
  $('.cap-max', el).addEventListener('click', e => { e.stopPropagation(); toggleMax(w); });
  $('.cap-close', el).addEventListener('click', e => { e.stopPropagation(); closeWindow(w); });

  const title = $('.win-title', el);
  title.addEventListener('mousedown', e => {
    if (e.target.closest('.wt-buttons')) return;
    startDrag(w, e);
  });
  title.addEventListener('dblclick', e => {
    if (e.target.closest('.wt-buttons')) return;
    toggleMax(w);
  });

  if (w.resizable) {
    $$('.rz', el).forEach(h => {
      h.addEventListener('mousedown', e => startResize(w, e, h.className.split('rz-')[1]));
    });
  } else {
    $$('.rz', el).forEach(h => h.remove());
    $('.cap-max', el).style.display = 'none';
  }

  focusWindow(w);
  return w;
}

function closeWindow(w) {
  w.el.remove();
  if (w.tbBtn) w.tbBtn.remove();
  openWindows = openWindows.filter(o => o !== w);
  if (activeWin === w) {
    activeWin = null;
    const next = openWindows.filter(o => !o.el.classList.contains('minimized')).pop();
    if (next) focusWindow(next);
  }
}

function minimizeWindow(w) {
  w.el.classList.add('minimized');
  if (w.tbBtn) w.tbBtn.classList.remove('active');
  if (activeWin === w) activeWin = null;
  const next = openWindows.filter(o => !o.el.classList.contains('minimized')).pop();
  if (next) focusWindow(next);
}

function restoreWindow(w) {
  w.el.classList.remove('minimized');
}

function toggleMax(w) {
  const el = w.el, r = deskRect();
  if (el.classList.contains('maximized')) {
    el.classList.remove('maximized');
    if (w.restore) {
      el.style.left = w.restore.left + 'px';
      el.style.top = w.restore.top + 'px';
      el.style.width = w.restore.width + 'px';
      el.style.height = w.restore.height + 'px';
    }
    $('.cap-max .cap-glyph', el).className = 'cap-glyph g-max';
    $('.cap-max', el).title = 'Maximize';
  } else {
    w.restore = {
      left: parseInt(el.style.left, 10), top: parseInt(el.style.top, 10),
      width: el.offsetWidth, height: el.offsetHeight
    };
    el.classList.add('maximized');
    el.style.left = '0px'; el.style.top = '0px';
    el.style.width = r.width + 'px'; el.style.height = r.height + 'px';
    $('.cap-max .cap-glyph', el).className = 'cap-glyph g-res';
    $('.cap-max', el).title = 'Restore Down';
  }
}

/* ---------- dragging + Aero Snap ---------- */
function startDrag(w, e) {
  if (e.button !== 0) return;
  e.preventDefault();
  const el = w.el, r = deskRect();
  let sx = e.clientX, sy = e.clientY;
  let ox = parseInt(el.style.left, 10), oy = parseInt(el.style.top, 10);
  let snapMode = null;
  let unmaxed = false;

  function move(ev) {
    let dx = ev.clientX - sx, dy = ev.clientY - sy;

    // dragging a maximized window restores it under the cursor
    if (el.classList.contains('maximized') && Math.abs(dy) > 6 && !unmaxed) {
      unmaxed = true;
      const ratio = (ev.clientX - r.left) / r.width;
      toggleMax(w);
      ox = Math.round(ev.clientX - r.left - el.offsetWidth * ratio);
      oy = Math.round(Math.max(0, ev.clientY - r.top - 14));
      sx = ev.clientX; sy = ev.clientY; dx = 0; dy = 0;
    }

    const nx = clamp(ox + dx, -el.offsetWidth + 90, r.width - 60);
    const ny = clamp(oy + dy, 0, r.height - 30);
    el.style.left = nx + 'px';
    el.style.top  = ny + 'px';

    // snap zones
    const px = ev.clientX - r.left, py = ev.clientY - r.top;
    let mode = null;
    if (py <= 2) mode = 'top';
    else if (px <= 2) mode = 'left';
    else if (px >= r.width - 3) mode = 'right';

    if (mode !== snapMode) {
      snapMode = mode;
      if (!mode) snapPreview.style.display = 'none';
      else {
        snapPreview.style.display = 'block';
        if (mode === 'top')   setBox(snapPreview, 0, 0, r.width, r.height);
        if (mode === 'left')  setBox(snapPreview, 0, 0, r.width / 2, r.height);
        if (mode === 'right') setBox(snapPreview, r.width / 2, 0, r.width / 2, r.height);
      }
    }
  }

  function up() {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
    snapPreview.style.display = 'none';
    if (snapMode) {
      const r2 = deskRect();
      if (!el.classList.contains('maximized')) {
        w.restore = { left: parseInt(el.style.left, 10), top: parseInt(el.style.top, 10),
                      width: el.offsetWidth, height: el.offsetHeight };
      }
      el.classList.add('snapping');
      if (snapMode === 'top') {
        if (!el.classList.contains('maximized')) toggleMax(w);
      } else {
        el.classList.remove('maximized');
        $('.cap-max .cap-glyph', el).className = 'cap-glyph g-max';
        setBox(el, snapMode === 'left' ? 0 : r2.width / 2, 0, r2.width / 2, r2.height);
      }
      setTimeout(() => el.classList.remove('snapping'), 200);
    }
  }

  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', up);
}

function setBox(el, l, t, w, h) {
  el.style.left = Math.round(l) + 'px';
  el.style.top = Math.round(t) + 'px';
  el.style.width = Math.round(w) + 'px';
  el.style.height = Math.round(h) + 'px';
}

/* ---------- resizing ---------- */
function startResize(w, e, dir) {
  if (e.button !== 0) return;
  e.preventDefault(); e.stopPropagation();
  const el = w.el, r = deskRect();
  if (el.classList.contains('maximized')) return;
  const sx = e.clientX, sy = e.clientY;
  const o = { l: parseInt(el.style.left, 10), t: parseInt(el.style.top, 10), w: el.offsetWidth, h: el.offsetHeight };
  const MIN_W = 320, MIN_H = 180;

  function move(ev) {
    const dx = ev.clientX - sx, dy = ev.clientY - sy;
    let l = o.l, t = o.t, ww = o.w, hh = o.h;
    if (dir.indexOf('e') > -1) ww = clamp(o.w + dx, MIN_W, r.width - o.l);
    if (dir.indexOf('s') > -1) hh = clamp(o.h + dy, MIN_H, r.height - o.t);
    if (dir.indexOf('w') > -1) { ww = clamp(o.w - dx, MIN_W, o.l + o.w); l = o.l + o.w - ww; }
    if (dir.indexOf('n') > -1) { hh = clamp(o.h - dy, MIN_H, o.t + o.h); t = o.t + o.h - hh; }
    setBox(el, l, t, ww, hh);
  }
  function up() {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
  }
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', up);
}

/* keep maximized windows correct on resize */
window.addEventListener('resize', () => {
  const r = deskRect();
  openWindows.forEach(w => {
    if (w.el.classList.contains('maximized')) setBox(w.el, 0, 0, r.width, r.height);
    else {
      w.el.style.left = clamp(parseInt(w.el.style.left, 10), -w.el.offsetWidth + 90, Math.max(0, r.width - 60)) + 'px';
      w.el.style.top  = clamp(parseInt(w.el.style.top, 10), 0, Math.max(0, r.height - 30)) + 'px';
    }
  });
});

/* =====================================================================
   5. APP LAUNCHER
   ===================================================================== */
function openApp(key) {
  if (key === 'links')  return openLinks();
  if (key === 'shutdown') return doShutdown();

  const app = APPS[key];
  if (!app) return;

  const tpl = document.getElementById(app.tpl);
  const node = tpl.content.cloneNode(true);
  const w = makeWindow({
    id: key, app: key, title: app.title, icon: app.icon,
    contentNode: node, w: app.w, h: app.h
  });
  const inits = {
    projects: initProjects, skills: initSkills, contact: initContact,
    cmd: initCmd, resume: initResume, about: initAbout
  };
  if (inits[key]) inits[key](w);
  return w;
}

/* ---------- dialogs ---------- */
function dialog(title, html, iconName, buttons) {
  const tpl = document.getElementById('tpl-dialog');
  const node = tpl.content.cloneNode(true);
  $('.dlg-ico', node).innerHTML = ICONS[iconName || 'info'];
  $('.dlg-text', node).innerHTML = html;
  const btnBox = $('.dlg-buttons', node);
  (buttons || [{ label: 'OK', primary: true }]).forEach((b, i) => {
    const el = document.createElement('button');
    el.textContent = b.label;
    if (b.primary) el.className = 'default';
    el.addEventListener('click', () => { if (b.onClick) b.onClick(); closeWindow(win); });
    btnBox.appendChild(el);
  });
  const win = makeWindow({
    id: 'dlg-' + Date.now(), title: title, icon: iconName === 'warn' ? 'warn' : 'info',
    contentNode: node, w: 430, h: 200, resizable: false, taskbar: false
  });
  return win;
}

function openLinks() {
  dialog('Links',
    '<b>Find me online</b><br><br>' +
    'GitHub: <a href="#" data-noop>github.com/garethchitate</a><br>' +
    'LinkedIn: <a href="#" data-noop>linkedin.com/in/garethchitate</a><br>' +
    'Email: <a href="mailto:chitategareth2@gmail.com">chitategareth2@gmail.com</a><br><br>' +
    '<span style="color:#666">Replace these with your real links in <code>js/script.js</code>.</span>',
    'globe', [{ label: 'Close', primary: true }]);
}

/* =====================================================================
   6. APP INITIALISERS
   ===================================================================== */

function initAbout(w) {
  $$('[data-open]', w.el).forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); openApp(a.getAttribute('data-open')); });
  });
}

function initProjects(w) {
  const box = $('#project-items', w.el) || $('.ex-items', w.el);
  const detName = $('#proj-det-name', w.el);
  const detSub  = $('#proj-det-sub', w.el);

  function render(list) {
    box.innerHTML = '';
    list.forEach(p => {
      const it = document.createElement('div');
      it.className = 'ex-item';
      it.innerHTML = '<div class="ex-item-ico">' + (ICONS[p.icon] || ICONS.folder) + '</div>' +
                     '<div class="ex-item-label">' + esc(p.name) + '</div>';
      it.addEventListener('click', () => {
        $$('.ex-item', box).forEach(x => x.classList.remove('selected'));
        it.classList.add('selected');
        if (detName) detName.textContent = p.name;
        if (detSub)  detSub.textContent  = p.kind + ' · ' + p.year + ' · ' + p.stack.join(', ');
      });
      it.addEventListener('dblclick', () => openProject(p));
      box.appendChild(it);
    });
  }
  render(PROJECTS);

  const search = $('#proj-search', w.el);
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      render(!q ? PROJECTS : PROJECTS.filter(p =>
        (p.name + ' ' + p.stack.join(' ') + ' ' + p.summary).toLowerCase().indexOf(q) > -1));
    });
  }
}

function openProject(p) {
  const node = document.getElementById('tpl-project-detail').content.cloneNode(true);
  $('.pd-icon', node).innerHTML = ICONS[p.icon] || ICONS.folder;
  $('.pd-title', node).textContent = p.name;
  $('.pd-sub', node).textContent = p.kind + '  ·  ' + p.year + '  ·  ' + p.role;
  $('.pd-body', node).innerHTML =
    '<p>' + esc(p.summary) + '</p>' +
    '<h3>What I built</h3><ul>' + p.highlights.map(h => '<li>' + h + '</li>').join('') + '</ul>' +
    '<h3>Stack</h3><div class="tagrow">' + p.stack.map(s => '<span class="tag">' + esc(s) + '</span>').join('') + '</div>';

  makeWindow({
    id: 'proj-' + p.id, title: p.name + ' - Properties', icon: p.icon,
    contentNode: node, w: 640, h: 520
  });
}

function initSkills(w) {
  const grid = $('#skill-grid', w.el);
  if (grid) {
    grid.innerHTML = SKILL_CATEGORIES.map(s =>
      '<div class="skill-cell">' +
        '<div class="sk-ico">' + (ICONS[s.icon] || ICONS.gear) + '</div>' +
        '<div><div class="sk-name">' + s.name + '</div><div class="sk-desc">' + s.desc + '</div></div>' +
      '</div>').join('');
  }
  const bars = $('#skill-bars', w.el);
  if (bars) {
    bars.innerHTML = SKILL_BARS.map(b =>
      '<div class="bar-row"><div class="bar-label">' + esc(b.label) + '</div>' +
      '<div class="bar-track"><div class="bar-fill" data-pct="' + b.pct + '"></div></div>' +
      '<div class="bar-pct">' + b.pct + '%</div></div>').join('');
    setTimeout(() => {
      $$('.bar-fill', bars).forEach(f => { f.style.width = f.getAttribute('data-pct') + '%'; });
    }, 120);
  }
}

function initResume(w) {
  const btn = $('[data-print]', w.el);
  if (btn) btn.addEventListener('click', () => window.print());
}

function initContact(w) {
  const send   = $('#mail-send', w.el);
  const status = $('#mail-status', w.el);
  send.addEventListener('click', () => {
    const from = $('#mail-from', w.el).value.trim();
    const subj = $('#mail-subject', w.el).value.trim();
    const body = $('#mail-body', w.el).value.trim();

    if (!from || from.indexOf('@') < 1) {
      status.className = 'mail-status err';
      status.textContent = 'Please enter a valid return address.';
      dialog('Windows Mail', 'Please enter a valid email address in the <b>From</b> field so I can reply to you.', 'warn');
      return;
    }
    if (!subj || !body) {
      status.className = 'mail-status err';
      status.textContent = 'Subject and message are required.';
      dialog('Windows Mail', 'The message has no <b>subject</b> or no <b>body</b>. Add both and try again.', 'warn');
      return;
    }
    status.className = 'mail-status ok';
    status.textContent = 'Opening your mail client…';
    const url = 'mailto:chitategareth2@gmail.com?subject=' + encodeURIComponent(subj) +
                '&body=' + encodeURIComponent(body + '\n\n— ' + from);
    window.location.href = url;
    setTimeout(() => {
      dialog('Message sent',
        'Your default mail application should now be open with the message ready to send.<br><br>' +
        'If nothing happened, email me directly at <a href="mailto:chitategareth2@gmail.com">chitategareth2@gmail.com</a>.',
        'info');
      status.textContent = 'Ready';
      status.className = 'mail-status';
    }, 700);
  });
}

/* ---------- command prompt ---------- */
function initCmd(w) {
  const out = $('#cmd-out', w.el) || $('.cmd-out', w.el);
  const inp = $('.cmd-in', w.el);
  const history = [];
  let hIdx = -1;

  function print(text) { out.innerHTML += text + '\n'; out.scrollTop = out.scrollHeight; }

  const COMMANDS = {
    help: () =>
      'Available commands:\n' +
      '  help          Show this list\n' +
      '  dir           List portfolio contents\n' +
      '  whoami        Who am I\n' +
      '  skills        Print skill summary\n' +
      '  projects      List projects\n' +
      '  open <name>   Open a window (about, projects, skills, resume, contact, notepad)\n' +
      '  contact       Open the contact form\n' +
      '  ver           Windows version\n' +
      '  date / time   Current date or time\n' +
      '  cls           Clear the screen\n' +
      '  exit          Close this window',
    whoami: () =>
      'GARETH-PC\\Gareth\n\n' +
      'Gareth Chitate — Software Developer\n' +
      'Full-stack: TypeScript, React, Node.js, Python, PostgreSQL.\n' +
      'Currently open to opportunities.',
    dir: () => {
      const now = new Date();
      const d = ('0' + (now.getMonth() + 1)).slice(-2) + '/' + ('0' + now.getDate()).slice(-2) + '/' + now.getFullYear();
      let s = ' Volume in drive C is Portfolio\n Volume Serial Number is 7A21-C0DE\n\n Directory of C:\\Users\\Gareth\\Portfolio\n\n';
      const rows = [
        ['<DIR>', 'projects'], ['<DIR>', 'skills'],
        ['4,096', 'about.txt'], ['12,880', 'resume.doc'],
        ['1,024', 'contact.msg'], ['64', 'readme.md']
      ];
      rows.forEach(r => { s += d + '  09:41 AM    ' + ('           ' + r[0]).slice(-11) + ' ' + r[1] + '\n'; });
      s += '\n               4 File(s)         18,064 bytes\n               2 Dir(s)  21,412,839,424 bytes free';
      return s;
    },
    skills: () => SKILL_BARS.map(b => ('  ' + b.label + '                    ').slice(0, 22) +
      '[' + '#'.repeat(Math.round(b.pct / 5)) + '.'.repeat(20 - Math.round(b.pct / 5)) + '] ' + b.pct + '%').join('\n'),
    projects: () => PROJECTS.map((p, i) => '  ' + (i + 1) + '. ' + p.name + '  —  ' + p.stack.slice(0, 3).join(', ')).join('\n') +
      '\n\nTip: type "open projects" to browse them.',
    ver: () => '\nMicrosoft Windows [Version 6.1.7601]\n',
    date: () => 'The current date is: ' + new Date().toLocaleDateString(),
    time: () => 'The current time is: ' + new Date().toLocaleTimeString()
  };

  function run(raw) {
    const line = raw.trim();
    print('<span class="cmd-echo">C:\\Users\\Gareth&gt;' + esc(raw) + '</span>');
    if (!line) return;
    history.push(line); hIdx = history.length;

    const parts = line.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = (parts[1] || '').toLowerCase();

    if (cmd === 'cls') { out.innerHTML = ''; return; }
    if (cmd === 'exit') { closeWindow(w); return; }
    if (cmd === 'echo') { print(esc(parts.slice(1).join(' '))); return; }
    if (cmd === 'contact') { openApp('contact'); print('Opening contact form...'); return; }
    if (cmd === 'open') {
      if (APPS[arg]) { openApp(arg); print('Opening ' + arg + '...'); }
      else print("Cannot find '" + esc(arg) + "'. Try: about, projects, skills, resume, contact, notepad, computer.");
      print('');
      return;
    }
    if (COMMANDS[cmd]) { print(esc(COMMANDS[cmd]()).replace(/&lt;DIR&gt;/g, '&lt;DIR&gt;')); print(''); return; }
    print("'" + esc(cmd) + "' is not recognized as an internal or external command,\noperable program or batch file.\n");
  }

  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const v = inp.value; inp.value = ''; run(v); }
    else if (e.key === 'ArrowUp') { if (hIdx > 0) { hIdx--; inp.value = history[hIdx]; } e.preventDefault(); }
    else if (e.key === 'ArrowDown') { if (hIdx < history.length - 1) { hIdx++; inp.value = history[hIdx]; } else { hIdx = history.length; inp.value = ''; } e.preventDefault(); }
  });
  w.el.addEventListener('click', () => inp.focus());
  setTimeout(() => inp.focus(), 60);
}

/* =====================================================================
   7. DESKTOP ICONS
   ===================================================================== */
function renderDesktopIcons() {
  iconLayer.innerHTML = '';
  DESKTOP_ICONS.forEach(d => {
    const el = document.createElement('div');
    el.className = 'dicon';
    el.tabIndex = 0;
    el.innerHTML = '<span class="dicon-img">' + (ICONS[d.icon] || ICONS.folder) + '</span>' +
                   '<span class="dicon-label">' + esc(d.label) + '</span>';
    el.addEventListener('mousedown', e => {
      e.stopPropagation();
      if (!e.ctrlKey) $$('.dicon.selected').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
    });
    el.addEventListener('dblclick', () => openApp(d.app));
    el.addEventListener('keydown', e => { if (e.key === 'Enter') openApp(d.app); });
    iconLayer.appendChild(el);
  });
}
renderDesktopIcons();

/* rubber-band selection on the desktop */
(function () {
  const rubber = $('#rubber');
  let sx = 0, sy = 0, active = false;
  desktop.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    if (e.target.closest('.win') || e.target.closest('.dicon')) return;
    $$('.dicon.selected').forEach(x => x.classList.remove('selected'));
    active = true;
    const r = deskRect();
    sx = e.clientX - r.left; sy = e.clientY - r.top;
    rubber.style.display = 'block';
    setBox(rubber, sx, sy, 0, 0);
  });
  document.addEventListener('mousemove', e => {
    if (!active) return;
    const r = deskRect();
    const cx = clamp(e.clientX - r.left, 0, r.width), cy = clamp(e.clientY - r.top, 0, r.height);
    const l = Math.min(sx, cx), t = Math.min(sy, cy), ww = Math.abs(cx - sx), hh = Math.abs(cy - sy);
    setBox(rubber, l, t, ww, hh);
    const box = { l: l + r.left, t: t + r.top, r: l + ww + r.left, b: t + hh + r.top };
    $$('.dicon').forEach(ic => {
      const b = ic.getBoundingClientRect();
      const hit = !(b.right < box.l || b.left > box.r || b.bottom < box.t || b.top > box.b);
      ic.classList.toggle('selected', hit);
    });
  });
  document.addEventListener('mouseup', () => { if (active) { active = false; rubber.style.display = 'none'; } });
})();

/* =====================================================================
   8. START MENU
   ===================================================================== */
const START_PROGRAMS = [
  { app: 'about',    icon: 'user',     label: 'About Me' },
  { app: 'projects', icon: 'folder',   label: 'My Projects' },
  { app: 'skills',   icon: 'control',  label: 'Skills' },
  { app: 'resume',   icon: 'doc',      label: 'Resume.doc' },
  { app: 'contact',  icon: 'mail',     label: 'Contact Me' },
  { sep: true },
  { app: 'notepad',  icon: 'notepad',  label: 'Notepad' },
  { app: 'cmd',      icon: 'cmd',      label: 'Command Prompt' },
  { app: 'computer', icon: 'computer', label: 'Computer' },
  { app: 'links',    icon: 'globe',    label: 'Internet' },
  { app: 'recycle',  icon: 'recycle',  label: 'Recycle Bin' }
];

const START_RIGHT = [
  { app: 'about',    label: 'Gareth' },
  { app: 'resume',   label: 'Documents' },
  { app: 'projects', label: 'Projects' },
  { app: 'skills',   label: 'Pictures' },
  { sep: true },
  { app: 'computer', label: 'Computer' },
  { app: 'skills',   label: 'Control Panel' },
  { app: 'links',    label: 'Devices and Printers' },
  { sep: true },
  { app: 'help',     label: 'Help and Support' }
];

(function buildStartMenu() {
  const left = $('#sm-programs');
  START_PROGRAMS.forEach(p => {
    if (p.sep) { const s = document.createElement('div'); s.className = 'sm-sep'; left.appendChild(s); return; }
    const el = document.createElement('div');
    el.className = 'sm-item';
    el.setAttribute('data-name', p.label.toLowerCase());
    el.innerHTML = '<span class="sm-ico">' + (ICONS[p.icon] || ICONS.folder) + '</span><span>' + esc(p.label) + '</span>';
    el.addEventListener('click', () => { openApp(p.app); toggleStart(false); });
    left.appendChild(el);
  });

  const right = $('#sm-rlist');
  START_RIGHT.forEach(p => {
    if (p.sep) { const s = document.createElement('div'); s.className = 'sm-rsep'; right.appendChild(s); return; }
    const el = document.createElement('div');
    el.className = 'sm-rlink';
    el.textContent = p.label;
    el.addEventListener('click', () => {
      toggleStart(false);
      if (p.app === 'help') {
        dialog('Windows Help and Support',
          '<b>Getting around</b><br><br>' +
          '· Double-click a desktop icon to open it.<br>' +
          '· Drag a window by its title bar. Drag it to the top or side edge to snap.<br>' +
          '· Double-click a title bar to maximize.<br>' +
          '· Right-click the desktop for more options.<br>' +
          '· Try the Command Prompt — type <code>help</code>.',
          'help', [{ label: 'Close', primary: true }]);
      } else openApp(p.app);
    });
    right.appendChild(el);
  });
})();

function toggleStart(force) {
  const show = (typeof force === 'boolean') ? force : startMenu.classList.contains('hidden');
  startMenu.classList.toggle('hidden', !show);
  startOrb.classList.toggle('active', show);
  if (show) setTimeout(() => $('#sm-search').focus(), 30);
  else { $('#sm-search').value = ''; filterStart(''); }
}

function filterStart(q) {
  q = q.toLowerCase().trim();
  $$('#sm-programs .sm-item').forEach(el => {
    el.classList.toggle('hidden-item', !!q && el.getAttribute('data-name').indexOf(q) < 0);
  });
  $$('#sm-programs .sm-sep').forEach(el => { el.style.display = q ? 'none' : ''; });
}

startOrb.addEventListener('click', e => { e.stopPropagation(); toggleStart(); });
startMenu.addEventListener('click', e => e.stopPropagation());
$('#sm-search').addEventListener('input', e => filterStart(e.target.value));
$('#sm-search').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const first = $$('#sm-programs .sm-item').filter(x => !x.classList.contains('hidden-item'))[0];
    if (first) first.click();
  }
});
$('#sm-shutdown-btn').addEventListener('click', doShutdown);
$('#sm-shutdown-arrow').addEventListener('click', doShutdown);
$('#sm-allprograms').addEventListener('click', () => filterStart(''));
$('#sm-userpic').addEventListener('click', () => { toggleStart(false); openApp('about'); });

document.addEventListener('click', () => { toggleStart(false); hideCtx(); });

/* =====================================================================
   9. CONTEXT MENU
   ===================================================================== */
const DESKTOP_CTX = [
  { label: 'View', arrow: true },
  { label: 'Sort by', arrow: true },
  { label: 'Refresh', action: () => { iconLayer.style.opacity = '0'; setTimeout(() => { renderDesktopIcons(); iconLayer.style.opacity = '1'; }, 90); } },
  { sep: true },
  { label: 'Paste', disabled: true },
  { label: 'Paste shortcut', disabled: true },
  { sep: true },
  { label: 'New', arrow: true, action: () => openApp('notepad') },
  { sep: true },
  { label: 'Screen resolution', action: () => dialog('Screen Resolution', 'Resolution is locked to <b>whatever your browser window is</b>.<br><br>Try resizing the window — the desktop reflows.', 'info') },
  { label: 'Gadgets', action: () => dialog('Desktop Gadgets', 'No gadgets installed.<br><br>The clock in the notification area works, though.', 'info') },
  { label: 'Personalize', action: () => openApp('skills') }
];

function showCtx(x, y, items) {
  ctxMenu.innerHTML = '';
  items.forEach(it => {
    if (it.sep) { const s = document.createElement('div'); s.className = 'ctx-sep'; ctxMenu.appendChild(s); return; }
    const el = document.createElement('div');
    el.className = 'ctx-item' + (it.disabled ? ' disabled' : '');
    el.innerHTML = '<span>' + esc(it.label) + '</span>' + (it.arrow ? '<span class="ctx-arrow">▶</span>' : '');
    if (!it.disabled && it.action) el.addEventListener('click', () => { hideCtx(); it.action(); });
    ctxMenu.appendChild(el);
  });
  ctxMenu.classList.remove('hidden');
  const w = ctxMenu.offsetWidth, h = ctxMenu.offsetHeight;
  ctxMenu.style.left = Math.min(x, window.innerWidth - w - 4) + 'px';
  ctxMenu.style.top  = Math.min(y, window.innerHeight - h - 4) + 'px';
}
function hideCtx() { ctxMenu.classList.add('hidden'); }

desktop.addEventListener('contextmenu', e => {
  if (e.target.closest('.win')) return;   // let windows use the native menu for text
  e.preventDefault();
  const onIcon = e.target.closest('.dicon');
  if (onIcon) {
    const idx = $$('.dicon').indexOf(onIcon);
    const d = DESKTOP_ICONS[idx];
    showCtx(e.clientX, e.clientY, [
      { label: 'Open', action: () => openApp(d.app) },
      { sep: true },
      { label: 'Cut', disabled: true }, { label: 'Copy', disabled: true },
      { sep: true },
      { label: 'Delete', action: () => dialog('Delete Shortcut', 'Are you sure you want to move this shortcut to the Recycle Bin?', 'warn', [{ label: 'Yes' }, { label: 'No', primary: true }]) },
      { label: 'Rename', disabled: true },
      { sep: true },
      { label: 'Properties', action: () => openApp(d.app) }
    ]);
  } else {
    showCtx(e.clientX, e.clientY, DESKTOP_CTX);
  }
});
ctxMenu.addEventListener('click', e => e.stopPropagation());
ctxMenu.addEventListener('contextmenu', e => e.preventDefault());

/* =====================================================================
   10. TASKBAR EXTRAS — clock, show desktop, tray
   ===================================================================== */
function tick() {
  const d = new Date();
  let h = d.getHours(); const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if (h === 0) h = 12;
  const m = ('0' + d.getMinutes()).slice(-2);
  $('#clock-time').textContent = h + ':' + m + ' ' + ampm;
  $('#clock-date').textContent = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
}
tick(); setInterval(tick, 1000);

$('#clock').addEventListener('click', e => {
  e.stopPropagation();
  const d = new Date();
  dialog('Date and Time',
    '<b>' + d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + '</b><br>' +
    d.toLocaleTimeString() + '<br><br>Time zone: ' + (Intl.DateTimeFormat().resolvedOptions().timeZone || 'local'),
    'info', [{ label: 'OK', primary: true }]);
});

let allMinimized = false;
$('#show-desktop').addEventListener('click', () => {
  if (!allMinimized) { openWindows.forEach(w => w.el.classList.add('minimized')); $$('.tb-btn').forEach(b => b.classList.remove('active')); activeWin = null; }
  else { openWindows.forEach(w => w.el.classList.remove('minimized')); const l = openWindows[openWindows.length - 1]; if (l) focusWindow(l); }
  allMinimized = !allMinimized;
});

$$('.tray-ico').forEach(t => t.addEventListener('click', e => {
  e.stopPropagation();
  dialog(t.title || 'Notification Area', 'Everything is fine. This is a portfolio, not a real operating system.', 'info');
}));

/* =====================================================================
   11. SHUTDOWN
   ===================================================================== */
function doShutdown() {
  toggleStart(false);
  const ov = document.createElement('div');
  ov.id = 'shutdown';
  ov.innerHTML = '<div class="sd-spinner"></div><div>Shutting down…</div>';
  document.body.appendChild(ov);
  setTimeout(() => {
    ov.innerHTML = '<div style="font-size:22px;font-weight:300">Thanks for visiting.</div>' +
      '<div style="font-size:12px;opacity:.7">Gareth Chitate — chitategareth2@gmail.com</div>' +
      '<button class="sd-restart">Restart</button>';
    $('.sd-restart', ov).addEventListener('click', () => ov.remove());
  }, 2200);
}

/* =====================================================================
   12. KEYBOARD SHORTCUTS
   ===================================================================== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { toggleStart(false); hideCtx(); }
  if (e.ctrlKey && e.key === 'Escape') { e.preventDefault(); toggleStart(); }
  if (e.key === 'F5' && !e.target.closest('input, textarea')) {
    e.preventDefault();
    renderDesktopIcons();
  }
});

/* =====================================================================
   13. FIRST RUN
   ===================================================================== */
const balloon = $('#balloon');
$('.balloon-x', balloon).addEventListener('click', () => balloon.classList.add('hidden'));
setTimeout(() => balloon.classList.remove('hidden'), 1200);
setTimeout(() => balloon.classList.add('hidden'), 11000);

// open the About window on first load, like a welcome screen
setTimeout(() => openApp('about'), 420);

})();
