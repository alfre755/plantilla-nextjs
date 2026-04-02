import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface UseAppFormOptions {
  successMessage?: string;
  successDescription?: string;
  unsuccessMessage?: string;
  unsuccessDescription?: string;
}

export function useAppForm<T extends FieldValues>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: z.ZodType<T, any, any>,
  defaultValues: T,
  onSubmit: (data: T) => void | Promise<void>,
  options: UseAppFormOptions = {},
) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    successMessage = "Enviado correctamente",
    successDescription,
    unsuccessMessage = "Algo salió mal",
    unsuccessDescription,
  } = options;

  const form = useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any) as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues: defaultValues as any,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      toast.success(successMessage, { description: successDescription });
      form.reset();
    } catch (error) {
      toast.error(unsuccessMessage, {
        description:
          error instanceof Error ? error.message : unsuccessDescription,
      });
    } finally {
      setIsLoading(false);
    }
  });

  return { form, handleSubmit, isLoading };
}
