import { useLocation, Link } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbNav() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  const breadcrumbMap: Record<string, string> = {
    'ventures': 'Ventures',
    'grower': 'Grower (Barbados)',
    'processor': 'Processor (Extraction)',
    'distributor': 'Distributor (Americas)',
    'executive-summary': 'Executive Summary',
    'financials': 'Financial Overview',
    'investment': 'Investment Opportunity',
    'resources': 'Resources',
    'plans': 'Business Plans',
    'models': 'Financial Models',
    'downloads': 'Download Center',
    'business-model': 'Business Model',
    'market': 'Market',
    'risks': 'Risks',
    'operations': 'Operations',
    'technology': 'Technology',
    'strategy': 'Strategy',
    'logistics': 'Logistics'
  }

  if (pathnames.length === 0) {
    return null // Don't show breadcrumbs on homepage
  }

  return (
    <div className="container mx-auto px-4 py-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const displayName = breadcrumbMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1)

            return (
              <div key={pathname} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{displayName}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={routeTo}>{displayName}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
