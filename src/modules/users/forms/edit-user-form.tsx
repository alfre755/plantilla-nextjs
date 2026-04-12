"use client";

import { AppFormFieldGroup } from "@/components/shared/form-field";
import { useAppForm } from "@/hooks/use-app-form";
import { AppFormFieldProps } from "@/types/form";
import { z } from "zod";
import { AppForm } from "@/components/shared/app-form";
import User, { EditUser } from "../types";
import { editUser } from "../actions";

const editUserSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z
    .string()
    .min(6, "Mínimo 6 caracteres")
    .optional()
    .or(z.literal("")),
  name: z.string().min(2, "Mínimo 2 caracteres"),
  role: z.enum(["admin", "user"]),
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
    placeholder: "Selecciona un rol",
    options: [
      { value: "admin", label: "Administrador" },
      { value: "user", label: "Usuario" },
    ],
  },
];

export default function EditUserForm({
  onSuccess,
  user,
}: {
  onSuccess?: () => void;
  user: User;
}) {
  const { form, handleSubmit, isLoading } = useAppForm(
    editUserSchema,
    {
      email: user.email,
      password: "",
      name: user.name,
      role: (user.role as "admin" | "user") ?? "user",
    },
    async (data) => {
      await editUser(user.id, data as EditUser);
    },
    {
      successMessage: "Usuario editado con éxito",
      successDescription: "El usuario ha sido editado con éxito.",
      unsuccessMessage: "Error al editar usuario",
      unsuccessDescription: "Revise los datos ingresados e intenta nuevamente.",
      refreshOnSuccess: true,
    },
    onSuccess,
  );

  return (
    <AppForm
      form={form}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitLabel="Editar usuario"
      loadingLabel="Editando usuario..."
    >
      <AppFormFieldGroup fields={fields} />
    </AppForm>
  );
}
