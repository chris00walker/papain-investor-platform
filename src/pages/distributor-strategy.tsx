import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconTarget, IconMap, IconTrendingUp, IconUsers, IconGlobe } from "@tabler/icons-react"

export function DistributorStrategyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Distribution Strategy</h1>
        <p className="text-lg text-muted-foreground">
          Strategic approach to Western Hemisphere papain distribution and market penetration
        </p>
      </div>

      {/* Value Proposition */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-primary" />
            <span>Core Value Proposition</span>
          </CardTitle>
          <CardDescription>Key differentiators and competitive advantages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Pain Relievers</h4>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-primary bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Speed Advantage</h5>
                  <p className="text-xs text-muted-foreground">2-3 days delivery vs 2-3 weeks from distant suppliers</p>
                </div>
                <div className="p-3 border-l-4 border-secondary bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Supply Reliability</h5>
                  <p className="text-xs text-muted-foreground">3-month inventory buffer prevents supply disruptions</p>
                </div>
                <div className="p-3 border-l-4 border-accent bg-accent/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Quality Assurance</h5>
                  <p className="text-xs text-muted-foreground">Cold chain storage maintains enzyme stability</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Gain Creators</h4>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-primary bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Predictable Supply</h5>
                  <p className="text-xs text-muted-foreground">99% on-time delivery with guaranteed schedules</p>
                </div>
                <div className="p-3 border-l-4 border-secondary bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Technical Support</h5>
                  <p className="text-xs text-muted-foreground">Application guidance and formulation assistance</p>
                </div>
                <div className="p-3 border-l-4 border-accent bg-accent/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Regulatory Documentation</h5>
                  <p className="text-xs text-muted-foreground">Complete certificates and compliance support</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Segments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-primary" />
            <span>Customer Segments</span>
          </CardTitle>
          <CardDescription>Target markets and customer characteristics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Meat Processing</h4>
              <Badge variant="default" className="mb-3">Primary</Badge>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium">Jobs to be Done:</p>
                  <p className="text-xs text-muted-foreground">Secure reliable papain for tenderization</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Key Pains:</p>
                  <p className="text-xs text-muted-foreground">Long shipping times, supply disruptions</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Desired Gains:</p>
                  <p className="text-xs text-muted-foreground">Faster delivery, predictable lead times</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Beverage Manufacturing</h4>
              <Badge variant="secondary" className="mb-3">Primary</Badge>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium">Jobs to be Done:</p>
                  <p className="text-xs text-muted-foreground">Obtain papain for clarification processes</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Key Pains:</p>
                  <p className="text-xs text-muted-foreground">Supply volatility, quality inconsistencies</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Desired Gains:</p>
                  <p className="text-xs text-muted-foreground">Supply continuity, flexible order sizes</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Nutraceuticals</h4>
              <Badge variant="outline" className="mb-3">High-Value</Badge>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium">Jobs to be Done:</p>
                  <p className="text-xs text-muted-foreground">Source pharmaceutical-grade papain</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Key Pains:</p>
                  <p className="text-xs text-muted-foreground">Regulatory compliance, cold chain needs</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Desired Gains:</p>
                  <p className="text-xs text-muted-foreground">Documentation support, quality certifications</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Cosmetic Manufacturing</h4>
              <Badge variant="outline" className="mb-3">Secondary</Badge>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium">Jobs to be Done:</p>
                  <p className="text-xs text-muted-foreground">Access papain for exfoliation products</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Key Pains:</p>
                  <p className="text-xs text-muted-foreground">Seasonal fluctuations, price volatility</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Desired Gains:</p>
                  <p className="text-xs text-muted-foreground">Stable pricing, formulation assistance</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Research Laboratories</h4>
              <Badge variant="outline" className="mb-3">Niche</Badge>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium">Jobs to be Done:</p>
                  <p className="text-xs text-muted-foreground">Procure high-purity papain for research</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Key Pains:</p>
                  <p className="text-xs text-muted-foreground">Small quantity availability, pricing</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Desired Gains:</p>
                  <p className="text-xs text-muted-foreground">Small batches, educational discounts</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Geographic Strategy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconMap className="h-5 w-5 text-primary" />
            <span>Geographic Expansion Strategy</span>
          </CardTitle>
          <CardDescription>Phased market entry approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Primary Markets (Year 1-2)</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg bg-primary/5">
                  <IconGlobe className="h-8 w-8 text-primary mb-2" />
                  <h5 className="font-semibold mb-2">United States</h5>
                  <p className="text-sm text-muted-foreground mb-2">Largest market with established industries</p>
                  <Badge variant="default">Priority 1</Badge>
                </div>
                <div className="p-4 border rounded-lg bg-secondary/5">
                  <IconGlobe className="h-8 w-8 text-secondary mb-2" />
                  <h5 className="font-semibold mb-2">Canada</h5>
                  <p className="text-sm text-muted-foreground mb-2">Strong regulatory framework, natural products</p>
                  <Badge variant="secondary">Priority 2</Badge>
                </div>
                <div className="p-4 border rounded-lg bg-accent/5">
                  <IconGlobe className="h-8 w-8 text-accent mb-2" />
                  <h5 className="font-semibold mb-2">Mexico</h5>
                  <p className="text-sm text-muted-foreground mb-2">Expanding food processing, proximity advantage</p>
                  <Badge variant="outline">Priority 3</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Secondary Markets (Year 3-5)</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold mb-2">Brazil</h5>
                  <p className="text-sm text-muted-foreground mb-2">Large food processing, growing cosmetics</p>
                  <Badge variant="outline">Expansion</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold mb-2">Colombia</h5>
                  <p className="text-sm text-muted-foreground mb-2">Regional hub, pharmaceutical growth</p>
                  <Badge variant="outline">Expansion</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold mb-2">Caribbean</h5>
                  <p className="text-sm text-muted-foreground mb-2">Tourism cosmetics, research institutions</p>
                  <Badge variant="outline">Expansion</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Go-to-Market Strategy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTrendingUp className="h-5 w-5 text-primary" />
            <span>Go-to-Market Strategy</span>
          </CardTitle>
          <CardDescription>Customer acquisition and market penetration approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Direct Sales Approach</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Key account management for large customers (meat processors, beverage manufacturers)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Dedicated sales representatives for each geographic region</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Technical sales support for complex applications</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Digital & Partnership Channels</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Online ordering portal with real-time inventory and tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Regional distributors for smaller markets and customers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Industry trade shows and technical seminars</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold mb-2">Customer Acquisition Timeline</h4>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary mb-1">Q1-Q2</div>
                <p className="text-sm font-medium">Market Entry</p>
                <p className="text-xs text-muted-foreground">Initial customer acquisition</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary mb-1">Q3-Q4</div>
                <p className="text-sm font-medium">Scale Up</p>
                <p className="text-xs text-muted-foreground">Expand customer base</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-accent mb-1">Year 2</div>
                <p className="text-sm font-medium">Market Share</p>
                <p className="text-xs text-muted-foreground">Establish market position</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-muted-foreground mb-1">Year 3+</div>
                <p className="text-sm font-medium">Expansion</p>
                <p className="text-xs text-muted-foreground">Geographic growth</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Strategy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Competitive Positioning</CardTitle>
          <CardDescription>Differentiation and competitive advantages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3">Speed & Reliability</h4>
              <ul className="space-y-2 text-sm">
                <li>• 2-3 day delivery vs 2-3 weeks from Asia</li>
                <li>• 99% on-time delivery performance</li>
                <li>• 3-month inventory buffer</li>
                <li>• Miami strategic location</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quality & Compliance</h4>
              <ul className="space-y-2 text-sm">
                <li>• Pharmaceutical-grade storage</li>
                <li>• Cold chain maintenance</li>
                <li>• Complete documentation</li>
                <li>• Regulatory expertise</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Service & Support</h4>
              <ul className="space-y-2 text-sm">
                <li>• Technical application support</li>
                <li>• Flexible order quantities</li>
                <li>• Customer advisory board</li>
                <li>• Digital self-service portal</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
