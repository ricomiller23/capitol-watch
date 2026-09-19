import React from 'react';
import { SEED_MONEY } from '@/lib/fallback-data';
import { DollarSign, ExternalLink, AlertCircle, Shield } from 'lucide-react';

export const revalidate = 120;

export default function MoneyPage() {
  const regimes = [
    { key: 'campaign_committee', title: 'Campaign Committees (FECA Direct)', desc: 'Regulated direct candidate fundraising under individual statutory contribution limits.' },
    { key: 'independent_expenditure', title: 'Independent Expenditures (Super PACs)', desc: 'Unlimited independent corporate & individual spending. Strictly uncoordinated by law.' },
    { key: 'lobbying_disclosure', title: 'Lobbying Disclosures (LDA 1995)', desc: 'Quarterly lobbying income & expenses disclosed by registered firms and corporations.' },
    { key: 'disbursement', title: 'Congressional Disbursements', desc: 'Official legislative branch operational disbursements and staff payroll.' }
  ];

  return (
    <div className="space-y-6 font-mono">
      <div className="bg-[#F6F8FB] border border-[#E4E9F0] p-4 rounded-xl shadow-xs">
        <div className="flex items-center gap-2 mb-1">
          <DollarSign className="w-5 h-5 text-[#0E63C4]" />
          <h1 className="font-extrabold text-lg text-[#0B1220] tracking-tight">
            Congressional Money Telemetry across Four Separated Legal Regimes
          </h1>
        </div>
        <p className="text-xs text-[#5B6779]">
          Campaign contributions, independent PAC expenditures, lobbying registrations, and disbursements operate under distinct federal statutes. Totals are never combined across regimes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {regimes.map((r) => {
          const matching = SEED_MONEY.filter((m) => m.regime === r.key);

          return (
            <div key={r.key} className="bg-[#FFFFFF] border border-[#E4E9F0] rounded-xl p-5 shadow-xs text-xs space-y-3">
              <div className="border-b border-[#E4E9F0] pb-2">
                <strong className="text-sm text-[#0B1220] block">{r.title}</strong>
                <p className="text-[#5B6779] text-[11px] mt-0.5">{r.desc}</p>
              </div>

              {matching.length === 0 ? (
                <div className="p-4 text-center text-[#8494A8] italic">No active filings in sample docket</div>
              ) : (
                <div className="space-y-2">
                  {matching.map((m) => (
                    <div key={m.id} className="p-3 rounded-lg bg-[#F6F8FB] border border-[#E4E9F0] space-y-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-[#0B1220]">{m.filer_name}</strong>
                        <span className="font-bold text-[#067647] text-sm">${(m.amount / 1e6).toFixed(1)}M</span>
                      </div>
                      <div className="text-[#5B6779] text-[11px]">Period: {m.period_label} · Reported: {m.reported_at}</div>
                      <div className="pt-1 text-[10px] text-[#8494A8] border-t border-[#E4E9F0] flex justify-between">
                        <span>{m.method_note}</span>
                        <a href={m.filing_url} target="_blank" rel="noopener noreferrer" className="text-[#0E63C4] hover:underline font-semibold">
                          FEC / LDA Filing →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
