// app/(app)/settings/profile/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserDetailView } from "@/modules/users/views/user-detail-view";

export default async function page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return <div>No autenticado</div>;

  const user = await auth.api.getUser({
    query: { id: session.user.id },
    headers: await headers(),
  });

  if (!user) return <div>Usuario no encontrado</div>;
  return <UserDetailView user={user} />;
}
