'use client'
import { useEffect, useState } from 'react'
import { ReportData } from '@/types/report'
import { db, REPORT_ID } from '@/utils/db'

// Hook that loads report data from Dexie and allows saving updates
const useEditableReportData = () => {
  const [data, setData] = useState<ReportData | null>(null)

  useEffect(() => {
    const load = async () => {
      const existing = await db.table('report').get(REPORT_ID)
      if (existing) {
        setData(existing as ReportData)
      }
    }
    load()
  }, [])

  const save = async (newData: ReportData) => {
    await db.table('report').put({ ...(newData as ReportData), id: REPORT_ID })
    setData(newData)
  }

  return { data, setData, save }
}

export default useEditableReportData
