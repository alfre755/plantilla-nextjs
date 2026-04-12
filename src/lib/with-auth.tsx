// lib/with-auth.ts
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "./auth";
import type { ComponentType } from "react";

type AuthOptions = {
  roles?: string[]; // ej: ["admin", "editor"]
  permissions?: string[]; // ej: ["posts:write"]
  redirectTo?: string;
};

type WithAuthProps = {
  session: Awaited<ReturnType<typeof auth.api.getSession>>;
};

export function withAuth<P extends WithAuthProps>(
  Component: ComponentType<P>,
  options: AuthOptions = {},
) {
  return async function AuthenticatedPage(props: Omit<P, keyof WithAuthProps>) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      redirect(options.redirectTo ?? "/login");
    }

    // Verificar rol
    if (options.roles?.length) {
      const hasRole = options.roles.includes(session.user.role);
      if (!hasRole) redirect("/unauthorized");
    }

    // Verificar permisos
    if (options.permissions?.length) {
      const userPerms: string[] = session.user.permissions ?? [];
      const hasPerms = options.permissions.every((p) => userPerms.includes(p));
      if (!hasPerms) redirect("/unauthorized");
    }

    return <Component {...(props as P)} session={session} />;
  };
}
