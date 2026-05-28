import { FaGithub } from 'react-icons/fa6'

import { CtaButton } from '@/components/remodex/CtaButton'
import { REMODEX_REPO_URL } from '@/lib/github'

type GitHubButtonProps = {
  variant?: 'default' | 'compact'
  className?: string
}

export function GitHubButton({ variant = 'default', className }: GitHubButtonProps) {
  const label = variant === 'compact' ? 'GitHub' : 'View on GitHub'

  return (
    <CtaButton
      href={REMODEX_REPO_URL}
      icon={FaGithub}
      tone="outline"
      size={variant === 'compact' ? 'compact' : 'default'}
      aria-label="View Remodex on GitHub"
      className={className}
    >
      {label}
    </CtaButton>
  )
}
