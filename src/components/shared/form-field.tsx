"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AppFormFieldProps } from "@/types/form";

function renderInput(
  type: AppFormFieldProps["type"],
  placeholder: string | undefined,
  field: any,
) {
  switch (type) {
    case "textarea":
      return <Textarea {...field} placeholder={placeholder} />;
    default:
      return <Input {...field} type={type} placeholder={placeholder} />;
  }
}

export function AppFormField({
  name,
  label,
  placeholder,
  type = "text",
  render,
}: AppFormFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          {render ? render(field) : renderInput(type, placeholder, field)}
          {fieldState.error && (
            <FieldError>{fieldState.error.message}</FieldError>
          )}
        </Field>
      )}
    />
  );
}

export function AppFormFieldGroup({ fields }: { fields: AppFormFieldProps[] }) {
  return (
    <FieldGroup>
      {fields.map((f) => (
        <AppFormField key={f.name} {...f} />
      ))}
    </FieldGroup>
  );
}
