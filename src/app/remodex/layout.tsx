import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remodex — Remote Control for Codex',
  description:
    'Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption. Local-first, self-host friendly.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Remodex — Remote Control for Codex',
    description: 'Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption.',
    images: [{ url: '/remodex-og1.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remodex — Remote Control for Codex',
    description: 'Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption.',
    images: ['/remodex-og1.png'],
  },
}

export default function RemodexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
