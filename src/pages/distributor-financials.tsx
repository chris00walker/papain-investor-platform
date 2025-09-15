import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconCurrencyDollar, IconTrendingUp, IconTarget, IconCalculator, IconPigMoney } from "@tabler/icons-react"

export function DistributorFinancialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Distributor Financial Projections</h1>
        <p className="text-lg text-muted-foreground">
          Investment requirements and financial returns for Western Hemisphere papain distribution
        </p>
      </div>

      {/* Investment Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconPigMoney className="h-5 w-5 text-primary" />
            <span>Capital Requirements</span>
          </CardTitle>
          <CardDescription>Total funding needed: $1.2M initial capital</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">$300K</div>
              <h4 className="font-semibold mb-1">Initial Inventory</h4>
              <p className="text-sm text-muted-foreground">Stock across product grades</p>
              <Badge variant="default" className="mt-2">Working Capital</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-secondary mb-2">$400K</div>
              <h4 className="font-semibold mb-1">Facility & Equipment</h4>
              <p className="text-sm text-muted-foreground">Warehouse and cold chain</p>
              <Badge variant="secondary" className="mt-2">Infrastructure</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">$300K</div>
              <h4 className="font-semibold mb-1">Operating Capital</h4>
              <p className="text-sm text-muted-foreground">First year operations</p>
              <Badge variant="outline" className="mt-2">Operations</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">$200K</div>
              <h4 className="font-semibold mb-1">Contingency</h4>
              <p className="text-sm text-muted-foreground">Risk buffer</p>
              <Badge variant="outline" className="mt-2">Safety</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Model */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCurrencyDollar className="h-5 w-5 text-primary" />
            <span>Revenue Streams</span>
          </CardTitle>
          <CardDescription>Diversified income sources and margin structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Product Sales</h4>
                <Badge variant="default">Primary</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Gross Margin:</span>
                  <span className="font-medium text-primary">25-35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Volume:</span>
                  <span className="font-medium">High</span>
                </div>
                <p className="text-xs text-muted-foreground">Core papain distribution business</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Logistics Services</h4>
                <Badge variant="secondary">Premium</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Service:</span>
                  <span className="font-medium">Expedited delivery</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Margin:</span>
                  <span className="font-medium text-secondary">High</span>
                </div>
                <p className="text-xs text-muted-foreground">2-3 day delivery premium</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Value-Added Services</h4>
                <Badge variant="outline">Growth</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Services:</span>
                  <span className="font-medium">Custom blending</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Margin:</span>
                  <span className="font-medium text-accent">Premium</span>
                </div>
                <p className="text-xs text-muted-foreground">Technical consulting & storage</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Projections */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTrendingUp className="h-5 w-5 text-primary" />
            <span>Financial Projections</span>
          </CardTitle>
          <CardDescription>5-year revenue and profitability outlook</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$15M</div>
              <h4 className="font-semibold mb-2">Year 3 Revenue</h4>
              <p className="text-sm text-muted-foreground">Target annual sales</p>
              <Badge variant="default" className="mt-2">Growth Target</Badge>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">22%</div>
              <h4 className="font-semibold mb-2">Net Margin</h4>
              <p className="text-sm text-muted-foreground">At mature operations</p>
              <Badge variant="secondary" className="mt-2">Profitability</Badge>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">18</div>
              <h4 className="font-semibold mb-2">Months</h4>
              <p className="text-sm text-muted-foreground">Break-even timeline</p>
              <Badge variant="outline" className="mt-2">Milestone</Badge>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Revenue Growth Trajectory</h4>
            <div className="grid gap-4 md:grid-cols-5">
              <div className="text-center p-3 border rounded-lg">
                <div className="text-lg font-bold text-muted-foreground mb-1">Year 1</div>
                <div className="text-sm font-medium">$3.5M</div>
                <p className="text-xs text-muted-foreground">Market entry</p>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="text-lg font-bold text-muted-foreground mb-1">Year 2</div>
                <div className="text-sm font-medium">$8.2M</div>
                <p className="text-xs text-muted-foreground">Customer growth</p>
              </div>
              <div className="text-center p-3 border rounded-lg bg-primary/5">
                <div className="text-lg font-bold text-primary mb-1">Year 3</div>
                <div className="text-sm font-medium">$15.0M</div>
                <p className="text-xs text-muted-foreground">Market maturity</p>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="text-lg font-bold text-muted-foreground mb-1">Year 4</div>
                <div className="text-sm font-medium">$22.5M</div>
                <p className="text-xs text-muted-foreground">Expansion</p>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="text-lg font-bold text-muted-foreground mb-1">Year 5</div>
                <div className="text-sm font-medium">$28.0M</div>
                <p className="text-xs text-muted-foreground">Optimization</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Structure */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCalculator className="h-5 w-5 text-primary" />
            <span>Cost Structure</span>
          </CardTitle>
          <CardDescription>Fixed and variable cost breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Fixed Costs (Annual)</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Staff Salaries</h5>
                    <p className="text-xs text-muted-foreground">Management, sales, operations</p>
                  </div>
                  <Badge variant="default">$420K</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Facility Lease</h5>
                    <p className="text-xs text-muted-foreground">25,000 sq ft warehouse</p>
                  </div>
                  <Badge variant="secondary">$180K</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Insurance</h5>
                    <p className="text-xs text-muted-foreground">Product liability, property, cargo</p>
                  </div>
                  <Badge variant="outline">$48K</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Equipment & Technology</h5>
                    <p className="text-xs text-muted-foreground">Depreciation and software</p>
                  </div>
                  <Badge variant="outline">$60K</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Variable Costs (% of Revenue)</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Product Procurement</h5>
                    <p className="text-xs text-muted-foreground">Cost of goods sold</p>
                  </div>
                  <Badge variant="default">65%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Transportation</h5>
                    <p className="text-xs text-muted-foreground">Freight and logistics</p>
                  </div>
                  <Badge variant="secondary">8%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Packaging & Handling</h5>
                    <p className="text-xs text-muted-foreground">Materials and labor</p>
                  </div>
                  <Badge variant="outline">3%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Customs & Duties</h5>
                    <p className="text-xs text-muted-foreground">Import/export fees</p>
                  </div>
                  <Badge variant="outline">2%</Badge>
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
            <span>Financial Advantages</span>
          </CardTitle>
          <CardDescription>Key factors driving profitability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Revenue Drivers</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Speed advantage: 2-3 days vs 2-3 weeks delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Premium pricing for reliability and quality assurance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Value-added services create additional revenue streams</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Long-term contracts provide revenue stability</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Cost Advantages</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Vertical integration reduces procurement costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Strategic Miami location minimizes shipping costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Economies of scale in inventory and operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Technology automation reduces labor costs</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
