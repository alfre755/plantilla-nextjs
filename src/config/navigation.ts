import { LayoutDashboard, Users, Settings, ShieldCheck } from "lucide-react";

export type NavRole = "user" | "admin" | "manager"; // solo agregas aquí

export interface NavLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

export interface NavGroup {
  label: string;
  roles: NavRole[]; // array en vez de un solo rol
  links: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: "General",
    roles: ["user", "admin", "manager"], // todos ven esto
    links: [{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Gestión",
    roles: ["manager", "admin"], // solo manager y admin
    links: [{ label: "Reportes", href: "/reports", icon: Users }],
  },
  {
    label: "Administración",
    roles: ["admin"], // solo admin
    links: [
      { label: "Usuarios", href: "/users", icon: ShieldCheck },
      { label: "Configuración", href: "/settings", icon: Settings },
    ],
  },
];
