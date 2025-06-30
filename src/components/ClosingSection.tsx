'use client'
import { useReport } from '@/contexts/ReportContext'
import HeadingNumber from './HeadingNumber'
import Image from 'next/image'

interface Props { number: number }

const ClosingSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport();
  if (!data) return null;

  return (
    <div id="thankyou" className="py-12 scroll-mt-20 print:py-0">
      <div className="max-w-[210mm] mx-auto px-4 print:px-0 print:max-w-none">
        {/* Letter-style container */}
        <div className="bg-white p-8 md:p-12 print:p-12 border-t border-b border-gray-200 print:border-0">
          {/* Letter header */}
          <div className="mb-8 pb-6 border-b border-gray-300 print:border-b-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="print:hidden">
                <HeadingNumber number={number} />
              </div>
              <div>
                <p className="text-gray-600 text-sm print:text-xs">From the desk of</p>
                <h3
                  className="text-2xl font-bold text-gray-800 print:text-xl"
                  {...(editing
                    ? {
                        contentEditable: true,
                        suppressContentEditableWarning: true,
                        onBlur: (e: React.FocusEvent<HTMLElement>) => {
                          const newData = { ...data }
                          newData.closingTitle = e.currentTarget.textContent || ''
                          setData(newData)
                        },
                      }
                    : {})}
                >
                  {data.closingTitle || "Dr. Tererai Trent"}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm print:text-xs">
              Founder, Tererai Trent International Foundation
            </p>
          </div>
          
          {/* Letter content */}
          <div className="">
            <div className="text-gray-700 text-lg leading-relaxed print:text-base print:leading-snug space-y-4">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-gray-800 first-letter:float-left first-letter:mr-2 first-letter:mt-1 print:first-letter:text-2xl">
                <span
                  {...(editing
                    ? {
                        contentEditable: true,
                        suppressContentEditableWarning: true,
                        onBlur: (e: React.FocusEvent<HTMLElement>) => {
                          const newData = { ...data }
                          newData.closing = e.currentTarget.textContent || ''
                          setData(newData)
                        },
                      }
                    : {})}
                >
                  {data.closing}
                </span>
              </p>
            </div>
            
            {/* Signature section */}
            <div className="mt-16 flex flex-col items-end print:mt-12">
              <div className="text-gray-800 font-bold print:text-sm mb-30">With gratitude,</div>
              
              <div className="text-gray-800 font-medium print:text-sm">
                Dr. Tererai Trent
              </div>
              <div className="text-gray-600 text-sm print:text-xs">
                Founder & CEO
              </div>
            </div>
          </div>
        </div>
        
        {/* Closing image */}
        {data.closingImage && (
          <div className="mt-10 print:mt-8 print:break-before-avoid">
            <div className="relative w-full h-[400px] print:h-[300px] rounded overflow-hidden">
              <Image 
                src={data.closingImage.src} 
                alt={data.closingImage.alt} 
                fill
                className={`object-cover ${data.closingImage.classes}`}
              />
            </div>
            <p
              className="text-center text-sm text-gray-600 italic mt-2 print:text-xs"
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...data }
                      if (newData.closingImage)
                        newData.closingImage.caption = e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {data.closingImage.caption}
            </p>
            {editing && (
              <div className="text-sm text-gray-500 text-center mt-2 print:text-xs">
                Src:{' '}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="bg-gray-100 px-2 py-1 rounded inline-block mt-1"
                  onBlur={(e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...data }
                    if (newData.closingImage)
                      newData.closingImage.src = e.currentTarget.textContent || ''
                    setData(newData)
                  }}
                >
                  {data.closingImage.src}
                </span>
                <br className="my-1"/>
                Alt:{' '}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="bg-gray-100 px-2 py-1 rounded inline-block mt-1"
                  onBlur={(e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...data }
                    if (newData.closingImage)
                      newData.closingImage.alt = e.currentTarget.textContent || ''
                    setData(newData)
                  }}
                >
                  {data.closingImage.alt}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ClosingSection;