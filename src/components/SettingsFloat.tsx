'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { resetReportData } from '@/utils/db'
import { RefreshCcw, Pencil, Eye, Printer } from 'lucide-react'

const SettingsFloat = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setEditing(pathname.startsWith('/edit'))
  }, [pathname])

  const toggle = () => {
    if (editing) {
      router.push('/')
    } else {
      router.push('/edit')
    }
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
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 p-2 bg-white/70 backdrop-blur-md rounded-xl shadow z-50">
      <button onClick={toggle} className={btn} title={editing ? 'View mode' : 'Edit mode'}>
        {editing ? <Eye size={20} /> : <Pencil size={20} />}
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
