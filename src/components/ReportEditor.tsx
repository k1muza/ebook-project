'use client'
import React from 'react'
import useEditableReportData from '@/hooks/useEditableReportData'
import { ContentItem } from '@/types/report'
import EditableContentRenderer from './EditableContentRenderer'

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
      <h1
        className="text-2xl font-bold"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => {
          const newData = { ...data }
          newData.reportTitle = e.currentTarget.textContent || ''
          setData(newData)
        }}
      >
        {data.reportTitle}
      </h1>

      <div className="space-y-4">
        <h2
          className="font-semibold text-xl"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => {
            const newData = { ...data }
            newData.message.title = e.currentTarget.textContent || ''
            setData(newData)
          }}
        >
          {data.message.title}
        </h2>
        {data.message.content.map((c, i) => (
          <EditableContentRenderer
            key={i}
            content={c}
            index={i}
            onChange={(val) => updateMessageItem(i, val)}
          />
        ))}
      </div>

      {data.sections.map((section, sIdx) => (
        <div key={sIdx} className="space-y-4 border-t pt-4">
          <div
            className="font-semibold text-xl"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => {
              const newData = { ...data }
              newData.sections[sIdx].title = e.currentTarget.textContent || ''
              setData(newData)
            }}
          >
            {section.title}
          </div>
          {section.content.map((item, cIdx) => (
            <EditableContentRenderer
              key={cIdx}
              content={item as ContentItem}
              index={cIdx}
              onChange={(val) => updateSectionItem(sIdx, cIdx, val as ContentItem)}
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
