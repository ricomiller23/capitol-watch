import { NextResponse } from 'next/server';
import { SEED_BILLS } from '@/lib/fallback-data';

export const revalidate = 60;

export async function GET() {
  return NextResponse.json({
    items: SEED_BILLS,
    total: SEED_BILLS.length,
    asOf: new Date().toISOString(),
  });
}
