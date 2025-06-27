'use client'
import { reportData } from '@/data/report'
import ContentRenderer from './ContentRenderer'

const Sections = () => (
  <>
    {reportData.sections.map((section, sectionIndex) => {
      const sectionId = `section-${sectionIndex + 1}`
      return (
        <div key={sectionIndex} id={sectionId} className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            {sectionIndex + 1}. {section.title}
          </h2>
          <div className="space-y-6">
            {section.content.map((content, contentIndex) => (
              <ContentRenderer key={contentIndex} content={content} index={contentIndex} />
            ))}
          </div>
        </div>
      )
    })}
  </>
)

export default Sections
