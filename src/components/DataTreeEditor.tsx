'use client'
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import { useReport } from '@/contexts/ReportContext'
import { ReportData } from '@/types/report'

const DataTreeEditor = () => {
  const { data, setData, save } = useReport()

  if (!data) return <p>Loading...</p>

  const update = (src: unknown) => {
    const cloned = JSON.parse(JSON.stringify(src)) as ReportData
    setData(cloned)
    save(cloned)
  }

  return (
    <div className="p-4">
      <JsonView
        src={data}
        editable={{ add: true, edit: true, delete: true }}
        onEdit={({ src }) => update(src)}
        onAdd={({ src }) => update(src)}
        onDelete={({ src }) => update(src)}
        style={{ backgroundColor: 'transparent' }}
        theme="github"
      />
    </div>
  )
}

export default DataTreeEditor
