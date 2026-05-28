'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

const SCREENS = [
  '/screens/rmx-0.png',
  '/screens/rmx-1.png',
  '/screens/rmx-2.png',
  '/screens/rmx-3.png',
  '/screens/rmx-4.png',
  '/screens/rmx-5.png',
  '/screens/rmx-6.png',
  '/screens/rmx-7.png',
]

export function AppPreview() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollToIndex = useCallback((i: number) => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.querySelectorAll<HTMLElement>('[data-screen]')
    const clamped = Math.max(0, Math.min(i, cards.length - 1))
    cards[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setIndex(clamped)
  }, [])

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.querySelectorAll<HTMLElement>('[data-screen]')
    let closest = 0
    let minDist = Infinity
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - container.scrollLeft)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setIndex(closest)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollToIndex(index + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollToIndex(index - 1)
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [index, scrollToIndex])

  return (
    <div className="group/preview relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />

      <button
        onClick={() => scrollToIndex(index - 1)}
        disabled={index === 0}
        className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-2xl border border-foreground/[0.08] bg-white/95 text-foreground/55 shadow-sm backdrop-blur transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30 sm:left-6"
        aria-label="Previous screenshot"
      >
        <LuChevronLeft size={18} strokeWidth={1.8} />
      </button>
      <button
        onClick={() => scrollToIndex(index + 1)}
        disabled={index === SCREENS.length - 1}
        className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-2xl border border-foreground/[0.08] bg-white/95 text-foreground/55 shadow-sm backdrop-blur transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30 sm:right-6"
        aria-label="Next screenshot"
      >
        <LuChevronRight size={18} strokeWidth={1.8} />
      </button>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="App screenshots"
        className="relative flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-5 py-2 outline-none sm:gap-7 sm:px-8 md:gap-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SCREENS.map((src, i) => (
          <div
            key={src}
            data-screen
            className={`w-[82vw] max-w-[320px] flex-shrink-0 snap-start transition-[transform,opacity] duration-500 ease-out sm:w-[48vw] sm:max-w-[360px] md:w-[calc((100%-3rem)/2.5)] md:max-w-[380px] lg:w-[calc((100%-4.5rem)/3.2)] lg:max-w-none ${
              i === index ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-[0.82]'
            }`}
          >
            <div className="rx-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Remodex feature ${i + 1}`}
                className="block h-auto w-full"
                loading={i < 3 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-center gap-1.5">
        {SCREENS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? 'w-6 bg-foreground/80'
                : 'w-1.5 bg-foreground/15 hover:bg-foreground/35'
            }`}
            aria-label={`Go to screenshot ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
