"use client";

import { AppFormFieldGroup } from "@/components/shared/form-field";
import { useAppForm } from "@/hooks/use-app-form";
import { AppFormFieldProps } from "@/types/form";
import { z } from "zod";
import { AppForm } from "@/components/shared/app-form";
import { authClient } from "@/lib/auth-client";

const signUpSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

const fields: AppFormFieldProps[] = [
  {
    name: "name",
    label: "Nombre",
    type: "text",
    placeholder: "Tu nombre completo",
  },
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

export default function SignUpForm() {
  const { form, handleSubmit, isLoading } = useAppForm(
    signUpSchema,
    { name: "", email: "", password: "" },
    async (data) => {
      const result = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/login",
      });

      if (result.error)
        throw new Error(result.error.message ?? "Error desconocido");
    },
    {
      successMessage: "Cuenta creada",
      successDescription: "Bienvenido a nuestra aplicación.",
      unsuccessMessage: "Error al crear cuenta",
    },
  );

  return (
    <AppForm
      form={form}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitLabel="Crear cuenta"
      loadingLabel="Creando cuenta..."
    >
      <AppFormFieldGroup fields={fields} />
    </AppForm>
  );
}
