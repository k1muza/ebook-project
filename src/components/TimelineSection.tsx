'use client'
import { useReport } from '@/contexts/ReportContext'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const TimelineSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport()
  if (!data) return null
  return (
    <div id="timeline" className="mb-20 scroll-mt-20">
      <h2
        className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.timelineTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        <HeadingNumber number={number} />
        {data.timelineTitle}
      </h2>
      <div className="relative ml-6">
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-emerald-500 z-0"></div>
        {data.milestones.map((m, idx) => (
          <div key={idx} className="mb-8 flex items-start">
            <div className="flex flex-col items-center mr-6 relative z-10">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-500 text-emerald-700 bg-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              {idx < data.milestones.length - 1 && (
                <div className="flex-1 w-0.5 bg-emerald-500"></div>
              )}
            </div>
            <div>
              <h3
                className="font-bold text-emerald-700 mb-1"
                {...(editing
                  ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.milestones[idx].title =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                  : {})}
              >
                {m.title}
              </h3>
              <p
                className="text-slate-700"
                {...(editing
                  ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.milestones[idx].description =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                  : {})}
              >
                {m.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineSection
