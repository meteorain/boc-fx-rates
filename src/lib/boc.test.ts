import { describe, it, expect } from 'vitest';
import { parseRates } from './boc';

/** A realistic slice of the BOC board: normal rows, empty cells, noise. */
const cell = (v: string) => `<td bgcolor="#FFFFFF">${v}</td>`;
const row = (...cells: string[]) => cells.map(cell).join('');

const FIXTURE = `
<html><body>
<table>
  <tr><th>Currency</th></tr>
  ${row('USD', '674.52', '674.52', '677.35', '677.35', '680.88', '2026/06/15 23:41:57&nbsp;')}
  ${row('BND', '', '484.8', '', '569.12', '527.66', '2026/06/15 23:41:57&nbsp;')}
  ${row('JPY', '4.2023', '4.2023', '4.2348', '4.2348', '4.2424', '2026/06/15 23:41:57&nbsp;')}
</table>
</body></html>`;

describe('parseRates', () => {
  const rates = parseRates(FIXTURE);

  it('keys by ISO currency code', () => {
    expect(Object.keys(rates).sort()).toEqual(['BND', 'JPY', 'USD']);
  });

  it('parses rate columns as numbers', () => {
    expect(rates.USD).toMatchObject({
      BR: 674.52,
      CBR: 674.52,
      SR: 677.35,
      CSR: 677.35,
      MR: 680.88,
    });
    expect(rates.JPY.BR).toBe(4.2023);
  });

  it('maps empty cells to null', () => {
    expect(rates.BND.BR).toBeNull();
    expect(rates.BND.SR).toBeNull();
    expect(rates.BND.CBR).toBe(484.8);
  });

  it('cleans &nbsp; and trims the datetime without mangling it', () => {
    expect(rates.USD.DATETIME).toBe('2026/06/15 23:41:57');
  });

  it('returns no currencies when the layout has no matching cells', () => {
    expect(parseRates('<html><body>no table here</body></html>')).toEqual({});
  });

  it('skips chunks whose first cell is not a currency code', () => {
    const junk = row('2026/06/15', '1', '2', '3', '4', '5', '6');
    expect(parseRates(junk)).toEqual({});
  });
});
