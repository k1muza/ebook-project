'use client'
import { useReport } from '@/contexts/ReportContext'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const ClosingSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
    <div id="thankyou" className="text-center py-16 border-t border-emerald-100 scroll-mt-20 print:break-before">
      <h3
        className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline justify-center"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onInput: (e: React.FormEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.closingTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        <HeadingNumber number={number} />
        {data.closingTitle}
      </h3>
      {data.closingImage && (
        <div className="mt-12 mb-8 max-w-3xl mx-auto print:break-inside-avoid">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <img src={data.closingImage.src} alt={data.closingImage.alt} className="w-full h-full object-cover" />
          </div>
          <p
            className="text-center text-sm text-gray-600 italic mt-2"
            {...(editing
              ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onInput: (e: React.FormEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    if (newData.closingImage)
                      newData.closingImage.caption = e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
              : {})}
          >
            {data.closingImage.caption}
          </p>
        </div>
      )}
      <p
        className="text-xl text-slate-600 max-w-3xl mx-auto"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onInput: (e: React.FormEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.closing = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        {data.closing}
      </p>

    </div>
  );
}

export default ClosingSection
