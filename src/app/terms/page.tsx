// FILE: page.tsx
// Purpose: Serves the Remodex terms of use markdown for the legal route.
// Layer: Next.js App Router page
// Depends on: remodex/terms.md, LegalPage

import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'

import { LegalPage } from '@/components/remodex/LegalPage'
import { REMODEX_OG_IMAGE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Remodex iOS app. Subscriptions, acceptable use, open-source licensing, and legal information.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Use — Remodex',
    description: 'Terms of Use for the Remodex iOS app. Subscriptions, acceptable use, open-source licensing, and legal information.',
    images: [REMODEX_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use — Remodex',
    description: 'Terms of Use for the Remodex iOS app. Subscriptions, acceptable use, open-source licensing, and legal information.',
    images: [REMODEX_OG_IMAGE.url],
  },
}

export default function TermsPage() {
  const content = readFileSync(
    join(process.cwd(), 'src/content/remodex/terms.md'),
    'utf-8'
  )

  return <LegalPage content={content} />
}
