/* eslint-disable @next/next/no-img-element */

import { REMODEX_ICON_URL } from '@/lib/site'

const SIZES = {
  nav: 24,
  xs: 16,
  md: 56,
} as const

export type AppIconSize = keyof typeof SIZES

type AppIconProps = {
  size?: AppIconSize
  className?: string
}

export function AppIcon({ size = 'nav', className = '' }: AppIconProps) {
  const px = SIZES[size]

  return (
    <img
      src={REMODEX_ICON_URL}
      alt=""
      width={px}
      height={px}
      draggable={false}
      className={`block shrink-0 select-none ${className}`.trim()}
    />
  )
}
