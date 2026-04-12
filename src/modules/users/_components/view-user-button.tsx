// view-user-button.tsx
"use client";
import { useRouter } from "next/navigation";
import User from "@/modules/users/types";

export function ViewUserButton({ user }: { user: User }) {
  const router = useRouter();
  return (
    <span
      className="w-full cursor-default"
      onClick={() => router.push(`/users/${user.id}`)}
    >
      Ver detalles
    </span>
  );
}
