import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconSeeding, IconFlask, IconTruck, IconArrowRight, IconDownload } from "@tabler/icons-react"
import { InvestmentBreakdownChart } from "@/components/charts/investment-breakdown-chart"
import { RevenueProjectionChart } from "@/components/charts/revenue-projection-chart"
import { MarketSegmentationChart } from "@/components/charts/market-segmentation-chart"
import ventureData from '@/data/venture-data.json'
import contentSummaries from '@/data/content-summaries.json'

export function InvestmentOverview() {
  const ventures = [
    {
      ...ventureData.grower,
      icon: IconSeeding,
      color: "border-primary text-primary bg-primary/5"
    },
    {
      ...ventureData.processor,
      icon: IconFlask,
      color: "border-secondary text-secondary bg-secondary/5"
    },
    {
      ...ventureData.distributor,
      icon: IconTruck,
      color: "border-accent text-accent bg-accent/5"
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
        {ventures.map((venture, index) => (
          <Card key={index} className={`${venture.color} border-l-4 hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <venture.icon className="h-8 w-8" />
                <div>
                  <CardTitle className="text-lg">{venture.title}</CardTitle>
                  <CardDescription>{venture.subtitle}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <Button variant="outline" size="sm" className="w-full">
                Learn More
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Summary with Real Data */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contentSummaries.executiveSummary.investmentHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{highlight.metric}</div>
                <div className="text-sm text-muted-foreground">{highlight.description}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button size="lg" className="font-semibold">
              View Investment Details
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              <IconDownload className="mr-2 h-5 w-5" />
              Download Prospectus
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
