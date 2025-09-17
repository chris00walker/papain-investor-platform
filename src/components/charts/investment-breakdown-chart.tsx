import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const COLORS = {
  grower: 'hsl(var(--primary))',
  processor: 'hsl(var(--secondary))',
  distributor: 'hsl(var(--accent))'
}

import investmentTotals from '@/data/investment-totals.json';

interface Venture {
  name: string;
  amount: number;
  description: string;
}

export function InvestmentBreakdownChart() {
  const data = (investmentTotals.ventures as Venture[]).map((venture: Venture, idx: number) => ({
    name: venture.name,
    value: venture.amount,
    color: Object.values(COLORS)[idx],
    description: venture.description
  }));

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
        <div className="bg-white/80 border border-white/20 rounded-lg p-3 shadow-lg backdrop-blur-md">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-muted-foreground">{data.description}</p>
          <p className="text-lg font-bold" style={{ color: data.color }}>
            ${(data.value / 1000000).toFixed(1)}M
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
                {data.map((entry: { color: string }, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {data.map((item: { name: string; value: number; color: string; description: string }, index: number) => (
            <div key={index} className="text-center">
              <div 
                className="w-4 h-4 rounded-full mx-auto mb-2"
                style={{ backgroundColor: item.color }}
              />
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-2xl font-bold">${(item.value / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
