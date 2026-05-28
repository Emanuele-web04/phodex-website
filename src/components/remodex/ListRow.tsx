import type { ReactNode } from 'react'

type ListRowProps = {
  children: ReactNode
  className?: string
}

export function ListRow({ children, className = '' }: ListRowProps) {
  return <div className={`rx-list-row ${className}`.trim()}>{children}</div>
}
