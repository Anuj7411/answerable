import { describe, expect, it } from 'vitest';
import { AnswerfoxError, InvalidUrlError, SchemaValidationError } from './errors.js';

describe('AnswerfoxError', () => {
  it('carries a code and message', () => {
    const err = new AnswerfoxError('TEST_CODE', 'something broke');
    expect(err.code).toBe('TEST_CODE');
    expect(err.message).toBe('something broke');
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('AnswerfoxError');
  });

  it('preserves cause through ErrorOptions', () => {
    const cause = new Error('underlying');
    const err = new AnswerfoxError('X', 'wrap', { cause });
    expect(err.cause).toBe(cause);
  });
});

describe('InvalidUrlError', () => {
  it('includes the offending input and a stable code', () => {
    const err = new InvalidUrlError('not-a-url');
    expect(err.input).toBe('not-a-url');
    expect(err.code).toBe('ANSWERABLE_INVALID_URL');
    expect(err.message).toContain('not-a-url');
    expect(err).toBeInstanceOf(AnswerfoxError);
  });

  it('appends the reason when supplied', () => {
    const err = new InvalidUrlError('http://x', 'must use https');
    expect(err.message).toContain('must use https');
  });
});

describe('SchemaValidationError', () => {
  it('joins issues into the message and exposes them as a readonly array', () => {
    const err = new SchemaValidationError(['name is required', 'age must be positive']);
    expect(err.issues).toEqual(['name is required', 'age must be positive']);
    expect(err.message).toContain('name is required');
    expect(err.message).toContain('age must be positive');
    expect(err.code).toBe('ANSWERABLE_SCHEMA_VALIDATION');
  });
});
