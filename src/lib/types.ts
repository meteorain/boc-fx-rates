/** The five rate columns the Bank of China publishes for each currency. */
export type RateType = 'BR' | 'CBR' | 'SR' | 'CSR' | 'MR';

/** A single currency's rates, as parsed from the BOC page. */
export interface CurrencyRate {
  BR: number | null;
  CBR: number | null;
  SR: number | null;
  CSR: number | null;
  MR: number | null;
  /** Publish time, normalized to "YYY.MM.DD HH:MM:SS". */
  DATETIME: string | null;
}

/** Map of ISO currency code -> rates. */
export type RatesMap = Record<string, CurrencyRate>;

export interface Threshold {
  rateType: RateType;
  high: number | null;
  low: number | null;
}

/** User settings, persisted in chrome.storage.sync. */
/** Push a daily digest of selected currencies at a set local time. */
export interface DailySummaryConfig {
  enabled: boolean;
  time: string; // "HH:MM"
}
/** Alert when a currency's mid rate moves at least `percent` in a day. */
export interface MoveAlertConfig {
  enabled: boolean;
  percent: number;
}
/** Alert when a currency's mid rate hits an N-day high or low. */
export interface ExtremeAlertConfig {
  enabled: boolean;
  days: number;
}

export interface Settings {
  selectedCurrencies: string[];
  badgeCurrency: string;
  badgeRateType: RateType;
  updateFrequency: number;
  thresholds: Record<string, Threshold>;
  /** Trend window in days (30 / 90 / 365). */
  trendDays: number;
  /** UI theme: follow the OS, or force light / dark. */
  theme: 'auto' | 'light' | 'dark';
  dailySummary: DailySummaryConfig;
  moveAlert: MoveAlertConfig;
  extremeAlert: ExtremeAlertConfig;
}

/** Cached rate payload, persisted in chrome.storage.local. */
export interface RatesCache {
  rates: RatesMap;
  /** Epoch millis when the cache was written. */
  fetchedAt: number;
}

/** One point on a currency's market-rate trend line. */
export interface TrendPoint {
  /** ISO date, e.g. "2026-06-15". */
  t: string;
  /** CNY per 1 unit of the foreign currency (market reference rate). */
  v: number;
}

/** Cached trend series (market reference rates), persisted in storage.local. */
export interface TrendCache {
  fetchedAt: number;
  days: number;
  series: Record<string, TrendPoint[]>;
}

/** Messages exchanged between UI pages and the service worker. */
export type WorkerMessage = 'manual-refresh' | 'refresh-badge';
export interface WorkerResponse {
  status: 'completed' | 'error';
}
