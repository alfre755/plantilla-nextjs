"use client";

import { AppAlertDialog } from "@/components/shared/app-alert-dialog";
import { deleteUser } from "../actions";
import User from "../types";
import { useRouter } from "next/navigation";

export function DeleteUserButton({ user }: { user: User }) {
  const router = useRouter();
  return (
    <AppAlertDialog
      trigger={
        <span className="text-destructive w-full cursor-default">Eliminar</span>
      }
      title="Eliminar usuario"
      description={`¿Seguro que deseas eliminar a ${user.name}? Esta acción no se puede deshacer.`}
      confirmLabel="Eliminar"
      variant="destructive"
      onConfirm={() => {
        deleteUser(user.id);
        router.refresh();
      }}
    />
  );
}
