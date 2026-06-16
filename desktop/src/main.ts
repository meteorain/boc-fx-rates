import './app.css';
import { parseRates } from '@lib/boc';
import { currencyName, rateTypeName, RATE_TYPES } from '@lib/currencies';
import { formatBadge } from '@lib/format';
import type { CurrencyRate, RatesMap, RateType } from '@lib/types';
import { fetchText, setBadge, store } from './platform';
import { t, applyI18n } from './i18n';
import logoUrl from '../../public/images/icon128.png';

const logo = new Image();
logo.src = logoUrl;
const logoReady = logo.decode().catch(() => undefined);

const BOC_URL = 'https://www.boc.cn/sourcedb/whpj/enindex_1619.html';
const POLL_MS = 30 * 60 * 1000;
const DEFAULT_CURRENCIES = ['EUR', 'GBP', 'HKD', 'USD'];
const BADGE_CURRENCY = 'USD';
const BADGE_RATE: RateType = 'MR';

const list = document.getElementById('list') as HTMLElement;
const updated = document.getElementById('updated') as HTMLElement;
const refreshBtn = document.getElementById('refresh') as HTMLButtonElement;

function card(code: string, rate: CurrencyRate): HTMLElement {
  const article = document.createElement('article');
  article.className = 'card';

  const head = document.createElement('div');
  head.className = 'card__head';
  const codeEl = document.createElement('span');
  codeEl.className = 'card__code';
  codeEl.textContent = code;
  const nameEl = document.createElement('span');
  nameEl.className = 'card__name';
  nameEl.textContent = currencyName(code);
  head.append(codeEl, nameEl);

  const rates = document.createElement('div');
  rates.className = 'card__rates';
  for (const type of RATE_TYPES) {
    const cell = document.createElement('div');
    cell.className = 'stat';
    const label = document.createElement('span');
    label.className = 'stat__label';
    label.textContent = rateTypeName(type);
    const value = document.createElement('span');
    const v = rate[type];
    value.className = v == null ? 'stat__value stat__value--empty' : 'stat__value';
    value.textContent = v == null ? '—' : String(v);
    cell.append(label, value);
    rates.append(cell);
  }

  article.append(head, rates);
  return article;
}

const IS_MAC = /Macintosh|Mac OS X/i.test(navigator.userAgent);
const FONT = '-apple-system, "Segoe UI", system-ui, sans-serif';

type Icon = { rgba: number[]; width: number; height: number };

function readPixels(ctx: CanvasRenderingContext2D, w: number, h: number): Icon {
  return { rgba: Array.from(ctx.getImageData(0, 0, w, h).data), width: w, height: h };
}

/**
 * macOS menu bar: a big number pill with the logo tucked behind it, peeking
 * out only at the top. The pill keeps its large, legible size; the menu bar
 * scales the whole image to its height.
 */
function wideBadge(text: string): Icon {
  const fontSize = 40;
  const padX = 16;
  const pillH = 56;
  const logoSize = 58;
  const sliver = 14; // how much of the logo shows above the pill

  const measure = document.createElement('canvas').getContext('2d')!;
  measure.font = `800 ${fontSize}px ${FONT}`;
  const pillW = Math.ceil(measure.measureText(text).width) + padX * 2;
  const w = Math.max(pillW, logoSize);
  const h = sliver + pillH;

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;

  // Logo behind, only its top edge peeking above the pill.
  if (logo.naturalWidth) ctx.drawImage(logo, (w - logoSize) / 2, 0, logoSize, logoSize);

  // Big number pill overlapping the lower part of the logo.
  const pillX = (w - pillW) / 2;
  ctx.fillStyle = '#2563eb';
  ctx.beginPath();
  ctx.roundRect(pillX, sliver, pillW, pillH, pillH / 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `800 ${fontSize}px ${FONT}`;
  ctx.fillText(text, w / 2, sliver + pillH / 2 + 1);

  return readPixels(ctx, w, h);
}

/**
 * Windows/Linux tray (a small square slot): a big number filling the square,
 * with the logo tucked behind and peeking only at the top — same idea as
 * macOS, squared off so it stays legible in the tiny tray.
 */
function squareBadge(text: string): Icon {
  const size = 64;
  const sliver = 12; // how much of the logo shows above the pill
  const pad = 8;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Logo behind, only its top edge peeking above the pill.
  if (logo.naturalWidth) ctx.drawImage(logo, 0, 0, size, size);

  // Big number pill filling the square below the sliver.
  const pillY = sliver;
  const pillH = size - sliver - 1;
  ctx.fillStyle = '#2563eb';
  ctx.beginPath();
  ctx.roundRect(1, pillY, size - 2, pillH, 13);
  ctx.fill();

  // Fit the number to the pill width so it's as large as possible.
  let fontSize = 40;
  ctx.font = `800 ${fontSize}px ${FONT}`;
  const maxW = size - 2 - pad * 2;
  const textW = ctx.measureText(text).width;
  if (textW > maxW) fontSize = Math.floor((fontSize * maxW) / textW);

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `800 ${fontSize}px ${FONT}`;
  ctx.fillText(text, size / 2, pillY + pillH / 2 + 1);

  return readPixels(ctx, size, size);
}

async function updateBadge(rate: number | null | undefined): Promise<void> {
  await logoReady;
  const short = rate != null ? formatBadge(rate) : '—';
  const icon = IS_MAC ? wideBadge(short) : squareBadge(short);
  await setBadge(icon.rgba, icon.width, icon.height, rate != null ? `¥${short}` : '—');
}

function render(rates: RatesMap, selected: string[]): void {
  list.replaceChildren();
  const codes = selected.filter((c) => rates[c]);
  for (const code of codes) list.append(card(code, rates[code]));
  updated.textContent = codes.length
    ? `${t('updatedAt')} ${rates[codes[0]].DATETIME ?? ''}`
    : t('noData');
}

async function refresh(): Promise<void> {
  refreshBtn.classList.add('is-loading');
  try {
    const rates = parseRates(await fetchText(BOC_URL));
    if (Object.keys(rates).length === 0) throw new Error('parsed zero currencies');
    await store.set('rates', rates);

    const selected = (await store.get<string[]>('selected')) ?? DEFAULT_CURRENCIES;
    render(rates, selected);

    await updateBadge(rates[BADGE_CURRENCY]?.[BADGE_RATE]);
  } catch (error) {
    console.error('Refresh failed:', error);
  } finally {
    refreshBtn.classList.remove('is-loading');
  }
}

async function init(): Promise<void> {
  applyI18n();
  const [cached, selected] = await Promise.all([
    store.get<RatesMap>('rates'),
    store.get<string[]>('selected'),
  ]);
  if (cached) render(cached, selected ?? DEFAULT_CURRENCIES);
  await refresh();
  setInterval(() => void refresh(), POLL_MS);
}

refreshBtn.addEventListener('click', () => void refresh());
void init();
