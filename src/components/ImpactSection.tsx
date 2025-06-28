'use client'
import { useReport } from '@/contexts/ReportContext'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const ImpactSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
  <div id="impact" className="mb-20 scroll-mt-20 print:break-before">
    <h2
      className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline"
      {...(editing
        ? {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: (e: React.FocusEvent<HTMLElement>) => {
              const newData = { ...(data as typeof data) }
              newData.impactTitle = e.currentTarget.textContent || ''
              setData(newData)
            },
          }
        : {})}
    >
      <HeadingNumber number={number} />
      {data.impactTitle}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.milestones.map((milestone, index) => (
        <div key={index} className="flex items-start p-6 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl border border-emerald-100">
          <div className="bg-emerald-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
            {index + 1}
          </div>
          <div>
            <h3
              className="text-xl font-bold text-emerald-700"
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as typeof data) }
                      newData.milestones[index].title =
                        e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {milestone.title}
            </h3>
            <p
              className="text-slate-700"
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as typeof data) }
                      newData.milestones[index].description =
                        e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {milestone.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ImpactSection
