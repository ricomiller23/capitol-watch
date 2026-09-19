import { NextRequest, NextResponse } from 'next/server';
import { SEED_MONEY } from '@/lib/fallback-data';

export const revalidate = 120;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const regime = searchParams.get('regime');

  let items = [...SEED_MONEY];
  if (regime) {
    items = items.filter((m) => m.regime === regime);
  }

  return NextResponse.json({
    items,
    total: items.length,
    regimesSeparated: true,
    asOf: new Date().toISOString(),
  });
}
