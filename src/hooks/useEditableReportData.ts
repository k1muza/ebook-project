
'use client'
import { useReport } from '@/contexts/ReportContext'

// Hook exposing report editing utilities from context
const useEditableReportData = () => {
  const { data, setData, save, reset } = useReport()
  return { data, setData, save, reset }
}

export default useEditableReportData
