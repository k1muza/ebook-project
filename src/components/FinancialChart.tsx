'use client'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js'
import { IncomeStatement } from '@/types/report'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

interface Props {
  financials: IncomeStatement
}

const parseAmount = (val: string) => parseFloat(val.replace('$', '').replace(' ', ''))

const FinancialChart = ({ financials }: Props) => {
  const labels = [
    ...financials.revenue.map(r => r.item),
    ...financials.expenses.map(e => e.item),
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'Amount (USD)',
        data: [
          ...financials.revenue.map(r => parseAmount(r.amount)),
          ...financials.expenses.map(e => -parseAmount(e.amount)),
        ],
        backgroundColor: [
          ...financials.revenue.map(() => 'rgba(16,185,129,0.8)'),
          ...financials.expenses.map(() => 'rgba(239,68,68,0.8)'),
        ],
      },
    ],
  }
  const options: ChartOptions<'bar'> = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        ticks: {
          callback: (value) =>
            `$${Math.abs(Number(value)).toLocaleString()}`,
        },
      },
    },
  }
  return <Bar data={data} options={options} />
}

export default FinancialChart

