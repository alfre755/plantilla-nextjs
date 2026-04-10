"use client";
import { columns } from "../../../modules/users/_components/columns";
import { DataTable } from "@/components/shared/datatable/data-table";
import { HeaderPages } from "@/components/shared/header-pages";
import { CreateUserButton } from "@/modules/users/_components/create-user-button";
import User from "../types";
export function UsersView({ users }: { users: User[] }) {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0">
        <HeaderPages
          title="Usuarios"
          description="Gestiona los usuarios registrados en la plataforma."
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Usuarios" },
          ]}
        />
      </header>
      <div className="flex flex-col flex-1 min-h-0">
        <DataTable
          columns={columns}
          data={users}
          searchKey="email"
          searchPlaceholder="Filtrar emails..."
          action={<CreateUserButton />}
        />
      </div>
    </div>
  );
}
