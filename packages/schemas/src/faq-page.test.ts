import { SchemaValidationError } from '@answerable-kit/core';
import { describe, expect, it } from 'vitest';
import { faqPage } from './faq-page.js';

describe('faqPage', () => {
  it('emits a well-formed FAQPage with a single question', () => {
    const out = faqPage({
      questions: [{ question: 'What is Answerable?', answer: 'An SEO toolkit.' }],
    });
    expect(out).toEqual({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Answerable?',
          acceptedAnswer: { '@type': 'Answer', text: 'An SEO toolkit.' },
        },
      ],
    });
  });

  it('emits each question as a separate mainEntity entry in order', () => {
    const out = faqPage({
      questions: [
        { question: 'Q1?', answer: 'A1.' },
        { question: 'Q2?', answer: 'A2.' },
        { question: 'Q3?', answer: 'A3.' },
      ],
    });
    expect(Array.isArray(out.mainEntity)).toBe(true);
    const entries = out.mainEntity as ReadonlyArray<{ name: string }>;
    expect(entries).toHaveLength(3);
    expect(entries.map((e) => e.name)).toEqual(['Q1?', 'Q2?', 'Q3?']);
  });

  it('throws SchemaValidationError on an empty questions array', () => {
    expect(() => faqPage({ questions: [] })).toThrow(SchemaValidationError);
  });

  it('throws SchemaValidationError with all bad entries enumerated', () => {
    try {
      faqPage({
        questions: [
          { question: 'OK?', answer: 'OK.' },
          { question: '   ', answer: 'A.' },
          { question: 'Q?', answer: '' },
        ],
      });
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(SchemaValidationError);
      const issues = (e as SchemaValidationError).issues;
      expect(issues).toHaveLength(2);
      expect(issues[0]).toContain('questions[1].question');
      expect(issues[1]).toContain('questions[2].answer');
    }
  });

  it('preserves whitespace within question / answer (trim only checks emptiness)', () => {
    const out = faqPage({
      questions: [{ question: '  What  is  this?  ', answer: '  A multi-word  reply  ' }],
    });
    const entries = out.mainEntity as ReadonlyArray<{ name: string }>;
    expect(entries[0]?.name).toBe('  What  is  this?  ');
  });
});
