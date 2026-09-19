import React from 'react';
import { SEED_BILLS } from '@/lib/fallback-data';
import { FileText, ExternalLink, GitCommit, ArrowRight } from 'lucide-react';

export const revalidate = 60;

export default function BillsPage() {
  return (
    <div className="space-y-6 font-mono">
      <div className="bg-[#F6F8FB] border border-[#E4E9F0] p-4 rounded-xl shadow-xs">
        <div className="flex items-center gap-2 mb-1">
          <FileText className="w-5 h-5 text-[#0E63C4]" />
          <h1 className="font-extrabold text-lg text-[#0B1220] tracking-tight">
            Legislation & Bill Version Text Diffs
          </h1>
        </div>
        <p className="text-xs text-[#5B6779]">
          Tracking version evolution from Introduced (IH) to Reported (RH) to Engrossed (EH) and Enrolled (ENR).
          Bill text versions are immutable; text is never overwritten.
        </p>
      </div>

      <div className="space-y-6">
        {SEED_BILLS.map((b) => (
          <div key={b.id} className="bg-[#FFFFFF] border border-[#E4E9F0] rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E9F0] pb-3">
              <div>
                <span className="font-bold text-xs bg-[#EBF3FD] text-[#0A3F73] px-2 py-0.5 rounded border border-[#CBD5E1]">
                  {b.bill_type.toUpperCase()} {b.number} · 119th Congress
                </span>
                <h2 className="text-base font-bold text-[#0B1220] mt-1">{b.title}</h2>
              </div>
              <a href={b.congress_gov_url} target="_blank" rel="noopener noreferrer" className="text-[#0E63C4] hover:underline flex items-center gap-1 text-xs font-semibold">
                Congress.gov Docket <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Version Evolution Steps */}
            <div>
              <h3 className="text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-[#0E63C4]" /> Sequential Version Chain ({b.versions.length} versions)
              </h3>
              <div className="space-y-2 text-xs">
                {b.versions.map((v, i) => (
                  <div key={v.id} className="p-3 rounded-lg bg-[#F6F8FB] border border-[#E4E9F0] flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs uppercase bg-[#FFFFFF] border border-[#CBD5E1] px-1.5 py-0.5 rounded text-[#0B1220]">
                          {v.version_code.toUpperCase()}
                        </span>
                        <strong className="text-[#0B1220]">{v.version_name}</strong>
                        <span className="text-[10px] text-[#8494A8]">({v.published_at})</span>
                      </div>
                      <p className="text-[#5B6779] text-[11px] mt-1">{v.diff_summary}</p>
                    </div>
                    <a href={v.text_url} target="_blank" rel="noopener noreferrer" className="text-[#0E63C4] hover:underline text-[11px] font-semibold">
                      GovInfo XML →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
