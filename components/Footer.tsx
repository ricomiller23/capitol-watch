import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F6F8FB] border-t border-[#E4E9F0] py-8 text-xs text-[#5B6779] mt-16 font-mono">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-[#0B1220] uppercase text-[11px] mb-2">Automated Neutrality Standards</h4>
          <p className="leading-relaxed text-[#24303F]">
            Every metric is computed with identical algorithmic symmetry across Democratic and Republican members. No evaluative adjectives. No candidate ratings or endorsements.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#0B1220] uppercase text-[11px] mb-2">Four Separated Money Regimes</h4>
          <p className="leading-relaxed text-[#24303F]">
            Campaign contributions, independent expenditures, lobbying income, and disbursements are governed by distinct legal statutes. They are never added together into a single total.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#0B1220] uppercase text-[11px] mb-2">Official Record Citation</h4>
          <p className="leading-relaxed">
            Every roll call links directly to the House Clerk XML or Senate LIS official gazette. News media reporting lives in a separate collection.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-[#E4E9F0] text-[11px] text-[#8494A8] flex justify-between">
        <span>CAPITOL.WATCH · The Monitor Series · Part 3</span>
        <span>Light-Theme Strict (#FFFFFF / #F6F8FB)</span>
      </div>
    </footer>
  );
}
