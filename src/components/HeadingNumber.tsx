'use client'

import { merriweather } from '@/fonts'

interface Props {
  number: number | string
  className?: string
}

const HeadingNumber = ({ number, className = '' }: Props) => (
  <span
    className={`${merriweather.className} inline-flex items-center justify-center rounded-full bg-amber-200 text-slate-800 font-bold mr-3 h-8 w-8 p-1 shadow-[0_0_6px_rgba(253,224,71,0.8)] ring-1 ring-amber-300 ${className}`}
    aria-hidden="true"
  >
    {number}
  </span>
)

export default HeadingNumber
