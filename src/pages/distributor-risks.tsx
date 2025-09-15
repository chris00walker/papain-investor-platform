import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconShield, IconAlertTriangle, IconTarget, IconTrendingUp, IconClock, IconUsers } from "@tabler/icons-react"

export function DistributorRisksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Risk Assessment & Mitigation</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive risk analysis for Western Hemisphere papain distribution venture
        </p>
      </div>

      {/* Risk Categories Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconShield className="h-5 w-5 text-primary" />
            <span>Risk Categories</span>
          </CardTitle>
          <CardDescription>Critical assumptions requiring validation by priority</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <IconAlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Critical Risks</h4>
              <p className="text-sm text-muted-foreground mb-3">High impact, high uncertainty</p>
              <Badge variant="destructive">3 Key Areas</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <IconTarget className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Supporting Risks</h4>
              <p className="text-sm text-muted-foreground mb-3">Medium impact risks</p>
              <Badge variant="secondary">4 Areas</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <IconTrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Low Priority</h4>
              <p className="text-sm text-muted-foreground mb-3">Manageable risks</p>
              <Badge variant="outline">Operational</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Assumptions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconAlertTriangle className="h-5 w-5 text-red-500" />
            <span>Critical Business Assumptions</span>
          </CardTitle>
          <CardDescription>High-priority hypotheses requiring immediate validation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Market Demand</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                $25M serviceable market exists for regional papain distribution with 50+ qualified prospects
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 50+ qualified prospects identified, 20% conversion rate</div>
                <div><span className="font-medium">Experiment:</span> Market Demand Validation (6 weeks)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Customer Preference</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Customers will pay 10-15% premium for faster delivery and better service
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 60% of prospects willing to switch for improved service</div>
                <div><span className="font-medium">Experiment:</span> Customer Preference Survey (4 weeks)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Pricing Power</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Can maintain 35% gross margins while remaining competitive in the market
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> Achieve target margins in 80% of customer segments</div>
                <div><span className="font-medium">Experiment:</span> Pricing Strategy Testing (8 weeks)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Delivery Performance</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Can achieve 2-3 day delivery to major markets from Miami distribution hub
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 95% on-time delivery within promised timeframes</div>
                <div><span className="font-medium">Experiment:</span> Logistics Performance Trial (12 weeks)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supporting Assumptions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-yellow-500" />
            <span>Supporting Assumptions</span>
          </CardTitle>
          <CardDescription>Medium priority operational risks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-800">Inventory Optimization</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                45-day inventory cycle achievable with 99% service level and 8x annual turnover
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> Inventory turnover 8x annually with &lt;1% stockouts</div>
                <div><span className="font-medium">Experiment:</span> Inventory Management Pilot (16 weeks)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-800">Competition Response</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Existing suppliers won't aggressively compete on regional service in first 18 months
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> No major competitive threats in first 18 months</div>
                <div><span className="font-medium">Experiment:</span> Competitive Intelligence Monitoring (Ongoing)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-800">Supplier Reliability</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Barbados processor can meet 80% of demand requirements with consistent quality
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> Consistent quality and delivery performance</div>
                <div><span className="font-medium">Experiment:</span> Supplier Performance Assessment (24 weeks)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-800">Operational Efficiency</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Can achieve projected cost structure and productivity levels within budget
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> Operating expenses within 5% of budget</div>
                <div><span className="font-medium">Experiment:</span> Operations Efficiency Trial (20 weeks)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Mitigation Experiments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-blue-500" />
            <span>Risk Mitigation Experiments</span>
          </CardTitle>
          <CardDescription>Structured approach to validate critical assumptions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="default">Phase 1</Badge>
                Market Validation (Months 1-3)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Market Demand Validation - Survey 100 potential customers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Customer Preference Analysis - Test service premium willingness
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Competitive Intelligence - Assess existing supplier landscape
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="secondary">Phase 2</Badge>
                Operational Testing (Months 4-8)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Pricing Strategy Testing - Validate margin assumptions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Logistics Performance Trial - Test delivery capabilities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Inventory Management Pilot - Optimize stock levels
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Phase 3</Badge>
                Scale Validation (Months 9-18)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Operations Efficiency Trial - Validate cost structure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Supplier Performance Assessment - Long-term reliability testing
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Criteria */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTrendingUp className="h-5 w-5 text-green-500" />
            <span>Success Criteria & Decision Framework</span>
          </CardTitle>
          <CardDescription>Clear metrics for go/no-go decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-4 text-green-600">Business Viability Scorecard</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Market demand validated</span>
                  <Badge variant="outline">50+ qualified prospects</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Customer preference confirmed</span>
                  <Badge variant="outline">60% willing to switch</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Pricing power validated</span>
                  <Badge variant="outline">35% gross margins</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Delivery performance achieved</span>
                  <Badge variant="outline">95% on-time delivery</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Risk Mitigation Scorecard</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Inventory optimization achieved</span>
                  <Badge variant="outline">8x turnover, &lt;1% stockouts</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Competition monitored</span>
                  <Badge variant="outline">No major threats</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Supplier reliability confirmed</span>
                  <Badge variant="outline">Consistent performance</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Operational efficiency validated</span>
                  <Badge variant="outline">Within 5% of budget</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Validation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconClock className="h-5 w-5 text-purple-500" />
            <span>Risk Validation Timeline</span>
          </CardTitle>
          <CardDescription>18-month structured validation approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-blue-600">Months</div>
                <div className="text-xs text-muted-foreground">Market Validation</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-green-600">Months</div>
                <div className="text-xs text-muted-foreground">Operational Testing</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">18</div>
                <div className="text-sm text-purple-600">Months</div>
                <div className="text-xs text-muted-foreground">Scale Validation</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">$1.2M</div>
                <div className="text-sm text-orange-600">Investment</div>
                <div className="text-xs text-muted-foreground">If Validated</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
