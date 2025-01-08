// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../ui/collapsible"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/comingsoon",
    icon: Inbox,
  },
  {
    title: "Industries",
    url: "/comingsoon",
    icon: Calendar,
  },
  {
    title: "Partners",
    url: "/comingsoon",
    icon: Calendar,
  },
  {
    title: "About Us",
    url: "/comingsoon",
    icon: Search,
  },
  {
    title: "Contact Us",
    url: "/comingsoon",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="bg-white mb-6">
            <Link href="/" passHref>
              <Image
                src="/assets/shared/logo/bostex.png"
                alt="Logo"
                width={100}
                height={150}
                className="w-auto h-auto cursor-pointer"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="text-white">
            <SidebarMenu>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-4">
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center space-x-4 text-sm font-medium text-gray-300 hover:text-black transition-colors duration-200"
                      >
                        {/* <item.icon className="w-6 h-6 text-gray-400" /> */}
                        <span className="text-base font-semibold">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
