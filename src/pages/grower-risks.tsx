import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconShield, IconAlertTriangle, IconTarget, IconTrendingUp, IconClock, IconUsers } from "@tabler/icons-react"

export function GrowerRisksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Risk Assessment & Mitigation</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive risk analysis for Barbados papaya farming venture
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
              <Badge variant="destructive">4 Key Areas</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <IconTarget className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Supporting Risks</h4>
              <p className="text-sm text-muted-foreground mb-3">Medium impact risks</p>
              <Badge variant="secondary">2 Areas</Badge>
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
                <h4 className="font-semibold text-red-800">Market Demand for Papain</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Regional papain processors have unmet demand of 800+ tons annually and will pay $15-20/kg for reliable local supply
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 3+ processors commit to 200+ tons annually at $15+/kg</div>
                <div><span className="font-medium">Experiment:</span> Customer Discovery Interviews (4-6 weeks)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Papaya Yield in Barbados</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Papaya cultivation can achieve 25-30 tons/hectare annually with proper irrigation and drainage
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 20+ tons/hectare with 80%+ tree survival</div>
                <div><span className="font-medium">Experiment:</span> Pilot Plot Trial (18-24 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Premium Pricing Acceptance</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Customers will pay 15-20% premium for locally-grown, certified papaya products
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 60%+ of prospects accept premium pricing</div>
                <div><span className="font-medium">Experiment:</span> Market Trial (3 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Regulatory Requirements</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Papain processing and export permits can be obtained within 6 months at reasonable cost (&lt;$50K)
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> All permits approved within 6 months, costs &lt;$50K</div>
                <div><span className="font-medium">Experiment:</span> Regulatory Discovery (6 months)</div>
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
                <h4 className="font-semibold text-yellow-800">Labor Availability</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Barbados has sufficient skilled agricultural workers for 50-hectare operation
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 15+ qualified workers available at budgeted wages</div>
                <div><span className="font-medium">Experiment:</span> Labor Market Survey (2 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-800">Climate Resilience</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Papaya cultivation can withstand typical Caribbean weather patterns with &lt;20% yield loss
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> &lt;20% yield loss from weather, 6-month recovery</div>
                <div><span className="font-medium">Experiment:</span> Sensitivity Analysis + Historical Data Review (1 month)</div>
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
                Quick Validation (Months 1-2)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Customer Discovery Interviews - Validate market demand
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Regulatory Discovery - Confirm permit feasibility
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Labor Market Survey - Assess workforce availability
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="secondary">Phase 2</Badge>
                Market Testing (Months 3-6)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Market Trial - Test premium pricing acceptance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Sensitivity Analysis - Model weather risks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Pilot Plot Planning - Prepare for cultivation trial
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Phase 3</Badge>
                Technical Validation (Months 7-24)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Pilot Plot Execution - Full growing cycle test
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Results Analysis - Update business model based on learnings
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
                  <Badge variant="outline">3+ customer commitments</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Yield assumptions confirmed</span>
                  <Badge variant="outline">20+ tons/hectare</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Premium pricing accepted</span>
                  <Badge variant="outline">60%+ conversion</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Regulatory path clear</span>
                  <Badge variant="outline">&lt;6 months, &lt;$50K</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Risk Mitigation Scorecard</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Labor supply secured</span>
                  <Badge variant="outline">15+ qualified workers</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Weather resilience quantified</span>
                  <Badge variant="outline">&lt;20% yield loss</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Supply chain partnerships</span>
                  <Badge variant="outline">Established</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Financing options confirmed</span>
                  <Badge variant="outline">$1.8M Series A</Badge>
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
          <CardDescription>24-month structured validation approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-blue-600">Months</div>
                <div className="text-xs text-muted-foreground">Quick Validation</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-green-600">Months</div>
                <div className="text-xs text-muted-foreground">Market Testing</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">24</div>
                <div className="text-sm text-purple-600">Months</div>
                <div className="text-xs text-muted-foreground">Technical Validation</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">$1.8M</div>
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
