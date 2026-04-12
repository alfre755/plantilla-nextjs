"use client";

import { createColumns } from "@/components/shared/datatable/create-columns";
import User from "@/modules/users/types";

import { DeleteUserButton } from "./delete-user-button";
import { EditUserButton } from "./edit-user-button";
import { ViewUserButton } from "./view-user-button";
import { CopyEmailButton } from "./copy-email.button";

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
    {
      label: "Ver detalles",
      render: (user) => <ViewUserButton user={user} />,
    },
    {
      label: "Copiar email",
      render: (user) => <CopyEmailButton user={user} />,
    },
    {
      label: "Editar",
      render: (user) => <EditUserButton user={user} />,
      separator: true,
    },
    {
      label: "Eliminar",
      render: (user) => <DeleteUserButton user={user} />,
      separator: true,
      variant: "destructive",
    },
  ],
);
