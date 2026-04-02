import { db } from "@/db";
import { user } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getUserssss() {
  const users = await db.select().from(user).orderBy(desc(user.createdAt));
  return users;
}
