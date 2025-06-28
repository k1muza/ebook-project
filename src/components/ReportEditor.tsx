'use client'
import React from 'react'
import useEditableReportData from '@/hooks/useEditableReportData'
import { ContentItem } from '@/types/report'
import ContentRenderer from './ContentRenderer'

const ReportEditor = () => {
  const { data, setData, save, reset } = useEditableReportData()

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
        {data.message.content.map((c, i) => (
          <ContentRenderer
            key={i}
            content={c}
            index={i}
            editable
            onChange={(val) => updateMessageItem(i, val as ContentItem | string)}
          />
        ))}
      </div>

      {data.sections.map((section, sIdx) => (
        <div key={sIdx} className="space-y-4 border-t pt-4">
          <h2
            className="text-3xl font-bold text-slate-800 mb-10"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => {
              const newData = { ...data }
              newData.sections[sIdx].title = e.currentTarget.textContent || ''
              setData(newData)
            }}
          >
            {section.title}
          </h2>
          {section.content.map((item, cIdx) => (
            <ContentRenderer
              key={cIdx}
              content={item as ContentItem}
              index={cIdx}
              editable
              onChange={(val) =>
                updateSectionItem(sIdx, cIdx, val as ContentItem)
              }
            />
          ))}
        </div>
      ))}

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-emerald-600 text-white rounded"
          onClick={() => save(data)}
        >
          Save
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
          onClick={async () => {
            await reset();
          }}
        >
          Reset Data
        </button>
      </div>
    </div>
  )
}

export default ReportEditor
