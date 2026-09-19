import { NextResponse } from 'next/server';
import { SEED_VOTE } from '@/lib/fallback-data';

export const revalidate = 60;

export async function GET() {
  return NextResponse.json({
    items: [SEED_VOTE],
    total: 1,
    asOf: new Date().toISOString(),
  });
}
