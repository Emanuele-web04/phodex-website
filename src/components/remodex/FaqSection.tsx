'use client'

import { useState } from 'react'

import { BorderedList } from '@/components/remodex/BorderedList'
import { FaqDisclosureItem } from '@/components/remodex/FaqDisclosureItem'
import { SectionPanel } from '@/components/remodex/SectionPanel'
import { REMODEX_FAQ } from '@/lib/remodex-faq'

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(() => new Set())

  const toggleItem = (question: string) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(question)) {
        next.delete(question)
      } else {
        next.add(question)
      }
      return next
    })
  }

  return (
    <SectionPanel id="faq" title="Questions" subtitle="Before you pair">
      <BorderedList>
        {REMODEX_FAQ.map((item, index) => (
          <FaqDisclosureItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            panelId={`faq-answer-${index}`}
            isOpen={openItems.has(item.question)}
            onToggle={() => toggleItem(item.question)}
          />
        ))}
      </BorderedList>
    </SectionPanel>
  )
}
