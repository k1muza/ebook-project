'use client'
import ContentRenderer from './ContentRenderer'
import { reportData } from '@/data/report'

interface Props {
  number: number
}

const MessageSection = ({ number }: Props) => (
  <div id="message" className="mb-20 scroll-mt-20">
    <h2 className="text-3xl font-bold text-slate-800 mb-6">
      {number}. {reportData.message.title}
    </h2>
    {reportData.message.content.map((content, index) => (
      <ContentRenderer key={index} content={content} index={index} />
    ))}
  </div>
)

export default MessageSection
