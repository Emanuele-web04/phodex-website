import type { ReactNode } from 'react'

type PageSectionProps = {
  id?: string
  children: ReactNode
  width?: 'default' | 'narrow'
  bleed?: boolean
  className?: string
}

export function PageSection({
  id,
  children,
  width = 'default',
  bleed = false,
  className = '',
}: PageSectionProps) {
  if (bleed) {
    return (
      <section id={id} className={`rx-section ${className}`.trim()}>
        {children}
      </section>
    )
  }

  const containerClass =
    width === 'narrow' ? 'rx-container mx-auto max-w-3xl' : 'rx-container'

  return (
    <section id={id} className={`rx-section ${className}`.trim()}>
      <div className={containerClass}>{children}</div>
    </section>
  )
}
