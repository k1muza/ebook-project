'use client'
import { resetReportData } from '@/utils/db'
import {
  RefreshCcw,
  Pencil,
  Eye,
  Printer,
  Save,
  ListTree,
  X,
} from 'lucide-react'
import { useState } from 'react'
import DataTreeEditor from './DataTreeEditor'
import { useReport } from '@/contexts/ReportContext'

const SettingsFloat = () => {
  const { editing, toggleEditing, save } = useReport()
  const [showTree, setShowTree] = useState(false)

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

  const toggleTree = () => setShowTree((o) => !o)

  const btn =
    'p-2 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500'

  return (
    <>
      {/* Backdrop to catch outside clicks */}
      {showTree && (
        <div
          onClick={toggleTree}
          className="fixed inset-0 z-40 print:hidden"
        />
      )}
      {/* Sliding panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white rounded-l-xl shadow-lg z-50 transform transition-transform duration-300 ease-in-out print:hidden ${showTree ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-3 border-b">
          <h2 className="font-semibold">Edit Report Data</h2>
          <button onClick={toggleTree} className={btn} title="Close editor">
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-48px)]">
          <DataTreeEditor />
        </div>
      </aside>
      {/* Floating button group */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 p-2 bg-white/70 backdrop-blur-md rounded-xl shadow z-40 print:hidden">
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
        <button onClick={toggleTree} className={btn} title="Edit data tree">
          <ListTree size={20} />
        </button>
      </div>
    </>
  )
}

export default SettingsFloat
