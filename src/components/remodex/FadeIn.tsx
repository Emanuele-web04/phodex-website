'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type FadeInWhen = 'scroll' | 'mount'

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
  when?: FadeInWhen
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  when = 'scroll',
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const isMount = when === 'mount'

  useEffect(() => {
    if (isMount) {
      const timer = window.setTimeout(() => setVisible(true), 40 + delay)
      return () => window.clearTimeout(timer)
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, isMount])

  const translateY = isMount ? '16px' : '20px'
  const duration = isMount ? '0.85s' : '0.75s'

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${translateY})`,
        transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
