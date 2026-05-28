import { AppIcon } from '@/components/remodex/AppIcon'
import { CtaButtonRow } from '@/components/remodex/CtaButtonRow'
import { FadeIn } from '@/components/remodex/FadeIn'
import { HeroPhone } from '@/components/remodex/HeroPhone'
import { SectionHeader } from '@/components/remodex/SectionHeader'

export function HeroSection() {
  return (
    <section className="rx-hero relative overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-5 pb-10 pt-[calc(6rem+env(safe-area-inset-top))] text-center sm:pb-12 sm:pt-[calc(6.5rem+env(safe-area-inset-top))]">
        <FadeIn when="mount" delay={0}>
          <AppIcon size="md" className="mb-5 sm:mb-6" />
        </FadeIn>

        <FadeIn when="mount" delay={60}>
          <SectionHeader variant="display" title="Control Agents" subtitle="From your iPhone" />
        </FadeIn>

        <FadeIn when="mount" delay={140} className="mt-7 w-full sm:mt-8">
          <CtaButtonRow />
        </FadeIn>

        <FadeIn when="mount" delay={220} className="relative z-10 mt-8 w-full sm:mt-10">
          <HeroPhone />
        </FadeIn>
      </div>
    </section>
  )
}
