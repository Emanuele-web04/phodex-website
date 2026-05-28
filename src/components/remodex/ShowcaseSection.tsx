import { AppPreview } from '@/components/remodex/AppPreview'
import { SectionPanel } from '@/components/remodex/SectionPanel'

export function ShowcaseSection() {
  return (
    <SectionPanel
      id="showcase"
      bleed
      className="py-16 md:py-24"
      title="Eight ways in"
      subtitle="One app. All your work."
      headerClassName="rx-container mb-8 md:mb-10"
      contentClassName=""
      contentDelay={80}
    >
      <AppPreview />
    </SectionPanel>
  )
}
