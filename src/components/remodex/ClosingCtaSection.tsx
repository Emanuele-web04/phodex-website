import { CtaButtonRow } from '@/components/remodex/CtaButtonRow'
import { SectionPanel } from '@/components/remodex/SectionPanel'

export function ClosingCtaSection() {
  return (
    <SectionPanel
      width="narrow"
      className="pb-24 md:pb-32"
      title="Your Mac runs"
      subtitle="Your iPhone steers"
      contentClassName="mt-10"
      contentDelay={0}
    >
      <CtaButtonRow />
    </SectionPanel>
  )
}
