import { Bill, Vote, FiscalDeadline, MoneyRecord, ContextPoll } from './types';

export const SEED_DEADLINES: FiscalDeadline[] = [
  {
    id: "dl-cr-expiry-2026-12-11",
    kind: "cr_expiry",
    title: "Continuing Resolution (CR) Funding Expiration",
    description: "Federal government short-term funding authority expires at 23:59:59 ET. Unfinished FY2026 appropriations require extension or omnibus package.",
    due_at: "2026-12-11T23:59:59-05:00",
    authority: "Public Law 119-CR-ShortTerm / NACo Docket",
    status: "upcoming",
    source_url: "https://www.crfb.org/blogs/upcoming-congressional-fiscal-policy-deadlines",
  },
  {
    id: "dl-medicaid-provider-tax-2026-09-30",
    kind: "tax_provision",
    title: "Medicaid Provider-Tax Statutory Limits Take Effect",
    description: "Statutory restriction capping state Medicaid provider assessment tax thresholds takes full effect on 30 Sep 2026.",
    due_at: "2026-09-30T23:59:59-04:00",
    authority: "Social Security Act § 1903(w) Statutory Sunset",
    status: "upcoming",
    source_url: "https://www.crfb.org/blogs/upcoming-congressional-fiscal-policy-deadlines",
  }
];

export const SEED_VOTE: Vote = {
  id: "vote-hr-spending-2026-01",
  chamber: "house",
  congress: 119,
  session: 2,
  roll_call_number: 14,
  vote_date: "2026-01-08T17:45:00-05:00",
  question: "On Passage: ~$180B Federal Appropriations & Community Funding Package",
  result: "passed",
  tally_yea: 218,
  tally_nay: 210,
  tally_present: 1,
  tally_not_voting: 6,
  clerk_url: "https://clerk.house.gov/evs/2026/roll014.xml",
  bill_ref: "H.R. 4821",
  positions: [
    { bioguide_id: "J000299", member_name: "Johnson, Mike", party: "REP", state: "LA", position: "Yea" },
    { bioguide_id: "J000294", member_name: "Jeffries, Hakeem", party: "DEM", state: "NY", position: "Nay" },
    { bioguide_id: "S001196", member_name: "Stefanik, Elise", party: "REP", state: "NY", position: "Yea" },
    { bioguide_id: "C001061", member_name: "Cleaver, Emanuel", party: "DEM", state: "MO", position: "Yea" }, // Bipartisan defection
  ],
  defections: [
    { bioguide_id: "C001061", member_name: "Cleaver, Emanuel", party: "DEM", position: "Yea" },
  ]
};

export const SEED_BILLS: Bill[] = [
  {
    id: "bill-hr-4821",
    congress: 119,
    bill_type: "hr",
    number: 4821,
    title: "Federal Appropriations and Consolidated Grant Authorities Act of 2026",
    short_title: "FY2026 Consolidated Funding Act",
    policy_area: "Economics and Public Finance",
    sponsor: {
      bioguide_id: "G000377",
      full_name: "Granger, Kay",
      party: "REP",
      state: "TX",
      district: "12",
      chamber: "house",
      in_office: true,
      party_unity_pct: 94.2,
      bipartisan_bill_pct: 38.5,
      official_url: "https://clerk.house.gov",
    },
    cosponsor_count: 42,
    stage: "passed_chamber",
    latest_action_text: "Passed House by Recorded Vote: 218 - 210 (Roll no. 14). Received in Senate.",
    latest_action_at: "2026-01-08T18:00:00-05:00",
    congress_gov_url: "https://www.congress.gov/bill/119th-congress/house-bill/4821",
    versions: [
      {
        id: "v-ih",
        version_code: "ih",
        version_name: "Introduced in House",
        published_at: "2025-11-12",
        text_hash: "sha256-a1b2c3d4",
        diff_summary: "Initial baseline legislative draft introduced.",
        text_url: "https://api.govinfo.gov/bills/119/hr/4821/ih",
      },
      {
        id: "v-rh",
        version_code: "rh",
        version_name: "Reported in House",
        published_at: "2025-12-18",
        text_hash: "sha256-e5f6g7h8",
        diff_summary: "Committee on Appropriations reported substitute amendment modifying Title III discretionary caps.",
        text_url: "https://api.govinfo.gov/bills/119/hr/4821/rh",
      },
      {
        id: "v-eh",
        version_code: "eh",
        version_name: "Engrossed in House",
        published_at: "2026-01-08",
        text_hash: "sha256-i9j0k1l2",
        diff_summary: "Floor amendment adopted providing emergency disaster aid funding prior to final passage.",
        text_url: "https://api.govinfo.gov/bills/119/hr/4821/eh",
      }
    ]
  }
];

export const SEED_MONEY: MoneyRecord[] = [
  {
    id: "rec-fec-2026-01",
    regime: "campaign_committee",
    filer_id: "C00694455",
    filer_name: "National Congressional Campaign Committee",
    cycle: "2026",
    period_label: "Q2 2026",
    amount: 38500000,
    reported_at: "2026-07-15",
    filing_url: "https://api.open.fec.gov",
    method_note: "Direct candidate and authorized committee contribution receipts under statutory individual limits.",
  },
  {
    id: "rec-fec-2026-02",
    regime: "independent_expenditure",
    filer_id: "C00482200",
    filer_name: "Congressional Leadership Independent PAC",
    cycle: "2026",
    period_label: "Aug 2026",
    amount: 14200000,
    reported_at: "2026-08-20",
    filing_url: "https://api.open.fec.gov",
    method_note: "Independent expenditures expressly advocating for or against candidates; uncoordinated by law.",
  },
  {
    id: "rec-lda-2026-01",
    regime: "lobbying_disclosure",
    filer_id: "LDA-40012",
    filer_name: "American Semiconductor & Electronics Coalition",
    cycle: "2026",
    period_label: "Q2 2026",
    amount: 2450000,
    reported_at: "2026-07-20",
    filing_url: "https://lda.senate.gov",
    method_note: "Lobbying income and expenses reported under the Lobbying Disclosure Act of 1995.",
  }
];

// Context collection: Separated strictly from legislative roll calls
export const SEED_CONTEXT_POLL: ContextPoll = {
  id: "poll-umass-2026-09",
  question: "Do you approve or disapprove of the way Congress is handling its job?",
  sample: "1,000 national adults (MoE ±3.5%)",
  pollster: "UMass Amherst / YouGov",
  published_at: "2026-09-03",
  results: {
    "Approve of Congress": 22,
    "Disapprove of Congress": 74,
    "Approve of Own Representative": 28,
  },
  source_url: "https://www.umass.edu/poll/about/reports/2026-09-national-public-opinion-poll-0",
};
