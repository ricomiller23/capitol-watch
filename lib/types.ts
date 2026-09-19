export type Chamber = 'house' | 'senate' | 'joint' | 'executive';
export type Party = 'DEM' | 'REP' | 'IND';
export type VotePositionType = 'Yea' | 'Nay' | 'Present' | 'Not Voting';

export interface Member {
  bioguide_id: string;
  full_name: string;
  party: Party;
  state: string;
  district?: string;
  chamber: Chamber;
  in_office: boolean;
  party_unity_pct: number;
  bipartisan_bill_pct: number;
  official_url: string;
}

export interface BillVersion {
  id: string;
  version_code: 'ih' | 'rh' | 'eh' | 'enr';
  version_name: string;
  published_at: string;
  text_hash: string;
  diff_summary: string;
  text_url: string;
}

export interface Bill {
  id: string;
  congress: number;
  bill_type: 'hr' | 's' | 'hjres' | 'sjres';
  number: number;
  title: string;
  short_title: string;
  policy_area: string;
  sponsor: Member;
  cosponsor_count: number;
  stage: 'introduced' | 'committee' | 'reported' | 'passed_chamber' | 'enacted' | 'vetoed';
  latest_action_text: string;
  latest_action_at: string;
  congress_gov_url: string;
  versions: BillVersion[];
}

export interface Vote {
  id: string;
  chamber: Chamber;
  congress: number;
  session: number;
  roll_call_number: number;
  vote_date: string; // ISO
  question: string;
  result: 'passed' | 'failed' | 'agreed_to';
  tally_yea: number;
  tally_nay: number;
  tally_present: number;
  tally_not_voting: number;
  clerk_url: string;
  bill_ref?: string;
  positions: Array<{ bioguide_id: string; member_name: string; party: Party; state: string; position: VotePositionType }>;
  defections: Array<{ bioguide_id: string; member_name: string; party: Party; position: VotePositionType }>;
}

export interface FiscalDeadline {
  id: string;
  kind: 'cr_expiry' | 'debt_limit' | 'tax_provision' | 'statutory_expiry';
  title: string;
  description: string;
  due_at: string; // ISO (Eastern Time)
  authority: string;
  status: 'upcoming' | 'passed' | 'extended' | 'resolved';
  source_url: string;
}

export interface MoneyRecord {
  id: string;
  regime: 'campaign_committee' | 'independent_expenditure' | 'lobbying_disclosure' | 'disbursement';
  filer_id: string;
  filer_name: string;
  cycle: string;
  period_label: string;
  amount: number;
  reported_at: string;
  filing_url: string;
  method_note: string;
}

export interface ContextPoll {
  id: string;
  question: string;
  sample: string;
  pollster: string;
  published_at: string;
  results: Record<string, number>;
  source_url: string;
}
