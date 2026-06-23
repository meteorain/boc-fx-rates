// ---------- i18n ----------
const T = {
  zh: {
    title: '中国银行外汇牌价 · 实时人民币汇率',
    metaDesc:
      '实时中国银行外汇牌价:人民币对各主要货币汇率,内置走势图、便宜指数、货币换算与智能提醒。Chrome/Edge 扩展与 macOS/Windows 桌面应用。隐私优先,数据留在本机。',
    brand: '中国银行外汇牌价',
    navFeatures: '功能',
    navDownload: '下载',
    navPrivacy: '隐私',
    navOpenSource: '开源',
    heroEyebrow: 'Chrome / Edge 扩展 · macOS / Windows 桌面应用',
    heroTitle: '实时中行外汇牌价,<br />优雅地放在手边。',
    heroLede:
      '人民币对各主要货币的实时牌价,内置走势图、便宜指数、货币换算与智能提醒。浏览器与桌面,同一套精致体验。',
    ctaGet: '立即获取',
    ctaSource: '查看源码',
    meta1: '无账号 · 无追踪',
    meta2: '数据直取中行官网',
    meta3: '开源 MIT',
    updatedLabel: '更新于',
    strip1: '实时牌价',
    strip2: '走势 · 便宜指数',
    strip3: '货币换算',
    strip4: '智能提醒',
    strip5: '10 种语言',
    featEyebrow: '为决策而设计',
    featTitle: '不只是看汇率,更帮你判断何时换汇。',
    f1t: '实时牌价',
    f1d: '现汇 / 现钞买入卖出价、中行折算价,直接解析自中国银行官网,不经第三方。',
    f2t: '走势 · 便宜指数',
    f2d: '每张卡片内嵌 30 / 90 / 365 天迷你走势,并标出当前价在区间中的位置——一眼看出"现在贵不贵"。',
    f3t: '货币换算器',
    f3d: '自动选对买入/卖出、现汇/现钞,支持任意两种外币交叉换算,并显示买卖点差。',
    f4t: '智能提醒',
    f4d: '阈值突破、每日定点摘要、大幅波动、N 日新高/新低——抓住换汇时机。',
    f5t: '图标角标',
    f5d: '把你最关心的汇率钉在工具栏 / 菜单栏图标上,按当日涨跌红涨绿跌,不打开也知道行情。',
    f6t: '多端 · 暗色 · 多语言',
    f6d: 'Chrome / Edge 扩展与 macOS / Windows 桌面应用;自动跟随系统暗色;10 种界面语言。',
    platEyebrow: '随处可用',
    platTitle: '选择你的平台。',
    extT: '浏览器扩展',
    extD: 'Chrome · Edge。点开工具栏即见牌价,角标常驻。',
    extBtnChrome: 'Chrome 应用店',
    extBtnEdge: 'Edge 加载项',
    extDl: '直接下载 (.crx)',
    extNote: '需开发者模式,拖入 chrome://extensions · 基于 Manifest V3',
    deskT: '桌面应用',
    deskD: 'macOS · Windows。菜单栏 / 托盘常驻,系统通知提醒。',
    deskBtn: '下载桌面版',
    deskNote: 'macOS 首次需在「设置」里放行 · Windows 通知需安装版',
    privEyebrow: '隐私优先',
    privTitle: '你的数据,留在你的设备上。',
    privBody:
      '无需账号,无追踪,无统计分析。牌价直接取自中国银行官网,走势使用欧洲央行参考数据(经 frankfurter.dev),其余一切——你的币种、提醒与设置——都只存在本地。',
    ctaTitle: '把汇率,优雅地放在手边。',
    footNote:
      '数据来源:中国银行外汇牌价。走势为市场参考价(frankfurter.dev / 欧洲央行),与牌价走势相近、绝对数值略有差异。本项目与中国银行无隶属关系。开源协议 MIT。',
    cellBuy: '现汇买入',
    cellSell: '现汇卖出',
    cellMid: '中行折算价',
    langBtn: 'EN',
  },
  en: {
    title: 'BOC FX Rates · Live Bank of China exchange rates',
    metaDesc:
      'Live Bank of China exchange rates: CNY against every major currency, with trend charts, a cheap-index, a converter and smart alerts. Chrome/Edge extension and macOS/Windows apps. Privacy-first — your data stays on your device.',
    brand: 'BOC FX Rates',
    navFeatures: 'Features',
    navDownload: 'Download',
    navPrivacy: 'Privacy',
    navOpenSource: 'Open source',
    heroEyebrow: 'Chrome / Edge extension · macOS / Windows app',
    heroTitle: 'Live Bank of China FX,<br />elegantly at hand.',
    heroLede:
      'Live CNY rates against every major currency — with trend charts, a cheap-index, a converter and smart alerts. The same refined experience in your browser and on your desktop.',
    ctaGet: 'Get it',
    ctaSource: 'View source',
    meta1: 'No account · no tracking',
    meta2: 'Straight from boc.cn',
    meta3: 'Open source (MIT)',
    updatedLabel: 'Updated',
    strip1: 'Live rates',
    strip2: 'Trends · cheap-index',
    strip3: 'Converter',
    strip4: 'Smart alerts',
    strip5: '10 languages',
    featEyebrow: 'Built for decisions',
    featTitle: 'Not just rates — know when to exchange.',
    f1t: 'Live rates',
    f1d: 'Spot & cash buy/sell prices plus the middle rate, parsed straight from the Bank of China — no middle-man.',
    f2t: 'Trends & cheap-index',
    f2d: 'A 30 / 90 / 365-day sparkline on every card, plus where today sits in the range — see at a glance whether it is cheap.',
    f3t: 'Currency converter',
    f3d: 'Picks the right buy/sell and cash/wire rate automatically, cross-converts any two currencies, and shows the spread.',
    f4t: 'Smart alerts',
    f4d: 'Threshold crossings, a daily digest, big moves and new N-day highs/lows — catch the right moment.',
    f5t: 'Toolbar badge',
    f5d: 'Pin the rate you care about to the toolbar / menu-bar icon, coloured by the day’s move — no need to open it.',
    f6t: 'Cross-platform · dark · multilingual',
    f6d: 'Chrome / Edge extension and macOS / Windows apps; automatic dark mode; 10 interface languages.',
    platEyebrow: 'Everywhere',
    platTitle: 'Pick your platform.',
    extT: 'Browser extension',
    extD: 'Chrome · Edge. Rates in your toolbar, always-on badge.',
    extBtnChrome: 'Chrome Web Store',
    extBtnEdge: 'Edge Add-ons',
    extDl: 'Direct download (.crx)',
    extNote: 'Developer mode → drag the .crx onto chrome://extensions · Manifest V3',
    deskT: 'Desktop app',
    deskD: 'macOS · Windows. Lives in the menu bar / tray, native notifications.',
    deskBtn: 'Download',
    deskNote: 'macOS: approve in Settings on first run · Windows: notifications need the installer',
    privEyebrow: 'Privacy first',
    privTitle: 'Your data stays on your device.',
    privBody:
      'No account, no tracking, no analytics. Rates come straight from boc.cn; trend lines use ECB reference data via frankfurter.dev; everything else — your currencies, alerts and settings — stays local.',
    ctaTitle: 'Put exchange rates, elegantly at hand.',
    footNote:
      'Rates from the Bank of China FX board. Trend lines are market reference rates (frankfurter.dev / ECB) — close in shape, slightly different in absolute value. Not affiliated with the Bank of China. MIT licensed.',
    cellBuy: 'Buy',
    cellSell: 'Sell',
    cellMid: 'Mid',
    langBtn: '中',
  },
};

// ---------- mock rate cards ----------
// Code -> localized name. Order here = order in the settings picker. All are
// covered by frankfurter, so every one gets a real trend line.
const NAMES = {
  USD: { zh: '美元', en: 'US Dollar' },
  EUR: { zh: '欧元', en: 'Euro' },
  GBP: { zh: '英镑', en: 'British Pound' },
  HKD: { zh: '港币', en: 'HK Dollar' },
  JPY: { zh: '日元', en: 'Japanese Yen' },
  AUD: { zh: '澳大利亚元', en: 'Australian Dollar' },
  CAD: { zh: '加拿大元', en: 'Canadian Dollar' },
  SGD: { zh: '新加坡元', en: 'Singapore Dollar' },
  CHF: { zh: '瑞士法郎', en: 'Swiss Franc' },
  NZD: { zh: '新西兰元', en: 'NZ Dollar' },
  KRW: { zh: '韩国元', en: 'Korean Won' },
  THB: { zh: '泰国铢', en: 'Thai Baht' },
  MYR: { zh: '林吉特', en: 'Malaysian Ringgit' },
  SEK: { zh: '瑞典克朗', en: 'Swedish Krona' },
  DKK: { zh: '丹麦克朗', en: 'Danish Krone' },
  NOK: { zh: '挪威克朗', en: 'Norwegian Krone' },
  ZAR: { zh: '南非兰特', en: 'South African Rand' },
};

// Real recent snapshot for first paint (before /api/rates lands).
const FALLBACK = {
  EUR: { buy: '770.63', sell: '776.28', mid: '776.54' },
  USD: { buy: '678.44', sell: '681.29', mid: '681.71' },
  HKD: { buy: '86.52', sell: '86.86', mid: '86.95' },
};

let board = { ...FALLBACK }; // code -> { buy, sell, mid } strings (live)
let trends = {}; // code -> { series:[], delta:number } (live)
let pinned = localStorage.getItem('pinned') || null;
let displayed = loadDisplayed(); // up to 3 codes, in selection order
let introRunning = false; // true while the open-page carousel is spinning

function loadDisplayed() {
  try {
    const v = JSON.parse(localStorage.getItem('cards') || 'null');
    const ok = Array.isArray(v) ? v.filter((c) => NAMES[c]).slice(0, 3) : [];
    if (ok.length) return ok;
  } catch {}
  return ['EUR', 'USD', 'HKD'];
}

const SETTINGS_TITLE = { zh: '显示币种 · 最多 3 个', en: 'Currencies · up to 3' };

// Mirrors the extension's sparkline: 4 anchor dots (last/max/min/first), deduped
// by index with that priority; line is red rising / green falling.
function sparkline(values, up) {
  const w = 72;
  const h = 22;
  const pad = 2;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = (w - pad * 2) / (values.length - 1 || 1);
  const x = (i) => pad + i * stepX;
  const y = (v) => pad + (h - pad * 2) * (1 - (v - min) / range);
  const pts = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const color = up ? 'var(--up)' : 'var(--down)';
  const anchors = [
    [values.length - 1, 'var(--accent)', 2], // last
    [values.indexOf(max), 'var(--up)', 2], // high
    [values.indexOf(min), 'var(--down)', 2], // low
    [0, 'var(--muted)', 1.4], // first
  ];
  const seen = new Set();
  let dots = '';
  for (const [i, fill, r] of anchors) {
    if (seen.has(i)) continue;
    seen.add(i);
    dots += `<circle cx="${x(i).toFixed(1)}" cy="${y(values[i]).toFixed(1)}" r="${r}" fill="${fill}" />`;
  }
  return `<svg class="mc__spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
    <polyline points="${pts}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
    ${dots}
  </svg>`;
}

function renderCards(lang) {
  const cardsEl = document.getElementById('mock-cards');
  if (!cardsEl) return;
  const t = T[lang];
  cardsEl.innerHTML = displayed
    .map((code) => {
      const nm = NAMES[code] || { zh: code, en: code };
      const r = board[code] || {};
      const tr = trends[code] || { series: [1, 1], delta: 0 };
      const up = tr.delta >= 0;
      const sel = code === pinned ? ' selected' : '';
      return `<div class="mc${sel}" data-code="${code}">
      <div class="mc__head">
        <span class="mc__code">${code}</span>
        <span class="mc__name">${nm[lang]}</span>
        ${sparkline(tr.series, up)}
        <span class="mc__delta ${up ? 'up' : 'down'}">${up ? '▲' : '▼'} ${Math.abs(tr.delta).toFixed(2)}%</span>
      </div>
      <div class="mc__rates">
        <div class="mc__cell"><span>${t.cellBuy}</span><b>${r.buy ?? '—'}</b></div>
        <div class="mc__cell"><span>${t.cellSell}</span><b>${r.sell ?? '—'}</b></div>
        <div class="mc__cell accent"><span>${t.cellMid}</span><b>${r.mid ?? '—'}</b></div>
      </div>
    </div>`;
    })
    .join('');
}

// ---------- language switching ----------
const root = document.documentElement;
const langBtn = document.getElementById('lang-toggle');

function setLang(lang) {
  const t = T[lang] || T.zh;
  root.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = t[el.dataset.i18n];
    if (val == null) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
  });
  applyPin(lang);
  document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDesc);
  if (langBtn) langBtn.textContent = t.langBtn;
  renderCards(lang);
  renderPicker(lang);
  localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang');
let lang = savedLang === 'en' || savedLang === 'zh' ? savedLang : /^zh/i.test(navigator.language || '') ? 'zh' : 'en';
setLang(lang);
runIntro();

langBtn?.addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  setLang(lang);
});

// Pin a currency: clicking a card prefixes the page title and shows that
// currency's middle rate in the badge (USD by default when nothing is pinned).
// Always ~3 significant digits: 681 / 776 / 86.9 / 4.21 (truncated, keeps the
// integer part so HKD 86.95 reads "86.9", not "87.0").
function badge3(n) {
  n = Number(n);
  if (!isFinite(n)) return '—';
  const intLen = Math.abs(n) >= 1 ? Math.floor(Math.abs(n)).toString().length : 0;
  const dec = Math.max(0, 3 - intLen);
  const f = 10 ** dec;
  return (Math.trunc(n * f) / f).toFixed(dec);
}

function applyPin(lang) {
  const t = T[lang] || T.zh;
  const code = pinned && displayed.includes(pinned) ? pinned : null;
  const r = code && board[code];
  document.title = code && r ? `${NAMES[code][lang]} ${badge3(r.mid)} · ${t.title}` : t.title;
  const badge = document.getElementById('hero-badge-num');
  if (badge) {
    const bc = code || (displayed.includes('USD') ? 'USD' : displayed[0]);
    const br = board[bc];
    if (br && br.mid != null) badge.textContent = badge3(br.mid);
  }
}

// ---------- open-page carousel: spin the highlight + badge through the cards,
// decelerating, then settle on the pinned (or default) currency ----------
function setActiveVisual(code) {
  document
    .querySelectorAll('#mock-cards .mc')
    .forEach((el) => el.classList.toggle('selected', el.dataset.code === code));
  const r = board[code];
  const badge = document.getElementById('hero-badge-num');
  if (badge && r && r.mid != null) badge.textContent = badge3(r.mid);
  document.title =
    r && r.mid != null ? `${NAMES[code][lang]} ${badge3(r.mid)} · ${T[lang].title}` : T[lang].title;
}

function settleOn(code) {
  introRunning = false;
  pinned = displayed.includes(code) ? code : displayed[0];
  renderCards(lang);
  applyPin(lang);
}

function runIntro() {
  const target =
    pinned && displayed.includes(pinned)
      ? pinned
      : displayed.includes('USD')
        ? 'USD'
        : displayed[0];
  const reduce =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (displayed.length < 2 || reduce || !target) {
    settleOn(target || displayed[0]);
    return;
  }
  introRunning = true;
  const tIdx = displayed.indexOf(target);
  let idx = 0;
  let delay = 55;
  const step = () => {
    setActiveVisual(displayed[idx]);
    if (delay > 340 && idx === tIdx) {
      settleOn(target);
      return;
    }
    idx = (idx + 1) % displayed.length;
    delay = Math.min(delay * 1.15, 460);
    setTimeout(step, delay);
  };
  step();
}

document.getElementById('mock-cards')?.addEventListener('click', (e) => {
  const card = e.target.closest('.mc');
  if (!card || !card.dataset.code) return;
  const code = card.dataset.code;
  pinned = pinned === code ? null : code;
  if (pinned) localStorage.setItem('pinned', pinned);
  else localStorage.removeItem('pinned');
  renderCards(lang);
  applyPin(lang);
});

// ---------- settings: choose up to 3 currencies (order = selection order) ----------
const settingsBtn = document.getElementById('mock-settings');
const settingsPanel = document.getElementById('settings-panel');

function renderPicker(lang) {
  const head = document.getElementById('settings-head');
  const grid = document.getElementById('settings-grid');
  if (head) head.textContent = SETTINGS_TITLE[lang] || SETTINGS_TITLE.zh;
  if (!grid) return;
  const full = displayed.length >= 3;
  grid.innerHTML = Object.keys(NAMES)
    .map((code) => {
      const i = displayed.indexOf(code);
      const on = i >= 0;
      const cls = `pick${on ? ' on' : ''}${!on && full ? ' off' : ''}`;
      const order = on ? `<i>${i + 1}</i>` : '';
      return `<button type="button" class="${cls}" data-pick="${code}">${order}${code} ${NAMES[code][lang]}</button>`;
    })
    .join('');
}

settingsPanel?.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-pick]');
  if (!btn) return;
  const code = btn.dataset.pick;
  const i = displayed.indexOf(code);
  if (i >= 0) {
    if (displayed.length <= 1) return; // keep at least one
    displayed.splice(i, 1);
  } else if (displayed.length < 3) {
    displayed.push(code);
  } else {
    return; // already showing 3
  }
  localStorage.setItem('cards', JSON.stringify(displayed));
  if (pinned && !displayed.includes(pinned)) {
    pinned = null;
    localStorage.removeItem('pinned');
  }
  renderPicker(lang);
  renderCards(lang);
  applyPin(lang);
});

settingsBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!settingsPanel) return;
  if (settingsPanel.hasAttribute('hidden')) {
    renderPicker(lang);
    settingsPanel.removeAttribute('hidden');
  } else {
    settingsPanel.setAttribute('hidden', '');
  }
});

document.addEventListener('click', (e) => {
  if (
    settingsPanel &&
    !settingsPanel.hasAttribute('hidden') &&
    !settingsPanel.contains(e.target) &&
    settingsBtn &&
    !settingsBtn.contains(e.target)
  ) {
    settingsPanel.setAttribute('hidden', '');
  }
});

// ---------- theme toggle (persisted) ----------
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

// ---------- timestamp + live data ----------
const pad = (n) => String(n).padStart(2, '0');
const fmtLocal = (d) =>
  `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
const mt = document.getElementById('mock-time');
if (mt) mt.textContent = fmtLocal(new Date());

// 30-day CNY-per-unit trend per currency, from frankfurter.dev (ECB reference,
// CORS-enabled so the browser can read it directly).
async function loadTrends(codes) {
  // Match the extension exactly: fetch a wider range, then keep only dates on or
  // after (today − 30). frankfurter's open "{start}.." is lenient at the start
  // edge (can include a day or two before start when it's a non-trading day), so
  // a strict cutoff filter — what the extension's windowed() does — is required;
  // fetching "30.." directly does NOT match.
  const isoDaysAgo = (n) => {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().slice(0, 10);
  };
  const cutoff = isoDaysAgo(30);
  const url = `https://api.frankfurter.dev/v1/${isoDaysAgo(45)}..?base=CNY&symbols=${codes.join(',')}`;
  const j = await fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));
  const dates = Object.keys(j.rates || {})
    .filter((d) => d >= cutoff)
    .sort();
  const out = {};
  for (const code of codes) {
    const series = dates.map((d) => 1 / j.rates[d][code]).filter(Number.isFinite);
    if (series.length >= 2) {
      const delta = ((series[series.length - 1] - series[0]) / series[0]) * 100;
      out[code] = { series, delta };
    }
  }
  return out;
}

// Real BOC board rates come from our serverless /api/rates (server-side fetch +
// parse of boc.cn — the browser can't hit boc.cn directly due to CORS). On any
// failure (e.g. local preview without the API), the static sample stays.
async function hydrate() {
  const [boardRes, trendRes] = await Promise.allSettled([
    fetch('/api/rates').then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
    loadTrends(Object.keys(NAMES)),
  ]);

  if (boardRes.status === 'fulfilled' && boardRes.value && boardRes.value.rates) {
    const { rates, dataTime } = boardRes.value;
    const fmt = (n) => (n == null ? null : Number(n).toFixed(2));
    for (const [code, r] of Object.entries(rates)) {
      board[code] = { buy: fmt(r.buy), sell: fmt(r.sell), mid: fmt(r.mid) };
    }
    if (mt && dataTime) mt.textContent = fmtLocal(new Date(dataTime));
  }

  if (trendRes.status === 'fulfilled' && trendRes.value) trends = trendRes.value;

  if (introRunning) return; // the carousel will render once it settles
  renderCards(lang);
  applyPin(lang);
}

hydrate();
setInterval(hydrate, 5 * 60 * 1000); // auto-refresh the mock's data every 5 minutes

// ---------- scroll reveal ----------
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
