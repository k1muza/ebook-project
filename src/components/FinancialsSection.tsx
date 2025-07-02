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
        <p
          className="mb-8 text-slate-600 max-w-3xl"
          {...(editing
            ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.financialIntro = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
            : {})}
        >
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
            <h3
              className="text-lg font-semibold text-slate-800"
              {...(editing
                ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onBlur: (e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    newData.totalRevenueHeading =
                      e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
                : {})}
            >
              {data.totalRevenueHeading}
            </h3>
          </div>
          <p
            className="text-3xl font-bold text-blue-700"
            {...(editing
              ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.totalRevenueAmount = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
              : {})}
          >
            {data.totalRevenueAmount || formatCurrency(totalRevenue)}
          </p>
          <p
            className="text-sm text-slate-500 mt-2"
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
            {data.period}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <FaDollarSign className="text-green-600" />
            </div>
            <h3
              className="text-lg font-semibold text-slate-800"
              {...(editing
                ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onBlur: (e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    newData.programInvestmentHeading =
                      e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
                : {})}
            >
              {data.programInvestmentHeading}
            </h3>
          </div>
          <p
            className="text-3xl font-bold text-green-700"
            {...(editing
              ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.programInvestmentAmount =
                    e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
              : {})}
          >
            {data.programInvestmentAmount || formatCurrency(totalExpenses)}
          </p>
          <p
            className="text-sm text-slate-500 mt-2"
            {...(editing
              ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.programInvestmentNote =
                    e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
              : {})}
          >
            {data.programInvestmentNote}
          </p>
        </div>

        <div
          className={`rounded-xl p-6 border shadow-sm ${net >= 0
              ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-100'
              : 'bg-gradient-to-br from-rose-50 to-red-50 border-rose-100'
            }`}
        >
          <div className="flex items-center mb-2">
            <div className={`p-2 rounded-lg mr-3 ${net >= 0 ? 'bg-emerald-100' : 'bg-rose-100'
              }`}>
              <FaDollarSign className={net >= 0 ? 'text-emerald-600' : 'text-rose-600'} />
            </div>
            <h3
              className="text-lg font-semibold text-slate-800"
              {...(editing
                ? {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onBlur: (e: React.FocusEvent<HTMLElement>) => {
                    const newData = { ...(data as typeof data) }
                    newData.netImpactHeading =
                      e.currentTarget.textContent || ''
                    setData(newData)
                  },
                }
                : {})}
            >
              {data.netImpactHeading}
            </h3>
          </div>
          <p
            className={`text-3xl font-bold ${net >= 0 ? 'text-emerald-700' : 'text-rose-700'
              }`}
            {...(editing
              ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.netImpactAmount = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
              : {})}
          >
            {data.netImpactAmount || `${net >= 0 ? '+' : ''}${formatCurrency(net)}`}
          </p>
          <p
            className="text-sm text-slate-500 mt-2"
            {...(editing
              ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  if (net >= 0)
                    newData.netSurplusText = e.currentTarget.textContent || ''
                  else
                    newData.netDeficitText = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
              : {})}
          >
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
                <h4
                  className="font-medium text-slate-700"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        if (newData.financialMetrics)
                          newData.financialMetrics[index].label =
                            e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {metric.label}
                </h4>
                <span
                  className={`text-lg font-bold ${metric.change === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        if (newData.financialMetrics)
                          newData.financialMetrics[index].value =
                            e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {metric.value}
                </span>
              </div>
              <div className="flex items-center mt-1">
                {Icon && <Icon className="mr-2" size={16} />}
                <p
                  className="text-sm text-slate-500"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        if (newData.financialMetrics)
                          newData.financialMetrics[index].description =
                            e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {metric.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 rounded-2xl p-8 mb-10 border border-white/50 shadow-lg shadow-blue-100/30 hover:shadow-blue-200/40 transition-all duration-300 print:break-inside-avoid backdrop-blur-sm backdrop-opacity-90">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              {...(editing ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.financialAllocationHeading =
                    e.currentTarget.textContent || ''
                  setData(newData)
                },
              } : {})}
            >
              {data.financialAllocationHeading}
            </h3>
            <p className="text-slate-700 max-w-xl leading-relaxed border-l-3 border-cyan-400 pl-4 py-1"
              {...(editing ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.financialAllocationText =
                    e.currentTarget.textContent || ''
                  setData(newData)
                },
              } : {})}
            >
              {data.financialAllocationText}
            </p>
          </div>

          <div className="flex-shrink-0 bg-white/80 rounded-xl p-3 shadow-inner border border-white">
            <FinancialChart financials={data.financials} />
          </div>
        </div>
      </div>

      {/* Enhanced Financial Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8 print:break-inside-avoid">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <h3
            className="text-lg font-semibold text-slate-800"
            {...(editing
              ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.incomeStatementHeading =
                    e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
              : {})}
          >
            {data.incomeStatementHeading}
          </h3>
          <p
            className="text-sm text-slate-500"
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
            {data.period}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th
                  className="text-left py-3 px-6 text-sm font-semibold text-slate-700 uppercase"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.incomeStatementItemHeading =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {data.incomeStatementItemHeading}
                </th>
                <th
                  className="text-right py-3 px-6 text-sm font-semibold text-slate-700 uppercase"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.incomeStatementAmountHeading =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {data.incomeStatementAmountHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td
                  colSpan={2}
                  className="py-2 px-6 text-sm font-semibold text-blue-800 uppercase"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.incomeStatementRevenueLabel =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {data.incomeStatementRevenueLabel}
                </td>
              </tr>
              {revenue.map((fin, idx) => (
                <tr key={`rev-${idx}`} className="hover:bg-slate-50">
                  <td
                    className="py-3 px-6 text-slate-700 border-b border-slate-100"
                    {...(editing
                      ? {
                        contentEditable: true,
                        suppressContentEditableWarning: true,
                        onBlur: (e: React.FocusEvent<HTMLElement>) => {
                          const newData = { ...(data as typeof data) }
                          if (newData.financials)
                            newData.financials.revenue[idx].item =
                              e.currentTarget.textContent || ''
                          setData(newData)
                        },
                      }
                      : {})}
                  >
                    {fin.item}
                  </td>
                  <td
                    className="py-3 px-6 text-right text-green-600 font-medium border-b border-slate-100"
                    {...(editing
                      ? {
                        contentEditable: true,
                        suppressContentEditableWarning: true,
                        onBlur: (e: React.FocusEvent<HTMLElement>) => {
                          const newData = { ...(data as typeof data) }
                          if (newData.financials)
                            newData.financials.revenue[idx].amount =
                              e.currentTarget.textContent || ''
                          setData(newData)
                        },
                      }
                      : {})}
                  >
                    {formatCurrency(parseAmount(fin.amount))}
                  </td>
                </tr>
              ))}

              <tr className="bg-rose-50">
                <td
                  colSpan={2}
                  className="py-2 px-6 text-sm font-semibold text-rose-800 uppercase"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.incomeStatementExpensesLabel =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {data.incomeStatementExpensesLabel}
                </td>
              </tr>
              {expenses.map((fin, idx) => (
                <tr key={`exp-${idx}`} className="hover:bg-slate-50">
                  <td
                    className="py-3 px-6 text-slate-700 border-b border-slate-100"
                    {...(editing
                      ? {
                        contentEditable: true,
                        suppressContentEditableWarning: true,
                        onBlur: (e: React.FocusEvent<HTMLElement>) => {
                          const newData = { ...(data as typeof data) }
                          if (newData.financials)
                            newData.financials.expenses[idx].item =
                              e.currentTarget.textContent || ''
                          setData(newData)
                        },
                      }
                      : {})}
                  >
                    {fin.item}
                  </td>
                  <td
                    className="py-3 px-6 text-right text-rose-600 font-medium border-b border-slate-100"
                    {...(editing
                      ? {
                        contentEditable: true,
                        suppressContentEditableWarning: true,
                        onBlur: (e: React.FocusEvent<HTMLElement>) => {
                          const newData = { ...(data as typeof data) }
                          if (newData.financials)
                            newData.financials.expenses[idx].amount =
                              e.currentTarget.textContent || ''
                          setData(newData)
                        },
                      }
                      : {})}
                  >
                    -{formatCurrency(parseAmount(fin.amount))}
                  </td>
                </tr>
              ))}

              <tr className="border-t-2 border-slate-300">
                <td
                  className="py-4 px-6 font-bold text-slate-800"
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.incomeStatementNetLabel =
                          e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {data.incomeStatementNetLabel}
                </td>
                <td
                  className={`py-4 px-6 text-right font-bold ${net >= 0 ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  {...(editing
                    ? {
                      contentEditable: true,
                      suppressContentEditableWarning: true,
                      onBlur: (e: React.FocusEvent<HTMLElement>) => {
                        const newData = { ...(data as typeof data) }
                        newData.netIncomeAmount = e.currentTarget.textContent || ''
                        setData(newData)
                      },
                    }
                    : {})}
                >
                  {data.netIncomeAmount ||
                    (net >= 0
                      ? `+${formatCurrency(net)}`
                      : `-${formatCurrency(Math.abs(net))}`)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="bg-slate-50 px-6 py-3 text-sm text-slate-500 border-t border-slate-200"
          {...(editing
            ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.financialAuditNote = e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
            : {})}
        >
          {data.financialAuditNote}
        </div>
      </div>

      {data.financialPoints && (
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {data.financialPoints.map((point, index) => (
            <li
              key={index}
              className="text-lg"
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as typeof data) }
                      if (newData.financialPoints)
                        newData.financialPoints[index] =
                          e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      {data.expenditureIncreaseSummary && (
        <p
          className="text-lg text-gray-700 mb-2"
          {...(editing
            ? {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: (e: React.FocusEvent<HTMLElement>) => {
                  const newData = { ...(data as typeof data) }
                  newData.expenditureIncreaseSummary =
                    e.currentTarget.textContent || ''
                  setData(newData)
                },
              }
            : {})}
        >
          {data.expenditureIncreaseSummary}
        </p>
      )}

      {data.expenditureIncreaseReasons && (
        <ul className="list-disc pl-6 mb-8 space-y-2">
          {data.expenditureIncreaseReasons.map((reason, index) => (
            <li
              key={index}
              className="text-lg"
              {...(editing
                ? {
                    contentEditable: true,
                    suppressContentEditableWarning: true,
                    onBlur: (e: React.FocusEvent<HTMLElement>) => {
                      const newData = { ...(data as typeof data) }
                      if (newData.expenditureIncreaseReasons)
                        newData.expenditureIncreaseReasons[index] =
                          e.currentTarget.textContent || ''
                      setData(newData)
                    },
                  }
                : {})}
            >
              {reason}
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default FinancialsSection
