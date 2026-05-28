import type { ElementType, ReactNode } from 'react'

type BorderedListProps = {
  children: ReactNode
  as?: ElementType
  className?: string
}

export function BorderedList({ children, as: Tag = 'div', className = '' }: BorderedListProps) {
  return <Tag className={`rx-bordered-list ${className}`.trim()}>{children}</Tag>
}
