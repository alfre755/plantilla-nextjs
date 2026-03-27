"use client";

import { FormProvider, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface AppFormProps {
  form: UseFormReturn<any>;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  submitLabel?: string;
  loadingLabel?: string;
}

export function AppForm({
  form,
  onSubmit,
  className,
  children,
  isLoading = false,
  submitLabel = "Enviar",
  loadingLabel = "Enviando...",
}: AppFormProps) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        className={cn("flex flex-col gap-4 border rounded-lg p-4", className)}
      >
        {children}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner className="w-4 h-4" />
              {loadingLabel}
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </form>
    </FormProvider>
  );
}
