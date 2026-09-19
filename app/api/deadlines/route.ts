import { NextResponse } from 'next/server';
import { SEED_DEADLINES } from '@/lib/fallback-data';

export const revalidate = 60;

export async function GET() {
  return NextResponse.json({
    items: SEED_DEADLINES,
    total: SEED_DEADLINES.length,
    asOf: new Date().toISOString(),
  });
}
