import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconUsers, IconTool, IconLeaf, IconSettings } from "@tabler/icons-react"

export function GrowerOperationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Grower Operations</h1>
        <p className="text-lg text-muted-foreground">
          Operational framework and key activities for Barbados papaya farming
        </p>
      </div>

      {/* Key Activities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTool className="h-5 w-5 text-primary" />
            <span>Core Operations</span>
          </CardTitle>
          <CardDescription>Essential activities for successful papaya cultivation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-4 text-primary">Cultivation Activities</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">Phase 1</Badge>
                  <div>
                    <p className="font-medium text-sm">Land Preparation</p>
                    <p className="text-xs text-muted-foreground">Site selection, soil preparation, drainage systems</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">Phase 2</Badge>
                  <div>
                    <p className="font-medium text-sm">Planting</p>
                    <p className="text-xs text-muted-foreground">Seedling selection, spacing, irrigation setup</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">Phase 3</Badge>
                  <div>
                    <p className="font-medium text-sm">Crop Management</p>
                    <p className="text-xs text-muted-foreground">Fertilization, pest control, pruning, monitoring</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Processing Activities</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Harvest</Badge>
                  <div>
                    <p className="font-medium text-sm">Fruit Collection & Latex Extraction</p>
                    <p className="text-xs text-muted-foreground">Timing optimization, quality preservation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Quality</Badge>
                  <div>
                    <p className="font-medium text-sm">Testing & Certification</p>
                    <p className="text-xs text-muted-foreground">Grading, quality control, compliance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Processing</Badge>
                  <div>
                    <p className="font-medium text-sm">Basic Processing & Packaging</p>
                    <p className="text-xs text-muted-foreground">Value-added preparation for market</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconLeaf className="h-5 w-5 text-primary" />
            <span>Key Resources</span>
          </CardTitle>
          <CardDescription>Critical assets and capabilities required</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3">Physical Assets</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>50-100 hectares suitable farmland</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Irrigation systems & drainage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Processing facilities & storage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Agricultural equipment & tools</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Human Capital</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Skilled agricultural workers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Farm management expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Quality control specialists</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Sales & customer relations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Technology & Systems</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Climate monitoring systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Quality control technology</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Organic certifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Sustainability credentials</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operational Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconSettings className="h-5 w-5 text-primary" />
            <span>Operational Timeline</span>
          </CardTitle>
          <CardDescription>Key milestones and production phases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div className="w-px h-16 bg-border mt-2"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Year 1: Establishment</h4>
                <p className="text-sm text-muted-foreground mb-2">Land preparation, planting, infrastructure development</p>
                <div className="flex gap-2">
                  <Badge variant="outline">50 hectares</Badge>
                  <Badge variant="outline">Infrastructure setup</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div className="w-px h-16 bg-border mt-2"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Year 2: Initial Production</h4>
                <p className="text-sm text-muted-foreground mb-2">First harvest, quality systems, market entry</p>
                <div className="flex gap-2">
                  <Badge variant="outline">Limited harvest</Badge>
                  <Badge variant="outline">Quality certification</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Year 3+: Full Production</h4>
                <p className="text-sm text-muted-foreground mb-2">Scale to 100 hectares, full market penetration</p>
                <div className="flex gap-2">
                  <Badge variant="outline">100 hectares</Badge>
                  <Badge variant="outline">$6M revenue target</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workforce Requirements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-primary" />
            <span>Workforce Requirements</span>
          </CardTitle>
          <CardDescription>Staffing needs and organizational structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Permanent Staff</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Farm Manager</p>
                    <p className="text-xs text-muted-foreground">Operations oversight, planning</p>
                  </div>
                  <Badge variant="outline">1 FTE</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Agricultural Technicians</p>
                    <p className="text-xs text-muted-foreground">Crop management, quality control</p>
                  </div>
                  <Badge variant="outline">3-4 FTE</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Equipment Operators</p>
                    <p className="text-xs text-muted-foreground">Machinery, irrigation systems</p>
                  </div>
                  <Badge variant="outline">2-3 FTE</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Seasonal Workers</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Harvest Workers</p>
                    <p className="text-xs text-muted-foreground">Peak season fruit collection</p>
                  </div>
                  <Badge variant="secondary">10-15 seasonal</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Processing Staff</p>
                    <p className="text-xs text-muted-foreground">Latex extraction, packaging</p>
                  </div>
                  <Badge variant="secondary">5-8 seasonal</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">General Labor</p>
                    <p className="text-xs text-muted-foreground">Maintenance, support activities</p>
                  </div>
                  <Badge variant="secondary">8-12 seasonal</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
