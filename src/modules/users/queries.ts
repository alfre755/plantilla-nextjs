import { db } from "@/db";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { desc } from "drizzle-orm";
import { headers } from "next/headers";

export async function getUsers() {
  const users = await auth.api.listUsers({
    query: {
      limit: 500,
      offset: 0,
      sortBy: "createdAt",
      sortDirection: "desc",
    },
    headers: await headers(),
  });
  return users;
}
