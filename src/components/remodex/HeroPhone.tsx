/* eslint-disable @next/next/no-img-element */

import { REMODEX_HERO_IMAGE } from '@/lib/site'

export function HeroPhone() {
  return (
    <img
      src={REMODEX_HERO_IMAGE}
      alt="Remodex on iPhone"
      className="mx-auto block w-full max-w-sm md:mx-0 md:max-w-none md:w-[min(100%,26rem)] lg:w-[min(100%,30rem)] xl:w-[min(100%,32rem)]"
      loading="eager"
    />
  )
}
