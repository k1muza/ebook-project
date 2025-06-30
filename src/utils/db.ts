'use client'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'
import { ReportData } from '@/types/report'
import { reportData as initialData } from '@/data/report'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const database = getDatabase(app)

export const REPORT_PATH = 'report/current'

export const fetchReportData = async (): Promise<ReportData> => {
  const snapshot = await get(ref(database, REPORT_PATH))
  if (snapshot.exists()) {
    return snapshot.val() as ReportData
  } else {
    await resetReportData()
    return initialData as ReportData
  }
}

export const saveReportData = async (data: ReportData): Promise<void> => {
  await set(ref(database, REPORT_PATH), data)
}

export const resetReportData = async (): Promise<ReportData> => {
  await set(ref(database, REPORT_PATH), initialData)
  return initialData as ReportData
}
