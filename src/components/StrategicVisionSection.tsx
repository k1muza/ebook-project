'use client'
import useReportData from '@/hooks/useReportData'
import { GraduationCap, Handshake } from 'lucide-react'

interface Props { number: number }

const StrategicVisionSection = ({ number }: Props) => {
  const reportData = useReportData();
  if (!reportData) return null;

  return (
    <div id="vision" className="mb-20 scroll-mt-20 print:break-before">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">
        {number}. Our Strategic Vision: A Blueprint for a Brighter Future
      </h2>
      <p className="text-lg mb-8">{reportData.strategicVision.intro}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
            <GraduationCap className="mr-2" size={24} />
            Education-Driven Goals
          </h3>
          <ul className="space-y-4">
            {reportData.strategicVision.educationGoals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{goal.title}</h4>
                  <p className="text-slate-700">{goal.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-amber-500">
          <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
            <Handshake className="mr-2" size={24} />
            Business-Driven Goals
          </h3>
          <ul className="space-y-4">
            {reportData.strategicVision.businessGoals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-amber-600 font-bold">{index + 4}.</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{goal.title}</h4>
                  <p className="text-slate-700">{goal.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StrategicVisionSection
