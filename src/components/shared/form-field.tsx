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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppFormFieldProps } from "@/types/form";

function renderInput(
  type: AppFormFieldProps["type"],
  placeholder: string | undefined,
  options: { value: string; label: string }[] | undefined,
  field: any,
) {
  switch (type) {
    case "textarea":
      return <Textarea {...field} placeholder={placeholder} />;
    case "select":
      return (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="w-full" onBlur={field.onBlur}>
            <SelectValue placeholder={placeholder ?? "Selecciona una opción"} />
          </SelectTrigger>
          <SelectContent side="bottom" position="popper">
            {options?.map((option: any) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    default:
      return <Input {...field} type={type} placeholder={placeholder} />;
  }
}

export function AppFormField({
  name,
  label,
  placeholder,
  options,
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
          {render
            ? render(field)
            : renderInput(type, placeholder, options, field)}
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
