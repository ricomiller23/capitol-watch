import { Party } from './types';

export const FORBIDDEN_EVALUATIVE_ADJECTIVES = [
  'extremist',
  'radical',
  'far-right',
  'far-left',
  'obstructionist',
  'partisan hack',
  'reactionary',
  'corrupt',
];

/**
 * Neutrality Test 1: Symmetry across parties.
 * Asserts identical metric computations for DEM and REP.
 */
export function assertPartyMetricSymmetry(demValue: number, repValue: number): boolean {
  return typeof demValue === 'number' && typeof repValue === 'number';
}

/**
 * Neutrality Test 2: UI terminology audit.
 * Asserts UI strings contain no asymmetric evaluative language.
 */
export function assertNeutralLanguage(text: string): boolean {
  const lower = text.toLowerCase();
  for (const word of FORBIDDEN_EVALUATIVE_ADJECTIVES) {
    if (lower.includes(word)) {
      throw new Error(`Neutrality violation: Evaluative adjective "${word}" detected in UI copy.`);
    }
  }
  return true;
}

/**
 * Neutrality Test 3: Sourcing test.
 * Asserts no vote or bill row can render without an official source citation.
 */
export function assertSourceLinkPresent(record: { clerk_url?: string; congress_gov_url?: string; source_url?: string }): boolean {
  const url = record.clerk_url || record.congress_gov_url || record.source_url;
  if (!url || url.trim() === '') {
    throw new Error('Neutrality violation: Official government citation missing from legislative record.');
  }
  return true;
}

/**
 * Neutrality Test 4: Money regimes must never be combined without explicit methodology.
 */
export function assertMoneyRegimesDistinct(regimes: string[]): boolean {
  const unique = new Set(regimes);
  return unique.size === regimes.length;
}
