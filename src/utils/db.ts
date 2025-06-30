'use client'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'
import { ReportData } from '@/types/report'
import { reportData as initialData } from '@/data/report'

const firebaseConfig = {
  apiKey: "AIzaSyAy4scLKVS5Ry8O2volMnH8mz123Klb7mw",
  authDomain: "ebook-project-9b88d.firebaseapp.com",
  databaseURL: "https://ebook-project-9b88d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ebook-project-9b88d",
  storageBucket: "ebook-project-9b88d.firebasestorage.app",
  messagingSenderId: "635252380775",
  appId: "1:635252380775:web:9946d49d0f016d4b42b0c2"
}

console.log(firebaseConfig)
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
