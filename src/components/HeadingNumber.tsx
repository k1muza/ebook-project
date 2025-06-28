'use client'

import { bebas } from '@/fonts'

interface Props {
  number: number | string
  className?: string
}

const HeadingNumber = ({ number, className = '' }: Props) => (
  <span
    className={`${bebas.className} bg-gradient-to-br from-emerald-600 to-amber-600 bg-clip-text text-transparent font-bold mr-3 text-4xl md:text-5xl leading-none drop-shadow-sm ${className}`}
    aria-hidden="true"
  >
    {number}.
  </span>
)

export default HeadingNumber
