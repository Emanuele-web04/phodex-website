'use client'

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { FaGithub, FaStar } from 'react-icons/fa6'

import { REMODEX_REPO_URL } from '@/lib/github'

type NavGitHubStarsProps = {
  initialStars: number | null
}

function formatStars(stars: number) {
  if (stars >= 1000) return `${(stars / 1000).toFixed(1).replace(/\.0$/, '')}K`
  return String(stars)
}

export function NavGitHubStars({ initialStars }: NavGitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(initialStars)

  useEffect(() => {
    fetch('/api/github-stars')
      .then((r) => r.json())
      .then((data: { stars: number | null }) => {
        if (typeof data.stars === 'number') setStars(data.stars)
      })
      .catch(() => {})
  }, [])

  return (
    <a
      href={REMODEX_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rx-nav-github"
      aria-label={
        typeof stars === 'number'
          ? `Remodex on GitHub, ${stars} stars`
          : 'Remodex on GitHub'
      }
    >
      <FaGithub size={13} aria-hidden />
      {typeof stars === 'number' ? (
        <span className="inline-flex items-center gap-1">
          <FaStar size={9} className="text-foreground/35" aria-hidden />
          {formatStars(stars)}
        </span>
      ) : null}
    </a>
  )
}
