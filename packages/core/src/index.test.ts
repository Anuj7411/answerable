import { describe, expect, it } from 'vitest';
import { VERSION } from './index.js';

describe('@answerable-kit/core', () => {
  it('exports a semver-shaped VERSION constant', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
