'use client'
import ContentRenderer from './ContentRenderer'
import { useReport } from '@/contexts/ReportContext'
import { ReportData } from '@/types/report'
import HeadingNumber from './HeadingNumber'

interface Props {
  number: number
}

const MessageSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport()
  if (!data) return null

  return (
  <div id="message" className="mb-20 scroll-mt-20 print:break-before">
    <h2
      className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline"
      {...(editing
        ? {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: (e: React.FocusEvent<HTMLElement>) => {
              const newData = { ...(data as ReportData) }
              newData.message.title = e.currentTarget.textContent || ''
              setData(newData)
            },
          }
        : {})}
    >
      <HeadingNumber number={number} />
      {data.message.title}
    </h2>
    {data.message.content.map((content, index) => (
      <ContentRenderer
        key={index}
        content={content}
        index={index}
        editable={editing}
        onChange={(val) => {
          const newData = { ...(data as ReportData) }
          newData.message.content[index] = val
          setData(newData)
        }}
      />
    ))}
  </div>
  );
}

export default MessageSection
