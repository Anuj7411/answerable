/**
 * Base class for all errors thrown by Answerfox packages.
 *
 * Subclasses set a stable `code` string so consumers can branch on error
 * kind without relying on `instanceof` (which breaks across realms /
 * bundler boundaries).
 */
export class AnswerfoxError extends Error {
  readonly code: string;

  constructor(code: string, message: string, options?: ErrorOptions) {
    super(message, options);
    this.code = code;
    this.name = 'AnswerfoxError';
  }
}

/**
 * Thrown when a value that claimed to be a URL fails validation.
 */
export class InvalidUrlError extends AnswerfoxError {
  readonly input: string;

  constructor(input: string, reason?: string, options?: ErrorOptions) {
    const detail = reason ? `: ${reason}` : '';
    super('ANSWERABLE_INVALID_URL', `Invalid URL "${input}"${detail}`, options);
    this.input = input;
    this.name = 'InvalidUrlError';
  }
}

/**
 * Thrown when a schema (zod, JSON-LD, etc.) fails validation.
 * The full list of individual issues is preserved on `issues`.
 */
export class SchemaValidationError extends AnswerfoxError {
  readonly issues: readonly string[];

  constructor(issues: readonly string[], options?: ErrorOptions) {
    super(
      'ANSWERABLE_SCHEMA_VALIDATION',
      `Schema validation failed:\n  - ${issues.join('\n  - ')}`,
      options,
    );
    this.issues = issues;
    this.name = 'SchemaValidationError';
  }
}
