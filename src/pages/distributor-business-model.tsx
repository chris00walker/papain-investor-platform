import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconUsers, IconCurrencyDollar, IconTarget, IconBuildingStore, IconUserCheck } from "@tabler/icons-react"

export function DistributorBusinessModelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Distributor Business Model Canvas</h1>
        <p className="text-lg text-muted-foreground">
          Western Hemisphere papain distribution strategy and operational framework
        </p>
      </div>

      {/* Customer Segments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-accent" />
            <span>Customer Segments</span>
          </CardTitle>
          <CardDescription>Target markets and customer characteristics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Primary Segments</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Meat Processing</Badge>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Beverage Manufacturing</Badge>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Nutraceutical Companies</Badge>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Geographic Focus</h4>
              <ul className="space-y-2 text-sm">
                <li>• North America (US, Canada, Mexico)</li>
                <li>• South America (Brazil, Colombia)</li>
                <li>• Caribbean region</li>
                <li>• Mid-to-large enterprises</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Value Propositions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-accent" />
            <span>Value Propositions</span>
          </CardTitle>
          <CardDescription>Key differentiators and customer benefits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">2-3 Days</div>
              <p className="text-sm text-muted-foreground">Delivery Speed</p>
              <p className="text-xs">vs 2-3 weeks from competitors</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">99%</div>
              <p className="text-sm text-muted-foreground">On-time Delivery</p>
              <p className="text-xs">3-month inventory buffer</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Pharma-Grade</div>
              <p className="text-sm text-muted-foreground">Quality Assurance</p>
              <p className="text-xs">Storage and handling</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Service Benefits</h4>
              <ul className="text-sm space-y-1">
                <li>• Regulatory support and compliance assistance</li>
                <li>• Small batch capability alongside industrial volumes</li>
                <li>• Technical expertise and application support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Operational Advantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Complete documentation and traceability</li>
                <li>• Formulation guidance and optimization</li>
                <li>• Flexible delivery scheduling</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Channels */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconBuildingStore className="h-5 w-5 text-accent" />
            <span>Distribution Channels</span>
          </CardTitle>
          <CardDescription>How we reach and serve customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Direct Channels</h4>
              <ul className="space-y-2 text-sm">
                <li>• Direct sales team for key account management</li>
                <li>• Digital platform with online ordering portal</li>
                <li>• Technical seminars and educational workshops</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Partner Channels</h4>
              <ul className="space-y-2 text-sm">
                <li>• Industry partners for regional markets</li>
                <li>• Trade shows and industry events</li>
                <li>• Referral network from existing relationships</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Streams */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCurrencyDollar className="h-5 w-5 text-accent" />
            <span>Revenue Streams</span>
          </CardTitle>
          <CardDescription>Multiple income sources and pricing models</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Core Revenue</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Product Sales</span>
                  <Badge variant="secondary">25-35% Margin</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Logistics Services</span>
                  <Badge variant="outline">Premium Pricing</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Storage Services</span>
                  <Badge variant="outline">Monthly Fees</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Value-Added Services</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technical Consulting</span>
                  <Badge variant="outline">Hourly Rate</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Subscription Model</span>
                  <Badge variant="outline">Contract Based</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Custom Services</span>
                  <Badge variant="outline">Project Based</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Relationships */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUserCheck className="h-5 w-5 text-accent" />
            <span>Customer Relationships</span>
          </CardTitle>
          <CardDescription>Building long-term partnerships and loyalty</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-2 text-accent">Partnership Model</h4>
              <ul className="text-sm space-y-1">
                <li>• Long-term contracts (1-3 years)</li>
                <li>• Technical partnership</li>
                <li>• Account management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">Service Excellence</h4>
              <ul className="text-sm space-y-1">
                <li>• Just-in-time delivery</li>
                <li>• Digital self-service portal</li>
                <li>• Process optimization support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">Engagement</h4>
              <ul className="text-sm space-y-1">
                <li>• Customer advisory board</li>
                <li>• Regular business reviews</li>
                <li>• Market trend insights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
