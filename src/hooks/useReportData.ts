'use client';
import { useEffect, useState } from 'react';
import { ReportData } from '@/types/report';
import { db, REPORT_ID } from '@/utils/db';
import { reportData as initialData } from '@/data/report';

const useReportData = (): ReportData | null => {
  const [data, setData] = useState<ReportData | null>(null);

  useEffect(() => {
    const load = async () => {
      const existing = await db.table('report').get(REPORT_ID);
      if (existing) {
        setData(existing as ReportData);
      } else {
        await db.table('report').put({ ...(initialData as ReportData), id: REPORT_ID });
        setData(initialData as ReportData);
      }
    };
    load();
  }, []);

  return data;
};

export default useReportData;
