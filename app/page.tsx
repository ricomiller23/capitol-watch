import { FederalFiscalMap } from "@/components/FederalFiscalMap";
import React from 'react';
import Link from 'next/link';
import { SEED_BILLS, SEED_DEADLINES, SEED_VOTE, SEED_CONTEXT_POLL } from '@/lib/fallback-data';
import { Landmark, Clock, CheckSquare, FileText, ExternalLink, AlertTriangle } from 'lucide-react';

export const revalidate = 60;

export default function TodayOnTheHillPage() {
  return (
    <div className="space-y-6 font-mono">
      {/* Header */}
      <div className="bg-[#F6F8FB] border border-[#E4E9F0] p-5 rounded-xl shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold bg-[#0E63C4] text-white px-2 py-0.5 rounded">
                119th Congress · 2nd Session
              </span>
              <span className="text-xs text-[#5B6779]">
                CR Funding Deadline: 11 Dec 2026 · Medicaid Tax Caps: 30 Sep 2026 · 435 House & 33 Senate Seats Up Nov 2026
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#0B1220] tracking-tight font-display">
              Today on Capitol Hill: Legislative & Procedural Actions
            </h1>
            <p className="text-xs text-[#24303F] mt-1 max-w-3xl leading-relaxed">
              Tracking bills introduced, floor roll calls, procedural cloture motions, and campaign finance disclosures.
              Every vote links directly to the official House Clerk or Senate LIS roll-call record.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/deadlines"
              className="bg-[#B54708] hover:bg-[#8A3806] text-white text-xs font-bold px-3 py-2 rounded-lg transition flex items-center gap-1.5"
            >
              <Clock className="w-3.5 h-3.5" /> Fiscal Cliff Countdowns →
            </Link>
          </div>
        </div>
      </div>

      <FederalFiscalMap />

      {/* Grid: Actions & Latest Vote (2 cols) + Context (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Active Floor Action & Bills */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#0B1220] uppercase tracking-wider flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#0E63C4]" /> Latest Recorded Floor Roll Call
            </h2>
            <Link href="/votes" className="text-xs text-[#0E63C4] hover:underline">
              All Roll Calls →
            </Link>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E4E9F0] p-4 rounded-xl shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E9F0] pb-2 text-xs">
              <span className="font-bold text-[#0B1220] bg-[#F6F8FB] px-2 py-0.5 rounded border border-[#E4E9F0]">
                House Roll Call #{SEED_VOTE.roll_call_number} · {SEED_VOTE.bill_ref}
              </span>
              <span className="font-bold text-[#067647] bg-[#F0FDF4] border border-[#BBF0CC] px-2 py-0.5 rounded uppercase">
                {SEED_VOTE.result} ({SEED_VOTE.tally_yea} - {SEED_VOTE.tally_nay})
              </span>
            </div>
            <strong className="text-sm text-[#0B1220] block">{SEED_VOTE.question}</strong>
            
            {/* Tally Breakdown */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 bg-[#EBF3FD] rounded border border-[#CBD5E1]">
                <span className="text-[#0A3F73] text-[10px] block">YEA</span>
                <strong className="text-base text-[#0E63C4]">{SEED_VOTE.tally_yea}</strong>
              </div>
              <div className="p-2 bg-[#FEF2F2] rounded border border-[#FBD5D5]">
                <span className="text-[#B42318] text-[10px] block">NAY</span>
                <strong className="text-base text-[#B42318]">{SEED_VOTE.tally_nay}</strong>
              </div>
              <div className="p-2 bg-[#FFFBEB] rounded border border-[#FCE8A5]">
                <span className="text-[#8A6100] text-[10px] block">PRESENT</span>
                <strong className="text-base text-[#8A6100]">{SEED_VOTE.tally_present}</strong>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-[#D8DEE7]">
                <span className="text-[#5B6473] text-[10px] block">NOT VOTING</span>
                <strong className="text-base text-[#5B6473]">{SEED_VOTE.tally_not_voting}</strong>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E4E9F0] flex justify-between items-center text-xs">
              <span className="text-[#5B6779]">Defections across aisle: {SEED_VOTE.defections.length} member</span>
              <a href={SEED_VOTE.clerk_url} target="_blank" rel="noopener noreferrer" className="text-[#0E63C4] hover:underline flex items-center gap-1 font-semibold">
                Official Clerk XML <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Active Major Bills */}
          <div className="space-y-3 pt-2">
            <h2 className="text-sm font-bold text-[#0B1220] uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0E63C4]" /> Key Enrolled & Moving Legislation
            </h2>
            {SEED_BILLS.map((b) => (
              <div key={b.id} className="bg-[#FFFFFF] border border-[#E4E9F0] p-4 rounded-xl shadow-xs text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs bg-[#EBF3FD] text-[#0A3F73] px-2 py-0.5 rounded border border-[#CBD5E1]">
                    {b.bill_type.toUpperCase()} {b.number}
                  </span>
                  <span className="text-[10px] bg-[#F6F8FB] border border-[#E4E9F0] px-2 py-0.5 rounded font-bold uppercase text-[#0B1220]">
                    Stage: {b.stage.replace(/_/g, ' ')}
                  </span>
                </div>
                <strong className="text-sm text-[#0B1220] block">{b.title}</strong>
                <p className="text-[#5B6779] text-[11px]">{b.latest_action_text}</p>
                <div className="pt-2 border-t border-[#E4E9F0] flex justify-between items-center text-[11px]">
                  <span>Sponsor: {b.sponsor.full_name} ({b.sponsor.party}-{b.sponsor.state}) · {b.cosponsor_count} Cosponsors</span>
                  <Link href={`/bills`} className="text-[#0E63C4] hover:underline font-semibold">
                    Compare Text Diffs ({b.versions.length} versions) →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Rail: Deadlines + Context Collection (Strictly Separated) */}
        <div className="space-y-4">
          {/* Fiscal Deadlines Preview */}
          <div className="bg-[#FFF7ED] border border-[#FCD9B6] p-4 rounded-xl text-xs space-y-3">
            <div className="flex items-center gap-2 font-bold text-[#B54708]">
              <Clock className="w-4 h-4" /> Next Statutory Fiscal Cliff
            </div>
            <div>
              <strong className="text-sm text-[#0B1220] block">Continuing Resolution Expiration</strong>
              <span className="text-[#B54708] font-bold block mt-0.5">11 December 2026 (23:59:59 ET)</span>
              <p className="text-[#5B6779] text-[11px] mt-1 leading-relaxed">
                Short-term funding authority enacted to keep federal operations solvent through Q4. Unfinished regular appropriations require resolution.
              </p>
            </div>
            <div className="pt-2 border-t border-[#FCD9B6]">
              <Link href="/deadlines" className="text-[#B54708] font-bold hover:underline flex items-center gap-1 text-[11px]">
                Full Deadlines Board →
              </Link>
            </div>
          </div>

          {/* Context Collection: Public Approval Polls (Separated from Roll Calls) */}
          <div className="bg-[#FFFFFF] border border-[#E4E9F0] p-4 rounded-xl shadow-xs text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E4E9F0]">
              <span className="font-bold text-[#0B1220] uppercase text-[11px]">Public Opinion Context</span>
              <span className="text-[10px] bg-[#F6F8FB] text-[#5B6779] px-1.5 py-0.2 rounded border border-[#E4E9F0]">
                Context Only
              </span>
            </div>
            <strong className="text-xs text-[#0B1220] block">{SEED_CONTEXT_POLL.question}</strong>
            <div className="space-y-1.5">
              {Object.entries(SEED_CONTEXT_POLL.results).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center text-[11px]">
                  <span className="text-[#5B6779]">{key}:</span>
                  <span className="font-bold text-[#0B1220]">{val}%</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#E4E9F0] text-[10px] text-[#8494A8] flex justify-between">
              <span>{SEED_CONTEXT_POLL.pollster}</span>
              <span>{SEED_CONTEXT_POLL.published_at}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
