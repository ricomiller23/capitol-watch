export interface TextDiffSummary {
  addedClauses: number;
  removedClauses: number;
  summary: string;
}

/**
 * Computes normalised difference between consecutive bill versions.
 * Invariant: Never mutates or overwrites prior version text.
 */
export function summarizeBillVersionDiff(priorText: string, currentText: string): TextDiffSummary {
  const priorWords = priorText.split(/\s+/);
  const currentWords = currentText.split(/\s+/);

  const delta = currentWords.length - priorWords.length;
  return {
    addedClauses: delta > 0 ? Math.floor(delta / 15) : 0,
    removedClauses: delta < 0 ? Math.floor(Math.abs(delta) / 15) : 0,
    summary: `Version modified: net word delta ${delta > 0 ? `+${delta}` : delta} words across amendments.`,
  };
}
