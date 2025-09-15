import { Button } from "@/components/ui/button"
import { IconTrendingUp } from "@tabler/icons-react"
import { MultiModalContent } from "./multi-modal-content"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 pt-8 pb-16 lg:pt-12 lg:pb-24">
        {/* Hero Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
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
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/investment-opportunity'}>
                <IconTrendingUp className="mr-2 h-5 w-5" />
                View Investment Opportunity
              </Button>
            </div>
          </div>

          {/* Multi-Modal Content Access */}
          <MultiModalContent />
        </div>
      </div>
    </div>
  )
}
