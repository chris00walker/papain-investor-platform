import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconChartBar, IconUsers, IconTarget, IconTrendingUp } from "@tabler/icons-react"

export function GrowerMarketPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Grower Market Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Customer segments and market opportunities for Barbados papaya farming
        </p>
      </div>

      {/* Customer Segments Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-primary" />
            <span>Customer Segments</span>
          </CardTitle>
          <CardDescription>Target markets and value delivery analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Primary Markets</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Papain Processors</h5>
                    <Badge variant="default">High Priority</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Secure reliable supply of high-quality papaya latex for enzyme extraction</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Fresh Fruit Markets</h5>
                    <Badge variant="secondary">Medium Priority</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Source fresh, high-quality papayas for retail customers</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Secondary Markets</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Food Processors</h5>
                    <Badge variant="outline">Growth Opportunity</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Obtain papaya for processed products (juices, dried fruit, etc.)</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Export Markets</h5>
                    <Badge variant="outline">Premium Segment</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Access high-quality tropical fruit for international markets</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pain Points & Solutions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-primary" />
            <span>Market Pain Points & Solutions</span>
          </CardTitle>
          <CardDescription>How we address customer challenges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-4 text-red-600">Customer Pain Points</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Inconsistent latex supply</p>
                    <p className="text-xs text-muted-foreground">Weather-related harvest disruptions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Variable quality</p>
                    <p className="text-xs text-muted-foreground">Inconsistent latex and fruit quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Import dependency</p>
                    <p className="text-xs text-muted-foreground">High costs and supply chain risks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Transportation damage</p>
                    <p className="text-xs text-muted-foreground">Quality loss during long-distance shipping</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-600">Our Solutions</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Protected cultivation</p>
                    <p className="text-xs text-muted-foreground">Greenhouse systems reduce weather risks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Quality certification</p>
                    <p className="text-xs text-muted-foreground">Consistent latex and fruit quality programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Local supply advantage</p>
                    <p className="text-xs text-muted-foreground">Reduced import costs and supply chain risks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Local processing facility</p>
                    <p className="text-xs text-muted-foreground">Minimizes transportation damage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environmental Advantages */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTrendingUp className="h-5 w-5 text-primary" />
            <span>Environmental Advantages</span>
          </CardTitle>
          <CardDescription>Barbados optimal growing conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Climate Benefits</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Located within suitable 32°N-32°S tropical zone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Hot, humid climate ideal for papaya growth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Frost-free environment year-round</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Rainfall & Drainage</h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,200-1,400mm</div>
                <p className="text-sm text-muted-foreground">Annual rainfall with good drainage potential</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Gains */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconChartBar className="h-5 w-5 text-primary" />
            <span>Customer Gains</span>
          </CardTitle>
          <CardDescription>Value delivered to each market segment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Operational Gains</h4>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Year-round local supply</h5>
                  <p className="text-xs text-muted-foreground">Leverages Barbados' favorable climate</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Consistent quality</h5>
                  <p className="text-xs text-muted-foreground">Controlled cultivation and processing</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Reduced import costs</h5>
                  <p className="text-xs text-muted-foreground">Shorter supply chain advantages</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Strategic Gains</h4>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Sustainability credentials</h5>
                  <p className="text-xs text-muted-foreground">Appeals to environmentally conscious buyers</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Premium positioning</h5>
                  <p className="text-xs text-muted-foreground">"Barbados-grown" brand premium</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Integrated value chain</h5>
                  <p className="text-xs text-muted-foreground">From cultivation to processing</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
