import { AppIcon, type AppIconSize } from '@/components/remodex/AppIcon'

type BrandLockupProps = {
  iconSize?: AppIconSize
  iconClassName?: string
  labelClassName?: string
  className?: string
}

export function BrandLockup({
  iconSize = 'nav',
  iconClassName = '',
  labelClassName = 'truncate text-[15px] font-semibold tracking-[-0.02em]',
  className = '',
}: BrandLockupProps) {
  return (
    <span className={`flex min-w-0 items-center gap-2.5 ${className}`.trim()}>
      <AppIcon size={iconSize} className={iconClassName} />
      <span className={labelClassName}>Remodex</span>
    </span>
  )
}
