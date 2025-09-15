import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconFlask, IconMicroscope, IconCertificate, IconTrendingUp, IconShield } from "@tabler/icons-react"

export function ProcessorTechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Processing Technology & Innovation</h1>
        <p className="text-lg text-muted-foreground">
          Advanced extraction and purification technology for pharmaceutical-grade papain
        </p>
      </div>

      {/* Technology Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconFlask className="h-5 w-5 text-primary" />
            <span>Extraction Technology</span>
          </CardTitle>
          <CardDescription>Advanced processing for pharmaceutical-grade purity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Process Innovation</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Multi-Stage Extraction</h5>
                  <p className="text-xs text-muted-foreground">Optimized temperature, pH, and processing time parameters</p>
                  <Badge variant="default" className="mt-2">Core Technology</Badge>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Chromatography Purification</h5>
                  <p className="text-xs text-muted-foreground">Advanced filtration achieving {'>'}95% purity</p>
                  <Badge variant="secondary" className="mt-2">Pharmaceutical Grade</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quality Targets</h4>
              <div className="space-y-3">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{'>'}95%</div>
                  <p className="text-sm font-medium">Purity Level</p>
                  <p className="text-xs text-muted-foreground">Pharmaceutical standard</p>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-1">2-3%</div>
                  <p className="text-sm font-medium">Extraction Yield</p>
                  <p className="text-xs text-muted-foreground">From latex by weight</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Validation Experiments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconMicroscope className="h-5 w-5 text-primary" />
            <span>Technology Validation</span>
          </CardTitle>
          <CardDescription>Critical experiments to validate processing capabilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Extraction Efficiency Testing</h4>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Hypothesis</h5>
                  <p className="text-xs text-muted-foreground">Barbados papaya latex can yield 2-3% papain with {'>'}90% enzyme activity retention</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Method</h5>
                  <p className="text-xs text-muted-foreground">Test multiple extraction methods with 100kg fresh latex samples</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Timeline</h5>
                  <p className="text-xs text-muted-foreground">3 months including collection and processing</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Purity Achievement Testing</h4>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Target</h5>
                  <p className="text-xs text-muted-foreground">{'>'}95% purity with {'<'}0.1% heavy metals, {'<'}10 CFU/g microbial count</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Process</h5>
                  <p className="text-xs text-muted-foreground">Multi-stage purification using chromatography and filtration</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Validation</h5>
                  <p className="text-xs text-muted-foreground">HPLC analysis, contamination screening, stability testing</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regulatory Compliance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconCertificate className="h-5 w-5 text-primary" />
            <span>Regulatory Compliance</span>
          </CardTitle>
          <CardDescription>Meeting pharmaceutical manufacturing standards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <IconShield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">FDA Registration</h4>
              <p className="text-sm text-muted-foreground">Full compliance with pharmaceutical manufacturing requirements</p>
              <Badge variant="default" className="mt-2">Required</Badge>
            </div>
            <div className="text-center">
              <IconCertificate className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">GMP Certification</h4>
              <p className="text-sm text-muted-foreground">Good Manufacturing Practices for pharmaceutical-grade production</p>
              <Badge variant="secondary" className="mt-2">Critical</Badge>
            </div>
            <div className="text-center">
              <IconTrendingUp className="h-12 w-12 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">International Standards</h4>
              <p className="text-sm text-muted-foreground">Export permits and global market certifications</p>
              <Badge variant="outline" className="mt-2">Global</Badge>
            </div>
          </div>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold mb-2">Regulatory Timeline</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Target Timeline: 18 months</p>
                <p className="text-xs text-muted-foreground">From facility completion to full approval</p>
              </div>
              <div>
                <p className="text-sm font-medium">Estimated Cost: {'<'}$300K</p>
                <p className="text-xs text-muted-foreground">Including all compliance and certification fees</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Control Systems */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quality Control Infrastructure</CardTitle>
          <CardDescription>Ensuring consistent pharmaceutical-grade output</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3">Testing Capabilities</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Purity analysis using HPLC and spectroscopy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Enzyme activity measurement and stability testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Contamination screening for heavy metals and microbes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Complete batch documentation and traceability</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Process Control</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Real-time monitoring of extraction parameters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Automated quality checkpoints throughout processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Environmental controls for temperature and humidity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">Clean room standards for pharmaceutical production</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Innovation Roadmap */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technology Development Roadmap</CardTitle>
          <CardDescription>Continuous improvement and innovation pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Phase 1: Validation</h4>
                <p className="text-sm text-muted-foreground mb-3">Prove core technology capabilities</p>
                <ul className="text-xs space-y-1">
                  <li>• Extraction efficiency testing</li>
                  <li>• Purity achievement validation</li>
                  <li>• Regulatory pathway mapping</li>
                </ul>
                <Badge variant="default" className="mt-3">6 months</Badge>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Phase 2: Optimization</h4>
                <p className="text-sm text-muted-foreground mb-3">Scale and refine processes</p>
                <ul className="text-xs space-y-1">
                  <li>• Process parameter optimization</li>
                  <li>• Quality system implementation</li>
                  <li>• Pilot production runs</li>
                </ul>
                <Badge variant="secondary" className="mt-3">12 months</Badge>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Phase 3: Innovation</h4>
                <p className="text-sm text-muted-foreground mb-3">Advanced capabilities development</p>
                <ul className="text-xs space-y-1">
                  <li>• Custom formulation services</li>
                  <li>• Enhanced purification methods</li>
                  <li>• New product development</li>
                </ul>
                <Badge variant="outline" className="mt-3">Ongoing</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
