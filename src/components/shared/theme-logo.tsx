"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ThemeLogoProps {
  width?: number;
  height?: number;
  defaultColor?: "white" | "black";
  inverted?: boolean; // Si true, el logo se invertirá: fondo oscuro en light, claro en dark
}

export function ThemeLogo({
  width = 120,
  height = 32,
  defaultColor = "black",
  inverted = false,
}: ThemeLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted
    ? inverted
      ? resolvedTheme === "light" // footer: fondo oscuro en light, claro en dark
      : resolvedTheme === "dark" // navbar: fondo sigue el tema
    : defaultColor === "white";

  return (
    <Image
      src={
        isDark
          ? "/assets/images/logo_blanco.png"
          : "/assets/images/logo_negro.png"
      }
      alt="Logo"
      width={width}
      height={height}
      priority
    />
  );
}
