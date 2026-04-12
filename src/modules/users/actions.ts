"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CreateUser, EditUser } from "./types";
import { revalidatePath } from "next/cache";

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

export async function editUser(userId: string, data: EditUser) {
  // Actualiza nombre y email
  await auth.api.adminUpdateUser({
    body: {
      userId,
      data: {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email }),
      },
    },
    headers: await headers(),
  });

  // Cambia rol por separado
  if (data.role) {
    await auth.api.setRole({
      body: { userId, role: data.role },
      headers: await headers(),
    });
  }

  // Cambia password por separado
  if (data.password) {
    await auth.api.setUserPassword({
      body: { userId, newPassword: data.password },
      headers: await headers(),
    });
  }

  revalidatePath("/users");
}

export async function deleteUser(userId: string) {
  const result = await auth.api.removeUser({
    body: {
      userId: userId,
    },

    headers: await headers(),
  });

  if (!result) throw new Error("Error al eliminar usuario");
  revalidatePath("/users");

  return result;
}

// modules/users/queries.ts
export async function getUserById(id: string) {
  const user = await auth.api.getUser({
    query: { id },
    headers: await headers(),
  });
  return user;
}
