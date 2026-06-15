import type { RateType } from './types';

type Lang = 'en' | 'zh' | 'zhTW' | 'ja' | 'ko' | 'ru' | 'fr' | 'de' | 'it' | 'es';

/** Names carry every language; zhTW falls back to zh, everything else to en. */
type Names = Partial<Record<Lang, string>> & { en: string };

/** Resolve the UI language to one of our supported keys. */
function localeKey(): Lang {
  const lang = (
    (typeof chrome !== 'undefined' && chrome.i18n?.getUILanguage?.()) ||
    (typeof navigator !== 'undefined' && navigator.language) ||
    'en'
  ).toLowerCase();
  if (lang.startsWith('zh')) return /tw|hk|mo|hant/.test(lang) ? 'zhTW' : 'zh';
  for (const k of ['ja', 'ko', 'ru', 'fr', 'de', 'it', 'es'] as const) {
    if (lang.startsWith(k)) return k;
  }
  return 'en';
}

function pick(names: Names): string {
  const key = localeKey();
  return names[key] ?? (key === 'zhTW' ? names.zh : undefined) ?? names.en;
}

const CURRENCY_NAMES: Record<string, Names> = {
  AED: { en: 'UAE Dirham', zh: '阿联酋迪拉姆', zhTW: '阿聯酋迪拉姆', ja: 'UAEディルハム', ko: 'UAE 디르함', ru: 'Дирхам ОАЭ', fr: 'Dirham des EAU', de: 'VAE-Dirham', it: 'Dirham EAU', es: 'Dírham de los EAU' },
  AUD: { en: 'Australian Dollar', zh: '澳大利亚元', zhTW: '澳大利亞元', ja: '豪ドル', ko: '호주 달러', ru: 'Австралийский доллар', fr: 'Dollar australien', de: 'Australischer Dollar', it: 'Dollaro australiano', es: 'Dólar australiano' },
  BRL: { en: 'Brazilian Real', zh: '巴西里亚尔', zhTW: '巴西里亞爾', ja: 'ブラジルレアル', ko: '브라질 헤알', ru: 'Бразильский реал', fr: 'Réal brésilien', de: 'Brasilianischer Real', it: 'Real brasiliano', es: 'Real brasileño' },
  CAD: { en: 'Canadian Dollar', zh: '加拿大元', ja: 'カナダドル', ko: '캐나다 달러', ru: 'Канадский доллар', fr: 'Dollar canadien', de: 'Kanadischer Dollar', it: 'Dollaro canadese', es: 'Dólar canadiense' },
  CHF: { en: 'Swiss Franc', zh: '瑞士法郎', ja: 'スイスフラン', ko: '스위스 프랑', ru: 'Швейцарский франк', fr: 'Franc suisse', de: 'Schweizer Franken', it: 'Franco svizzero', es: 'Franco suizo' },
  DKK: { en: 'Danish Krone', zh: '丹麦克朗', zhTW: '丹麥克朗', ja: 'デンマーククローネ', ko: '덴마크 크로네', ru: 'Датская крона', fr: 'Couronne danoise', de: 'Dänische Krone', it: 'Corona danese', es: 'Corona danesa' },
  EUR: { en: 'Euro', zh: '欧元', zhTW: '歐元', ja: 'ユーロ', ko: '유로', ru: 'Евро', fr: 'Euro', de: 'Euro', it: 'Euro', es: 'Euro' },
  GBP: { en: 'British Pound', zh: '英镑', zhTW: '英鎊', ja: '英ポンド', ko: '영국 파운드', ru: 'Фунт стерлингов', fr: 'Livre sterling', de: 'Britisches Pfund', it: 'Sterlina britannica', es: 'Libra esterlina' },
  HKD: { en: 'Hong Kong Dollar', zh: '港币', zhTW: '港幣', ja: '香港ドル', ko: '홍콩 달러', ru: 'Гонконгский доллар', fr: 'Dollar de Hong Kong', de: 'Hongkong-Dollar', it: 'Dollaro di Hong Kong', es: 'Dólar de Hong Kong' },
  IDR: { en: 'Indonesian Rupiah', zh: '印尼卢比', zhTW: '印尼盧比', ja: 'インドネシアルピア', ko: '인도네시아 루피아', ru: 'Индонезийская рупия', fr: 'Roupie indonésienne', de: 'Indonesische Rupiah', it: 'Rupia indonesiana', es: 'Rupia indonesia' },
  INR: { en: 'Indian Rupee', zh: '印度卢比', zhTW: '印度盧比', ja: 'インドルピー', ko: '인도 루피', ru: 'Индийская рупия', fr: 'Roupie indienne', de: 'Indische Rupie', it: 'Rupia indiana', es: 'Rupia india' },
  JPY: { en: 'Japanese Yen', zh: '日元', zhTW: '日圓', ja: '日本円', ko: '일본 엔', ru: 'Японская иена', fr: 'Yen japonais', de: 'Japanischer Yen', it: 'Yen giapponese', es: 'Yen japonés' },
  KRW: { en: 'South Korean Won', zh: '韩国元', zhTW: '韓元', ja: '韓国ウォン', ko: '대한민국 원', ru: 'Южнокорейская вона', fr: 'Won sud-coréen', de: 'Südkoreanischer Won', it: 'Won sudcoreano', es: 'Won surcoreano' },
  MOP: { en: 'Macau Pataca', zh: '澳门元', zhTW: '澳門元', ja: 'マカオパタカ', ko: '마카오 파타카', ru: 'Макайская патака', fr: 'Pataca de Macao', de: 'Macao-Pataca', it: 'Pataca di Macao', es: 'Pataca de Macao' },
  MYR: { en: 'Malaysian Ringgit', zh: '林吉特', zhTW: '馬來西亞令吉', ja: 'マレーシアリンギット', ko: '말레이시아 링깃', ru: 'Малайзийский ринггит', fr: 'Ringgit malaisien', de: 'Malaysischer Ringgit', it: 'Ringgit malese', es: 'Ringgit malayo' },
  NOK: { en: 'Norwegian Krone', zh: '挪威克朗', zhTW: '挪威克朗', ja: 'ノルウェークローネ', ko: '노르웨이 크로네', ru: 'Норвежская крона', fr: 'Couronne norvégienne', de: 'Norwegische Krone', it: 'Corona norvegese', es: 'Corona noruega' },
  NZD: { en: 'New Zealand Dollar', zh: '新西兰元', zhTW: '紐西蘭元', ja: 'ニュージーランドドル', ko: '뉴질랜드 달러', ru: 'Новозеландский доллар', fr: 'Dollar néo-zélandais', de: 'Neuseeland-Dollar', it: 'Dollaro neozelandese', es: 'Dólar neozelandés' },
  PHP: { en: 'Philippine Peso', zh: '菲律宾比索', zhTW: '菲律賓比索', ja: 'フィリピンペソ', ko: '필리핀 페소', ru: 'Филиппинское песо', fr: 'Peso philippin', de: 'Philippinischer Peso', it: 'Peso filippino', es: 'Peso filipino' },
  RUB: { en: 'Russian Ruble', zh: '卢布', zhTW: '盧布', ja: 'ロシアルーブル', ko: '러시아 루블', ru: 'Российский рубль', fr: 'Rouble russe', de: 'Russischer Rubel', it: 'Rublo russo', es: 'Rublo ruso' },
  SAR: { en: 'Saudi Riyal', zh: '沙特里亚尔', zhTW: '沙特里亞爾', ja: 'サウジリヤル', ko: '사우디 리얄', ru: 'Саудовский риял', fr: 'Riyal saoudien', de: 'Saudi-Riyal', it: 'Riyal saudita', es: 'Riyal saudí' },
  SEK: { en: 'Swedish Krona', zh: '瑞典克朗', zhTW: '瑞典克朗', ja: 'スウェーデンクローナ', ko: '스웨덴 크로나', ru: 'Шведская крона', fr: 'Couronne suédoise', de: 'Schwedische Krone', it: 'Corona svedese', es: 'Corona sueca' },
  SGD: { en: 'Singapore Dollar', zh: '新加坡元', ja: 'シンガポールドル', ko: '싱가포르 달러', ru: 'Сингапурский доллар', fr: 'Dollar de Singapour', de: 'Singapur-Dollar', it: 'Dollaro di Singapore', es: 'Dólar de Singapur' },
  THB: { en: 'Thai Baht', zh: '泰国铢', zhTW: '泰銖', ja: 'タイバーツ', ko: '태국 바트', ru: 'Тайский бат', fr: 'Baht thaïlandais', de: 'Thailändischer Baht', it: 'Baht thailandese', es: 'Baht tailandés' },
  TRY: { en: 'Turkish Lira', zh: '土耳其里拉', ja: 'トルコリラ', ko: '튀르키예 리라', ru: 'Турецкая лира', fr: 'Livre turque', de: 'Türkische Lira', it: 'Lira turca', es: 'Lira turca' },
  TWD: { en: 'New Taiwan Dollar', zh: '新台币', zhTW: '新臺幣', ja: '台湾ドル', ko: '신타이완 달러', ru: 'Новый тайваньский доллар', fr: 'Dollar de Taïwan', de: 'Neuer Taiwan-Dollar', it: 'Nuovo dollaro taiwanese', es: 'Nuevo dólar taiwanés' },
  USD: { en: 'US Dollar', zh: '美元', ja: '米ドル', ko: '미국 달러', ru: 'Доллар США', fr: 'Dollar américain', de: 'US-Dollar', it: 'Dollaro USA', es: 'Dólar estadounidense' },
  ZAR: { en: 'South African Rand', zh: '南非兰特', zhTW: '南非蘭特', ja: '南アフリカランド', ko: '남아프리카 랜드', ru: 'Южноафриканский рэнд', fr: 'Rand sud-africain', de: 'Südafrikanischer Rand', it: 'Rand sudafricano', es: 'Rand sudafricano' },
};

const RATE_TYPE_NAMES: Record<RateType, Names> = {
  BR: { en: 'Wire buy', zh: '现汇买入价', zhTW: '現匯買入價', ja: '電信買', ko: '전신 매입', ru: 'Пок. безн.', fr: 'Achat vir.', de: 'Ankauf Dev.', it: 'Acq. bon.', es: 'Compra tr.' },
  CBR: { en: 'Cash buy', zh: '现钞买入价', zhTW: '現鈔買入價', ja: '現金買', ko: '현찰 매입', ru: 'Пок. нал.', fr: 'Achat esp.', de: 'Ankauf Bar.', it: 'Acq. cont.', es: 'Compra ef.' },
  SR: { en: 'Wire sell', zh: '现汇卖出价', zhTW: '現匯賣出價', ja: '電信売', ko: '전신 매도', ru: 'Прод. безн.', fr: 'Vente vir.', de: 'Verkauf Dev.', it: 'Vend. bon.', es: 'Venta tr.' },
  CSR: { en: 'Cash sell', zh: '现钞卖出价', zhTW: '現鈔賣出價', ja: '現金売', ko: '현찰 매도', ru: 'Прод. нал.', fr: 'Vente esp.', de: 'Verkauf Bar.', it: 'Vend. cont.', es: 'Venta ef.' },
  MR: { en: 'Middle', zh: '中行折算价', zhTW: '中行折算價', ja: '仲値', ko: '중간 환율', ru: 'Средний', fr: 'Moyen', de: 'Mittel', it: 'Medio', es: 'Medio' },
};

export const RATE_TYPES = Object.keys(RATE_TYPE_NAMES) as RateType[];

/** All currency codes we know names for, used as a fallback before first fetch. */
export const CURRENCY_CODES = Object.keys(CURRENCY_NAMES);

export function currencyName(code: string): string {
  const names = CURRENCY_NAMES[code];
  return names ? pick(names) : code;
}

export function rateTypeName(type: RateType): string {
  return pick(RATE_TYPE_NAMES[type]);
}

/** Emoji flag for a few headline currencies, used in notifications. */
export const CURRENCY_EMOJI: Record<string, string> = {
  USD: '💵',
  EUR: '💶',
  GBP: '💷',
  JPY: '💴',
};
