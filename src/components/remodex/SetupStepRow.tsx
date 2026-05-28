import { FadeIn } from '@/components/remodex/FadeIn'
import { ListRow } from '@/components/remodex/ListRow'
import { TerminalCommand } from '@/components/remodex/TerminalCommand'

type SetupStepRowProps = {
  index: number
  num: string
  title: string
  code: string
}

export function SetupStepRow({ index, num, title, code }: SetupStepRowProps) {
  return (
    <FadeIn delay={index * 70} as="li">
      <ListRow className="grid gap-5 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8">
        <div className="flex items-baseline gap-4">
          <span className="rx-step-num">{num}</span>
          <h3 className="text-[15px] font-semibold tracking-[-0.006em] sm:text-base">{title}</h3>
        </div>
        <TerminalCommand command={code} variant="block" />
      </ListRow>
    </FadeIn>
  )
}
