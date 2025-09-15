import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconCurrencyDollar, IconTrendingUp, IconTarget, IconCalculator, IconPigMoney } from "@tabler/icons-react"

export function ProcessorFinancialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Processor Financial Projections</h1>
        <p className="text-lg text-muted-foreground">
          Investment requirements and financial returns for pharmaceutical-grade papain processing
        </p>
      </div>

      {/* Investment Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconPigMoney className="h-5 w-5 text-primary" />
            <span>Capital Requirements</span>
          </CardTitle>
          <CardDescription>Total funding needed: $2.2M</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">$1.1M</div>
              <h4 className="font-semibold mb-1">Processing Equipment</h4>
              <p className="text-sm text-muted-foreground">50% of total</p>
              <Badge variant="default" className="mt-2">Critical</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-secondary mb-2">$660K</div>
              <h4 className="font-semibold mb-1">Facility Construction</h4>
              <p className="text-sm text-muted-foreground">30% of total</p>
              <Badge variant="secondary" className="mt-2">Infrastructure</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">$220K</div>
              <h4 className="font-semibold mb-1">Regulatory & Licensing</h4>
              <p className="text-sm text-muted-foreground">10% of total</p>
              <Badge variant="outline" className="mt-2">Compliance</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">$220K</div>
              <h4 className="font-semibold mb-1">Working Capital</h4>
              <p className="text-sm text-muted-foreground">10% of total</p>
              <Badge variant="outline" className="mt-2">Operations</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Returns */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTrendingUp className="h-5 w-5 text-primary" />
            <span>Financial Returns</span>
          </CardTitle>
          <CardDescription>Projected performance over 7-year investment horizon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">28%</div>
              <h4 className="font-semibold mb-2">Internal Rate of Return</h4>
              <p className="text-sm text-muted-foreground">7-year investment horizon</p>
              <Badge variant="default" className="mt-2">Attractive</Badge>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">$200M+</div>
              <h4 className="font-semibold mb-2">Global Market Size</h4>
              <p className="text-sm text-muted-foreground">Growing demand for natural enzymes</p>
              <Badge variant="secondary" className="mt-2">Opportunity</Badge>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">25-35%</div>
              <h4 className="font-semibold mb-2">Premium Pricing</h4>
              <p className="text-sm text-muted-foreground">Above commodity papain</p>
              <Badge variant="outline" className="mt-2">Margin</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Breakdown */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCurrencyDollar className="h-5 w-5 text-primary" />
            <span>Revenue Structure</span>
          </CardTitle>
          <CardDescription>Diversified income streams by market segment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Pharmaceutical Grade</h4>
                  <Badge variant="default">70%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Market:</span>
                    <span className="font-medium">Pharma companies</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Products:</span>
                    <span className="font-medium">Digestive enzymes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin:</span>
                    <span className="font-medium text-primary">High</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Food Grade</h4>
                  <Badge variant="secondary">20%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Market:</span>
                    <span className="font-medium">Food processors</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Products:</span>
                    <span className="font-medium">Meat tenderizers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin:</span>
                    <span className="font-medium text-secondary">Medium</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Custom Services</h4>
                  <Badge variant="outline">10%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Market:</span>
                    <span className="font-medium">Specialty clients</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Products:</span>
                    <span className="font-medium">Custom formulations</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin:</span>
                    <span className="font-medium text-accent">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantages */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-primary" />
            <span>Competitive Advantages</span>
          </CardTitle>
          <CardDescription>Key differentiators driving premium pricing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Operational Excellence</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Vertical integration controls entire supply chain</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Pharmaceutical-grade purity exceeding commodity standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Caribbean location for North American market access</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Risk Mitigation</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Diversified customer base across multiple industries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Robust quality control ensures consistent specifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Full regulatory compliance with pharmaceutical standards</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Benefits */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCalculator className="h-5 w-5 text-primary" />
            <span>Integrated Value Chain Benefits</span>
          </CardTitle>
          <CardDescription>Synergies with farming operation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Cost Optimization</h4>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Reduced Raw Material Costs</h5>
                  <p className="text-xs text-muted-foreground">Vertical integration eliminates third-party markup</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Shared Infrastructure</h5>
                  <p className="text-xs text-muted-foreground">Common facilities and management across operations</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Revenue Enhancement</h4>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Premium Pricing</h5>
                  <p className="text-xs text-muted-foreground">Traceable, locally-sourced products command higher prices</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Market Positioning</h5>
                  <p className="text-xs text-muted-foreground">Unique positioning as fully integrated papain producer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-accent/5 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Combined Investment Case</h4>
                <p className="text-sm text-muted-foreground">Total capital for integrated farm-to-pharmaceutical operation</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent">$4.0M</div>
                <p className="text-sm text-muted-foreground">Total investment</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
