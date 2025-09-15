import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconUsers, IconCurrencyDollar, IconTarget, IconBuildingStore, IconUserCheck, IconFlask } from "@tabler/icons-react"

export function ProcessorBusinessModelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Processor Business Model Canvas</h1>
        <p className="text-lg text-muted-foreground">
          Pharmaceutical-grade papain extraction facility in Barbados
        </p>
      </div>

      {/* Customer Segments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconUsers className="h-5 w-5 text-secondary" />
            <span>Customer Segments</span>
          </CardTitle>
          <CardDescription>Target markets and customer characteristics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Primary Markets</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Pharmaceutical Companies</h5>
                    <Badge variant="default">Primary</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Digestive enzymes and wound healing products</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Food Processors</h5>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Meat tenderization and beverage clarification</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Emerging Markets</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Cosmetic Manufacturers</h5>
                    <Badge variant="outline">Tertiary</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Exfoliants and hair removal products</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Nutraceuticals & Textiles</h5>
                    <Badge variant="outline">Quaternary</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Specialized enzyme applications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-secondary/5 rounded-lg">
            <p className="text-sm font-medium text-secondary mb-1">Geographic Focus</p>
            <p className="text-sm text-muted-foreground">
              North America and Europe with expansion to Asia-Pacific markets
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Value Propositions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconTarget className="h-5 w-5 text-secondary" />
            <span>Value Propositions</span>
          </CardTitle>
          <CardDescription>Key differentiators and customer benefits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">&gt;95%</div>
              <h4 className="font-semibold mb-2">Pharmaceutical-Grade Quality</h4>
              <p className="text-sm text-muted-foreground">Consistent enzyme activity and purity</p>
            </div>
            <div className="text-center">
              <IconFlask className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Natural & Clean-Label</h4>
              <p className="text-sm text-muted-foreground">Caribbean-sourced, non-synthetic solution</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">25-35%</div>
              <h4 className="font-semibold mb-2">Premium Positioning</h4>
              <p className="text-sm text-muted-foreground">Above commodity papain pricing</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Quality Advantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Supply chain reliability through vertical integration</li>
                <li>• Full FDA, GMP, and international certifications</li>
                <li>• Complete farm-to-pharmaceutical tracking system</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Service Benefits</h4>
              <ul className="text-sm space-y-1">
                <li>• Technical partnerships and co-development</li>
                <li>• Regulatory support and documentation assistance</li>
                <li>• Dedicated quality assurance and customer support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Streams */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCurrencyDollar className="h-5 w-5 text-secondary" />
            <span>Revenue Streams</span>
          </CardTitle>
          <CardDescription>Diversified income sources and pricing models</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">70%</div>
              <h4 className="font-semibold mb-2">Pharmaceutical-Grade Sales</h4>
              <p className="text-sm text-muted-foreground">Primary revenue stream</p>
              <Badge variant="secondary" className="mt-2">High Margin</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">20%</div>
              <h4 className="font-semibold mb-2">Food-Grade Sales</h4>
              <p className="text-sm text-muted-foreground">Secondary market</p>
              <Badge variant="outline" className="mt-2">Stable Volume</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10%</div>
              <h4 className="font-semibold mb-2">Custom Services</h4>
              <p className="text-sm text-muted-foreground">Formulation & consulting</p>
              <Badge variant="outline" className="mt-2">Premium Pricing</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Channels & Relationships */}
      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <IconBuildingStore className="h-5 w-5 text-secondary" />
              <span>Distribution Channels</span>
            </CardTitle>
            <CardDescription>How we reach customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm">Direct B2B Sales</h4>
                <p className="text-xs text-muted-foreground">Key account management for major pharmaceutical and food companies</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Ingredient Brokers</h4>
                <p className="text-xs text-muted-foreground">Distribution through specialized enzyme and ingredient distributors</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Trade Shows</h4>
                <p className="text-xs text-muted-foreground">Industry exhibitions (SupplySide, Vitafoods, Food Ingredients)</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Digital Platform</h4>
                <p className="text-xs text-muted-foreground">B2B e-commerce for smaller customers and sample orders</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <IconUserCheck className="h-5 w-5 text-secondary" />
              <span>Customer Relationships</span>
            </CardTitle>
            <CardDescription>Building partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm">Long-term Contracts</h4>
                <p className="text-xs text-muted-foreground">3-5 year supply agreements with volume commitments</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Technical Partnerships</h4>
                <p className="text-xs text-muted-foreground">Co-development of custom enzyme formulations</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Regulatory Support</h4>
                <p className="text-xs text-muted-foreground">Assistance with product approvals and documentation</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Quality Assurance</h4>
                <p className="text-xs text-muted-foreground">Dedicated customer support for quality specifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Resources</CardTitle>
          <CardDescription>Critical assets and capabilities required</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3">Physical Infrastructure</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>5,000 sq ft pharmaceutical-grade manufacturing plant</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Extraction, purification, and drying systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Quality control laboratory with testing equipment</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Regulatory & Compliance</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>FDA registration and approval</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>GMP certification and compliance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Export permits and international certifications</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Human Capital</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Process engineers and technical specialists</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Quality control technicians</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Regulatory affairs specialists</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
