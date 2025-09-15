import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { IconTruck, IconMapPin, IconClock, IconShield, IconNetwork, IconTarget, IconTrendingUp } from '@tabler/icons-react'

export function DistributorLogisticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Distributor Logistics</h1>
        <p className="text-muted-foreground">
          Strategic distribution operations serving the Western Hemisphere papain market
        </p>
      </div>

      {/* Distribution Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconMapPin className="h-5 w-5" />
            Distribution Strategy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Geographic Coverage</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">North America</span>
                  <Badge variant="default">Primary Market</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Central America</span>
                  <Badge variant="secondary">Growth Market</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">South America</span>
                  <Badge variant="outline">Expansion Market</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Distribution Hub</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Miami, Florida</strong> - Strategic location providing optimal access to entire Western Hemisphere
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Major international shipping hub</li>
                  <li>• Established cold chain infrastructure</li>
                  <li>• Regulatory expertise for international trade</li>
                  <li>• 24-48 hour delivery to major markets</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supply Chain Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconTruck className="h-5 w-5" />
            Supply Chain Operations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Upstream Integration</h4>
              <ul className="text-sm space-y-1">
                <li>• Direct connection to Barbados processor</li>
                <li>• Preferential supplier terms</li>
                <li>• Coordinated production planning</li>
                <li>• Quality control oversight</li>
                <li>• Shared logistics costs</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Inventory Management</h4>
              <ul className="text-sm space-y-1">
                <li>• 45-day inventory cycle</li>
                <li>• 8x annual turnover</li>
                <li>• Temperature-controlled storage</li>
                <li>• Real-time inventory tracking</li>
                <li>• Automated reorder systems</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Quality Assurance</h4>
              <ul className="text-sm space-y-1">
                <li>• Pharmaceutical-grade handling</li>
                <li>• Cold chain maintenance</li>
                <li>• Batch tracking and traceability</li>
                <li>• Quality testing protocols</li>
                <li>• Regulatory compliance monitoring</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delivery & Service */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconClock className="h-5 w-5" />
            Delivery & Service Excellence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Service Standards</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Delivery Speed</span>
                  <Badge variant="default">24-48 Hours</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Order Accuracy</span>
                  <Badge variant="default">99.5%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Temperature Control</span>
                  <Badge variant="default">±2°C</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Customer Support</span>
                  <Badge variant="default">24/7</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Value-Added Services</h4>
              <ul className="text-sm space-y-2">
                <li>• Technical application support</li>
                <li>• Custom packaging solutions</li>
                <li>• Regulatory documentation assistance</li>
                <li>• Digital ordering platform</li>
                <li>• Inventory management consulting</li>
                <li>• Emergency delivery services</li>
                <li>• Product training and education</li>
                <li>• Market intelligence sharing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology Platform */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconNetwork className="h-5 w-5" />
            Technology Platform
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Digital Infrastructure</h4>
              <ul className="text-sm space-y-1">
                <li>• Advanced inventory management system</li>
                <li>• Real-time temperature monitoring</li>
                <li>• Customer portal and ordering platform</li>
                <li>• Automated logistics optimization</li>
                <li>• Integration with supplier systems</li>
                <li>• Mobile delivery tracking</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Competitive Advantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Fastest delivery in the industry</li>
                <li>• Superior customer support</li>
                <li>• Regulatory expertise</li>
                <li>• Vertical integration benefits</li>
                <li>• Technology-enabled efficiency</li>
                <li>• Partnership approach</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconTarget className="h-5 w-5" />
            Implementation Roadmap
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Badge variant="default">Phase 1</Badge>
                Foundation (Months 1-12)
              </h4>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Establish Miami distribution center</li>
                <li>• Secure initial customer base (10 key accounts)</li>
                <li>• Implement inventory management systems</li>
                <li>• Achieve regulatory compliance</li>
                <li>• Launch basic delivery operations</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Badge variant="secondary">Phase 2</Badge>
                Expansion (Months 13-24)
              </h4>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Scale operations to serve 25+ customers</li>
                <li>• Launch digital ordering platform</li>
                <li>• Expand product portfolio</li>
                <li>• Achieve operational break-even</li>
                <li>• Optimize delivery routes and timing</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Badge variant="outline">Phase 3</Badge>
                Leadership (Months 25-36)
              </h4>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Capture 15% market share in target segments</li>
                <li>• Launch value-added services</li>
                <li>• Consider secondary distribution centers</li>
                <li>• Evaluate acquisition opportunities</li>
                <li>• Establish market leadership position</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconShield className="h-5 w-5" />
            Logistics Risk Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Risk Mitigation</h4>
              <ul className="text-sm space-y-1">
                <li>• Diversified supplier base beyond Barbados</li>
                <li>• Comprehensive cargo and liability insurance</li>
                <li>• Backup cold storage facilities</li>
                <li>• Emergency delivery protocols</li>
                <li>• Currency hedging for major transactions</li>
                <li>• Regulatory compliance monitoring</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Operational Resilience</h4>
              <ul className="text-sm space-y-1">
                <li>• Redundant transportation networks</li>
                <li>• Multiple shipping partners</li>
                <li>• Real-time monitoring systems</li>
                <li>• Contingency inventory buffers</li>
                <li>• Cross-trained operational staff</li>
                <li>• Business continuity planning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconTrendingUp className="h-5 w-5" />
            Key Performance Indicators
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-600">8x</div>
              <div className="text-sm text-muted-foreground">Inventory Turnover</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-600">99.5%</div>
              <div className="text-sm text-muted-foreground">Order Accuracy</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-purple-600">24-48h</div>
              <div className="text-sm text-muted-foreground">Delivery Time</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-orange-600">15%</div>
              <div className="text-sm text-muted-foreground">Working Capital</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
