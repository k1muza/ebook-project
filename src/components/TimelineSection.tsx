'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const TimelineSection = ({ number }: Props) => {
  const data = useReportData()
  if (!data) return null
  return (
    <div id="timeline" className="mb-20 scroll-mt-20 print:break-before">
      <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
        <HeadingNumber number={number} />
        Progress Timeline
      </h2>
      <div className="relative ml-6">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
        {data.milestones.map((m, idx) => (
          <div key={idx} className="mb-8 flex items-start">
            <div className="flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              {idx < data.milestones.length - 1 && (
                <div className="flex-1 w-px bg-emerald-200"></div>
              )}
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-1">{m.title}</h3>
              <p className="text-slate-700">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineSection
