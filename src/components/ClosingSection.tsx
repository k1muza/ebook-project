'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'
import EditableImage from './EditableImage'

interface Props { number: number }

const ClosingSection = ({ number }: Props) => {
  const reportData = useReportData();
  if (!reportData) return null;

  return (
    <div id="thankyou" className="text-center py-16 border-t border-emerald-100 scroll-mt-20 print:break-before">
      <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline justify-center">
        <HeadingNumber number={number} />
        A Heartfelt Thank You
      </h3>
      {reportData.closingImage && (
        <div className="mt-12 mb-8 max-w-3xl mx-auto print:break-inside-avoid">
          <EditableImage
            src={reportData.closingImage.src}
            alt={reportData.closingImage.alt}
            caption={reportData.closingImage.caption}
            width={reportData.closingImage.width}
            height={reportData.closingImage.height}
            containerClassName="w-full rounded-2xl overflow-hidden shadow-xl"
          />
        </div>
      )}
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">{reportData.closing}</p>

    </div>
  );
}

export default ClosingSection
