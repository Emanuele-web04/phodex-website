import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'

import { LegalPage } from '@/components/remodex/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Remodex handles your data. Local-first architecture, end-to-end encryption, no accounts, no analytics, no tracking.',
  openGraph: {
    title: 'Privacy Policy — Remodex',
    description: 'How Remodex handles your data. Local-first architecture, end-to-end encryption, no accounts, no analytics, no tracking.',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy — Remodex',
    description: 'How Remodex handles your data. Local-first architecture, end-to-end encryption, no accounts, no analytics, no tracking.',
  },
}

export default function PrivacyPolicyPage() {
  const content = readFileSync(
    join(process.cwd(), 'src/content/remodex/privacy-policy.md'),
    'utf-8'
  )

  return <LegalPage content={content} />
}
