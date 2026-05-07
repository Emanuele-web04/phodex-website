import type { Metadata } from 'next'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { FaGithub, FaGooglePlay } from 'react-icons/fa6'
import { LuArrowLeft, LuDownload, LuMailCheck, LuUsers } from 'react-icons/lu'

import { TerminalGrid } from '@/components/TerminalGrid'
import { ThemeToggle } from '@/components/ThemeToggle'
import { FadeIn } from '@/components/remodex/FadeIn'
import { REMODEX_OG_IMAGE } from '@/lib/site'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const mono = JetBrains_Mono({ subsets: ['latin'] })

const ANDROID_GROUP_URL = 'https://groups.google.com/g/remodex-beta-testers'
const ANDROID_TESTER_URL = 'https://play.google.com/apps/testing/com.remodex.mobile'
const ANDROID_INSTALL_URL = 'https://play.google.com/store/apps/details?id=com.remodex.mobile'
const DESKTOP_RELAY_URL = 'https://drive.google.com/file/d/1eWx0o0ZhULDAMZ6IrLILsf-XY8hazuVJ/view?usp=sharing'
const REMODEX_GITHUB_URL = 'https://github.com/Stivy-01/remodex'

const STEPS = [
  {
    title: 'Join the beta group',
    description: 'Join the Google Group first, then read the messages inside it.',
    href: ANDROID_GROUP_URL,
    label: 'Join group',
    icon: LuUsers,
  },
  {
    title: 'Become a tester',
    description: 'Open the Play testing page and opt in with the same Google account.',
    href: ANDROID_TESTER_URL,
    label: 'Become tester',
    icon: LuMailCheck,
  },
  {
    title: 'Install Remodex',
    description: 'After opting in, install the Android app from Google Play.',
    href: ANDROID_INSTALL_URL,
    label: 'Install app',
    icon: FaGooglePlay,
  },
]

const PREVIEWS = [
  {
    src: '/android/qrscreen.png',
    alt: 'Remodex Android QR pairing screen',
    title: 'Pair with QR',
  },
  {
    src: '/android/control.png',
    alt: 'Remodex Android control screen',
    title: 'Control runs',
  },
  {
    src: '/android/dictate.png',
    alt: 'Remodex Android dictation screen',
    title: 'Dictate prompts',
  },
  {
    src: '/android/dismiss%20work.png',
    alt: 'Remodex Android work dismissal screen',
    title: 'Review work',
  },
]

const DEMOS = [
  {
    src: '/android/demo%20light.mp4',
    poster: '/android/banner.png',
    title: 'Light mode demo',
  },
]

export const metadata: Metadata = {
  title: 'Android Beta',
  description: 'Join the Remodex Android beta through Google Groups and Google Play testing.',
  alternates: {
    canonical: '/android-beta',
  },
  openGraph: {
    title: 'Remodex Android Beta',
    description: 'Join the Remodex Android beta through Google Groups and Google Play testing.',
    images: [REMODEX_OG_IMAGE],
  },
}

export default function AndroidBetaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-[family-name:var(--font-sans)]">
      <TerminalGrid />

      <header className="relative z-20 flex items-center justify-between px-5 py-7 sm:px-6 md:px-16 lg:px-24">
        <a href="/" className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground">
          <LuArrowLeft size={16} strokeWidth={2} />
          <span className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`}>Back</span>
        </a>
        <ThemeToggle />
      </header>

      <main className="relative z-20 px-5 pb-24 pt-12 sm:px-6 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-4xl">
          <FadeIn>
            <span className={`${mono.className} text-[11px] uppercase tracking-[0.3em] text-foreground/30`}>
              Android Beta
            </span>
            <h1 className={`${displayFont.className} mt-5 max-w-3xl text-[2.8rem] leading-[0.9] tracking-[-0.04em] text-foreground sm:text-[4rem] md:text-[5.2rem]`}>
              Join the Remodex Android test.
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-foreground/50 sm:text-base">
              Follow these steps in order so Google Play recognizes your beta access before you install the app.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-foreground/10 bg-card">
              <img
                src="/android/banner.png"
                alt="Remodex Android beta preview"
                className="block aspect-[1024/500] w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-4">
            {STEPS.map((step, index) => (
              <FadeIn key={step.title} delay={index * 80}>
                <div className="rounded-2xl border border-foreground/10 bg-card p-5 sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4">
                      <span className={`${mono.className} mt-1 text-xs text-foreground/25`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <step.icon size={17} className="text-foreground/40" />
                          <h2 className="text-base font-medium text-foreground">{step.title}</h2>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-foreground/45">{step.description}</p>
                      </div>
                    </div>
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                    >
                      {step.label}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={260}>
            <div className="mt-5 rounded-2xl border border-foreground/10 bg-card p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <LuDownload size={17} className="text-foreground/40" />
                    <h2 className="text-base font-medium text-foreground">Desktop relay and bridge</h2>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-foreground/45">
                    The Google Group includes the desktop app link. You can also open it directly here.
                  </p>
                </div>
                <a
                  href={DESKTOP_RELAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-foreground/15 px-5 text-sm font-medium text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  Download desktop app
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-16">
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.3em] text-foreground/30`}>
                Preview
              </span>
              <h2 className={`${displayFont.className} mt-4 text-3xl leading-[0.92] tracking-[-0.035em] text-foreground sm:text-4xl`}>
                Android app screens.
              </h2>
              <div className="mt-8 grid max-w-md gap-4">
                {DEMOS.map((demo) => (
                  <div
                    key={demo.src}
                    className="overflow-hidden rounded-2xl border border-foreground/10 bg-card"
                  >
                    <video
                      src={demo.src}
                      poster={demo.poster}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="aspect-[9/16] w-full bg-muted object-cover object-top"
                    />
                    <div className="border-t border-foreground/10 px-4 py-3">
                      <p className="text-sm font-medium text-foreground/60">{demo.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {PREVIEWS.map((preview, index) => (
                  <div
                    key={preview.src}
                    className="overflow-hidden rounded-2xl border border-foreground/10 bg-card"
                  >
                    <img
                      src={preview.src}
                      alt={preview.alt}
                      className="aspect-[9/19] w-full object-cover object-top"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="border-t border-foreground/10 px-3 py-2">
                      <p className="text-xs font-medium text-foreground/55">{preview.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={ANDROID_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                <LuUsers size={17} strokeWidth={2} />
                Start with Google Group
              </a>
              <a
                href={REMODEX_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 text-sm font-medium text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <FaGithub size={15} />
                View GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  )
}
