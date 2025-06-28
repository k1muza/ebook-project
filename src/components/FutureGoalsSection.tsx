'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'
import EditableImage from './EditableImage'

interface Props { number: number }

const FutureGoalsSection = ({ number }: Props) => {
  const reportData = useReportData();
  if (!reportData) return null;

  return (
  <div id="future" className="mb-20 scroll-mt-20 print:break-before">
    <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
      <HeadingNumber number={number} />
      Looking Ahead: Our Goals for H2 2025
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reportData.futureGoals.map((goal, index) => (
        <div key={index} className="flex items-start bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100">
          <div className="bg-emerald-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
            {index + 1}
          </div>
          <p className="font-medium">{goal}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 print:break-inside-avoid">
      <EditableImage
        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
        alt="Future vision"
        width={800}
        height={320}
        caption="Vision for the new Library and Computer Lab at Musukwi Secondary"
        containerClassName="w-full rounded-2xl overflow-hidden shadow-xl"
      />
    </div>
  </div>
  );
}

export default FutureGoalsSection
