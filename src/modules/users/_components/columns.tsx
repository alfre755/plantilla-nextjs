"use client";

import { createColumns } from "@/components/shared/datatable/create-columns";
import User from "@/modules/users/types";

export const columns = createColumns<User>(
  [
    { accessorKey: "name", label: "Nombre", type: "text", sortable: true },
    { accessorKey: "email", label: "Email", type: "text", sortable: true },
    {
      accessorKey: "emailVerified",
      label: "Verificado",
      type: "badge",
      variants: {
        true: "default",
        false: "secondary",
      },
    },
    {
      accessorKey: "createdAt",
      label: "Creado",
      type: "custom",
      cell: (user) => {
        const date = new Date(user.createdAt);
        if (isNaN(date.getTime()))
          return <span className="text-muted-foreground">—</span>;
        return new Intl.DateTimeFormat("es-CL").format(date);
      },
    },
  ],
  [
    { label: "Ver perfil", onClick: (user) => console.log(user) },
    {
      label: "Eliminar",
      onClick: (user) => console.log(user),
      separator: true,
      variant: "destructive",
    },
  ],
);
