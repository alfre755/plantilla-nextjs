"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppDialog } from "@/components/shared/app-dialog";
import { Plus } from "lucide-react";
import CreateUserForm from "../forms/create-user-form";

export function CreateUserButton() {
  const [open, setOpen] = useState(false);

  return (
    <AppDialog
      title="Agregar usuario"
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button size="sm">
          <Plus />
          Agregar usuario
        </Button>
      }
    >
      <CreateUserForm />
    </AppDialog>
  );
}
