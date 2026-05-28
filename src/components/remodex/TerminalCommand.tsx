import { CopyButton } from '@/components/remodex/CopyButton'

type TerminalCommandProps = {
  command: string
  variant?: 'pill' | 'block'
  className?: string
}

export function TerminalCommand({
  command,
  variant = 'block',
  className = '',
}: TerminalCommandProps) {
  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex h-11 items-center gap-3 rounded-full border border-foreground/10 bg-rx-surface px-5 font-[family-name:var(--font-geist-mono)] text-[12px] text-foreground/70 ${className}`.trim()}
      >
        <span className="truncate">{command}</span>
        <CopyButton text={command} />
      </div>
    )
  }

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl border border-foreground/[0.07] bg-rx-surface px-4 py-3 font-[family-name:var(--font-geist-mono)] text-[12px] text-foreground/75 sm:min-w-[16rem] ${className}`.trim()}
    >
      <span className="truncate">
        <span className="text-foreground/30">$ </span>
        {command}
      </span>
      <CopyButton text={command} />
    </div>
  )
}
