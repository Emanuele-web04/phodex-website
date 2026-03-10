// FILE: route.ts
// Purpose: Expose the Remodex star count to the frontend without calling GitHub from the browser.
// Layer: API route
// Exports: GET
// Depends on: NextResponse, getRemodexStars

import { NextResponse } from 'next/server'

import { REMODEX_REPO_URL, getRemodexStars } from '@/lib/github'

// ─── ENTRY POINT ─────────────────────────────────────────────

// Returns the latest cached star count for the public GitHub CTA.
export async function GET() {
  const stars = await getRemodexStars()

  return NextResponse.json({
    repoUrl: REMODEX_REPO_URL,
    stars,
  })
}
