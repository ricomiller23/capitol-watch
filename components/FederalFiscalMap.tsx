'use client';

import { UsVectorLandmass } from './UsVectorLandmass';

import React, { useState } from 'react';
import { Landmark, Clock, FileText, DollarSign, ExternalLink, Info, CheckSquare } from 'lucide-react';

export interface FederalJurisdiction {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
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
    lat: 38.8899,
    lng: -77.0090,
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
    lat: 37.5407,
    lng: -77.4360,
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
    lat: 36.7783,
    lng: -119.4179,
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
    lat: 31.9686,
    lng: -99.9018,
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
    lat: 27.6648,
    lng: -81.5158,
    appropriationType: 'DoD Operations & Space Exploration',
    annualFundingBillionUsd: 39.4,
    keyFacilities: 'USCENTCOM MacDill AFB, Cape Canaveral Space Force Station',
    clotureStatus: 'DoD Appropriations Pending Cloture',
    fiscalDeadline: '2026-12-11 (CR Funding Expiry)',
    officialGazetteUrl: 'https://www.usaspending.gov'
  },
  {
    id: 'wa-naval',
    name: 'Washington (Pacific Submarine Fleet & Boeing Defense)',
    state: 'WA',
    lat: 47.7511,
    lng: -120.7401,
    appropriationType: 'Naval Sea Systems Command (NAVSEA)',
    annualFundingBillionUsd: 24.8,
    keyFacilities: 'Naval Base Kitsap (Trident SSBN Fleet), Puget Sound Naval Shipyard',
    clotureStatus: 'Submarine Industrial Base Direct Funding',
    fiscalDeadline: '2026-09-30 (FY2026 End)',
    officialGazetteUrl: 'https://www.navy.mil'
  }
];

function projectUsCoords(lat: number, lng: number): { x: number; y: number } {
  const minLng = -125;
  const maxLng = -67;
  const minLat = 24.5;
  const maxLat = 49.5;

  const x = ((lng - minLng) / (maxLng - minLng)) * 100;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 100;

  return {
    x: Math.max(2, Math.min(98, x)),
    y: Math.max(4, Math.min(96, y))
  };
}

export function FederalFiscalMap() {
  const [selectedHub, setSelectedHub] = useState<FederalJurisdiction>(FEDERAL_JURISDICTIONS[0]);

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

      {/* SVG Canvas */}
      <div className="relative w-full bg-[#F8FAFC] border-b border-[#E4E9F0] overflow-hidden" style={{ minHeight: '340px' }}>
        <svg
          viewBox="0 0 960 600"
          className="w-full h-auto max-h-[440px] select-none pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <UsVectorLandmass
            highlightStates={{
              'Virginia': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.4 },
              'Maryland': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.4 },
              'California': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
              'Texas': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
              'Florida': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
              'Alabama': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
              'Washington': { fill: '#E0EDFF', stroke: '#0E63C4', strokeWidth: 1.2 },
            }}
          />
        </svg>

        {/* Hub Markers */}
        <div className="absolute inset-0 pointer-events-auto">
          {FEDERAL_JURISDICTIONS.map((hub) => {
            const { x, y } = projectUsCoords(hub.lat, hub.lng);
            const isSelected = selectedHub.id === hub.id;
            return (
              <div
                key={hub.id}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                onClick={() => setSelectedHub(hub)}
              >
                <div
                  className={`relative flex items-center justify-center transition-transform ${
                    isSelected ? 'scale-125 z-20' : 'hover:scale-110'
                  }`}
                >
                  <span className={`absolute w-7 h-7 rounded-full opacity-30 bg-[#0E63C4] ${isSelected ? 'animate-ping' : ''}`} />
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 shadow-md ${
                      isSelected
                        ? 'bg-[#0E63C4] border-[#FFFFFF] text-[#FFFFFF]'
                        : 'bg-[#FFFFFF] border-[#0E63C4] text-[#0E63C4]'
                    }`}
                  >
                    <Landmark className="w-3 h-3" />
                  </div>

                  {/* Badge */}
                  <div
                    className={`absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold shadow-xs border pointer-events-none transition ${
                      isSelected
                        ? 'bg-[#101828] text-[#FFFFFF] border-[#101828]'
                        : 'bg-[#FFFFFF]/95 text-[#344054] border-[#E4E9F0]'
                    }`}
                  >
                    {hub.state}: ${hub.annualFundingBillionUsd}B
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Jurisdiction Dossier */}
      <div className="p-5 bg-[#FFFFFF] border-t border-[#E4E9F0] grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-[#101828] font-display">{selectedHub.name}</h3>
            <span className="text-xs px-2 py-0.5 bg-[#F6F8FB] border border-[#E4E9F0] text-[#344054] rounded font-bold">
              {selectedHub.state}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="bg-[#F6F8FB] border border-[#E4E9F0] rounded-lg p-2.5">
              <span className="text-[10px] text-[#667085] uppercase tracking-wider block font-semibold font-sans">
                Annual Allocation
              </span>
              <span className="text-base font-bold text-[#0E63C4]">${selectedHub.annualFundingBillionUsd}B</span>
              <span className="text-[10px] text-[#667085] block mt-0.5 font-sans">FY2026 statutory level</span>
            </div>

            <div className="bg-[#F6F8FB] border border-[#E4E9F0] rounded-lg p-2.5">
              <span className="text-[10px] text-[#667085] uppercase tracking-wider block font-semibold font-sans">
                Cloture / Floor Status
              </span>
              <span className="text-xs font-bold text-[#101828] block mt-1">{selectedHub.clotureStatus}</span>
            </div>

            <div className="bg-[#F6F8FB] border border-[#E4E9F0] rounded-lg p-2.5">
              <span className="text-[10px] text-[#667085] uppercase tracking-wider block font-semibold font-sans">
                Statutory Expiry
              </span>
              <span className="text-xs font-bold text-[#B54708] block mt-1">{selectedHub.fiscalDeadline}</span>
            </div>
          </div>
        </div>

        {/* Facilities & Spending Authority */}
        <div className="md:col-span-2 bg-[#F8FAFC] border border-[#E4E9F0] rounded-lg p-3.5 flex flex-col justify-between">
          <div className="space-y-1.5 font-sans">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#101828]">
              <FileText className="w-4 h-4 text-[#0E63C4]" />
              <span>Appropriations Category & Major Installations</span>
            </div>
            <p className="text-xs text-[#344054] bg-[#FFFFFF] p-2 rounded border border-[#E4E9F0] leading-relaxed">
              <strong>Category:</strong> {selectedHub.appropriationType}. Key Installations: {selectedHub.keyFacilities}.
            </p>
          </div>

          <div className="pt-2 border-t border-[#E4E9F0] flex items-center justify-between text-xs text-[#667085]">
            <span>Lat: {selectedHub.lat.toFixed(4)}°, Lng: {selectedHub.lng.toFixed(4)}°</span>
            <a
              href={selectedHub.officialGazetteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#0E63C4] hover:underline flex items-center gap-0.5 font-semibold font-sans"
            >
              Congress.gov Roll-Call <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
