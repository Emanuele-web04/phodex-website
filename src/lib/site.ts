// FILE: site.ts
// Purpose: Centralize shared site metadata values reused across route segments.
// Layer: App metadata utility
// Exports: SITE_URL, REMODEX_OG_IMAGE
// Depends on: Next.js metadata consumers in src/app

export const SITE_URL = 'https://www.remodex.site'

export const REMODEX_OG_IMAGE = {
  url: `${SITE_URL}/remodex-og3.png`,
  width: 1920,
  height: 1080,
  alt: 'Remodex — Remote Control for Codex',
}
