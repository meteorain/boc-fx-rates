// Vercel serverless function: fetch + parse the Bank of China FX board server-side
// (the browser can't hit boc.cn directly — no CORS), and return the full board
// (the website lets visitors pick which currencies to show). CDN-cached.

const BOC_URL = 'https://www.boc.cn/sourcedb/whpj/enindex_1619.html';
const CELL_RE = /<td bgcolor="#FFFFFF">([\s\S]*?)<\/td>/g;
const CODE_RE = /^[A-Z]{2,4}$/;

const clean = (s) => s.replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, '').trim();
const num = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

// BOC publishes "2026/06/24 02:52:31" in Beijing time (no zone). Turn it into an
// unambiguous instant so the browser can render it in the visitor's local time.
function bocToISO(dt) {
  const m = dt && dt.match(/(\d{4})\/(\d{2})\/(\d{2})\s+(\d{2}):(\d{2}):(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}+08:00` : null;
}

export default async function handler(req, res) {
  try {
    const r = await fetch(BOC_URL, {
      cache: 'no-store',
      headers: { 'User-Agent': 'Mozilla/5.0 (boc-fx-rates website)' },
    });
    if (!r.ok) throw new Error(`BOC responded ${r.status}`);
    const html = await r.text();

    const cells = Array.from(html.matchAll(CELL_RE), (m) => clean(m[1]));
    const rates = {};
    let datetime = null;
    // Each row: code, BR(现汇买入), CBR, SR(现汇卖出), CSR, MR(中行折算价), datetime.
    for (let i = 0; i + 7 <= cells.length; i += 7) {
      const code = cells[i];
      if (!CODE_RE.test(code)) continue;
      rates[code] = { buy: num(cells[i + 1]), sell: num(cells[i + 3]), mid: num(cells[i + 5]) };
      if (!datetime) datetime = cells[i + 6] || null;
    }
    if (!Object.keys(rates).length) throw new Error('parsed zero currencies (layout changed?)');

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=3600');
    res.status(200).json({ rates, dataTime: bocToISO(datetime), fetchedAt: new Date().toISOString() });
  } catch (e) {
    res.status(502).json({ error: String((e && e.message) || e) });
  }
}
