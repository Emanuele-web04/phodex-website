/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from 'react-markdown'

import { SiteFooter } from '@/components/remodex/SiteFooter'
import { SiteHeader } from '@/components/remodex/SiteHeader'
import { getRemodexStars } from '@/lib/github'

export async function LegalPage({ content }: { content: string }) {
  const stars = await getRemodexStars()

  return (
    <div className="rx-page min-h-screen text-foreground">
      <SiteHeader stars={stars} homeHref="/" showNav={false} />

      <main className="rx-section">
        <div className="rx-container mx-auto max-w-3xl">
          <article className="legal-prose text-[15px] leading-7 text-foreground/70">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </main>

      <SiteFooter variant="legal" />
    </div>
  )
}
