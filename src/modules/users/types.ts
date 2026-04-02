import { user } from "@/db/schema";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

type User = InferSelectModel<typeof user>;

type CreateUser = {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
};

export default User;
export type { CreateUser };
