"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Papain Investment Projections"

const chartData = [
  { date: "2024-01", grower: 0, processor: 0, distributor: 0 },
  { date: "2024-02", grower: 50, processor: 0, distributor: 0 },
  { date: "2024-03", grower: 120, processor: 0, distributor: 0 },
  { date: "2024-04", grower: 180, processor: 30, distributor: 0 },
  { date: "2024-05", grower: 250, processor: 80, distributor: 0 },
  { date: "2024-06", grower: 320, processor: 150, distributor: 20 },
  { date: "2024-07", grower: 380, processor: 220, distributor: 60 },
  { date: "2024-08", grower: 450, processor: 300, distributor: 120 },
  { date: "2024-09", grower: 520, processor: 380, distributor: 200 },
  { date: "2024-10", grower: 580, processor: 460, distributor: 300 },
  { date: "2024-11", grower: 650, processor: 540, distributor: 420 },
  { date: "2024-12", grower: 720, processor: 620, distributor: 560 },
]

const chartConfig = {
  grower: {
    label: "Grower Venture",
    color: "hsl(var(--chart-1))",
  },
  processor: {
    label: "Processor Venture",
    color: "hsl(var(--chart-2))",
  },
  distributor: {
    label: "Distributor Venture",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("12m")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    } else if (timeRange === "12m") {
      daysToSubtract = 365
    }
    const startDate = new Date(now.getTime() - daysToSubtract * 24 * 60 * 60 * 1000)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Revenue Projections</CardTitle>
          <CardDescription>
            Projected monthly revenue across all three papain ventures (in thousands BBD)
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
            <SelectItem value="12m" className="rounded-lg">
              Last 12 months
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillGrover" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-grower)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-grower)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillProcessor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-processor)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-processor)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDistributor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-distributor)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-distributor)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value: string) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value: string) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="grower"
              type="natural"
              fill="url(#fillGrover)"
              stroke="var(--color-grower)"
              stackId="a"
            />
            <Area
              dataKey="processor"
              type="natural"
              fill="url(#fillProcessor)"
              stroke="var(--color-processor)"
              stackId="a"
            />
            <Area
              dataKey="distributor"
              type="natural"
              fill="url(#fillDistributor)"
              stroke="var(--color-distributor)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
