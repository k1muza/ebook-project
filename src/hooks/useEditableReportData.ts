'use client'
import { useEffect, useState } from 'react'
import { ReportData } from '@/types/report'
import { db, REPORT_ID, resetReportData } from '@/utils/db'

// Hook that loads report data from Dexie and allows saving updates
const useEditableReportData = () => {
  const [data, setData] = useState<ReportData | null>(null)

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

  const save = async (newData: ReportData) => {
    await db.table('report').put({ ...(newData as ReportData), id: REPORT_ID })
    setData(newData)
  }

  const reset = async () => {
    const fresh = await resetReportData()
    setData(fresh)
  }

  return { data, setData, save, reset }
}

export default useEditableReportData
