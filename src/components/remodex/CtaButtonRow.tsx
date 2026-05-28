import { AndroidBetaButton } from '@/components/remodex/AndroidBetaButton'
import { AppStoreButton } from '@/components/remodex/AppStoreButton'

type CtaButtonRowProps = {
  className?: string
}

const CTA_BUTTON_CLASS = 'w-full sm:w-auto'

export function CtaButtonRow({ className = '' }: CtaButtonRowProps) {
  return (
    <div
      className={`flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center ${className}`.trim()}
    >
      <AppStoreButton className={CTA_BUTTON_CLASS} />
      <AndroidBetaButton className={CTA_BUTTON_CLASS} />
    </div>
  )
}
