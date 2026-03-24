"use client";

import { FormProvider } from "react-hook-form";
import { AppFormFieldGroup } from "@/components/shared/form-field";
import { useAppForm } from "@/hooks/use-app-form";
import { Button } from "@/components/ui/button";
import { AppFormFieldProps } from "@/types/form";
import { z } from "zod";
import { AlertSuccess } from "@/components/shared/alert-succes";

const loginSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

const fields: AppFormFieldProps[] = [
  {
    name: "email",
    label: "Correo",
    type: "email",
    placeholder: "ejemplo@gmail.com",
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Mínimo 6 caracteres",
  },
];

export default function LoginForm() {
  const { form, handleSubmit, submitted, isLoading, resetSubmitted } =
    useAppForm(loginSchema, { email: "", password: "" }, async (data) =>
      console.log(data),
    );

  return (
    <FormProvider {...form}>
      {submitted && (
        <AlertSuccess
          {...{
            title: "¡Éxito!",
            description: "Has iniciado sesión correctamente.",
            onReset: resetSubmitted,
            actionLabel: "Cerrar",
          }}
        />
      )}
      <form onSubmit={handleSubmit}>
        <AppFormFieldGroup fields={fields} />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Iniciar sesión"}
        </Button>
      </form>
    </FormProvider>
  );
}
