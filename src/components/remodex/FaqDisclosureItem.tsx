'use client'

type FaqDisclosureItemProps = {
  question: string
  answer: string
  panelId: string
  isOpen: boolean
  onToggle: () => void
}

export function FaqDisclosureItem({
  question,
  answer,
  panelId,
  isOpen,
  onToggle,
}: FaqDisclosureItemProps) {
  return (
    <div className="rx-faq-item">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="rx-list-row flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-semibold tracking-[-0.006em] sm:text-base">
          {question}
        </span>
        <span
          className={`mt-1 shrink-0 text-[13px] text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 text-[15px] leading-[1.65] text-muted-foreground sm:px-4 sm:pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
