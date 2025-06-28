'use client'

import { merriweather } from '@/fonts'

interface Props {
  number: number | string
  className?: string
}

const HeadingNumber = ({ number, className = '' }: Props) => (
  <span
    className={`${merriweather.className} inline-flex items-center justify-center rounded-full bg-slate-200 border border-slate-300 text-slate-800 font-bold mr-3 h-8 w-8 ${className}`}
    aria-hidden="true"
  >
    {number}
  </span>
)

export default HeadingNumber
