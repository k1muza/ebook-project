'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ReportData } from '@/types/report'
import { db, REPORT_ID, resetReportData } from '@/utils/db'

type ReportContextType = {
  data: ReportData | null
  setData: React.Dispatch<React.SetStateAction<ReportData | null>>
  save: (newData?: ReportData) => Promise<void>
  reset: () => Promise<void>
  editing: boolean
  toggleEditing: () => void
}

const ReportContext = createContext<ReportContextType | undefined>(undefined)

export const ReportProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ReportData | null>(null)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const existing = await db.table('report').get(REPORT_ID)
        if (existing) {
          setData(existing as ReportData)
        } else {
          const fresh = await resetReportData()
          setData(fresh)
        }
      } catch (err) {
        console.error('Failed to load report from IndexedDB', err)
        const fresh = await resetReportData()
        setData(fresh)
      }
    }
    load()
  }, [])

  const save = async (newData?: ReportData) => {
    const toSave = newData ?? data
    if (!toSave) return
    await db.table('report').put({ ...(toSave as ReportData), id: REPORT_ID })
  }

  const reset = async () => {
    const fresh = await resetReportData()
    setData(fresh)
  }

  const toggleEditing = () => setEditing((e) => !e)

  return (
    <ReportContext.Provider
      value={{ data, setData, save, reset, editing, toggleEditing }}
    >
      {children}
    </ReportContext.Provider>
  )
}

export const useReport = () => {
  const ctx = useContext(ReportContext)
  if (!ctx) throw new Error('useReport must be used within ReportProvider')
  return ctx
}

export default ReportContext
