import Link from 'next/link'

import { BrandLockup } from '@/components/remodex/BrandLockup'
import { REMODEX_REPO_URL } from '@/lib/github'

type SiteFooterProps = {
  variant?: 'home' | 'legal'
}

export function SiteFooter({ variant = 'home' }: SiteFooterProps) {
  return (
    <footer className="border-t border-foreground/[0.06] py-10">
      <div className="rx-container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <BrandLockup
          iconSize="xs"
          iconClassName="opacity-70"
          labelClassName="text-[13px] font-medium text-foreground/75"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
          <a
            href={REMODEX_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <Link href="/privacy-policy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          {variant === 'home' ? (
            <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-foreground/35">
              Apache 2.0
            </span>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
