import { FaAndroid } from 'react-icons/fa6'

import { CtaButton } from '@/components/remodex/CtaButton'
import { REMODEX_ANDROID_BETA_PATH } from '@/lib/site'

type AndroidBetaButtonProps = {
  className?: string
}

export function AndroidBetaButton({ className }: AndroidBetaButtonProps) {
  return (
    <CtaButton
      href={REMODEX_ANDROID_BETA_PATH}
      icon={FaAndroid}
      tone="outline"
      external={false}
      aria-label="Join the Remodex Android beta"
      className={className}
    >
      Android Beta
    </CtaButton>
  )
}
