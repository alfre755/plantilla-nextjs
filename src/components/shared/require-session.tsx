// components/shared/require-session.tsx
import { getSession } from "@/lib/get-session";
import { redirect } from "next/navigation";

interface RequireSessionProps {
  children: (
    session: Awaited<ReturnType<typeof getSession>>,
  ) => React.ReactNode;
}

export async function RequireSession({ children }: RequireSessionProps) {
  const session = await getSession();
  if (!session) redirect("/login");
  return <>{children(session)}</>;
}
