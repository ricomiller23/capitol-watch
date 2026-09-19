import React from 'react';
import { SEED_DEADLINES } from '@/lib/fallback-data';
import { Clock, ExternalLink, AlertTriangle } from 'lucide-react';

export const revalidate = 60;

export default function DeadlinesPage() {
  return (
    <div className="space-y-6 font-mono">
      <div className="bg-[#FFF7ED] border border-[#FCD9B6] p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-5 h-5 text-[#B54708]" />
          <h1 className="font-extrabold text-lg text-[#0B1220] tracking-tight">
            Congressional Fiscal Policy & Statutory Deadlines Board
          </h1>
        </div>
        <p className="text-xs text-[#5B6779]">
          Countdown board monitoring statutory sunset dates, CR funding expirations, and debt limit milestones in Eastern Time.
        </p>
      </div>

      <div className="space-y-4">
        {SEED_DEADLINES.map((dl) => (
          <div key={dl.id} className="bg-[#FFFFFF] border border-[#E4E9F0] rounded-xl p-5 shadow-xs text-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E9F0] pb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs bg-[#B54708] text-white px-2 py-0.5 rounded uppercase">
                  {dl.kind.replace(/_/g, ' ')}
                </span>
                <strong className="text-sm text-[#0B1220]">{dl.title}</strong>
              </div>
              <span className="text-xs font-bold text-[#B54708] bg-[#FFF7ED] px-2.5 py-0.5 rounded border border-[#FCD9B6]">
                Target: {dl.due_at.substring(0, 10)} (23:59:59 ET)
              </span>
            </div>

            <p className="text-[#24303F] text-xs leading-relaxed">{dl.description}</p>

            <div className="pt-2 border-t border-[#E4E9F0] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5B6779]">
              <span><strong>Authority:</strong> {dl.authority}</span>
              <a href={dl.source_url} target="_blank" rel="noopener noreferrer" className="text-[#0E63C4] hover:underline flex items-center gap-1 font-semibold">
                CRFB Docket <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
