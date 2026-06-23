// modules/profile/views/profile-view.tsx
import { HeaderPages } from "@/components/shared/header-pages";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlertIcon } from "lucide-react";
import type { UserWithRole } from "better-auth/plugins";
import { ProfileCard } from "../_components/profile-card";

interface ProfileViewProps {
  user: UserWithRole | null;
  hasSession: boolean;
}

export function ProfileView({ user, hasSession }: ProfileViewProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0">
        <HeaderPages
          title="Mi perfil"
          description="Información de tu cuenta."
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Perfil" },
          ]}
        />
      </header>

      {user ? (
        <ProfileCard user={user} />
      ) : (
        <Alert variant="destructive">
          <CircleAlertIcon />
          <AlertTitle>No se pudo cargar tu perfil</AlertTitle>
          <AlertDescription>
            {hasSession
              ? "No encontramos los datos de tu cuenta. Intenta recargar la página."
              : "Tu sesión no es válida. Vuelve a iniciar sesión."}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
