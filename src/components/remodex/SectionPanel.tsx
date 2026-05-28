import type { ReactNode } from 'react'

import { FadeIn } from '@/components/remodex/FadeIn'
import { PageSection } from '@/components/remodex/PageSection'
import { SectionHeader } from '@/components/remodex/SectionHeader'

type SectionPanelProps = {
  id?: string
  title: ReactNode
  subtitle: ReactNode
  children: ReactNode
  width?: 'default' | 'narrow'
  bleed?: boolean
  className?: string
  contentClassName?: string
  contentDelay?: number
  headerClassName?: string
}

export function SectionPanel({
  id,
  title,
  subtitle,
  children,
  width = 'narrow',
  bleed = false,
  className = '',
  contentClassName = 'mt-12',
  contentDelay = 60,
  headerClassName = '',
}: SectionPanelProps) {
  return (
    <PageSection id={id} width={width} bleed={bleed} className={className}>
      <FadeIn>
        <div className={headerClassName}>
          <SectionHeader title={title} subtitle={subtitle} />
        </div>
      </FadeIn>
      <FadeIn delay={contentDelay} className={contentClassName}>
        {children}
      </FadeIn>
    </PageSection>
  )
}
