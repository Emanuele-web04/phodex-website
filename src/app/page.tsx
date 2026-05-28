import { ClosingCtaSection } from '@/components/remodex/ClosingCtaSection'
import { FaqSection } from '@/components/remodex/FaqSection'
import { HeroSection } from '@/components/remodex/HeroSection'
import { SetupSection } from '@/components/remodex/SetupSection'
import { ShowcaseSection } from '@/components/remodex/ShowcaseSection'
import { SiteFooter } from '@/components/remodex/SiteFooter'
import { SiteHeader } from '@/components/remodex/SiteHeader'
import { getRemodexStars } from '@/lib/github'

export default async function RemodexPage() {
  const stars = await getRemodexStars()

  return (
    <div className="rx-page min-h-screen text-foreground">
      <SiteHeader stars={stars} homeHref="/" overlay />

      <main>
        <HeroSection />
        <ShowcaseSection />
        <SetupSection />
        <FaqSection />
        <ClosingCtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}
