'use client'
import { resetReportData } from '@/utils/db'
import { RefreshCcw, Pencil, Eye, Printer, Save } from 'lucide-react'
import { useReport } from '@/contexts/ReportContext'

const SettingsFloat = () => {
  const { editing, toggleEditing, save } = useReport()

  const toggle = () => {
    toggleEditing()
  }

  const reset = async () => {
    await resetReportData()
    window.location.reload()
  }

  const print = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  const btn =
    'p-2 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500'

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 p-2 bg-white/70 backdrop-blur-md rounded-xl shadow z-50 print:hidden">
      <button onClick={toggle} className={btn} title={editing ? 'View mode' : 'Edit mode'}>
        {editing ? <Eye size={20} /> : <Pencil size={20} />}
      </button>
      <button onClick={() => save()} className={btn} title="Save changes">
        <Save size={20} />
      </button>
      <button onClick={reset} className={btn} title="Reset data">
        <RefreshCcw size={20} />
      </button>
      <button onClick={print} className={btn} title="Print">
        <Printer size={20} />
      </button>
    </div>
  )
}

export default SettingsFloat
