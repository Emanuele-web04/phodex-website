import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { IconType } from 'react-icons'

export type CtaButtonTone = 'filled' | 'outline'
export type CtaButtonSize = 'default' | 'compact'

type CtaButtonProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  'children' | 'className' | 'href' | 'target' | 'rel'
> & {
  href: string
  children: ReactNode
  icon?: IconType
  iconSize?: number
  tone?: CtaButtonTone
  size?: CtaButtonSize
  external?: boolean
  className?: string
}

const TONE_CLASS: Record<CtaButtonTone, string> = {
  filled: 'rx-btn-filled',
  outline: 'rx-btn-outline',
}

const SIZE_CLASS: Record<CtaButtonSize, string> = {
  default: 'h-11 px-7 text-[13px]',
  compact: 'h-9 px-4 text-[12px]',
}

const ICON_SIZE: Record<CtaButtonSize, number> = {
  default: 16,
  compact: 14,
}

export function CtaButton({
  href,
  children,
  icon: Icon,
  iconSize,
  tone = 'filled',
  size = 'default',
  external = true,
  className = '',
  ...props
}: CtaButtonProps) {
  const resolvedIconSize = iconSize ?? ICON_SIZE[size]

  return (
    <a
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`${TONE_CLASS[tone]} ${SIZE_CLASS[size]} ${className}`.trim()}
      {...props}
    >
      {Icon ? <Icon size={resolvedIconSize} aria-hidden /> : null}
      {children}
    </a>
  )
}
