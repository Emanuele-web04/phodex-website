/* eslint-disable @next/next/no-img-element */

import { REMODEX_HERO_IMAGE } from '@/lib/site'

export function HeroPhone() {
  return (
    <img
      src={REMODEX_HERO_IMAGE}
      alt="Remodex on iPhone"
      className="mx-auto block w-full"
      loading="eager"
    />
  )
}
