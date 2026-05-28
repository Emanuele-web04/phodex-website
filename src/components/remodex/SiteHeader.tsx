'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { AppStoreButton } from '@/components/remodex/AppStoreButton'
import { BrandLockup } from '@/components/remodex/BrandLockup'
import { NavGitHubStars } from '@/components/remodex/NavGitHubStars'

const NAV = [
  { label: 'Showcase', href: '#showcase' },
  { label: 'Setup', href: '#setup' },
  { label: 'FAQ', href: '#faq' },
] as const

type SiteHeaderProps = {
  stars: number | null
  homeHref?: string
  showNav?: boolean
  overlay?: boolean
}

export function SiteHeader({
  stars,
  homeHref = '/',
  showNav = true,
  overlay = false,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logo = <BrandLockup />

  const shellClass = overlay
    ? scrolled
      ? 'border-foreground/[0.06] bg-background/85 shadow-[0_1px_0_oklch(0_0_0/0.03)] backdrop-blur-xl'
      : 'border-transparent bg-transparent'
    : 'border-foreground/[0.06] bg-background/85 backdrop-blur-xl'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${shellClass}`}
    >
      <div className="rx-container">
        <div className="grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-16 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-4">
          {homeHref === '/' ? (
            <Link href="/" className="flex min-w-0 items-center gap-2.5 md:shrink-0">
              {logo}
            </Link>
          ) : (
            <a href={homeHref} className="flex min-w-0 items-center gap-2.5 md:shrink-0">
              {logo}
            </a>
          )}

          {showNav ? (
            <nav
              className="hidden items-center justify-center gap-6 md:flex lg:gap-8"
              aria-label="Main"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : (
            <div className="hidden min-w-0 md:block" aria-hidden />
          )}

          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
            <NavGitHubStars initialStars={stars} />
            <AppStoreButton variant="compact" />
          </div>
        </div>
      </div>
    </header>
  )
}
