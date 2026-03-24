"use client";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon } from "lucide-react";

interface AlertSuccessProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onReset?: () => void;
}

export function AlertSuccess({
  title = "Procesado correctamente",
  description = "La accion se realizo con exito.",
  actionLabel = "Realizar denuevo",
  onReset,
}: AlertSuccessProps) {
  return (
    <Alert
      variant="contact"
      className="animate-in fade-in zoom-in-95 duration-300"
    >
      <CheckCircle2Icon className="size-5 mt-0.5" />
      <AlertTitle className="text-base font-semibold">{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {onReset && (
        <AlertAction>
          <Button onClick={onReset} variant="default" size="xs">
            {actionLabel}
          </Button>
        </AlertAction>
      )}
    </Alert>
  );
}
