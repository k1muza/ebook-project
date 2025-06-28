'use client'
import useReportData from '@/hooks/useReportData'
import ContentRenderer from './ContentRenderer'
import { ContentItem } from '@/types/report'
import HeadingNumber from './HeadingNumber'
interface Props {
  startNumber: number
}

const Sections = ({ startNumber }: Props) => {
  const reportData = useReportData();
  if (!reportData) return null;

  return (
  <>
    {reportData.sections.map((section, sectionIndex) => {
      const sectionNumber = startNumber + sectionIndex
      const sectionId = `section-${sectionIndex + 1}`
      let subIndex = 0
      return (
        <div key={sectionIndex} id={sectionId} className="mb-20 scroll-mt-20 print:break-before">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
            <HeadingNumber number={sectionNumber} />
            {section.title}
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
