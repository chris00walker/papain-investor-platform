import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconSeeding, IconDownload, IconTrendingUp } from "@tabler/icons-react"
import ventureData from '@/data/venture-data.json'
import contentSummaries from '@/data/content-summaries.json'

export function GrowerPage() {
  const growerData = ventureData.grower
  const growerSummary = contentSummaries.ventures.grower

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <IconSeeding className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">{growerData.title}</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-6">
          {growerData.subtitle}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-primary border-primary">
            {growerData.location}
          </Badge>
          <Badge variant="outline">
            {growerData.keyMetrics.capacity}
          </Badge>
          <Badge variant="outline">
            {growerData.keyMetrics.timeline}
          </Badge>
        </div>
      </div>

      {/* Investment Overview */}
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Investment Requirements</CardTitle>
            <CardDescription>Capital allocation breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-4">
              {growerData.investment.total}
            </div>
            <div className="space-y-3">
              {Object.entries(growerData.investment.breakdown).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
            <CardDescription>Operational specifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(growerData.keyMetrics).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Value Proposition */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Value Proposition</CardTitle>
          <CardDescription>{growerSummary.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Pain Relievers</h4>
              <ul className="space-y-2">
                {growerData.valueProposition.painRelievers.map((item, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Gain Creators</h4>
              <ul className="space-y-2">
                {growerData.valueProposition.gainCreators.map((item, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environmental Advantages */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Environmental Advantages</CardTitle>
          <CardDescription>Optimal growing conditions in Barbados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {growerData.environmentalAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <IconTrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{advantage}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Customer Segments */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Target Customer Segments</CardTitle>
          <CardDescription>Primary markets and value delivery</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {growerData.customerSegments.map((segment, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-2">{segment.segment}</h4>
                <p className="text-sm text-muted-foreground mb-3">{segment.jobsToBeDone}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="text-sm font-medium text-red-600 mb-2">Pain Points</h5>
                    <ul className="text-xs space-y-1">
                      {segment.pains.map((pain, idx) => (
                        <li key={idx}>• {pain}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-green-600 mb-2">Gains</h5>
                    <ul className="text-xs space-y-1">
                      {segment.gains.map((gain, idx) => (
                        <li key={idx}>• {gain}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Invest in Grower Operations?</h3>
          <p className="text-muted-foreground mb-6">
            Join us in building a sustainable papaya cultivation operation in Barbados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Investment Meeting
            </Button>
            <Button size="lg" variant="outline">
              <IconDownload className="mr-2 h-5 w-5" />
              Download Grower Prospectus
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
