import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

/* FILE: layout.tsx
   Purpose: Define the app shell, metadata, and the earliest possible theme bootstrap for the site.
   Layer: App root layout
   Depends on: ThemeProvider and the Tailwind dark class consumed across the app */

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://phodex.app"
const themeBootstrapScript = `
  (() => {
    const root = document.documentElement;
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  })();
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Remodex — Remote Control for Codex",
    template: "%s | Remodex",
  },
  description: "Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption. Local-first, self-host friendly.",
  keywords: ["remodex", "codex", "ios", "iphone", "coding", "github", "terminal", "openai", "codex cli", "mobile development", "ai coding", "remote control"],
  authors: [{ name: "Emanuele Di Pietro" }],
  creator: "Remodex",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Remodex — Remote Control for Codex",
    description: "Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption.",
    url: SITE_URL,
    siteName: "Remodex",
    images: [{ url: "https://phodex.app/remodex-og1.png", width: 1200, height: 630, alt: "Remodex — Remote Control for Codex" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remodex — Remote Control for Codex",
    description: "Control Codex from your iPhone. Open-source bridge + iOS app with end-to-end encryption.",
    images: [{ url: "https://phodex.app/remodex-og1.png", alt: "Remodex — Remote Control for Codex" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
