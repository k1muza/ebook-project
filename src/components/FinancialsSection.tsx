'use client'
import HeadingNumber from './HeadingNumber'
import FinancialChart from './FinancialChart'
import { DollarSign as FaDollarSign } from 'lucide-react'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useReport } from '@/contexts/ReportContext'

interface Props {
  number: number
}

interface FinancialItem {
  item: string
  amount: string
}

const FinancialsSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport()
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

  const financialMetrics = data.financialMetrics || []

  return (
    <div id="financials" className="mb-20 scroll-mt-20">
      <h2
        className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.financialsTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        <HeadingNumber number={number} />
        {data.financialsTitle || 'Financials'}
      </h2>
      
      {data.financialIntro && (
        <p className="mb-8 text-slate-600 max-w-3xl">
          {data.financialIntro}
        </p>
      )}

      {/* Financial Highlights Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FaDollarSign className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              {data.totalRevenueHeading}
            </h3>
          </div>
          <p className="text-3xl font-bold text-blue-700">{formatCurrency(totalRevenue)}</p>
          <p className="text-sm text-slate-500 mt-2">{data.period}</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <FaDollarSign className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              {data.programInvestmentHeading}
            </h3>
          </div>
          <p className="text-3xl font-bold text-green-700">{formatCurrency(totalExpenses)}</p>
          <p className="text-sm text-slate-500 mt-2">{data.programInvestmentNote}</p>
        </div>
        
        <div
          className={`rounded-xl p-6 border shadow-sm ${
            net >= 0
              ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-100'
              : 'bg-gradient-to-br from-rose-50 to-red-50 border-rose-100'
          }`}
        >
          <div className="flex items-center mb-2">
            <div className={`p-2 rounded-lg mr-3 ${
              net >= 0 ? 'bg-emerald-100' : 'bg-rose-100'
            }`}>
              <FaDollarSign className={net >= 0 ? 'text-emerald-600' : 'text-rose-600'} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              {data.netImpactHeading}
            </h3>
          </div>
          <p className={`text-3xl font-bold ${
            net >= 0 ? 'text-emerald-700' : 'text-rose-700'
          }`}>
            {net >= 0 ? '+' : ''}{formatCurrency(net)}
          </p>
          <p className="text-sm text-slate-500 mt-2">
            {net >= 0 ? data.netSurplusText : data.netDeficitText}
          </p>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {financialMetrics.map((metric, index) => {
          const Icon = (Icons as unknown as Record<string, LucideIcon>)[metric.icon || 'ArrowUp']
          return (
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
                {Icon && <Icon className="mr-2" size={16} />}
                <p className="text-sm text-slate-500">{metric.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Enhanced Financial Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <h3 className="text-lg font-semibold text-slate-800">
            {data.incomeStatementHeading}
          </h3>
          <p className="text-sm text-slate-500">{data.period}</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700 uppercase">
                  {data.incomeStatementItemHeading}
                </th>
                <th className="text-right py-3 px-6 text-sm font-semibold text-slate-700 uppercase">
                  {data.incomeStatementAmountHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td colSpan={2} className="py-2 px-6 text-sm font-semibold text-blue-800 uppercase">
                  {data.incomeStatementRevenueLabel}
                </td>
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
                <td colSpan={2} className="py-2 px-6 text-sm font-semibold text-rose-800 uppercase">
                  {data.incomeStatementExpensesLabel}
                </td>
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
                <td className="py-4 px-6 font-bold text-slate-800">
                  {data.incomeStatementNetLabel}
                </td>
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
          {data.financialAuditNote}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 print:break-inside-avoid">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {data.financialAllocationHeading}
            </h3>
            <p className="text-slate-600 max-w-xl">{data.financialAllocationText}</p>
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