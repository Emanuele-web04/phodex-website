'use client'

// FILE: GitHubStarsButton.tsx
// Purpose: Render the GitHub CTA with a live-updating star count badge.
// Layer: Client component
// Exports: GitHubStarsButton
// Depends on: React hooks, react-icons, REMODEX_REPO_URL

import { useEffect, useState } from 'react'
import { FaGithub, FaStar } from 'react-icons/fa6'

import { REMODEX_REPO_URL } from '@/lib/github'

type GitHubStarsButtonProps = {
  initialStars: number | null
}

type GitHubStarsResponse = {
  stars?: number | null
}

const STAR_REFRESH_INTERVAL_MS = 60_000

// Keeps the CTA count fresh without blocking the first paint.
export function GitHubStarsButton({
  initialStars,
}: GitHubStarsButtonProps) {
  const [stars, setStars] = useState<number | null>(initialStars)

  useEffect(() => {
    let isMounted = true

    const loadStars = async () => {
      try {
        const response = await fetch('/api/github-stars', { cache: 'no-store' })

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as GitHubStarsResponse

        if (isMounted && typeof data.stars === 'number') {
          setStars(data.stars)
        }
      } catch {
        // Ignore transient polling errors and keep the last known value.
      }
    }

    void loadStars()

    const intervalId = window.setInterval(() => {
      void loadStars()
    }, STAR_REFRESH_INTERVAL_MS)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <a
      href={REMODEX_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/35 hover:bg-foreground/5"
    >
      <FaGithub size={15} />
      <span>Try remote control too</span>
      {typeof stars === 'number' ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-foreground/15 bg-foreground/5 px-2 py-0.5 text-xs text-foreground/75">
          <FaStar size={10} />
          <span className="font-mono">{formatStarCount(stars)}</span>
        </span>
      ) : null}
    </a>
  )
}

// Formats larger star counts into compact UI-friendly labels.
function formatStarCount(stars: number) {
  return new Intl.NumberFormat('en', {
    notation: stars >= 1000 ? 'compact' : 'standard',
    maximumFractionDigits: stars >= 1000 ? 1 : 0,
  }).format(stars)
}
