'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { ReportData } from '@/types/report'
import {
  fetchReportData,
  saveReportData,
  resetReportData,
} from '@/utils/db'

type ReportContextType = {
  data: ReportData | null
  setData: React.Dispatch<React.SetStateAction<ReportData | null>>
  save: (newData?: ReportData) => Promise<void>
  reset: () => Promise<void>
  editing: boolean
  toggleEditing: () => void
  dirty: boolean
}

const ReportContext = createContext<ReportContextType | undefined>(undefined)

export const ReportProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setDataState] = useState<ReportData | null>(null)
  const [dirty, setDirty] = useState(false)
  const [editing, setEditing] = useState(false)

  const setData: React.Dispatch<React.SetStateAction<ReportData | null>> = (
    val
  ) => {
    setDirty(true)
    setDataState(val)
  }

  useEffect(() => {
    const load = async () => {
      try {
        const existing = await fetchReportData()
        setDataState(existing)
        setDirty(false)
      } catch (err) {
        console.error('Failed to load report from Firebase', err)
        const fresh = await resetReportData()
        setDataState(fresh)
        setDirty(false)
      }
    }
    load()
  }, [])

  const save = async (newData?: ReportData) => {
    const toSave = newData ?? data
    if (!toSave) return
    await saveReportData(toSave as ReportData)
    toast.success('Saved changes')
    setDirty(false)
  }

  const reset = async () => {
    const fresh = await resetReportData()
    setDataState(fresh)
    setDirty(false)
  }

  const toggleEditing = () => setEditing((e) => !e)

  return (
    <ReportContext.Provider
      value={{ data, setData, save, reset, editing, toggleEditing, dirty }}
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
