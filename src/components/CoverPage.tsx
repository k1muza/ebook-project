'use client'
import { useReport } from '@/contexts/ReportContext';

const CoverPage = () => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
  <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 mb-16 relative print:min-h-screen print:mb-0 print:py-0 print:flex print:justify-center print:items-center">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-amber-100 z-0"></div>
    <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-emerald-200 opacity-50"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-amber-200 opacity-50"></div>
    <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-purple-200 opacity-50"></div>
    <div className="relative z-10 px-8 py-12 max-w-3xl mx-auto bg-transparent shadow-none">
      {data.logoImage && (
        <div className="absolute bottom-0 right-0 w-40 h-40 hidden">
          <img
            src={data.logoImage.src}
            alt={data.logoImage.alt}
            className="w-full h-full object-contain"
          />
          {editing && (
            <div className="text-xs text-gray-500 text-center mt-1">
              Src:{' '}
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  if (newData.logoImage) newData.logoImage.src = e.currentTarget.textContent || ''
                  setData(newData)
                }}
              >
                {data.logoImage.src}
              </span>
              <br />
              Alt:{' '}
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  if (newData.logoImage) newData.logoImage.alt = e.currentTarget.textContent || ''
                  setData(newData)
                }}
              >
                {data.logoImage.alt}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="bg-emerald-100 p-2 px-4 rounded-full mb-8 inline-block">
        <p
          className="text-emerald-700 font-sans font-bold"
          {...(editing
            ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.period = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
            : {})}
        >
          Progress Report • {data.period}
        </p>
      </div>
      <h1
        className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.reportTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        {data.reportTitle}
      </h1>
      <div className="w-32 h-1 bg-amber-500 my-8 mx-auto"></div>
      <p
        className="text-2xl text-slate-600 mb-12"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.organization = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        {data.organization}
        <br />
        {data.period}
      </p>
      {data.coverImage && (
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-emerald-100 shadow-xl mx-auto">
          <img
            src={data.coverImage.src}
            alt={data.coverImage.alt}
            className="w-full h-full object-cover opacity-90"
          />
          {editing && (
            <div className="text-sm text-gray-500 text-center mt-2">
              Src:{' '}
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  if (newData.coverImage) newData.coverImage.src = e.currentTarget.textContent || ''
                  setData(newData)
                }}
              >
                {data.coverImage.src}
              </span>
              <br />
              Alt:{' '}
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  if (newData.coverImage) newData.coverImage.alt = e.currentTarget.textContent || ''
                  setData(newData)
                }}
              >
                {data.coverImage.alt}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
  );
};

export default CoverPage;
