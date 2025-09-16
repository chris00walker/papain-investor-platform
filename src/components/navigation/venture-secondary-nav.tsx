import { 
  IconFileDescription, 
  IconChartBar, 
  IconCurrencyDollar, 
  IconShield,
  IconTarget,
  IconUsers,
  IconTrendingUp
} from "@tabler/icons-react"
import { Link, useLocation } from "react-router-dom"

interface VentureSecondaryNavProps {
  ventureType: "grower" | "processor" | "distributor"
}

export function VentureSecondaryNav({ ventureType }: VentureSecondaryNavProps) {
  const location = useLocation()

  const ventureConfig = {
    grower: {
      title: "Grower (Barbados)",
      colorClass: "border-primary/20 bg-primary/5",
      activeClass: "bg-primary text-primary-foreground",
      hoverClass: "hover:bg-primary/10",
      sections: [
        { title: "Overview", href: `/ventures/grower`, icon: IconTarget },
        { title: "Business Model", href: `/ventures/grower/business-model`, icon: IconFileDescription },
        { title: "Financials", href: `/ventures/grower/financials`, icon: IconCurrencyDollar },
        { title: "Market", href: `/ventures/grower/market`, icon: IconChartBar },
        { title: "Risks", href: `/ventures/grower/risks`, icon: IconShield },
        { title: "Operations", href: `/ventures/grower/operations`, icon: IconUsers }
      ]
    },
    processor: {
      title: "Processor (Extraction)",
      colorClass: "border-secondary/20 bg-secondary/5",
      activeClass: "bg-secondary text-secondary-foreground",
      hoverClass: "hover:bg-secondary/10",
      sections: [
        { title: "Overview", href: `/ventures/processor`, icon: IconTarget },
        { title: "Business Model", href: `/ventures/processor/business-model`, icon: IconFileDescription },
        { title: "Financials", href: `/ventures/processor/financials`, icon: IconCurrencyDollar },
        { title: "Technology", href: `/ventures/processor/technology`, icon: IconTrendingUp },
        { title: "Risks", href: `/ventures/processor/risks`, icon: IconShield },
        { title: "Operations", href: `/ventures/processor/operations`, icon: IconUsers }
      ]
    },
    distributor: {
      title: "Distributor (Americas)",
      colorClass: "border-accent/20 bg-accent/5",
      activeClass: "bg-accent text-accent-foreground",
      hoverClass: "hover:bg-accent/10",
      sections: [
        { title: "Overview", href: `/ventures/distributor`, icon: IconTarget },
        { title: "Business Model", href: `/ventures/distributor/business-model`, icon: IconFileDescription },
        { title: "Financials", href: `/ventures/distributor/financials`, icon: IconCurrencyDollar },
        { title: "Strategy", href: `/ventures/distributor/strategy`, icon: IconChartBar },
        { title: "Risks", href: `/ventures/distributor/risks`, icon: IconShield },
        { title: "Logistics", href: `/ventures/distributor/logistics`, icon: IconUsers }
      ]
    }
  }

  const config = ventureConfig[ventureType]

  return (
    <div className={`border-b ${config.colorClass}`}>
      <div className="container mx-auto px-4">
        <div className="py-3">
          {/* Clean Tab Navigation */}
          <nav className="flex items-center space-x-1">
            {config.sections.map((section) => (
              <Link
                key={section.href}
                to={section.href}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === section.href
                    ? config.activeClass
                    : `text-muted-foreground ${config.hoverClass}`
                }`}
              >
                <section.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{section.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
