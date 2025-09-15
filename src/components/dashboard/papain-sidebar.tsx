import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFileDescription,
  IconFolder,
  IconSeeding,
  IconTrendingUp,
  IconBuilding,
  IconTruck,
  IconCalculator,
  IconDownload,
} from "@tabler/icons-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

const navigationData = {
  main: [
    {
      title: "Executive Summary",
      url: "/",
      icon: IconDashboard,
    },
    {
      title: "Value Chain Overview",
      url: "/value-chain",
      icon: IconChartBar,
    },
    {
      title: "Financial Overview",
      url: "/financials",
      icon: IconTrendingUp,
    },
    {
      title: "Investment Opportunity",
      url: "/investment",
      icon: IconCalculator,
    },
  ],
  ventures: [
    {
      title: "Grower (Barbados)",
      url: "/ventures/grower",
      icon: IconSeeding,
      description: "Papaya cultivation and farming operations",
    },
    {
      title: "Processor (Extraction)",
      url: "/ventures/processor", 
      icon: IconBuilding,
      description: "Papain extraction and processing facility",
    },
    {
      title: "Distributor (Americas)",
      url: "/ventures/distributor",
      icon: IconTruck,
      description: "Western Hemisphere distribution hub",
    },
  ],
  resources: [
    {
      title: "Business Plans",
      url: "/resources/plans",
      icon: IconFileDescription,
    },
    {
      title: "Financial Models",
      url: "/resources/models",
      icon: IconFolder,
    },
    {
      title: "Download Center",
      url: "/resources/downloads",
      icon: IconDownload,
    },
  ],
}

export function PapainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <IconSeeding className="!size-5 text-primary" />
                <span className="text-base font-semibold text-primary">
                  Papain Investment Platform
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarMenu>
            {navigationData.main.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.url}
                >
                  <Link to={item.url}>
                    <item.icon className="!size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Ventures</SidebarGroupLabel>
          <SidebarMenu>
            {navigationData.ventures.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname.startsWith(item.url)}
                >
                  <Link to={item.url}>
                    <item.icon className="!size-4" />
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarMenu>
            {navigationData.resources.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname.startsWith(item.url)}
                >
                  <Link to={item.url}>
                    <item.icon className="!size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          <p>Vertically Integrated Papain Value Chain</p>
          <p className="font-semibold">Investment Opportunity: $1.7M</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
