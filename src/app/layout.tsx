import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { GeistPixelTriangle } from 'geist/font/pixel'

import { REMODEX_OG_IMAGE, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const lightModeScript = `
  (() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  })();
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Remodex — Remote Control for Codex',
    template: '%s | Remodex',
  },
  description:
    'Control Codex from your iPhone. Open-source Mac bridge + iOS app with end-to-end encrypted pairing.',
  keywords: [
    'remodex',
    'codex',
    'ios',
    'iphone',
    'coding',
    'github',
    'openai',
    'remote control',
  ],
  authors: [{ name: 'Emanuele Di Pietro' }],
  creator: 'Remodex',
  icons: {
    icon: { url: '/icon.png', type: 'image/png' },
    apple: '/icon.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Remodex — Remote Control for Codex',
    description: 'Control Codex from your iPhone. Open-source bridge + iOS app.',
    url: SITE_URL,
    siteName: 'Remodex',
    images: [REMODEX_OG_IMAGE],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remodex — Remote Control for Codex',
    description: 'Control Codex from your iPhone. Open-source bridge + iOS app.',
    images: [REMODEX_OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${GeistPixelTriangle.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: lightModeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
