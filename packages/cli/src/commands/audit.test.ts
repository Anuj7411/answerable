import type { AuditReport, CheckRunResult, ScoreBand } from '@answerfox/audit';
import { parseAbsoluteUrl } from '@answerfox/core';
import { describe, expect, it } from 'vitest';
import { runAuditCommand } from './audit.js';

function bandFor(score: number): ScoreBand {
  if (score <= 40) return 'critical';
  if (score <= 60) return 'weak';
  if (score <= 80) return 'average';
  if (score <= 90) return 'strong';
  return 'excellent';
}

function makeFakeReport(score: number, results: CheckRunResult[] = []): AuditReport {
  return {
    url: parseAbsoluteUrl('https://example.com'),
    fetchedAt: '2026-05-16T00:00:00.000Z',
    score,
    band: bandFor(score),
    summary: { pass: 1, fail: 0, warn: 0, skip: 0 },
    results,
  };
}

describe('runAuditCommand', () => {
  it('returns exit 0 and human-readable output by default', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      { color: false },
      { auditImpl: async () => makeFakeReport(85) },
    );
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toContain('85/100');
    expect(result.stdout).toContain('Strong');
  });

  it('emits valid JSON with --json', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      { json: true },
      { auditImpl: async () => makeFakeReport(85) },
    );
    expect(result.exitCode).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.score).toBe(85);
    expect(parsed.band).toBe('strong');
    expect(parsed.url).toBe('https://example.com');
  });

  it('returns exit 1 in --ci mode when score is below --min-score', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      { json: true, ci: true, minScore: 90 },
      { auditImpl: async () => makeFakeReport(85) },
    );
    expect(result.exitCode).toBe(1);
  });

  it('returns exit 0 in --ci mode when score meets --min-score', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      { json: true, ci: true, minScore: 80 },
      { auditImpl: async () => makeFakeReport(85) },
    );
    expect(result.exitCode).toBe(0);
  });

  it('defaults --min-score to 80 when --ci is used without --min-score', async () => {
    const passing = await runAuditCommand(
      'https://example.com',
      { json: true, ci: true },
      { auditImpl: async () => makeFakeReport(80) },
    );
    expect(passing.exitCode).toBe(0);

    const failing = await runAuditCommand(
      'https://example.com',
      { json: true, ci: true },
      { auditImpl: async () => makeFakeReport(79) },
    );
    expect(failing.exitCode).toBe(1);
  });

  it('does not gate on --min-score when --ci is not set', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      { json: true, minScore: 100 },
      { auditImpl: async () => makeFakeReport(1) },
    );
    expect(result.exitCode).toBe(0);
  });

  it('returns exit 2 with an error message when the audit throws', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      {},
      {
        auditImpl: async () => {
          throw new Error('fetch failed: ENOTFOUND');
        },
      },
    );
    expect(result.exitCode).toBe(2);
    expect(result.error).toContain('ENOTFOUND');
    expect(result.stdout).toBe('');
  });

  it('includes the score and band in human output', async () => {
    const result = await runAuditCommand(
      'https://example.com',
      { color: false },
      { auditImpl: async () => makeFakeReport(45) },
    );
    expect(result.stdout).toContain('45/100');
    expect(result.stdout).toContain('Weak');
  });
});
