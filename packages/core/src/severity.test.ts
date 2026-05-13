import { describe, expect, it } from 'vitest';
import { SEVERITY_ORDER, SeveritySchema, severityRank } from './severity.js';

describe('SeveritySchema', () => {
  it('accepts each documented severity', () => {
    for (const s of ['critical', 'high', 'medium', 'low'] as const) {
      expect(SeveritySchema.parse(s)).toBe(s);
    }
  });

  it('rejects unknown severities', () => {
    expect(() => SeveritySchema.parse('extreme')).toThrow();
  });
});

describe('SEVERITY_ORDER', () => {
  it('ranks critical first and low last', () => {
    const [first] = SEVERITY_ORDER;
    const last = SEVERITY_ORDER[SEVERITY_ORDER.length - 1];
    expect(first).toBe('critical');
    expect(last).toBe('low');
  });

  it('contains exactly four entries with no duplicates', () => {
    expect(SEVERITY_ORDER).toHaveLength(4);
    expect(new Set(SEVERITY_ORDER).size).toBe(4);
  });
});

describe('severityRank', () => {
  it('gives lower numbers to more severe levels', () => {
    expect(severityRank('critical')).toBeLessThan(severityRank('high'));
    expect(severityRank('high')).toBeLessThan(severityRank('medium'));
    expect(severityRank('medium')).toBeLessThan(severityRank('low'));
  });
});
