'use client'
import { Dispatch, SetStateAction } from 'react'
import { BookOpen } from 'lucide-react'

interface TocItem {
  id: string
  title: string
}

interface Props {
  items: TocItem[]
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

const TableOfContents = ({ items, active, setActive }: Props) => (
  <div className="mb-20 p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200 shadow-sm mx-8">
    <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
      <BookOpen className="mr-3 text-emerald-600" size={32} />
      Table of Contents
    </h2>
    <ul className="space-y-3">
      {items.map((item, index) => (
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
            <span className="mr-3 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-semibold">
              {index + 1}
            </span>
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default TableOfContents
