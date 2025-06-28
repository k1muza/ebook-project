'use client'
import React from 'react'
import useEditableReportData from '@/hooks/useEditableReportData'
import { ContentItem } from '@/types/report'
import EditableContentItem from './EditableContentItem'

const ReportEditor = () => {
  const { data, setData, save } = useEditableReportData()

  if (!data) return <p>Loading...</p>

  const updateMessageItem = (idx: number, value: string | ContentItem) => {
    const newData = { ...data }
    newData.message.content[idx] = value
    setData(newData)
  }

  const updateSectionItem = (
    sectionIndex: number,
    itemIndex: number,
    item: ContentItem
  ) => {
    const newData = { ...data }
    newData.sections[sectionIndex].content[itemIndex] = item
    setData(newData)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">Edit Report</h1>

      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Message</h2>
        {data.message.content.map((c, i) =>
          typeof c === 'string' ? (
            <textarea
              key={i}
              className="w-full border rounded p-2"
              value={c}
              onChange={(e) => updateMessageItem(i, e.target.value)}
            />
          ) : (
            <EditableContentItem
              key={i}
              item={c}
              onChange={(val) => updateMessageItem(i, val)}
            />
          )
        )}
      </div>

      {data.sections.map((section, sIdx) => (
        <div key={sIdx} className="space-y-4 border-t pt-4">
          <input
            className="w-full border rounded p-2 font-semibold"
            value={section.title}
            onChange={(e) => {
              const newData = { ...data }
              newData.sections[sIdx].title = e.target.value
              setData(newData)
            }}
          />
          {section.content.map((item, cIdx) => (
            <EditableContentItem
              key={cIdx}
              item={item as ContentItem}
              onChange={(val) => updateSectionItem(sIdx, cIdx, val)}
            />
          ))}
        </div>
      ))}

      <button
        className="px-4 py-2 bg-emerald-600 text-white rounded"
        onClick={() => save(data)}
      >
        Save
      </button>
    </div>
  )
}

export default ReportEditor
