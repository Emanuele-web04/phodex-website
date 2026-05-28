import type { ReactNode } from 'react'

type SectionHeaderVariant = 'title' | 'display'
type SectionHeaderTag = 'h1' | 'h2'

type SectionHeaderProps = {
  title: ReactNode
  subtitle: ReactNode
  lead?: ReactNode
  variant?: SectionHeaderVariant
  as?: SectionHeaderTag
  align?: 'center' | 'start'
  className?: string
}

const TITLE_SIZE: Record<SectionHeaderVariant, string> = {
  title: 'text-[1.75rem] sm:text-[2rem]',
  display: 'text-[2.35rem] sm:text-[2.75rem] md:text-[3.25rem]',
}

const SUBTITLE_SIZE: Record<SectionHeaderVariant, string> = {
  title: 'mt-1 text-[1.75rem] sm:mt-1.5 sm:text-[2rem]',
  display: 'mt-1 text-[2.35rem] sm:mt-1.5 sm:text-[2.75rem] md:text-[3.25rem]',
}

export function SectionHeader({
  title,
  subtitle,
  lead,
  variant = 'title',
  as,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const HeadingTag: SectionHeaderTag = as ?? (variant === 'display' ? 'h1' : 'h2')
  const headingClass = variant === 'display' ? 'rx-display' : 'rx-title'
  const alignmentClass = align === 'center' ? 'text-center' : 'text-start'
  const leadAlignment = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`${alignmentClass} ${className}`.trim()}>
      <HeadingTag className={`${headingClass} ${TITLE_SIZE[variant]}`}>{title}</HeadingTag>
      <p className={`rx-dotted ${SUBTITLE_SIZE[variant]}`}>{subtitle}</p>
      {lead ? (
        <p className={`max-w-md ${leadAlignment}`.trim()}>{lead}</p>
      ) : null}
    </div>
  )
}
