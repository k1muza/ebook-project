'use client';
import { useEffect, useState } from 'react';
import { ReportData } from '@/types/report';
import { db, REPORT_ID, resetReportData } from '@/utils/db';

const useReportData = (): ReportData | null => {
  const [data, setData] = useState<ReportData | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const existing = await db.table('report').get(REPORT_ID);
        if (existing) {
          setData(existing as ReportData);
        } else {
          const fresh = await resetReportData();
          setData(fresh);
        }
      } catch (err) {
        console.error('Failed to load report from IndexedDB', err);
        const fresh = await resetReportData();
        setData(fresh);
      }
    };
    load();
  }, []);

  return data;
};

export default useReportData;
