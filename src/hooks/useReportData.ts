
'use client';
import { ReportData } from '@/types/report';
import { useReport } from '@/contexts/ReportContext';

const useReportData = (): ReportData | null => {
  const { data } = useReport();
  return data;
};

export default useReportData;
