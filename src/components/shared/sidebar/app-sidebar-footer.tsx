"use client";

import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarFooter } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppAlertDialog } from "../app-alert-dialog";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

type SessionData = Awaited<ReturnType<typeof auth.api.getSession>>;
type SessionUser = NonNullable<SessionData>["user"];

interface SidebarFooterProps {
  user: SessionUser | null | undefined;
}

export function AppSidebarFooter({ user }: SidebarFooterProps) {
  const router = useRouter();
  return (
    <SidebarFooter>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-sidebar-accent transition-colors">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user?.image ?? undefined} />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-left text-sm">
              <span className="font-medium">{user?.name}</span>
              <span className="text-muted-foreground text-xs">
                {user?.email}
              </span>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="end" className="w-56">
          <DropdownMenuItem asChild>
            <Link href="/settings/profile">
              <User className="w-4 h-4 mr-2" />
              Mi perfil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <AppAlertDialog
            trigger={
              <DropdownMenuItem
                className="text-destructive"
                onSelect={(e) => e.preventDefault()}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar sesión
              </DropdownMenuItem>
            }
            title="Cerrar sesión"
            description="¿Estás seguro que deseas cerrar sesión?"
            confirmLabel="Cerrar sesión"
            variant="destructive"
            onConfirm={async () => {
              await authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                  },
                },
              });
            }}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  );
}
