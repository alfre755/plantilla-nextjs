// app/(app)/users/[id]/page.tsx

import { getUserById } from "@/modules/users";
import { UserDetailView } from "@/modules/users/views/user-detail-view";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) return <div>Usuario no encontrado</div>;
  return <UserDetailView user={user} />;
}
