import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Line } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import financialData from '@/data/financial-data.json'

const COLORS = {
  grower: 'hsl(var(--primary))',
  processor: 'hsl(var(--secondary))',
  distributor: 'hsl(var(--accent))',
  total: 'hsl(var(--foreground))'
}

export function RevenueProjectionChart() {
  const data = [
    {
      year: 'Year 1',
      grower: financialData.ventures.grower.revenue.year1 / 1000000,
      processor: financialData.ventures.processor.revenue.year1 / 1000000,
      distributor: financialData.ventures.distributor.revenue.year1 / 1000000,
      total: financialData.overview.projectedRevenue.year1 / 1000000
    },
    {
      year: 'Year 2',
      grower: financialData.ventures.grower.revenue.year2 / 1000000,
      processor: financialData.ventures.processor.revenue.year2 / 1000000,
      distributor: financialData.ventures.distributor.revenue.year2 / 1000000,
      total: financialData.overview.projectedRevenue.year2 / 1000000
    },
    {
      year: 'Year 3',
      grower: financialData.ventures.grower.revenue.year3 / 1000000,
      processor: financialData.ventures.processor.revenue.year3 / 1000000,
      distributor: financialData.ventures.distributor.revenue.year3 / 1000000,
      total: financialData.overview.projectedRevenue.year3 / 1000000
    },
    {
      year: 'Year 4',
      grower: financialData.ventures.grower.revenue.year4 / 1000000,
      processor: financialData.ventures.processor.revenue.year4 / 1000000,
      distributor: financialData.ventures.distributor.revenue.year4 / 1000000,
      total: financialData.overview.projectedRevenue.year4 / 1000000
    },
    {
      year: 'Year 5',
      grower: financialData.ventures.grower.revenue.year5 / 1000000,
      processor: financialData.ventures.processor.revenue.year5 / 1000000,
      distributor: financialData.ventures.distributor.revenue.year5 / 1000000,
      total: financialData.overview.projectedRevenue.year5 / 1000000
    }
  ]

  interface TooltipProps {
    active?: boolean
    payload?: Array<{
      name: string
      value: number
      color: string
    }>
    label?: string
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/80 border border-white/20 rounded-lg p-3 shadow-lg backdrop-blur-md">
          <p className="font-semibold mb-2">{label}</p>
          {payload.map((entry, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: ${entry.value.toFixed(1)}M
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Projections</CardTitle>
        <CardDescription>
          5-year revenue forecast across all ventures (in millions USD)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                tickFormatter={(value) => `$${value.toFixed(1)}M`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="grower"
                stackId="1"
                stroke={COLORS.grower}
                fill={COLORS.grower}
                fillOpacity={0.6}
                name="Grower"
              />
              <Area
                type="monotone"
                dataKey="processor"
                stackId="1"
                stroke={COLORS.processor}
                fill={COLORS.processor}
                fillOpacity={0.6}
                name="Processor"
              />
              <Area
                type="monotone"
                dataKey="distributor"
                stackId="1"
                stroke={COLORS.distributor}
                fill={COLORS.distributor}
                fillOpacity={0.6}
                name="Distributor"
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke={COLORS.total}
                strokeWidth={3}
                dot={{ fill: COLORS.total, strokeWidth: 2, r: 4 }}
                name="Total Revenue"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              ${(financialData.overview.projectedRevenue.year3 / 1000000).toFixed(1)}M
            </div>
            <div className="text-sm text-muted-foreground">Year 3 Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">
              {financialData.overview.targetIRR}%
            </div>
            <div className="text-sm text-muted-foreground">Target IRR</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">
              {financialData.overview.paybackPeriod}
            </div>
            <div className="text-sm text-muted-foreground">Payback Period</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              ${(financialData.overview.netPresentValue / 1000000).toFixed(1)}M
            </div>
            <div className="text-sm text-muted-foreground">NPV</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
