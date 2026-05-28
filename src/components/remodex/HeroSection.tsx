import { AppIcon } from '@/components/remodex/AppIcon'
import { CtaButtonRow } from '@/components/remodex/CtaButtonRow'
import { FadeIn } from '@/components/remodex/FadeIn'
import { HeroPhone } from '@/components/remodex/HeroPhone'
import { SectionHeader } from '@/components/remodex/SectionHeader'

const HERO_TITLE_SIZE =
  'text-[2.35rem] sm:text-[2.75rem] md:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.5rem]'
const HERO_SUBTITLE_SIZE =
  'text-[2.35rem] sm:text-[2.75rem] md:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.5rem]'

export function HeroSection() {
  return (
    <section className="rx-hero relative overflow-hidden">
      <div className="rx-container relative z-10 flex w-full max-w-7xl flex-col items-center gap-8 pb-10 pt-[calc(6rem+env(safe-area-inset-top))] md:min-h-[calc(100svh-4rem)] md:flex-row md:items-center md:justify-between md:gap-12 md:pb-14 md:pt-[calc(5.5rem+env(safe-area-inset-top))] lg:gap-16">
        <div className="flex w-full max-w-md flex-col items-center text-center md:max-w-2xl md:flex-1 md:items-start md:text-left">
          <FadeIn when="mount" delay={0}>
            <AppIcon size="md" className="mb-5 md:mb-6 md:scale-110 lg:scale-125" />
          </FadeIn>

          <FadeIn when="mount" delay={60} className="w-full">
            <SectionHeader
              variant="display"
              title="Control Agents"
              subtitle="From your iPhone"
              className="text-center md:text-start"
              titleClassName={HERO_TITLE_SIZE}
              subtitleClassName={HERO_SUBTITLE_SIZE}
            />
          </FadeIn>

          <FadeIn when="mount" delay={140} className="mt-7 w-full md:mt-8">
            <CtaButtonRow layout="hero" />
          </FadeIn>
        </div>

        <FadeIn
          when="mount"
          delay={220}
          className="relative z-10 w-full md:w-auto md:shrink-0 md:flex-1 md:flex md:justify-end"
        >
          <HeroPhone />
        </FadeIn>
      </div>
    </section>
  )
}
