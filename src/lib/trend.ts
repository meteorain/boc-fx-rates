import { getTrendCache, setTrendCache } from './storage';
import type { TrendPoint } from './types';

/**
 * Trend lines come from frankfurter.dev (ECB reference rates) rather than the
 * BOC board: BOC publishes no usable history. These are *market reference*
 * rates, so the shape tracks the board closely but the absolute values differ.
 */
const API = 'https://api.frankfurter.dev/v1';

/** Selectable trend windows, in days. */
export const TREND_WINDOWS = [30, 90, 365] as const;
/** We always fetch the widest window once and slice the rest locally. */
const MAX_DAYS = 365;
const TTL_MS = 6 * 60 * 60 * 1000; // refresh at most every 6h (data is daily)

/** Currencies absent from the ECB/frankfurter dataset — no trend available. */
const UNSUPPORTED = new Set(['AED', 'MOP', 'RUB', 'SAR', 'TWD']);

export function trendSupported(code: string): boolean {
  return code !== 'CNY' && !UNSUPPORTED.has(code);
}

function isoDaysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

/** Return the tail of a series within the last `days` (dates sort lexically). */
export function windowed(points: TrendPoint[], days: number): TrendPoint[] {
  const cutoff = isoDaysAgo(days);
  return points.filter((p) => p.t >= cutoff);
}

interface FrankfurterResponse {
  rates: Record<string, Record<string, number>>;
}

/** Fetch a full year of CNY-per-unit daily series for the given codes. */
async function fetchSeries(codes: string[]): Promise<Record<string, TrendPoint[]>> {
  const symbols = codes.filter(trendSupported);
  if (symbols.length === 0) return {};

  // base=CNY gives "foreign per CNY"; invert to get "CNY per foreign unit",
  // matching how the BOC board is oriented.
  const url = `${API}/${isoDaysAgo(MAX_DAYS)}..?base=CNY&symbols=${symbols.join(',')}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`frankfurter responded ${res.status}`);
  const data = (await res.json()) as FrankfurterResponse;

  const series: Record<string, TrendPoint[]> = {};
  for (const date of Object.keys(data.rates).sort()) {
    const row = data.rates[date];
    for (const code of symbols) {
      const rate = row[code];
      if (!rate) continue;
      (series[code] ??= []).push({ t: date, v: 1 / rate });
    }
  }
  return series;
}

/**
 * Return a full year of trend series for the requested codes, served from
 * cache unless it is stale or missing a requested currency. Callers slice it
 * to the desired window with `windowed()`, so switching windows needs no
 * refetch. Network failures fall back to cache.
 */
export async function getTrends(codes: string[]): Promise<Record<string, TrendPoint[]>> {
  const cache = await getTrendCache();
  const wanted = codes.filter(trendSupported);
  const isFresh =
    cache != null &&
    cache.days === MAX_DAYS &&
    Date.now() - cache.fetchedAt < TTL_MS &&
    wanted.every((code) => code in cache.series);

  if (isFresh) return cache.series;

  try {
    const series = await fetchSeries(codes);
    await setTrendCache({ fetchedAt: Date.now(), days: MAX_DAYS, series });
    return series;
  } catch (error) {
    console.error('Trend fetch failed:', error);
    return cache?.series ?? {};
  }
}
