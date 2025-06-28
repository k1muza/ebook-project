'use client'
import { useReport } from '@/contexts/ReportContext'
import { GraduationCap, Handshake } from 'lucide-react'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const StrategicVisionSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
    <div id="vision" className="mb-20 scroll-mt-20 print:break-before">
      <h2
        className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.strategicVisionTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        <HeadingNumber number={number} />
        {data.strategicVisionTitle}
      </h2>
      <p
        className="text-lg mb-8"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.strategicVision.intro = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        {data.strategicVision.intro}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-blue-500">
          <h3
            className="text-xl font-bold text-blue-800 mb-4 flex items-center"
            {...(editing
              ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onBlur: (e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    newData.strategicVision.educationHeading =
                      e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
              : {})}
          >
            <GraduationCap className="mr-2" size={24} />
            {data.strategicVision.educationHeading}
          </h3>
          <ul className="space-y-4">
            {data.strategicVision.educationGoals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                </div>
                <div>
                  <h4
                    className="font-bold text-slate-800"
                    {...(editing
                      ? {
                          contentEditable: true,
                          suppressContentEditableWarning: true,
                          onBlur: (e: React.FocusEvent<HTMLElement>) => {
                            const newData = { ...(data as typeof data) }
                            newData.strategicVision.educationGoals[index].title =
                              e.currentTarget.textContent || ''
                            setData(newData)
                          },
                        }
                      : {})}
                  >
                    {goal.title}
                  </h4>
                  <p
                    className="text-slate-700"
                    {...(editing
                      ? {
                          contentEditable: true,
                          suppressContentEditableWarning: true,
                          onBlur: (e: React.FocusEvent<HTMLElement>) => {
                            const newData = { ...(data as typeof data) }
                            newData.strategicVision.educationGoals[index].description =
                              e.currentTarget.textContent || ''
                            setData(newData)
                          },
                        }
                      : {})}
                  >
                    {goal.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-amber-500">
          <h3
            className="text-xl font-bold text-amber-800 mb-4 flex items-center"
            {...(editing
              ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onBlur: (e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    newData.strategicVision.businessHeading =
                      e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
              : {})}
          >
            <Handshake className="mr-2" size={24} />
            {data.strategicVision.businessHeading}
          </h3>
          <ul className="space-y-4">
            {data.strategicVision.businessGoals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-amber-600 font-bold">{index + 4}.</span>
                </div>
                <div>
                  <h4
                    className="font-bold text-slate-800"
                    {...(editing
                      ? {
                          contentEditable: true,
                          suppressContentEditableWarning: true,
                          onBlur: (e: React.FocusEvent<HTMLElement>) => {
                            const newData = { ...(data as typeof data) }
                            newData.strategicVision.businessGoals[index].title =
                              e.currentTarget.textContent || ''
                            setData(newData)
                          },
                        }
                      : {})}
                  >
                    {goal.title}
                  </h4>
                  <p
                    className="text-slate-700"
                    {...(editing
                      ? {
                          contentEditable: true,
                          suppressContentEditableWarning: true,
                          onBlur: (e: React.FocusEvent<HTMLElement>) => {
                            const newData = { ...(data as typeof data) }
                            newData.strategicVision.businessGoals[index].description =
                              e.currentTarget.textContent || ''
                            setData(newData)
                          },
                        }
                      : {})}
                  >
                    {goal.description}
                  </p>
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
