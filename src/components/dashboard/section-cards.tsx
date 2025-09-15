import {
  IconTrendingUp,
  IconTrendingDown,
  IconCurrencyDollar,
  IconUsers,
  IconLeaf,
  IconBuilding,
} from '@tabler/icons-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const metrics = [
  {
    title: "Total Investment Opportunity",
    value: "$2.4M",
    description: "Across all three ventures",
    change: "+12.5%",
    trend: "up",
    icon: IconCurrencyDollar,
  },
  {
    title: "Projected ROI",
    value: "285%",
    description: "5-year cumulative return",
    change: "+8.2%",
    trend: "up",
    icon: IconTrendingUp,
  },
  {
    title: "Market Size",
    value: "$1.2B",
    description: "Western Hemisphere papain market",
    change: "+15.3%",
    trend: "up",
    icon: IconUsers,
  },
  {
    title: "Production Capacity",
    value: "50 tons",
    description: "Annual papain output target",
    change: "New",
    trend: "neutral",
    icon: IconBuilding,
  },
  {
    title: "Farm Coverage",
    value: "200 acres",
    description: "Papaya cultivation in Barbados",
    change: "Phase 1",
    trend: "neutral",
    icon: IconLeaf,
  },
  {
    title: "Break-even Timeline",
    value: "18 months",
    description: "Conservative estimate",
    change: "-2 months",
    trend: "up",
    icon: IconTrendingDown,
  },
]

export function SectionCards() {
  return (
    <div className="px-4 lg:px-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-2 text-xs">
                  {metric.trend === "up" && (
                    <IconTrendingUp className="h-3 w-3 text-green-500" />
                  )}
                  {metric.trend === "down" && (
                    <IconTrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={
                      metric.trend === "up"
                        ? "text-green-500"
                        : metric.trend === "down"
                        ? "text-red-500"
                        : "text-muted-foreground"
                    }
                  >
                    {metric.change}
                  </span>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
