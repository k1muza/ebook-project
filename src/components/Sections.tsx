'use client'
import { useReport } from '@/contexts/ReportContext'
import ContentRenderer from './ContentRenderer'
import { ContentItem, ReportData } from '@/types/report'
import HeadingNumber from './HeadingNumber'
interface Props {
  startNumber: number
}

const Sections = ({ startNumber }: Props) => {
  const { data, setData, editing } = useReport()
  if (!data) return null

  return (
  <>
    {data.sections.map((section, sectionIndex) => {
      const sectionNumber = startNumber + sectionIndex
      const sectionId = `section-${sectionIndex + 1}`
      let subIndex = 0
      return (
        <div key={sectionIndex} id={sectionId} className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
            <HeadingNumber number={sectionNumber} />
            <span
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as ReportData) }
                      newData.sections[sectionIndex].title =
                        e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {section.title}
            </span>
          </h2>
          <div className="space-y-6">
            {section.content.map((content, contentIndex) => {
              let subNumber: string | undefined
              if ((content as ContentItem).type === 'subheading') {
                subIndex += 1
                subNumber = `${sectionNumber}.${subIndex}`
              }
              return (
                <ContentRenderer
                  key={contentIndex}
                  content={content}
                  index={contentIndex}
                  subheadingNumber={subNumber}
                  editable={editing}
                  onChange={(val) => {
                    const newData = { ...(data as ReportData) }
                    newData.sections[sectionIndex].content[contentIndex] =
                      val as ContentItem
                    setData(newData)
                  }}
                />
              )
            })}
          </div>
        </div>
      )
    })}
  </>
  );
}

export default Sections
