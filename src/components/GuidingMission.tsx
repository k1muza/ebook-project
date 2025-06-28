'use client'
import { useReport } from '@/contexts/ReportContext'

const GuidingMission = () => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
  <div className="mb-16 text-center p-6 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl print:break-before">
    <p
      className="text-xl italic text-emerald-700 mb-6"
      {...(editing
        ? {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: (e: React.FocusEvent<HTMLElement>) => {
              const newData = { ...(data as typeof data) };
              newData.guidingPrinciple = e.currentTarget.textContent || '';
              setData(newData);
            },
          }
        : {})}
    >
      “{data.guidingPrinciple}”
    </p>
    <p
      className="text-lg text-slate-700"
      {...(editing
        ? {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: (e: React.FocusEvent<HTMLElement>) => {
              const newData = { ...(data as typeof data) };
              newData.mission = e.currentTarget.textContent || '';
              setData(newData);
            },
          }
        : {})}
    >
      {data.mission}
    </p>
  </div>
  );
}

export default GuidingMission
