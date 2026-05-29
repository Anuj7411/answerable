import { SchemaValidationError } from '@answerfox/core';
import type { FAQPage } from 'schema-dts';
import type { Schema } from './_internal.js';

export interface FaqQuestionInput {
  readonly question: string;
  readonly answer: string;
}

export interface FaqPageInput {
  readonly questions: readonly FaqQuestionInput[];
}

/**
 * Generate a fully-typed JSON-LD `FAQPage` object. AI answer engines
 * (Perplexity, Claude, ChatGPT) and Google's rich-result FAQs both
 * key off this schema, making it one of the highest-leverage helpers.
 *
 * @throws SchemaValidationError if `questions` is empty or if any
 *   question / answer is blank after trimming whitespace. The error's
 *   `issues` array enumerates every problem entry, not just the first.
 */
export function faqPage(input: FaqPageInput): Schema<FAQPage> {
  if (input.questions.length === 0) {
    throw new SchemaValidationError(['faqPage requires at least one question']);
  }

  const issues: string[] = [];
  input.questions.forEach((q, i) => {
    if (q.question.trim() === '') {
      issues.push(`questions[${i}].question is empty`);
    }
    if (q.answer.trim() === '') {
      issues.push(`questions[${i}].answer is empty`);
    }
  });
  if (issues.length > 0) {
    throw new SchemaValidationError(issues);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: input.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}
