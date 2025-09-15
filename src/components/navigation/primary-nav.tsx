import { Button } from "@/components/ui/button"
import { IconSeeding, IconBuilding, IconTruck, IconChartBar, IconDownload, IconMail } from "@tabler/icons-react"
import { Link, useLocation } from "react-router-dom"

export function PrimaryNav() {
  const location = useLocation()

  const navItems = [
    {
      title: "Overview",
      href: "/",
      icon: IconChartBar,
      isActive: location.pathname === "/"
    },
    {
      title: "Grower",
      href: "/ventures/grower",
      icon: IconSeeding,
      isActive: location.pathname.startsWith("/ventures/grower"),
      color: "border-primary text-primary"
    },
    {
      title: "Processor", 
      href: "/ventures/processor",
      icon: IconBuilding,
      isActive: location.pathname.startsWith("/ventures/processor"),
      color: "border-secondary text-secondary"
    },
    {
      title: "Distributor",
      href: "/ventures/distributor", 
      icon: IconTruck,
      isActive: location.pathname.startsWith("/ventures/distributor"),
      color: "border-accent text-accent"
    }
  ]

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Clean Primary Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-muted/50 ${
                  item.isActive 
                    ? `bg-muted ${item.color || "text-foreground"} border-b-2` 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.title}</span>
              </Link>
            ))}
          </nav>

          {/* Streamlined Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link to="/resources/downloads">
                <IconDownload className="h-4 w-4 mr-2" />
                Resources
              </Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <IconMail className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
