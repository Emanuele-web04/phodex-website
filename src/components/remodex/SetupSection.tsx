import { BorderedList } from '@/components/remodex/BorderedList'
import { SectionPanel } from '@/components/remodex/SectionPanel'
import { SetupStepRow } from '@/components/remodex/SetupStepRow'
import { REMODEX_NPM_INSTALL_CMD } from '@/lib/site'

const STEPS = [
  { num: '01', title: 'Install the bridge', code: REMODEX_NPM_INSTALL_CMD },
  { num: '02', title: 'Pair from the app', code: 'remodex up' },
] as const

export function SetupSection() {
  return (
    <SectionPanel id="setup" title="Two moves" subtitle="Install and pair">
      <BorderedList as="ol">
        {STEPS.map((step, index) => (
          <SetupStepRow key={step.num} index={index} {...step} />
        ))}
      </BorderedList>
    </SectionPanel>
  )
}
