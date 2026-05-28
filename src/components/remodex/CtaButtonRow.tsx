import { AndroidBetaButton } from '@/components/remodex/AndroidBetaButton'
import { AppStoreButton } from '@/components/remodex/AppStoreButton'

type CtaButtonRowProps = {
  className?: string
  layout?: 'center' | 'hero'
}

const MOBILE_FULL = 'w-full sm:w-auto'

export function CtaButtonRow({ className = '', layout = 'center' }: CtaButtonRowProps) {
  const isHero = layout === 'hero'

  const rowClass = isHero
    ? 'flex w-full flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-start'
    : 'flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center'

  return (
    <div className={`${rowClass} ${className}`.trim()}>
      <AppStoreButton className={MOBILE_FULL} />
      <AndroidBetaButton className={MOBILE_FULL} />
    </div>
  )
}
