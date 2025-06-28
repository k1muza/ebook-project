'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'
import FinancialChart from './FinancialChart'

interface Props {
  number: number
}

const FinancialsSection = ({ number }: Props) => {
  const data = useReportData()
  if (!data || !data.financials) return null

  const parseAmount = (val: string) => parseFloat(val.replace(/[$,]/g, ''))
  const revenue = data.financials.revenue
  const expenses = data.financials.expenses
  const totalRevenue = revenue.reduce((sum, f) => sum + parseAmount(f.amount), 0)
  const totalExpenses = expenses.reduce((sum, f) => sum + parseAmount(f.amount), 0)
  const net = totalRevenue - totalExpenses

  return (
    <div id="financials" className="mb-20 scroll-mt-20 print:break-before">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline">
        <HeadingNumber number={number} />
        Financials
      </h2>
      {data.financialIntro && <p className="mb-6">{data.financialIntro}</p>}
      <div className="overflow-x-auto">
        <table className="financial-table">
          <thead>
            <tr>
              <th colSpan={2}>Income Statement</th>
            </tr>
            <tr>
              <th>Item</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold">
              <td colSpan={2}>Revenue</td>
            </tr>
            {revenue.map((fin, idx) => (
              <tr key={`rev-${idx}`}>
                <td>{fin.item}</td>
                <td className="text-right">{fin.amount}</td>
              </tr>
            ))}
            <tr className="font-semibold">
              <td colSpan={2}>Expenses</td>
            </tr>
            {expenses.map((fin, idx) => (
              <tr key={`exp-${idx}`}>
                <td>{fin.item}</td>
                <td className="text-right">-{fin.amount}</td>
              </tr>
            ))}
            <tr className="font-bold border-t-2">
              <td>Net Income</td>
              <td className="text-right">
                {net >= 0
                  ? `$${net.toLocaleString()}`
                  : `-$${Math.abs(net).toLocaleString()}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <FinancialChart financials={data.financials} />
      </div>
    </div>
  )
}

export default FinancialsSection

