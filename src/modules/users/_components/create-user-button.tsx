"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppDialog } from "@/components/shared/app-dialog";
import { Plus } from "lucide-react";

export function CreateUserButton() {
  const [open, setOpen] = useState(false);

  return (
    <AppDialog
      title="Agregar usuario"
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Agregar usuario
        </Button>
      }
    >
      {/* aquí irá el form */}
    </AppDialog>
  );
}
