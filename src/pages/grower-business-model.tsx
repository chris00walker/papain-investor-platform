import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconUsers, IconTarget, IconBuildingStore, IconUserCheck, IconLeaf, IconTool } from "@tabler/icons-react"

export function GrowerBusinessModelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Grower Business Model Canvas</h1>
        <p className="text-lg text-muted-foreground">
          Barbados papaya farming venture strategic framework and operations
        </p>
      </div>

      {/* Customer Segments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-primary" />
            <span>Customer Segments</span>
          </CardTitle>
          <CardDescription>Target markets and customer focus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Primary</h4>
              <p className="text-sm mb-2">Papain processors requiring reliable latex supply</p>
              <Badge variant="outline">High Volume</Badge>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Secondary</h4>
              <p className="text-sm mb-2">Fresh fruit markets and distributors</p>
              <Badge variant="secondary">Regional Focus</Badge>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Tertiary</h4>
              <p className="text-sm mb-2">Food processors and export markets</p>
              <Badge variant="outline">Export Growth</Badge>
            </div>
          </div>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm font-medium text-primary mb-1">Geographic Focus</p>
            <p className="text-sm text-muted-foreground">
              Caribbean region with expansion to North American markets
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Value Propositions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-primary" />
            <span>Value Propositions</span>
          </CardTitle>
          <CardDescription>Key differentiators and customer benefits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <IconLeaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Reliable Supply</h4>
                  <p className="text-sm text-muted-foreground">Year-round production leveraging Barbados' optimal climate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconTarget className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">Consistent latex and fruit quality through controlled cultivation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconTool className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Local Advantage</h4>
                  <p className="text-sm text-muted-foreground">Reduced transportation costs and fresher products</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <IconLeaf className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Sustainability</h4>
                  <p className="text-sm text-muted-foreground">Environmentally responsible farming practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="mt-1">Premium</Badge>
                <div>
                  <h4 className="font-semibold">Brand Positioning</h4>
                  <p className="text-sm text-muted-foreground">"Barbados-grown" brand commands premium pricing</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Channels & Relationships */}
      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <IconBuildingStore className="h-5 w-5 text-primary" />
              <span>Distribution Channels</span>
            </CardTitle>
            <CardDescription>How we reach customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm">Direct Sales</h4>
                <p className="text-xs text-muted-foreground">Long-term contracts with major papain processors</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Wholesale</h4>
                <p className="text-xs text-muted-foreground">Regional fruit distributors and markets</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Export Channels</h4>
                <p className="text-xs text-muted-foreground">International trading partners</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Digital Platform</h4>
                <p className="text-xs text-muted-foreground">B2B marketplace for smaller buyers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <IconUserCheck className="h-5 w-5 text-primary" />
              <span>Customer Relationships</span>
            </CardTitle>
            <CardDescription>Building partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm">Long-term Contracts</h4>
                <p className="text-xs text-muted-foreground">3-5 year supply agreements with processors</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Partnership Approach</h4>
                <p className="text-xs text-muted-foreground">Collaborative planning with key customers</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Quality Guarantee</h4>
                <p className="text-xs text-muted-foreground">Service level agreements for consistency</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Technical Support</h4>
                <p className="text-xs text-muted-foreground">Agronomic expertise sharing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Resources & Activities */}
      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Key Resources</CardTitle>
            <CardDescription>Critical assets and capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Physical Assets</h4>
                <ul className="text-sm space-y-1">
                  <li>• 50-100 hectares of suitable farmland in Barbados</li>
                  <li>• Irrigation systems and drainage infrastructure</li>
                  <li>• Processing facilities and storage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Capabilities</h4>
                <ul className="text-sm space-y-1">
                  <li>• Skilled agricultural workers and management</li>
                  <li>• Climate monitoring and quality control systems</li>
                  <li>• Organic and sustainability certifications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Activities</CardTitle>
            <CardDescription>Core operational processes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Cultivation</Badge>
                <span className="text-sm">Land preparation, planting, crop management</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Harvesting</Badge>
                <span className="text-sm">Fruit collection and latex extraction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Quality Control</Badge>
                <span className="text-sm">Testing, grading, and certification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Processing</Badge>
                <span className="text-sm">Basic processing and packaging</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Sales</Badge>
                <span className="text-sm">Customer relationship management</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Partnerships */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Partnerships</CardTitle>
          <CardDescription>Strategic alliances and collaborations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Government & Institutions</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Ministry of Agriculture for permits and support programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  University of West Indies for R&D collaboration
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Commercial Partners</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Logistics providers for shipping and cold chain
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Development banks and impact investors
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Equipment and agricultural input suppliers
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
