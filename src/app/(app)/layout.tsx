// app/(app)/layout.tsx
import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NavRole } from "@/config/navigation";
import { ThemeProvider } from "@/components/shared/theme-provider";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  const role = (session?.user?.role ?? "admin") as NavRole;

  return (
    <SidebarProvider>
      <AppSidebar role={role} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
