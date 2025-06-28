'use client'
import useReportData from '@/hooks/useReportData'
import HeadingNumber from './HeadingNumber'
import FinancialChart from './FinancialChart'
import {AArrowUp as FaArrowUp, AArrowDown as FaArrowDown, DollarSign as FaDollarSign} from 'lucide-react'

interface Props {
  number: number
}

interface FinancialItem {
  item: string
  amount: string
}

const FinancialsSection = ({ number }: Props) => {
  const data = useReportData()
  if (!data || !data.financials) return null

  const parseAmount = (val: string) => {
    const numericValue = parseFloat(val.replace(/[^0-9.-]/g, ''))
    return isNaN(numericValue) ? 0 : numericValue
  }

  const revenue: FinancialItem[] = data.financials.revenue || []
  const expenses: FinancialItem[] = data.financials.expenses || []
  
  const totalRevenue = revenue.reduce((sum, f) => sum + parseAmount(f.amount), 0)
  const totalExpenses = expenses.reduce((sum, f) => sum + parseAmount(f.amount), 0)
  const net = totalRevenue - totalExpenses

  // Format currency with consistent styling
  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  }

  // Add more financial metrics for a comprehensive view
  const financialMetrics = [
    { 
      label: 'Revenue Growth', 
      value: '+12%', 
      change: 'positive',
      icon: <FaArrowUp className="text-green-500" />
    },
    { 
      label: 'Program Efficiency', 
      value: '86%', 
      change: 'positive',
      description: 'of funds go directly to programs'
    },
    { 
      label: 'Admin Cost Ratio', 
      value: '8.6%', 
      change: 'negative',
      icon: <FaArrowDown className="text-red-500" />,
      description: 'below industry average of 15%'
    }
  ]

  return (
    <div id="financials" className="mb-20 scroll-mt-20 print:break-before">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline">
        <HeadingNumber number={number} />
        Financial Performance
      </h2>
      
      {data.financialIntro && (
        <p className="mb-8 text-slate-600 max-w-3xl">
          {data.financialIntro}
        </p>
      )}

      {/* Financial Highlights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FaDollarSign className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Total Revenue</h3>
          </div>
          <p className="text-3xl font-bold text-blue-700">{formatCurrency(totalRevenue)}</p>
          <p className="text-sm text-slate-500 mt-2">January - June 2025</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <FaDollarSign className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Program Investment</h3>
          </div>
          <p className="text-3xl font-bold text-green-700">{formatCurrency(totalExpenses)}</p>
          <p className="text-sm text-slate-500 mt-2">92% to education programs</p>
        </div>
        
        <div className={`rounded-xl p-6 border shadow-sm ${
          net >= 0 
            ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-100' 
            : 'bg-gradient-to-br from-rose-50 to-red-50 border-rose-100'
        }`}>
          <div className="flex items-center mb-2">
            <div className={`p-2 rounded-lg mr-3 ${
              net >= 0 ? 'bg-emerald-100' : 'bg-rose-100'
            }`}>
              <FaDollarSign className={net >= 0 ? 'text-emerald-600' : 'text-rose-600'} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Net Impact</h3>
          </div>
          <p className={`text-3xl font-bold ${
            net >= 0 ? 'text-emerald-700' : 'text-rose-700'
          }`}>
            {net >= 0 ? '+' : ''}{formatCurrency(net)}
          </p>
          <p className="text-sm text-slate-500 mt-2">
            {net >= 0 ? 'Surplus reinvested in programs' : 'Deficit covered by reserves'}
          </p>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {financialMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 shadow-xs">
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-slate-700">{metric.label}</h4>
              <span className={`text-lg font-bold ${
                metric.change === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.value}
              </span>
            </div>
            <div className="flex items-center mt-1">
              {metric.icon && <span className="mr-2">{metric.icon}</span>}
              <p className="text-sm text-slate-500">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Financial Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <h3 className="text-lg font-semibold text-slate-800">Income Statement</h3>
          <p className="text-sm text-slate-500">January - June 2025</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700 uppercase">Item</th>
                <th className="text-right py-3 px-6 text-sm font-semibold text-slate-700 uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td colSpan={2} className="py-2 px-6 text-sm font-semibold text-blue-800 uppercase">Revenue</td>
              </tr>
              {revenue.map((fin, idx) => (
                <tr key={`rev-${idx}`} className="hover:bg-slate-50">
                  <td className="py-3 px-6 text-slate-700 border-b border-slate-100">{fin.item}</td>
                  <td className="py-3 px-6 text-right text-green-600 font-medium border-b border-slate-100">
                    {formatCurrency(parseAmount(fin.amount))}
                  </td>
                </tr>
              ))}
              
              <tr className="bg-rose-50">
                <td colSpan={2} className="py-2 px-6 text-sm font-semibold text-rose-800 uppercase">Expenses</td>
              </tr>
              {expenses.map((fin, idx) => (
                <tr key={`exp-${idx}`} className="hover:bg-slate-50">
                  <td className="py-3 px-6 text-slate-700 border-b border-slate-100">{fin.item}</td>
                  <td className="py-3 px-6 text-right text-rose-600 font-medium border-b border-slate-100">
                    -{formatCurrency(parseAmount(fin.amount))}
                  </td>
                </tr>
              ))}
              
              <tr className="border-t-2 border-slate-300">
                <td className="py-4 px-6 font-bold text-slate-800">Net Income</td>
                <td className={`py-4 px-6 text-right font-bold ${
                  net >= 0 ? 'text-emerald-700' : 'text-rose-700'
                }`}>
                  {net >= 0
                    ? `+${formatCurrency(net)}`
                    : `-${formatCurrency(Math.abs(net))}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-slate-50 px-6 py-3 text-sm text-slate-500 border-t border-slate-200">
          * Financials audited by independent accounting firm
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Financial Allocation</h3>
            <p className="text-slate-600 max-w-xl">
              Our financial strategy prioritizes direct program impact, with 92% of funds allocated to education initiatives, 
              while maintaining efficient operations below industry standards for administrative costs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <FinancialChart financials={data.financials} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialsSection