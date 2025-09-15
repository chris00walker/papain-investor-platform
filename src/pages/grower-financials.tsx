import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconCurrencyDollar, IconTrendingUp, IconCalculator, IconTarget } from "@tabler/icons-react"

export function GrowerFinancialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Grower Financial Projections</h1>
        <p className="text-lg text-muted-foreground">
          Barbados papaya farming venture financial model and projections
        </p>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <IconCurrencyDollar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">$6.0M</div>
            <p className="text-sm text-muted-foreground">Year 3 Revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <IconTrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">30%</div>
            <p className="text-sm text-muted-foreground">Gross Margin</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <IconCalculator className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">$1.8M</div>
            <p className="text-sm text-muted-foreground">Capital Required</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <IconTarget className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">18 Months</div>
            <p className="text-sm text-muted-foreground">Break-even</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Streams */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCurrencyDollar className="h-5 w-5 text-primary" />
            <span>Revenue Streams</span>
          </CardTitle>
          <CardDescription>Diversified income sources from papaya cultivation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <h4 className="font-semibold mb-2">Fresh Papaya Sales</h4>
              <p className="text-sm text-muted-foreground">$3.75M annual revenue</p>
              <p className="text-xs">1,500 tons × $2.50/kg</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <h4 className="font-semibold mb-2">Papain Latex Sales</h4>
              <p className="text-sm text-muted-foreground">$1.8M annual revenue</p>
              <p className="text-xs">120 tons × $15/kg</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10%</div>
              <h4 className="font-semibold mb-2">By-products</h4>
              <p className="text-sm text-muted-foreground">$0.45M annual revenue</p>
              <p className="text-xs">Processing waste utilization</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm font-medium text-primary mb-2">Premium Positioning</p>
            <p className="text-sm text-muted-foreground">
              "Barbados-grown" brand commands 15-20% premium above commodity rates
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cost Structure */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cost Structure</CardTitle>
          <CardDescription>Operating expenses and capital allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-4 text-primary">Fixed Costs (60%)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Land lease/purchase</span>
                  <Badge variant="outline">25%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Infrastructure & equipment</span>
                  <Badge variant="outline">20%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Permanent labor</span>
                  <Badge variant="outline">15%</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Variable Costs (40%)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Seasonal labor</span>
                  <Badge variant="secondary">15%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Inputs (fertilizer, pesticides)</span>
                  <Badge variant="secondary">12%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Utilities & maintenance</span>
                  <Badge variant="secondary">8%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Transportation & logistics</span>
                  <Badge variant="secondary">5%</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Assumptions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Financial Assumptions</CardTitle>
          <CardDescription>Critical metrics requiring validation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Production Metrics</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Yield per hectare</span>
                  <span className="font-medium">25-30 tons annually</span>
                </li>
                <li className="flex justify-between">
                  <span>Production capacity Year 1</span>
                  <span className="font-medium">50 hectares</span>
                </li>
                <li className="flex justify-between">
                  <span>Production capacity Year 3</span>
                  <span className="font-medium">100 hectares</span>
                </li>
                <li className="flex justify-between">
                  <span>Market penetration</span>
                  <span className="font-medium">15% regional demand</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Pricing Model</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Fresh fruit price</span>
                  <span className="font-medium">$2.50-3.00/kg</span>
                </li>
                <li className="flex justify-between">
                  <span>Latex price</span>
                  <span className="font-medium">$15-20/kg</span>
                </li>
                <li className="flex justify-between">
                  <span>Premium positioning</span>
                  <span className="font-medium">15-20% above commodity</span>
                </li>
                <li className="flex justify-between">
                  <span>Total operating costs</span>
                  <span className="font-medium">$4.2M (Year 3)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm font-medium text-amber-800 mb-1">⚠️ Validation Required</p>
            <p className="text-sm text-amber-700">
              These assumptions require market validation through customer interviews and competitive analysis
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Capital Requirements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Capital Requirements</CardTitle>
          <CardDescription>Initial investment breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-primary mb-2">$1.8M</div>
            <p className="text-muted-foreground">Total Capital Required</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Infrastructure Investment</h4>
              <ul className="text-sm space-y-1">
                <li>• Land acquisition/lease agreements</li>
                <li>• Irrigation and drainage systems</li>
                <li>• Processing and storage facilities</li>
                <li>• Climate monitoring technology</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Working Capital</h4>
              <ul className="text-sm space-y-1">
                <li>• Initial planting and cultivation</li>
                <li>• Equipment and machinery</li>
                <li>• Certification and compliance</li>
                <li>• Operating reserves (6 months)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
