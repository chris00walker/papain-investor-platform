import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import financialData from '@/data/financial-data.json'

const SEGMENT_COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--secondary))',
  'hsl(var(--accent))',
  'hsl(var(--muted-foreground))'
]

export function MarketSegmentationChart() {
  const marketData = Object.entries(financialData.marketAnalysis.targetMarkets).map(([key, segment], index) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    percentage: segment.percentage,
    applications: segment.applications,
    color: SEGMENT_COLORS[index]
  }))

  interface TooltipProps {
    active?: boolean
    payload?: Array<{
      payload: {
        name: string
        percentage: number
        applications: string | string[]
        color: string
      }
    }>
  }

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border rounded-lg p-3 shadow-lg max-w-xs">
          <p className="font-semibold">{data.name}</p>
          <p className="text-lg font-bold" style={{ color: data.color }}>
            {data.percentage}%
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {Array.isArray(data.applications) ? data.applications.join(', ') : data.applications}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Target Market Segmentation</CardTitle>
        <CardDescription>
          Market size: {financialData.marketAnalysis.papainMarket.globalSize} | 
          Growth: {financialData.marketAnalysis.papainMarket.cagr}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={30}
                  dataKey="percentage"
                  label={false}
                  labelLine={false}
                >
                  {marketData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Market Segments Details */}
          <div className="space-y-4">
            {marketData.map((segment, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div 
                  className="w-4 h-4 rounded-full mt-1 shrink-0"
                  style={{ backgroundColor: segment.color }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{segment.name}</h4>
                    <Badge variant="outline">{segment.percentage}%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {Array.isArray(segment.applications) ? segment.applications.join(', ') : segment.applications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Drivers */}
        <div className="mt-6 pt-6 border-t">
          <h4 className="font-semibold mb-3">Key Market Drivers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {financialData.marketAnalysis.papainMarket.keyDrivers.map((driver, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm">{driver}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
