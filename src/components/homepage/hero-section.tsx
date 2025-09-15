import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconSeeding, IconTrendingUp, IconBuilding, IconTruck } from "@tabler/icons-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 pt-8 pb-16 lg:pt-12 lg:pb-24">
        {/* Hero Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
                Vertically Integrated
                <span className="text-primary block">Papain Value Chain</span>
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl">
                A comprehensive investment opportunity spanning cultivation, processing, and distribution across the Western Hemisphere.
              </p>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$1.7M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Integrated Ventures</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <IconTrendingUp className="mr-2 h-5 w-5" />
                View Investment Opportunity
              </Button>
              <Button variant="outline" size="lg">
                Download Executive Summary
              </Button>
            </div>
          </div>

          {/* Value Chain Visualization */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center mb-6">Integrated Value Chain</h3>
            <div className="space-y-4">
              {/* Grower */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <IconSeeding className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Grower (Barbados)</CardTitle>
                      <CardDescription>Papaya cultivation and farming operations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Premium papaya cultivation optimized for papain extraction
                  </div>
                </CardContent>
              </Card>

              {/* Processor */}
              <Card className="border-l-4 border-l-secondary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <IconBuilding className="h-6 w-6 text-secondary" />
                    <div>
                      <CardTitle className="text-lg">Processor (Extraction)</CardTitle>
                      <CardDescription>Pharmaceutical-grade papain processing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    State-of-the-art extraction and purification facility
                  </div>
                </CardContent>
              </Card>

              {/* Distributor */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <IconTruck className="h-6 w-6 text-accent" />
                    <div>
                      <CardTitle className="text-lg">Distributor (Americas)</CardTitle>
                      <CardDescription>Western Hemisphere distribution network</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Strategic distribution hub serving North and South America
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
