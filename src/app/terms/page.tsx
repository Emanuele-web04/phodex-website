import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'

import { LegalPage } from '@/components/remodex/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Remodex iOS app. Subscriptions, acceptable use, open-source licensing, and legal information.',
  openGraph: {
    title: 'Terms of Use — Remodex',
    description: 'Terms of Use for the Remodex iOS app. Subscriptions, acceptable use, open-source licensing, and legal information.',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Use — Remodex',
    description: 'Terms of Use for the Remodex iOS app. Subscriptions, acceptable use, open-source licensing, and legal information.',
  },
}

export default function TermsPage() {
  const content = readFileSync(
    join(process.cwd(), 'src/content/remodex/terms.md'),
    'utf-8'
  )

  return <LegalPage content={content} />
}
