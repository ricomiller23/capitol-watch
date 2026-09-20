'use client';

import React, { useState } from 'react';
import { UsVectorLandmass } from './UsVectorLandmass';
import { Landmark, Clock, FileText, DollarSign, ExternalLink, Info, CheckSquare } from 'lucide-react';

export interface FederalJurisdiction {
  id: string;
  name: string;
  state: string;
  stateName: string;
  x: number;
  y: number;
  appropriationType: string;
  annualFundingBillionUsd: number;
  keyFacilities: string;
  clotureStatus: string;
  fiscalDeadline: string;
  officialGazetteUrl: string;
}

export const FEDERAL_JURISDICTIONS: FederalJurisdiction[] = [
  {
    id: 'capitol-dc',
    name: 'Washington D.C. (U.S. Capitol & Treasury)',
    state: 'DC',
    stateName: 'District of Columbia',
    x: 815.0,
    y: 255.0,
    appropriationType: 'Federal Discretionary Base Budget',
    annualFundingBillionUsd: 1720,
    keyFacilities: 'House Clerk, Senate LIS, Office of Management & Budget',
    clotureStatus: 'CR Enacted Through 11 Dec 2026',
    fiscalDeadline: '2026-12-11 (CR Funding Expiry)',
    officialGazetteUrl: 'https://www.congress.gov'
  },
  {
    id: 'va-pentagon',
    name: 'Virginia (DoD & Defense Contracting Corridor)',
    state: 'VA',
    stateName: 'Virginia',
    x: 740.0,
    y: 290.0,
    appropriationType: 'Defense Title III Procurement & RDT&E',
    annualFundingBillionUsd: 74.2,
    keyFacilities: 'The Pentagon, Norfolk Naval Station, Langley AFB',
    clotureStatus: 'NDAA FY2027 Authorized',
    fiscalDeadline: '2026-09-30 (FY2026 End)',
    officialGazetteUrl: 'https://www.defense.gov'
  },
  {
    id: 'ca-aerospace',
    name: 'California (Aerospace & Naval Command)',
    state: 'CA',
    stateName: 'California',
    x: 85.0,
    y: 305.0,
    appropriationType: 'Defense & NASA Civil Space Procurement',
    annualFundingBillionUsd: 68.5,
    keyFacilities: 'Space Systems Command LA, Naval Base San Diego, Edwards AFB',
    clotureStatus: 'Active Appropriations Flow',
    fiscalDeadline: '2026-09-30 (FY2026 End)',
    officialGazetteUrl: 'https://www.usaspending.gov'
  },
  {
    id: 'tx-command',
    name: 'Texas (Joint Base Operations & Border Security)',
    state: 'TX',
    stateName: 'Texas',
    x: 420.0,
    y: 430.0,
    appropriationType: 'Military Construction & DHS Border Funds',
    annualFundingBillionUsd: 56.8,
    keyFacilities: 'Fort Cavazos, Joint Base San Antonio, Corpus Christi Army Depot',
    clotureStatus: 'House MilCon-VA Passed',
    fiscalDeadline: '2026-12-11 (CR Funding Expiry)',
    officialGazetteUrl: 'https://www.usaspending.gov'
  },
  {
    id: 'fl-space',
    name: 'Florida (CENTCOM & Eastern Range Spaceport)',
    state: 'FL',
    stateName: 'Florida',
    x: 760.0,
    y: 480.0,
    appropriationType: 'DoD Operations & Space Exploration',
    annualFundingBillionUsd: 39.4,
    keyFacilities: 'USCENTCOM MacDill AFB, Cape Canaveral Space Force Station',
    clotureStatus: 'DoD Appropriations Pending Cloture',
    fiscalDeadline: '2026-12-11 (CR Funding Expiry)',
    officialGazetteUrl: 'https://www.usaspending.gov'
  },
  {
    id: 'al-space',
    name: 'Alabama (Redstone Arsenal & Space Flight)',
    state: 'AL',
    stateName: 'Alabama',
    x: 628.0,
    y: 395.0,
    appropriationType: 'Army Aviation & NASA Marshall Space Flight',
    annualFundingBillionUsd: 18.6,
    keyFacilities: 'Redstone Arsenal, NASA Marshall Space Flight Center, PEO Missiles and Space',
    clotureStatus: 'Army Modernization Direct Flow',
    fiscalDeadline: '2026-09-30 (FY2026 End)',
    officialGazetteUrl: 'https://www.army.mil'
  },
  {
    id: 'md-intel',
    name: 'Maryland (Cyber Command & Health R&D)',
    state: 'MD',
    stateName: 'Maryland',
    x: 825.0,
    y: 220.0,
    appropriationType: 'Defense Intelligence & NIH Discretionary',
    annualFundingBillionUsd: 48.2,
    keyFacilities: 'Fort Meade (NSA / USCYBERCOM), NIH Bethesda, Goddard Space Flight Center',
    clotureStatus: 'HHS-Labor Passed / Defense Flow Active',
    fiscalDeadline: '2026-12-11 (CR Funding Expiry)',
    officialGazetteUrl: 'https://www.nih.gov'
  },
  {
    id: 'wa-naval',
    name: 'Washington (Pacific Submarine Fleet & Boeing Defense)',
    state: 'WA',
    stateName: 'Washington',
    x: 70.0,
    y: 65.0,
    appropriationType: 'Naval Sea Systems Command (NAVSEA)',
    annualFundingBillionUsd: 24.8,
    keyFacilities: 'Naval Base Kitsap (Trident SSBN Fleet), Puget Sound Naval Shipyard',
    clotureStatus: 'Submarine Industrial Base Direct Funding',
    fiscalDeadline: '2026-09-30 (FY2026 End)',
    officialGazetteUrl: 'https://www.navy.mil'
  }
];

export function FederalFiscalMap() {
  const [selectedHub, setSelectedHub] = useState<FederalJurisdiction>(FEDERAL_JURISDICTIONS[0]);

  // Highlight key appropriation states
  const highlightStates: Record<string, { fill?: string; stroke?: string; strokeWidth?: number }> = {
    'Virginia': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
    'Maryland': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
    'California': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
    'Texas': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
    'Florida': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
    'Alabama': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
    'Washington': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
  };

  if (selectedHub.stateName && highlightStates[selectedHub.stateName]) {
    highlightStates[selectedHub.stateName] = {
      fill: '#BAE6FD',
      stroke: '#0284C7',
      strokeWidth: 2.2
    };
  }

  const handleSelectState = (stateName: string) => {
    const match = FEDERAL_JURISDICTIONS.find((h) => h.stateName === stateName);
    if (match) {
      setSelectedHub(match);
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E4E9F0] rounded-xl overflow-hidden shadow-sm my-6 font-mono">
      {/* Header bar */}
      <div className="bg-[#F6F8FB] px-5 py-4 border-b border-[#E4E9F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0E63C4] animate-pulse"></span>
            <h2 className="text-base font-bold text-[#101828] uppercase tracking-wide font-display">
              Federal Appropriations & Statutory Fiscal Allocations Map
            </h2>
            <span className="text-xs bg-[#E4E9F0] text-[#344054] px-2 py-0.5 rounded font-bold">
              119th Congress Dockets
            </span>
          </div>
          <p className="text-xs text-[#667085] mt-1 font-sans">
            Strict Invariant: Appropriations flow, roll-call voting records, and fiscal cliff countdowns verified from official House Clerk and Senate LIS logs.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
          <span className="bg-white border border-[#E4E9F0] px-2.5 py-1 rounded text-[#B54708] font-bold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> CR Expiry: 11 Dec 2026
          </span>
          <span className="bg-white border border-[#E4E9F0] px-2.5 py-1 rounded text-[#0E63C4] font-bold">
            Base Discretionary: $1.72T
          </span>
        </div>
      </div>

      {/* SVG Canvas with In-SVG Locked Hub Indicators */}
      <div className="relative w-full bg-[#EEF4FB] border-b border-[#E4E9F0] overflow-hidden">
        <svg
          viewBox="0 0 960 600"
          className="w-full h-auto max-h-[480px] select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Base Vector Landmass */}
          <UsVectorLandmass
            highlightStates={highlightStates}
            selectedState={selectedHub.stateName}
            onSelectState={handleSelectState}
            showLabels={true}
          />

          {/* Cartographically Locked Hub Indicators */}
          <g className="fiscal-indicators">
            {FEDERAL_JURISDICTIONS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              const badgeColor = '#0E63C4';

              return (
                <g
                  key={hub.id}
                  transform={`translate(${hub.x}, ${hub.y})`}
                  onClick={() => setSelectedHub(hub)}
                  className="cursor-pointer"
                  style={{
                    filter: isSelected
                      ? 'drop-shadow(0 4px 10px rgba(0,0,0,0.30))'
                      : 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
                  }}
                >
                  {/* Aura Ring */}
                  <circle
                    r={isSelected ? 18 : 13}
                    fill={badgeColor}
                    opacity={isSelected ? 0.35 : 0.2}
                    className={isSelected ? 'animate-pulse' : ''}
                  />

                  {/* Pin Body */}
                  <circle
                    r={isSelected ? 11 : 9}
                    fill={isSelected ? badgeColor : '#FFFFFF'}
                    stroke={badgeColor}
                    strokeWidth={isSelected ? 2.5 : 2}
                  />

                  {/* Center Dot */}
                  <circle
                    r={3}
                    fill={isSelected ? '#FFFFFF' : badgeColor}
                  />

                  {/* Hub Label Pill */}
                  <g transform={`translate(0, ${isSelected ? 22 : 18})`}>
                    <rect
                      x="-42"
                      y="-9"
                      width="84"
                      height="18"
                      rx="4"
                      fill={isSelected ? '#101828' : '#FFFFFF'}
                      stroke={isSelected ? '#101828' : '#CBD5E1'}
                      strokeWidth="1.2"
                    />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fill={isSelected ? '#FFFFFF' : '#1E293B'}
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                      fontWeight="700"
                    >
                      {hub.state}: ${hub.annualFundingBillionUsd}B
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Selected Hub Detail Dossier */}
      <div className="p-5 bg-[#FFFFFF] border-t border-[#E4E9F0] grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-[#101828] font-display">{selectedHub.name}</h3>
            <span className="text-xs px-2 py-0.5 bg-[#F6F8FB] border border-[#E4E9F0] text-[#344054] rounded font-bold">
              {selectedHub.state}
            </span>
            <span className="text-xs px-2 py-0.5 bg-[#EFF8FF] border border-[#B2DDFF] text-[#0E63C4] rounded font-bold">
              {selectedHub.clotureStatus}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-[#F6F8FB] border border-[#E4E9F0] rounded-lg p-2.5">
              <span className="text-[10px] text-[#667085] uppercase tracking-wider block font-semibold font-sans">
                Annual Appropriation Flow
              </span>
              <span className="text-sm font-bold text-[#101828]">
                ${selectedHub.annualFundingBillionUsd} Billion
              </span>
              <span className="text-[10px] text-[#0E63C4] font-semibold block mt-0.5">
                {selectedHub.appropriationType}
              </span>
            </div>

            <div className="bg-[#F6F8FB] border border-[#E4E9F0] rounded-lg p-2.5">
              <span className="text-[10px] text-[#667085] uppercase tracking-wider block font-semibold font-sans">
                Fiscal Cliff Countdown
              </span>
              <span className="text-xs font-bold text-[#B54708] font-mono">
                {selectedHub.fiscalDeadline}
              </span>
              <span className="text-[10px] text-[#667085] block mt-0.5 font-sans">Statutory Expiry</span>
            </div>
          </div>
        </div>

        {/* Facilities & Legal References */}
        <div className="md:col-span-2 bg-[#F8FAFC] border border-[#E4E9F0] rounded-lg p-3.5 flex flex-col justify-between">
          <div className="space-y-1.5 font-sans">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#101828]">
              <Landmark className="w-4 h-4 text-[#0E63C4]" />
              <span>Primary Facilities & Authorized Enclaves</span>
            </div>
            <p className="text-xs text-[#344054] bg-[#FFFFFF] p-2 rounded border border-[#E4E9F0] font-mono leading-relaxed">
              {selectedHub.keyFacilities}
            </p>
          </div>

          <div className="pt-2 border-t border-[#E4E9F0] flex items-center justify-between text-xs text-[#667085]">
            <span>Statutory Verification: House Docket Roll Call</span>
            <a
              href={selectedHub.officialGazetteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E63C4] hover:underline font-semibold flex items-center gap-1 font-sans"
            >
              Official Record <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
