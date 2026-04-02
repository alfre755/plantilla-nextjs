"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CreateUser } from "./types";

export async function createUser(data: CreateUser) {
  const result = await auth.api.createUser({
    body: {
      email: data.email,
      password: data.password,
      name: data.name,
      role: data.role,
    },
    headers: await headers(),
  });

  if (!result) throw new Error("Error al crear usuario");

  return result;
}
