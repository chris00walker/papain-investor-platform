import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconShield, IconAlertTriangle, IconTarget, IconTrendingUp, IconClock, IconUsers } from "@tabler/icons-react"

export function ProcessorRisksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Risk Assessment & Mitigation</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive risk analysis for pharmaceutical-grade papain processing venture
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
                <h4 className="font-semibold text-red-800">Extraction Efficiency</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Papaya latex from Barbados can yield 2-3% papain by weight with &gt;90% enzyme activity retention
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> &gt;2% yield with &gt;90% activity retention</div>
                <div><span className="font-medium">Experiment:</span> Lab Extraction Trials (3 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Pharmaceutical-Grade Purity</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Processing can achieve &gt;95% papain purity suitable for pharmaceutical applications
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> &gt;95% purity with &lt;0.1% heavy metals</div>
                <div><span className="font-medium">Experiment:</span> Purification Process Development (4 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Market Demand for Premium Papain</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Pharmaceutical and food companies will pay $150-200/kg for pharmaceutical-grade Caribbean papain
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> 5+ companies express interest, 3+ accept pricing</div>
                <div><span className="font-medium">Experiment:</span> Customer Discovery and Prototype Shipments (6 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-800">Regulatory Approval Feasibility</h4>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <p className="text-sm text-red-700 mb-3">
                FDA registration and GMP certification can be achieved within 18 months at &lt;$300K cost
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> Clear path to approval within 18 months, costs &lt;$300K</div>
                <div><span className="font-medium">Experiment:</span> Regulatory Feasibility Study (6 months)</div>
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
                <h4 className="font-semibold text-yellow-800">Processing Cost Structure</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Total processing costs can be maintained at &lt;$100/kg for pharmaceutical-grade papain
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> &lt;$100/kg total processing cost</div>
                <div><span className="font-medium">Experiment:</span> Cost Modeling and Pilot Production (3 months)</div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-800">Quality Consistency and Stability</h4>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Processed papain maintains &gt;90% enzyme activity for 24 months under proper storage
              </p>
              <div className="space-y-2 text-xs">
                <div><span className="font-medium">Success Threshold:</span> &gt;90% activity retention after 24 months storage</div>
                <div><span className="font-medium">Experiment:</span> Stability Testing Program (12-24 months)</div>
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
                Technical Validation (Months 1-3)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Lab Extraction Trials - Validate extraction efficiency
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Regulatory Feasibility Study - Confirm approval pathway
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Cost Modeling - Validate economic assumptions
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="secondary">Phase 2</Badge>
                Market Validation (Months 4-6)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Customer Discovery - Test market demand and pricing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Purification Process Development - Achieve pharmaceutical grade
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Sample Production - Provide customer prototypes
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Phase 3</Badge>
                Long-term Validation (Months 7-24)
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Stability Testing Program - Confirm shelf life
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Pilot Production Scale-up - Validate commercial viability
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
                  <span className="text-sm">Extraction efficiency validated</span>
                  <Badge variant="outline">&gt;2% yield, &gt;90% activity</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Pharmaceutical purity achieved</span>
                  <Badge variant="outline">&gt;95% purity</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Market demand confirmed</span>
                  <Badge variant="outline">5+ interested customers</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Regulatory path clear</span>
                  <Badge variant="outline">&lt;18 months, &lt;$300K</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Risk Mitigation Scorecard</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Cost structure validated</span>
                  <Badge variant="outline">&lt;$100/kg processing</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Product stability confirmed</span>
                  <Badge variant="outline">24-month shelf life</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Quality systems established</span>
                  <Badge variant="outline">GMP compliance</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Financing secured</span>
                  <Badge variant="outline">$2.2M Series A</Badge>
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
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-blue-600">Months</div>
                <div className="text-xs text-muted-foreground">Technical Validation</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-green-600">Months</div>
                <div className="text-xs text-muted-foreground">Market Validation</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">24</div>
                <div className="text-sm text-purple-600">Months</div>
                <div className="text-xs text-muted-foreground">Long-term Validation</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">$2.2M</div>
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
