import { describe, expect, it } from 'vitest';
import { VERSION } from './index.js';

describe('@answerfox/core', () => {
  it('exports a semver-shaped VERSION constant', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
