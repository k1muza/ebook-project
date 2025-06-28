'use client'
import { useReport } from '@/contexts/ReportContext'
import HeadingNumber from './HeadingNumber'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Props { number: number }

const HighlightsSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport()
  if (!data || !data.highlights) return null
  return (
    <div id="highlights" className="mb-20 scroll-mt-20">
      <h2
        className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.highlightsTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        <HeadingNumber number={number} />
        {data.highlightsTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.highlights.map((item, idx) => {
          const Icon = (Icons as unknown as Record<string, LucideIcon>)[item.icon || 'Star']
          return (
            <div key={idx} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl shadow border border-emerald-100">
              <div className="flex justify-center mb-4">
                {Icon && <Icon className="text-emerald-600" size={36} />}
              </div>
              <p
                className="text-4xl font-extrabold text-emerald-700 mb-2"
                {...(editing
                  ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        if (newData.highlights)
                          newData.highlights[idx].value = Number(e.currentTarget.textContent) || 0
                        setData(newData)
                      },
                    }
                  : {})}
              >
                {item.value}
              </p>
              <p
                className="text-lg text-slate-700 font-medium"
                {...(editing
                  ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        if (newData.highlights)
                          newData.highlights[idx].label = e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                  : {})}
              >
                {item.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HighlightsSection
