"use client";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Por favor, ingresa tu nombre."),
  email: z
    .string()
    .min(1, "Por favor, ingresa tu correo.")
    .email("Por favor, ingresa un correo válido."),
  message: z
    .string()
    .min(1, "Ingresa un mensaje")
    .max(500, "El mensaje no puede exceder los 500 caracteres."),
});

export default function FormContact() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setSubmitted(true);
    console.log(data);
    form.reset();
  };

  return (
    <>
      {submitted && (
        <Alert
          variant="contact"
          className="animate-in fade-in zoom-in-95 duration-300"
        >
          <CheckCircle2Icon className="size-5 mt-0.5" />
          <AlertTitle className="text-base font-semibold">
            Mensaje enviado
          </AlertTitle>
          <AlertDescription>
            Tu mensaje fue enviado correctamente.
            <br />
            Te responderemos en menos de 24 horas.
          </AlertDescription>
          <AlertAction>
            <Button
              onClick={() => setSubmitted(false)}
              variant="default"
              size="xs"
            >
              Enviar otro mensaje
            </Button>
          </AlertAction>
        </Alert>
      )}
      {!submitted && (
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup className="flex flex-col gap-4">
            {/* NAME */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nombre</FieldLabel>
                  <Input {...field} placeholder="Nombre" />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />

            {/* EMAIL */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input {...field} placeholder="Email" />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />

            {/* MESSAGE */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Mensaje</FieldLabel>
                  <textarea
                    {...field}
                    className="w-full border border-foreground/20 rounded-md px-4 py-3 text-sm bg-transparent"
                    placeholder="Mensaje"
                  />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <button
            type="submit"
            className="bg-primary text-background py-3 rounded-md"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </>
  );
}
