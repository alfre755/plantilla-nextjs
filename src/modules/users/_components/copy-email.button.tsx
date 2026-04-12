"use client";

import User from "@/modules/users/types";
import { toast } from "sonner";

interface CopyEmailButtonProps {
  user: User;
}

export function CopyEmailButton({ user }: CopyEmailButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(user.email);
    toast.success("Email copiado al portapapeles");
  };

  return (
    <span className="w-full cursor-default" onClick={handleCopy}>
      Copiar email
    </span>
  );
}
