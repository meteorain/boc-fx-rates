import { getCache, getSettings } from '@/lib/storage';
import { currencyName, rateTypeName } from '@/lib/currencies';
import type { RateType } from '@/lib/types';

/**
 * A small converter that picks the *correct* board column for the trade:
 * selling foreign currency to the bank uses the buying rate (现汇/现钞买入价),
 * buying foreign currency from the bank uses the selling rate (现汇/现钞卖出价).
 * BOC quotes per 100 units, which is handled here.
 */

const CNY = '¥';
const msg = (k: string): string => chrome.i18n.getMessage(k);

let toCny = true; // direction: foreign -> CNY (we sell foreign to the bank)
let cash = false; // 现钞 when true, else 现汇

const fmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
const fmtSmall = new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 });

function format(n: number): string {
  return (Math.abs(n) < 1 ? fmtSmall : fmt).format(n);
}

export async function initConverter(): Promise<void> {
  const amount = document.getElementById('conv-amount') as HTMLInputElement;
  const currency = document.getElementById('conv-currency') as HTMLSelectElement;
  const cashBar = document.getElementById('conv-cash') as HTMLElement;
  const giveUnit = document.getElementById('conv-give-unit') as HTMLElement;
  const getUnit = document.getElementById('conv-get-unit') as HTMLElement;
  const out = document.getElementById('conv-out') as HTMLElement;
  const rateLine = document.getElementById('conv-rate') as HTMLElement;
  const swap = document.getElementById('conv-swap') as HTMLButtonElement;

  const [cache, settings] = await Promise.all([getCache(), getSettings()]);
  const rates = cache?.rates ?? {};
  const codes = Object.keys(rates).sort();
  if (codes.length === 0) return;

  // Currency picker, defaulting to the badge currency.
  currency.replaceChildren(
    ...codes.map((c) => {
      const o = document.createElement('option');
      o.value = c;
      o.textContent = `${c} · ${currencyName(c)}`;
      o.selected = c === settings.badgeCurrency;
      return o;
    }),
  );

  // 现汇 / 现钞 segmented control.
  const buildCashBar = (): void => {
    cashBar.replaceChildren();
    ([['wire', false], ['cash', true]] as const).forEach(([key, isCash]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = isCash === cash ? 'seg is-active' : 'seg';
      btn.textContent = msg(key === 'wire' ? 'convWire' : 'convCash');
      btn.addEventListener('click', () => {
        if (cash === isCash) return;
        cash = isCash;
        buildCashBar();
        compute();
      });
      cashBar.append(btn);
    });
  };

  function compute(): void {
    const code = currency.value;
    const rate = rates[code];
    const amt = Number(amount.value);

    const rateType: RateType = toCny ? (cash ? 'CBR' : 'BR') : cash ? 'CSR' : 'SR';
    const rateVal = rate?.[rateType] ?? null;

    giveUnit.textContent = toCny ? code : CNY;
    getUnit.textContent = toCny ? CNY : code;

    if (rateVal == null || !Number.isFinite(amt)) {
      out.textContent = '—';
      rateLine.textContent = rateVal == null ? msg('convNoQuote') : '';
      return;
    }

    // rateVal is CNY per 100 units of the foreign currency.
    const result = toCny ? (amt * rateVal) / 100 : (amt * 100) / rateVal;
    out.textContent = format(result);
    rateLine.textContent = `${rateTypeName(rateType)} ${rateVal} · ${msg('per100')} ${currencyName(code)}`;
  }

  buildCashBar();
  amount.addEventListener('input', compute);
  currency.addEventListener('change', compute);
  swap.addEventListener('click', () => {
    toCny = !toCny;
    compute();
  });
  compute();
}
