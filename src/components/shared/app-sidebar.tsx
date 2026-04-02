"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navGroups, NavRole } from "@/config/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./toggle-theme";
import { ThemeLogo } from "./theme-logo";

interface AppSidebarProps {
  role: NavRole;
}

export function AppSidebar({ role }: AppSidebarProps) {
  const pathname = usePathname();
  const filtered = navGroups.filter((g) => g.roles.includes(role));

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between">
        <ThemeLogo width={50} height={50} /> Curicode Soluciones
        <ModeToggle />
      </SidebarHeader>
      <SidebarContent>
        {filtered.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.links.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === link.href}
                    >
                      <Link href={link.href}>
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
