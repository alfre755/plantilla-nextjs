import { getUsers } from "@/modules/users/queries";
import { UsersView } from "@/modules/users/views/users-view";

export default async function page() {
  const data = await getUsers();
  return <UsersView users={data.users} />;
}
