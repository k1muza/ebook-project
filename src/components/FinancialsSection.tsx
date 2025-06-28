'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'

interface Props {
  number: number
}

const FinancialsSection = ({ number }: Props) => {
  const data = useReportData()
  if (!data || !data.financials) return null

  return (
    <div id="financials" className="mb-20 scroll-mt-20 print:break-before">
      <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
        <HeadingNumber number={number} />
        Financials
      </h2>
      <div className="overflow-x-auto">
        <table className="financial-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.financials.map((fin, idx) => (
              <tr key={idx}>
                <td>{fin.item}</td>
                <td>{fin.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FinancialsSection

