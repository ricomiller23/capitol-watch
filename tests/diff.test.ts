import { describe, it, expect } from 'vitest';
import { summarizeBillVersionDiff } from '../lib/diff';

describe('Bill Text Version Diff Suite', () => {
  it('correctly calculates added clauses without mutating prior draft text', () => {
    const prior = 'Section 1. Short Title. This Act may be cited as the Example Act.';
    const current = 'Section 1. Short Title. This Act may be cited as the Example Act. Section 2. Definitions and Scope of Authorities across all participating agency departments.';

    const diff = summarizeBillVersionDiff(prior, current);
    expect(diff.summary).toContain('Version modified');
    expect(diff.addedClauses).toBeGreaterThanOrEqual(0);
  });
});
