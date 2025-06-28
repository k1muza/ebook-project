'use client'

import { merriweather } from '@/fonts'

interface Props {
  number: number | string
  className?: string
}

const HeadingNumber = ({ number, className = '' }: Props) => (
  <span
    className={`${merriweather.className} relative inline-flex items-center justify-center text-slate-800 font-bold mr-3 h-8 w-12 ${className}`}
    style={{ background: "url('/brush.svg') center/contain no-repeat" }}
    aria-hidden="true"
  >
    {number}
  </span>
)

export default HeadingNumber
