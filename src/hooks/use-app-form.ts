import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useAppForm<T extends z.ZodType>(
  schema: T,
  defaultValues: z.infer<T>,
  onSubmit: (data: z.infer<T>) => void | Promise<void>,
) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      setSubmitted(true);
      form.reset();
    } finally {
      setIsLoading(false);
    }
  });

  return {
    form,
    handleSubmit,
    submitted,
    isLoading,
    resetSubmitted: () => setSubmitted(false),
  };
}
