// modules/users/views/user-detail-view.tsx
"use client";

import { HeaderPages } from "@/components/shared/header-pages";
import User from "../types";
import HeaderInfoUser from "../_components/header-info-user";

export function UserDetailView({ user }: { user: User }) {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0">
        <HeaderPages
          title={user.name}
          description={user.email}
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Usuarios", href: "/users" },
            { label: user.name },
          ]}
        />
      </header>
      <div className="flex flex-col flex-1 min-h-0 mt-4">
        <HeaderInfoUser user={user} />
      </div>
    </div>
  );
}
