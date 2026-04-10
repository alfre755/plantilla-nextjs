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
  // const session = await auth.api.getSession({ headers: await headers() });
  const role = "admin" as NavRole;

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <AppSidebar role={role} />
      <main className="flex flex-col flex-1 min-w-0 min-h-0 overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 px-4 py-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
