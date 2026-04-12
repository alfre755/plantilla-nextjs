"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { AppDialog } from "@/components/shared/app-dialog";
import { Plus } from "lucide-react";
import CreateUserForm from "../forms/create-user-form";

export function CreateUserButton() {
  const [open, setOpen] = useState(false);

  const onSucess = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>
        <Plus />
        Agregar usuario
      </Button>
      <AppDialog title="Agregar usuario" open={open} onOpenChange={setOpen}>
        <CreateUserForm onSuccess={onSucess} />
      </AppDialog>
    </>
  );
}
