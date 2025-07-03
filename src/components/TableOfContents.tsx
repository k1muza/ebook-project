'use client'
import { Dispatch, SetStateAction } from 'react'
import { useReport } from '@/contexts/ReportContext'

interface TocItem {
  id: string
  title: string
  number: string
  children?: TocItem[]
}

interface Props {
  items: TocItem[]
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

const TableOfContents = ({ items, active, setActive }: Props) => {
  const { data, setData, editing } = useReport()
  if (!data) return null
  const circleColor = (index: number) => {
    const startHue = 160
    const endHue = 220
    const hue = startHue + ((endHue - startHue) * index) / Math.max(items.length - 1, 1)
    return `hsl(${hue}, 70%, 45%)`
  }

  const renderItems = (tocItems: TocItem[], level = 0) => (
    <ul className={`${level === 0 ? 'space-y-3' : 'space-y-2 ml-8'}`}>
      {tocItems.map((item, index) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={e => {
              e.preventDefault()
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              setActive(item.id)
            }}
            className={`flex items-center p-3 rounded-lg transition-all ${
              active === item.id ? 'bg-emerald-100 text-emerald-700 font-bold' : 'hover:bg-emerald-50'
            }`}
          >
            {level === 0 ? (
              <span
                className="mr-3 flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold"
                style={{ backgroundColor: circleColor(index) }}
              >
                {item.number}
              </span>
            ) : (
              <span className="mr-3 font-semibold text-slate-700">{item.number}</span>
            )}
            <span>{item.title}</span>
          </a>
          {item.children && renderItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="mb-20 px-8 print:px-0 mx-8 print:mx-0 print:break-before print:break-after relative">
      <div 
        style={{top: "-48px", right: "-40px"}}
        className="mb-12 text-center p-6 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-full w-70 h-70 flex flex-col items-center justify-center absolute">
        <p
          className="text-sm italic text-emerald-700 mb-6"
          {...(editing
            ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.guidingPrinciple = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
            : {})}
        >
          “{data.guidingPrinciple}”
        </p>
        <p
          className="text-sm text-slate-700"
          {...(editing
            ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.mission = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
            : {})}
        >
          {data.mission}
        </p>
      </div>
      <h2
        className="text-3xl font-bold text-slate-800 mb-6 flex items-center"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.tocTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        {data.tocTitle}
      </h2>
      {renderItems(items)}
    </div>
  )
}

export default TableOfContents
