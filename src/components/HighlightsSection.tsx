'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Props { number: number }

const HighlightsSection = ({ number }: Props) => {
  const data = useReportData()
  if (!data || !data.highlights) return null
  return (
    <div id="highlights" className="mb-20 scroll-mt-20 print:break-before">
      <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
        <HeadingNumber number={number} />
        Key Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.highlights.map((item, idx) => {
          const Icon = (Icons as unknown as Record<string, LucideIcon>)[item.icon || 'Star']
          return (
            <div key={idx} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl shadow border border-emerald-100">
              <div className="flex justify-center mb-4">
                {Icon && <Icon className="text-emerald-600" size={36} />}
              </div>
              <p className="text-4xl font-extrabold text-emerald-700 mb-2">{item.value}</p>
              <p className="text-lg text-slate-700 font-medium">{item.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HighlightsSection
