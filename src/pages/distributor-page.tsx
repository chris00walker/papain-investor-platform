import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconTruck, IconDownload, IconGlobe } from "@tabler/icons-react"
import ventureData from '@/data/venture-data.json'
import contentSummaries from '@/data/content-summaries.json'

export function DistributorPage() {
  const distributorData = ventureData.distributor
  const distributorSummary = contentSummaries.ventures.distributor

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <IconTruck className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold">{distributorData.title}</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-6">
          {distributorData.subtitle}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-accent border-accent">
            {distributorData.location}
          </Badge>
          <Badge variant="outline">
            {distributorData.keyMetrics.coverage}
          </Badge>
          <Badge variant="outline">
            {distributorData.keyMetrics.timeline}
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
            <div className="text-3xl font-bold text-accent mb-4">
              {distributorData.investment.total}
            </div>
            <div className="space-y-3">
              {Object.entries(distributorData.investment.breakdown).map(([key, value]) => (
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
            <CardTitle>Distribution Metrics</CardTitle>
            <CardDescription>Operational capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(distributorData.keyMetrics).map(([key, value]) => (
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
          <CardDescription>{distributorSummary.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3 text-accent">Pain Relievers</h4>
              <ul className="space-y-2">
                {distributorData.valueProposition.painRelievers.map((item, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Gain Creators</h4>
              <ul className="space-y-2">
                {distributorData.valueProposition.gainCreators.map((item, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Distribution Network */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Distribution Network</CardTitle>
          <CardDescription>Comprehensive Western Hemisphere coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <IconGlobe className="h-12 w-12 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Delivery Speed</h4>
              <p className="text-2xl font-bold text-accent">2-3 Days</p>
              <p className="text-sm text-muted-foreground">vs 2-3 weeks from competitors</p>
            </div>
            <div className="text-center">
              <IconGlobe className="h-12 w-12 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Reliability</h4>
              <p className="text-2xl font-bold text-accent">99%</p>
              <p className="text-sm text-muted-foreground">On-time delivery rate</p>
            </div>
            <div className="text-center">
              <IconGlobe className="h-12 w-12 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Coverage</h4>
              <p className="text-sm text-muted-foreground">North & South America</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-accent/5 to-primary/5">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Invest in Distribution Excellence</h3>
          <p className="text-muted-foreground mb-6">
            Join us in building the premier papain distribution network across the Americas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Schedule Investment Meeting
            </Button>
            <Button size="lg" variant="outline">
              <IconDownload className="mr-2 h-5 w-5" />
              Download Distributor Prospectus
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
