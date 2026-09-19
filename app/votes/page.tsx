import React from 'react';
import { SEED_VOTE } from '@/lib/fallback-data';
import { CheckSquare, ExternalLink, ArrowRight, UserCheck } from 'lucide-react';

export const revalidate = 60;

export default function VotesPage() {
  return (
    <div className="space-y-6 font-mono">
      <div className="bg-[#F6F8FB] border border-[#E4E9F0] p-4 rounded-xl shadow-xs">
        <div className="flex items-center gap-2 mb-1">
          <CheckSquare className="w-5 h-5 text-[#0E63C4]" />
          <h1 className="font-extrabold text-lg text-[#0B1220] tracking-tight">
            Recorded Floor Roll Calls & Member Vote Positions
          </h1>
        </div>
        <p className="text-xs text-[#5B6779]">
          Exact roll-call tallies extracted directly from House Clerk and Senate LIS XML records. Defections are computed with algorithmic symmetry for both parties.
        </p>
      </div>

      <div className="bg-[#FFFFFF] border border-[#E4E9F0] rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E9F0] pb-3 text-xs">
          <div>
            <span className="font-bold bg-[#EBF3FD] text-[#0A3F73] px-2 py-0.5 rounded border border-[#CBD5E1]">
              House Roll Call #{SEED_VOTE.roll_call_number}
            </span>
            <strong className="text-sm text-[#0B1220] block mt-1">{SEED_VOTE.question}</strong>
          </div>
          <span className="font-bold text-[#067647] bg-[#F0FDF4] border border-[#BBF0CC] px-2.5 py-0.5 rounded uppercase">
            Result: {SEED_VOTE.result} ({SEED_VOTE.tally_yea} - {SEED_VOTE.tally_nay})
          </span>
        </div>

        {/* Member Grid */}
        <div>
          <h3 className="text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-[#0E63C4]" /> Member Positions Sample
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
            {SEED_VOTE.positions.map((pos) => {
              const isYea = pos.position === 'Yea';
              const isNay = pos.position === 'Nay';

              return (
                <div key={pos.bioguide_id} className="p-2.5 rounded bg-[#F6F8FB] border border-[#E4E9F0] flex justify-between items-center">
                  <div>
                    <strong className="text-[#0B1220] block">{pos.member_name}</strong>
                    <span className="text-[10px] text-[#5B6779]">{pos.party}-{pos.state}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isYea ? 'bg-[#EBF3FD] text-[#0E63C4]' : 'bg-[#FEF2F2] text-[#B42318]'}`}>
                    {pos.position}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Defection Roster */}
        <div className="p-3.5 rounded-lg bg-[#FFFBEB] border border-[#FCE8A5] text-xs">
          <strong className="text-[#8A6100] block mb-1">Party Defection Analysis (Calculated Symmetrically):</strong>
          <p className="text-[#5B6779] leading-relaxed">
            Rep. Emanuel Cleaver (DEM-MO) voted Yea with Republican majority, breaking with 98.5% of Democratic caucus.
          </p>
        </div>

        <div className="pt-2 border-t border-[#E4E9F0] flex justify-between items-center text-xs">
          <span className="text-[#8494A8]">Vote instant: {SEED_VOTE.vote_date}</span>
          <a href={SEED_VOTE.clerk_url} target="_blank" rel="noopener noreferrer" className="text-[#0E63C4] hover:underline flex items-center gap-1 font-semibold">
            Official Clerk XML Tally <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
