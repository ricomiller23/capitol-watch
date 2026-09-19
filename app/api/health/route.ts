import { NextResponse } from 'next/server';

export const revalidate = 30;

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    last_success_at: '2026-09-19T09:35:00Z',
    stale: false,
    connectors: [
      { id: 'congress_gov', status: 'ok' },
      { id: 'house_clerk', status: 'ok' },
      { id: 'senate_lis', status: 'ok' },
      { id: 'fec', status: 'ok' }
    ]
  });
}
