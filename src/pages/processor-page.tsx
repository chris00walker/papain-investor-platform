import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconFlask, IconDownload, IconCertificate } from "@tabler/icons-react"
import ventureData from '@/data/venture-data.json'
import contentSummaries from '@/data/content-summaries.json'

export function ProcessorPage() {
  const processorData = ventureData.processor
  const processorSummary = contentSummaries.ventures.processor

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <IconFlask className="h-8 w-8 text-secondary" />
          <h1 className="text-4xl font-bold">{processorData.title}</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-6">
          {processorData.subtitle}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-secondary border-secondary">
            {processorData.location}
          </Badge>
          <Badge variant="outline">
            {processorData.keyMetrics.quality_standards}
          </Badge>
          <Badge variant="outline">
            {processorData.keyMetrics.timeline}
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
            <div className="text-3xl font-bold text-secondary mb-4">
              {processorData.investment.total}
            </div>
            <div className="space-y-3">
              {Object.entries(processorData.investment.breakdown).map(([key, value]) => (
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
            <CardTitle>Key Specifications</CardTitle>
            <CardDescription>Processing capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(processorData.keyMetrics).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z_])/g, ' $1').trim()}
                  </span>
                  <span className="font-medium">{Array.isArray(value) ? value.join(', ') : value}</span>
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
          <CardDescription>{processorSummary.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Pain Relievers</h4>
              <ul className="space-y-2">
                {processorData.valueProposition.painRelievers.map((item, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Gain Creators</h4>
              <ul className="space-y-2">
                {processorData.valueProposition.gainCreators.map((item, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Standards */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Quality & Certifications</CardTitle>
          <CardDescription>Pharmaceutical-grade standards and compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <IconCertificate className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Purity Level</h4>
              <p className="text-2xl font-bold text-secondary">&gt;95%</p>
              <p className="text-sm text-muted-foreground">Pharmaceutical Grade</p>
            </div>
            <div className="text-center">
              <IconCertificate className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">FDA Certified</h4>
              <p className="text-sm text-muted-foreground">Full regulatory compliance</p>
            </div>
            <div className="text-center">
              <IconCertificate className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">GMP Standards</h4>
              <p className="text-sm text-muted-foreground">Good Manufacturing Practices</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-secondary/5 to-accent/5">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Invest in Processing Excellence</h3>
          <p className="text-muted-foreground mb-6">
            Partner with us to build a state-of-the-art papain extraction facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Schedule Investment Meeting
            </Button>
            <Button size="lg" variant="outline">
              <IconDownload className="mr-2 h-5 w-5" />
              Download Processor Prospectus
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
