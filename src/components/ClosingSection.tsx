'use client'
import { reportData } from '@/data/report'

const ClosingSection = () => (
  <div id="thankyou" className="text-center py-16 border-t border-emerald-100 scroll-mt-20">
    <h3 className="text-3xl font-bold text-slate-800 mb-6">A Heartfelt Thank You</h3>
    <p className="text-xl text-slate-600 max-w-3xl mx-auto">{reportData.closing}</p>
    <div className="mt-12 max-w-3xl mx-auto print:break-inside-avoid">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
        <img src={reportData.closingImage.src} alt={reportData.closingImage.alt} className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-sm text-gray-600 italic mt-2">{reportData.closingImage.caption}</p>
    </div>
  </div>
)

export default ClosingSection
