import Dexie, { Table } from 'dexie';
import { ReportData } from '@/types/report';

export interface ReportRecord extends ReportData {
  id: string;
}

class AppDB extends Dexie {
  report!: Table<ReportRecord, string>;

  constructor() {
    super('report-db');
    this.version(1).stores({
      report: '&id',
    });
  }
}

export const db = new AppDB();
export const REPORT_ID = 'current';
