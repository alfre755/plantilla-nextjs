"use client";

import { useCallback, useState } from "react";
import { AppDialog } from "@/components/shared/app-dialog";
import EditUserForm from "../forms/edit-user-form";
import User from "../types";

interface EditUserButtonProps {
  user: User;
}

export function EditUserButton({ user }: EditUserButtonProps) {
  const [open, setOpen] = useState(false);

  const onSuccess = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <span className="w-full cursor-default" onClick={() => setOpen(true)}>
        Editar
      </span>
      <AppDialog title="Editar usuario" open={open} onOpenChange={setOpen}>
        <EditUserForm onSuccess={onSuccess} user={user} />
      </AppDialog>
    </>
  );
}
