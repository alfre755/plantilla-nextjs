import { user } from "@/db/schema";
import { UserWithRole } from "better-auth/plugins";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

type User = UserWithRole;

type CreateUser = {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
};

export type EditUser = {
  name?: string;
  email?: string;
  role?: "admin" | "user";
  password?: string;
};

export default User;
export type { CreateUser };
