import { getCurrentUser } from "@/modules/profile/queries";
import { ProfileView } from "@/modules/profile/views/profile-view";

export default async function page() {
  const { session, user } = await getCurrentUser();
  return <ProfileView user={user} hasSession={!!session} />;
}