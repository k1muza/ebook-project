'use client'
import { useReport } from '@/contexts/ReportContext'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const FutureGoalsSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
  <div id="future" className="mb-20 scroll-mt-20">
    <h2
      className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline"
      {...(editing
        ? {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: (e: React.FocusEvent<HTMLElement>) => {
              const newData = { ...(data as typeof data) }
              newData.futureGoalsTitle = e.currentTarget.textContent || ''
              setData(newData)
            },
          }
        : {})}
    >
      <HeadingNumber number={number} />
      {data.futureGoalsTitle}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.futureGoals.map((goal, index) => (
        <div key={index} className="flex items-start bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 print:break-inside-avoid">
          <div className="bg-emerald-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
            {index + 1}
          </div>
          <p
            className="font-medium"
            {...(editing
              ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onBlur: (e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    newData.futureGoals[index] = e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
              : {})}
          >
            {goal}
          </p>
        </div>
      ))}
    </div>
    {data.futureVisionImage && (
      <div className="mt-12 print:break-inside-avoid">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <img src={data.futureVisionImage.src} alt={data.futureVisionImage.alt} className="w-full h-full object-cover" />
        </div>
        <p
          className="text-center text-sm text-gray-600 italic mt-2"
          {...(editing
            ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  if (newData.futureVisionImage)
                    newData.futureVisionImage.caption = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
            : {})}
        >
          {data.futureVisionImage.caption}
        </p>
        {editing && (
          <div className="text-sm text-gray-500 text-center">
            Src:{' '}
            <span
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as typeof data) }
                      if (newData.futureVisionImage)
                        newData.futureVisionImage.src = e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {data.futureVisionImage.src}
            </span>
            <br />
            Alt:{' '}
            <span
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as typeof data) }
                      if (newData.futureVisionImage)
                        newData.futureVisionImage.alt = e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {data.futureVisionImage.alt}
            </span>
          </div>
        )}
      </div>
    )}
  </div>
  );
}

export default FutureGoalsSection
