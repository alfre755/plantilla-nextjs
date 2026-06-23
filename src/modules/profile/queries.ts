import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getCurrentUser() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return { session: null, user: null };

  const user = await auth.api.getUser({
    query: { id: session.user.id },
    headers: await headers(),
  });

  return { session, user };
}