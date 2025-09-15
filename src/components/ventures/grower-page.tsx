import { VentureLayout } from "@/components/ventures/venture-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconSeeding, IconMapPin, IconCalendar, IconTrendingUp } from "@tabler/icons-react"

export function GrowerPage() {
  return (
    <VentureLayout ventureType="grower">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Venture Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <IconSeeding className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Grower Venture</h1>
                <p className="text-lg text-muted-foreground">Premium papaya cultivation in Barbados</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Agriculture</Badge>
              <Badge variant="secondary">Barbados</Badge>
              <Badge variant="secondary">Sustainable Farming</Badge>
              <Badge variant="secondary">Premium Quality</Badge>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <IconMapPin className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Location</Badge>
                </div>
                <CardTitle className="text-2xl">25 Acres</CardTitle>
                <CardDescription>Prime agricultural land in Barbados</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <IconCalendar className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Timeline</Badge>
                </div>
                <CardTitle className="text-2xl">18 Months</CardTitle>
                <CardDescription>From planting to full production</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <IconTrendingUp className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Capacity</Badge>
                </div>
                <CardTitle className="text-2xl">500 Tons</CardTitle>
                <CardDescription>Annual papaya production capacity</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <IconSeeding className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Investment</Badge>
                </div>
                <CardTitle className="text-2xl">$650K</CardTitle>
                <CardDescription>Total investment requirement</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Executive Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
              <CardDescription>
                Strategic papaya cultivation optimized for pharmaceutical-grade papain extraction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The Grower venture establishes a premium papaya cultivation operation in Barbados, 
                strategically positioned to supply high-quality raw materials for papain extraction. 
                Our sustainable farming practices and optimal growing conditions ensure consistent, 
                pharmaceutical-grade papaya production.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Key Advantages</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ideal tropical climate in Barbados</li>
                    <li>• Sustainable farming practices</li>
                    <li>• Optimized for papain content</li>
                    <li>• Year-round production capability</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Market Position</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Premium quality positioning</li>
                    <li>• Pharmaceutical-grade standards</li>
                    <li>• Integrated supply chain</li>
                    <li>• Competitive cost structure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </VentureLayout>
  )
}
