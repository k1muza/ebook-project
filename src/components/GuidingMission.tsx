'use client'
import { reportData } from '@/data/report'

const GuidingMission = () => (
  <div className="mb-16 text-center p-6 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl">
    <p className="text-xl italic text-emerald-700 mb-6">“{reportData.guidingPrinciple}”</p>
    <p className="text-lg text-slate-700">{reportData.mission}</p>
  </div>
)

export default GuidingMission
