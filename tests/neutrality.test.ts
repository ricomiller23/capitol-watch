import { describe, it, expect } from 'vitest';
import {
  assertPartyMetricSymmetry,
  assertNeutralLanguage,
  assertSourceLinkPresent,
  assertMoneyRegimesDistinct,
  FORBIDDEN_EVALUATIVE_ADJECTIVES,
} from '../lib/neutrality';

describe('CAPITOL.WATCH Automated Neutrality Gate Suite', () => {
  it('enforces metric symmetry across political parties', () => {
    const demUnity = 92.4;
    const repUnity = 94.1;
    expect(assertPartyMetricSymmetry(demUnity, repUnity)).toBe(true);
  });

  it('rejects evaluative or biased political adjectives in copy', () => {
    expect(assertNeutralLanguage('Representative voted Yea on the measure.')).toBe(true);

    for (const badWord of FORBIDDEN_EVALUATIVE_ADJECTIVES) {
      expect(() => assertNeutralLanguage(`This is an ${badWord} proposal.`)).toThrow(/Neutrality violation/);
    }
  });

  it('enforces mandatory government source citation on all legislative records', () => {
    expect(assertSourceLinkPresent({ clerk_url: 'https://clerk.house.gov/roll014.xml' })).toBe(true);
    expect(() => assertSourceLinkPresent({ clerk_url: '' })).toThrow(/citation missing/);
    expect(() => assertSourceLinkPresent({})).toThrow(/citation missing/);
  });

  it('prohibits blending of distinct money regimes', () => {
    const validRegimes = ['campaign_committee', 'independent_expenditure', 'lobbying_disclosure'];
    expect(assertMoneyRegimesDistinct(validRegimes)).toBe(true);

    const duplicateRegimes = ['campaign_committee', 'campaign_committee'];
    expect(assertMoneyRegimesDistinct(duplicateRegimes)).toBe(false);
  });
});
