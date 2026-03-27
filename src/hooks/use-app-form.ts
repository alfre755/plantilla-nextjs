import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface UseAppFormOptions {
  successMessage?: string;
  successDescription?: string;
  unsuccessMessage?: string;
  unsuccessDescription?: string;
}

export function useAppForm<T extends z.ZodType>(
  schema: T,
  defaultValues: z.infer<T>,
  onSubmit: (data: z.infer<T>) => void | Promise<void>,
  options: UseAppFormOptions = {},
) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    successMessage = "Enviado correctamente",
    successDescription,
    unsuccessMessage = "Algo salió mal",
    unsuccessDescription,
  } = options;

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
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
