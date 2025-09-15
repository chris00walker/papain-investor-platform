import { PrimaryNav } from '@/components/navigation/primary-nav'
import { BreadcrumbNav } from '@/components/navigation/breadcrumb-nav'
import { FloatingCTA } from '@/components/navigation/floating-cta'
import { HeroSection } from '@/components/homepage/hero-section'
import { InvestmentOverview } from '@/components/homepage/investment-overview'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <PrimaryNav />
      <div className="pt-20"> {/* Increased padding to ensure content visibility */}
        <BreadcrumbNav />
        <main className="flex-1">
          <HeroSection />
          <InvestmentOverview />
        </main>
      </div>
      <FloatingCTA />
    </div>
  )
}
