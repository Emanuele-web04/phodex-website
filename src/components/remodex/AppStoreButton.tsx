import { FaApple } from 'react-icons/fa6'

import { CtaButton } from '@/components/remodex/CtaButton'
import { REMODEX_APP_STORE_URL } from '@/lib/site'

type AppStoreButtonProps = {
  variant?: 'default' | 'compact'
  className?: string
}

export function AppStoreButton({ variant = 'default', className }: AppStoreButtonProps) {
  const label = variant === 'compact' ? 'Download' : 'Download on iOS'

  return (
    <CtaButton
      href={REMODEX_APP_STORE_URL}
      icon={FaApple}
      tone="filled"
      size={variant === 'compact' ? 'compact' : 'default'}
      aria-label="Download Remodex on the App Store"
      className={className}
    >
      {label}
    </CtaButton>
  )
}
