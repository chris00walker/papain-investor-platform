import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconUsers, IconSettings, IconTruck, IconFlask, IconBuilding, IconCalendar } from "@tabler/icons-react"

export function ProcessorOperationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Operations & Implementation</h1>
        <p className="text-lg text-muted-foreground">
          Operational planning and implementation strategy for pharmaceutical-grade papain processing
        </p>
      </div>

      {/* Key Activities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconSettings className="h-5 w-5 text-primary" />
            <span>Key Activities</span>
          </CardTitle>
          <CardDescription>Core operational processes and workflows</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <IconTruck className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Latex Collection</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Coordinated harvesting from integrated papaya farm
              </p>
              <ul className="text-xs space-y-1">
                <li>• Daily collection scheduling</li>
                <li>• Quality control at source</li>
                <li>• Cold chain management</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <IconFlask className="h-8 w-8 text-secondary mb-3" />
              <h4 className="font-semibold mb-2">Enzyme Extraction</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Multi-stage extraction and concentration processes
              </p>
              <ul className="text-xs space-y-1">
                <li>• Temperature-controlled extraction</li>
                <li>• pH optimization</li>
                <li>• Concentration monitoring</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <IconSettings className="h-8 w-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Purification</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Chromatography and filtration to pharmaceutical grade
              </p>
              <ul className="text-xs space-y-1">
                <li>• Multi-stage chromatography</li>
                <li>• Contamination removal</li>
                <li>• Purity verification</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <IconFlask className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Quality Testing</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Purity analysis, enzyme activity assays, contamination screening
              </p>
              <ul className="text-xs space-y-1">
                <li>• HPLC analysis</li>
                <li>• Activity assays</li>
                <li>• Microbial testing</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <IconBuilding className="h-8 w-8 text-secondary mb-3" />
              <h4 className="font-semibold mb-2">Compliance Management</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Regulatory documentation and certification maintenance
              </p>
              <ul className="text-xs space-y-1">
                <li>• FDA documentation</li>
                <li>• GMP compliance</li>
                <li>• Audit preparation</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <IconTruck className="h-8 w-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Distribution</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Packaging, storage, and logistics coordination
              </p>
              <ul className="text-xs space-y-1">
                <li>• Pharmaceutical packaging</li>
                <li>• Cold storage management</li>
                <li>• Shipping coordination</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Production Capacity */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconSettings className="h-5 w-5 text-primary" />
            <span>Production Capacity</span>
          </CardTitle>
          <CardDescription>Processing capabilities and output targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">50</div>
              <h4 className="font-semibold mb-2">Tons Annually</h4>
              <p className="text-sm text-muted-foreground">Full capacity papain production</p>
              <Badge variant="default" className="mt-2">Target Capacity</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-2">2-3%</div>
              <h4 className="font-semibold mb-2">Extraction Yield</h4>
              <p className="text-sm text-muted-foreground">Papain by weight from fresh latex</p>
              <Badge variant="secondary" className="mt-2">Efficiency Target</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">{'>'}95%</div>
              <h4 className="font-semibold mb-2">Purity Level</h4>
              <p className="text-sm text-muted-foreground">Pharmaceutical-grade standard</p>
              <Badge variant="outline" className="mt-2">Quality Standard</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Partnerships */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-primary" />
            <span>Key Partnerships</span>
          </CardTitle>
          <CardDescription>Strategic relationships and collaborations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Supply Chain Partners</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Papaya Farm Integration</h5>
                  <p className="text-xs text-muted-foreground">Direct supply agreement with farming operation</p>
                  <Badge variant="default" className="mt-2">Critical</Badge>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Equipment Suppliers</h5>
                  <p className="text-xs text-muted-foreground">Specialized enzyme processing equipment manufacturers</p>
                  <Badge variant="secondary" className="mt-2">Strategic</Badge>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Logistics Partners</h5>
                  <p className="text-xs text-muted-foreground">Cold chain and specialized chemical transportation</p>
                  <Badge variant="outline" className="mt-2">Operational</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Knowledge Partners</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Research Institutions</h5>
                  <p className="text-xs text-muted-foreground">University partnerships for R&D and process optimization</p>
                  <Badge variant="default" className="mt-2">Innovation</Badge>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Regulatory Consultants</h5>
                  <p className="text-xs text-muted-foreground">FDA and international compliance expertise</p>
                  <Badge variant="secondary" className="mt-2">Compliance</Badge>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Industry Associations</h5>
                  <p className="text-xs text-muted-foreground">Pharmaceutical and enzyme industry networks</p>
                  <Badge variant="outline" className="mt-2">Market Access</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Structure */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCalendar className="h-5 w-5 text-primary" />
            <span>Cost Structure</span>
          </CardTitle>
          <CardDescription>Operational cost breakdown and management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Fixed Costs (65%)</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Facility & Equipment</h5>
                    <p className="text-xs text-muted-foreground">Manufacturing plant and processing equipment</p>
                  </div>
                  <Badge variant="default">30%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Labor (Permanent Staff)</h5>
                    <p className="text-xs text-muted-foreground">Process engineers, technicians, quality staff</p>
                  </div>
                  <Badge variant="secondary">20%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Regulatory & Compliance</h5>
                    <p className="text-xs text-muted-foreground">FDA compliance, certifications, audits</p>
                  </div>
                  <Badge variant="outline">15%</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Variable Costs (35%)</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Raw Materials</h5>
                    <p className="text-xs text-muted-foreground">Papaya latex from integrated farm</p>
                  </div>
                  <Badge variant="default">15%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Utilities & Chemicals</h5>
                    <p className="text-xs text-muted-foreground">Processing chemicals, energy, water</p>
                  </div>
                  <Badge variant="secondary">10%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Packaging & Logistics</h5>
                    <p className="text-xs text-muted-foreground">Pharmaceutical packaging, shipping</p>
                  </div>
                  <Badge variant="outline">6%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h5 className="font-medium text-sm">Quality Testing</h5>
                    <p className="text-xs text-muted-foreground">Laboratory analysis, testing materials</p>
                  </div>
                  <Badge variant="outline">4%</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCalendar className="h-5 w-5 text-primary" />
            <span>Implementation Timeline</span>
          </CardTitle>
          <CardDescription>Phased rollout and operational milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">Phase 1</h4>
                <p className="text-sm text-muted-foreground mb-2">Facility Construction</p>
                <Badge variant="default" className="mb-2">12 months</Badge>
                <ul className="text-xs space-y-1">
                  <li>• Site preparation</li>
                  <li>• Equipment installation</li>
                  <li>• Initial testing</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">Phase 2</h4>
                <p className="text-sm text-muted-foreground mb-2">Regulatory Approval</p>
                <Badge variant="secondary" className="mb-2">18 months</Badge>
                <ul className="text-xs space-y-1">
                  <li>• FDA registration</li>
                  <li>• GMP certification</li>
                  <li>• Export permits</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">Phase 3</h4>
                <p className="text-sm text-muted-foreground mb-2">Pilot Production</p>
                <Badge variant="outline" className="mb-2">6 months</Badge>
                <ul className="text-xs space-y-1">
                  <li>• Process validation</li>
                  <li>• Quality testing</li>
                  <li>• Customer samples</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">Phase 4</h4>
                <p className="text-sm text-muted-foreground mb-2">Full Operations</p>
                <Badge variant="outline" className="mb-2">Ongoing</Badge>
                <ul className="text-xs space-y-1">
                  <li>• Commercial production</li>
                  <li>• Market expansion</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-semibold mb-2">Break-even Target</h4>
              <p className="text-sm text-muted-foreground">
                Month 24 - Full operational capacity with established customer base and optimized processes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
