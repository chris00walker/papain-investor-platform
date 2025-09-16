import { VentureSecondaryNav } from "@/components/navigation/venture-secondary-nav"
import { PrimaryNav } from "@/components/navigation/primary-nav"
import { BreadcrumbNav } from "@/components/navigation/breadcrumb-nav"
import type { ReactNode } from "react"

interface VentureLayoutProps {
  ventureType: "grower" | "processor" | "distributor"
  children: ReactNode
}

export function VentureLayout({ ventureType, children }: VentureLayoutProps) {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8f8f8'}}>
      <PrimaryNav />
      <div className="pt-20"> {/* Increased padding to ensure content visibility */}
        <BreadcrumbNav />
        <VentureSecondaryNav ventureType={ventureType} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
