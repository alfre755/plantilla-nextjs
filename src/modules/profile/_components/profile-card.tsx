// modules/profile/_components/profile-card.tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { UserWithRole } from "better-auth/plugins";

const roleLabels: Record<string, string> = {
  admin: "Administrador",
  user: "Usuario",
  manager: "Manager",
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function ProfileCard({ user }: { user: UserWithRole }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        <Avatar size="lg">
          <AvatarImage src={user.image ?? undefined} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="text-base font-medium">{user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground">Rol</span>
          <Badge variant="secondary" className="w-fit">
            {user.role ? roleLabels[user.role] ?? user.role : "Sin rol"}
          </Badge>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground">Verificado</span>
          <Badge
            variant={user.emailVerified ? "default" : "secondary"}
            className="w-fit"
          >
            {user.emailVerified ? "Sí" : "No"}
          </Badge>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground">Estado</span>
          <Badge
            variant={user.banned ? "destructive" : "default"}
            className="w-fit"
          >
            {user.banned ? "Baneado" : "Activo"}
          </Badge>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground">Miembro desde</span>
          <span className="font-medium">
            {new Intl.DateTimeFormat("es-CL").format(new Date(user.createdAt))}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}