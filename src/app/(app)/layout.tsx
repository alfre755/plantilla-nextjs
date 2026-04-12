// app/(app)/layout.tsx
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <AppSidebar session={session} />
      <main className="flex flex-col flex-1 min-w-0 min-h-0 overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 px-4 py-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
