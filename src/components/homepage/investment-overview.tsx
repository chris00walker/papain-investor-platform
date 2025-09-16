import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconSeedling, IconFlask, IconTruck, IconArrowRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { InvestmentBreakdownChart } from "@/components/charts/investment-breakdown-chart"
import { RevenueProjectionChart } from "@/components/charts/revenue-projection-chart"
import { MarketSegmentationChart } from "@/components/charts/market-segmentation-chart"
import ventureData from '@/data/venture-data.json'
import contentSummaries from '@/data/content-summaries.json'

export function InvestmentOverview() {
  const ventures = [
    {
      ...ventureData.grower,
      icon: IconSeedling,
      color: "border-primary text-primary",
      route: "/ventures/grower"
    },
    {
      ...ventureData.processor,
      icon: IconFlask,
      color: "border-secondary text-secondary",
      route: "/ventures/processor"
    },
    {
      ...ventureData.distributor,
      icon: IconTruck,
      color: "border-accent text-accent",
      route: "/ventures/distributor"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Integrated Value Chain</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {contentSummaries.executiveSummary.subtitle}
        </p>
      </div>

      {/* Interactive Data Visualizations */}
      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <InvestmentBreakdownChart />
        <MarketSegmentationChart />
      </div>

      <div className="mb-12">
        <RevenueProjectionChart />
      </div>

      {/* Venture Cards with Real Data */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {ventures.map((venture) => (
          <Card key={venture.title} className={`${venture.color} border-l-4 hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <venture.icon className="h-8 w-8" />
                <div>
                  <CardTitle className="font-semibold text-lg">{venture.title}</CardTitle>
                  <CardDescription>{venture.subtitle}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Investment</div>
                    <div className="font-semibold">{venture.investment.total}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-semibold">{venture.keyMetrics.timeline}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Key Metrics</div>
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(venture.keyMetrics).slice(0, 3).map(([key, value], idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {typeof value === 'string' ? value : `${key}: ${value}`}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to={venture.route}>
                    Learn More
                    <IconArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Summary with Real Data */}
      <Card>
        <CardContent className="p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contentSummaries.executiveSummary.investmentHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{highlight.metric}</div>
                <div className="text-sm text-muted-foreground">{highlight.description}</div>
              </div>
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
