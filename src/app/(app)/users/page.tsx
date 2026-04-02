import { columns } from "../../../modules/users/_components/columns";
import { DataTable } from "@/components/shared/data-table";
import { HeaderPages } from "@/components/shared/header-pages";
import { Button } from "@/components/ui/button";
import { getUsers } from "@/modules/users/queries";

export default async function page() {
  const users = await getUsers();
  return (
    <>
      <header>
        <HeaderPages
          title="Usuarios"
          description="Gestiona los usuarios registrados en la plataforma."
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Usuarios" },
          ]}
        />
      </header>
      <div className="container mx-auto">
        <DataTable
          columns={columns}
          data={users}
          searchKey="email"
          searchPlaceholder="Filtrar emails..."
          action={<Button size="sm">Agregar Usuario</Button>}
        />
      </div>
    </>
  );
}
