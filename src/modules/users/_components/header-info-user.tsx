import { DetailList } from "@/components/shared/detail-list";
import User from "../types";
import { Badge } from "@/components/ui/badge";

export default function HeaderInfoUser({ user }: { user: User }) {
  return (
    <DetailList
      title="Información del usuario"
      items={[
        { label: "Nombre", value: user.name },
        { label: "Email", value: user.email },
        { label: "Rol", value: <Badge>{user.role}</Badge> },
        {
          label: "Verificado",
          value: <Badge>{user.emailVerified ? "Sí" : "No"}</Badge>,
        },
        {
          label: "Estado",
          value: (
            <Badge variant={user.banned ? "destructive" : "default"}>
              {user.banned ? "Baneado" : "Activo"}
            </Badge>
          ),
        },
        {
          label: "Miembro desde",
          value: new Intl.DateTimeFormat("es-CL").format(
            new Date(user.createdAt),
          ),
        },
      ]}
    />
  );
}
