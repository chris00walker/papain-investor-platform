import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { IconSeeding, IconBuilding, IconTruck, IconChartBar, IconFileText, IconBrandWhatsapp, IconMenu2 } from "@tabler/icons-react"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export function PrimaryNav() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      title: "Overview",
      href: "/",
      icon: IconChartBar,
      isActive: location.pathname === "/"
    },
    {
      title: "Executive Summary",
      href: "/executive-summary",
      icon: IconFileText,
      isActive: location.pathname === "/executive-summary",
      color: "border-blue-500 text-blue-600"
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
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${
                  item.isActive 
                    ? `bg-muted ${item.color || "text-foreground"} border-b-2 shadow-sm` 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation - Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <IconMenu2 className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-white">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`nav-link-mobile ${
                        item.isActive 
                          ? `bg-muted ${item.color || "text-foreground"} border-l-4 shadow-sm` 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  
                  {/* Mobile Contact Button */}
                  <div className="pt-4 border-t">
                    <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a href="https://wa.me/12462443721" target="_blank" rel="noopener noreferrer">
                        <IconBrandWhatsapp className="h-4 w-4 mr-2" />
                        Contact via WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <a href="https://wa.me/12462443721" target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp className="h-4 w-4 mr-2" />
                <span className="hidden lg:inline">Contact</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
