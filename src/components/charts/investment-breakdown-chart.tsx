import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import financialData from '@/data/financial-data.json'

const COLORS = {
  grower: 'hsl(var(--primary))',
  processor: 'hsl(var(--secondary))',
  distributor: 'hsl(var(--accent))'
}

export function InvestmentBreakdownChart() {
  const data = [
    {
      name: 'Grower Operations',
      value: (financialData.ventures.grower.investment.min + financialData.ventures.grower.investment.max) / 2,
      color: COLORS.grower,
      description: 'Land, irrigation, planting, equipment'
    },
    {
      name: 'Processing Facility', 
      value: (financialData.ventures.processor.investment.min + financialData.ventures.processor.investment.max) / 2,
      color: COLORS.processor,
      description: 'Facility, equipment, certification'
    },
    {
      name: 'Distribution Network',
      value: (financialData.ventures.distributor.investment.min + financialData.ventures.distributor.investment.max) / 2,
      color: COLORS.distributor,
      description: 'Logistics, inventory, technology'
    }
  ]

  interface TooltipProps {
    active?: boolean
    payload?: Array<{
      payload: {
        name: string
        value: number
        color: string
        description: string
      }
    }>
  }

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-muted-foreground">{data.description}</p>
          <p className="text-lg font-bold" style={{ color: data.color }}>
            ${(data.value / 1000).toFixed(0)}K
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Breakdown</CardTitle>
        <CardDescription>
          Total investment allocation across the three ventures
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={false}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-4 h-4 rounded-full mx-auto mb-2"
                style={{ backgroundColor: item.color }}
              />
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-2xl font-bold">${(item.value / 1000).toFixed(0)}K</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
