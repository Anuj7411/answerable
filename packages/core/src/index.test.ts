import { describe, expect, it } from 'vitest';
import { VERSION } from './index.js';

describe('@answerable/core', () => {
  it('exports a semver-shaped VERSION constant', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
