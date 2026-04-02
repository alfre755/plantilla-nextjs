"use client";

import { AppFormFieldGroup } from "@/components/shared/form-field";
import { useAppForm } from "@/hooks/use-app-form";
import { AppFormFieldProps } from "@/types/form";
import { z } from "zod";
import { AppForm } from "@/components/shared/app-form";
import { createUser } from "../actions";

const createUserSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
  name: z.string().min(2, "Mínimo 2 caracteres"),
  role: z.enum(["admin", "user"]), // ← sin el segundo argumento
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
  {
    name: "name",
    label: "Nombre",
    type: "text",
    placeholder: "Tu nombre completo",
  },
  {
    name: "role",
    label: "Rol",
    type: "select",
  },
];

export default function CreateUserForm() {
  const { form, handleSubmit, isLoading } = useAppForm(
    createUserSchema,
    { email: "", password: "", name: "", role: "user" },
    async (data) => {
      const result = await createUser(data);

      if (result.error) throw new Error(result.error.message);
    },
    {
      successMessage: "Usuario creado con éxito",
      successDescription: "El usuario ha sido creado con éxito.",
      unsuccessMessage: "Error al crear usuario",
      unsuccessDescription: "Revise los datos ingresados e intenta nuevamente.",
    },
  );

  return (
    <AppForm
      form={form}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitLabel="Crear usuario"
      loadingLabel="Creando usuario..."
    >
      <AppFormFieldGroup fields={fields} />
    </AppForm>
  );
}
