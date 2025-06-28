'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const EditToggle = () => {
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

  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 z-50 print:hidden">
      <span className="text-sm font-medium text-gray-700">{editing ? 'Editing' : 'View'}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={editing}
          onChange={toggle}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
      </label>
    </div>
  )
}

export default EditToggle
