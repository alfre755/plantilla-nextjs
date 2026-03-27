"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarIcon } from "@/utils/select-icons";
import { ModeToggle } from "@/components/shared/toggle-theme";
import { ThemeLogo } from "@/components/shared/theme-logo";

const buttonsNav = [
  { label: "Home", href: "#home" },
  { label: "Sobre nosotros", href: "#about" },
  { label: "Contactanos", href: "#contact" },
];

const buttonsAuth = [{ label: "Login", href: "/login" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background text-foreground w-full relative p-2">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        <div>
          <ThemeLogo width={120} height={32} />
        </div>

        <nav className="hidden sm:flex gap-4">
          {buttonsNav.map((button) => (
            <Link key={button.href} href={button.href}>
              <Button variant="link-light">{button.label}</Button>
            </Link>
          ))}
        </nav>

        <nav className="hidden sm:flex gap-4">
          {buttonsAuth.map((button) => (
            <Link key={button.href} href={button.href}>
              <Button
                variant="outline"
                className="text-foreground hover:opacity-80 transition"
              >
                {button.label}
              </Button>
            </Link>
          ))}
          <ModeToggle />
        </nav>

        <Button
          variant={"outline"}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border sm:hidden"
          aria-label="Abrir menú"
        >
          <BarIcon className="text" />
        </Button>
      </div>

      {open && (
        <div className="sm:hidden absolute left-0 right-0 top-full z-50 bg-background border-t border-border shadow-lg">
          <div className="flex flex-col gap-2 p-4">
            {buttonsNav.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                onClick={() => setOpen(false)}
              >
                <Button variant="link" className="w-full text-left ">
                  {button.label}
                </Button>
              </Link>
            ))}
            <div className="border-t border-border pt-3 flex flex-col gap-2 hover:opacitiy-80">
              {buttonsAuth.map((button) => (
                <Link
                  key={button.href}
                  href={button.href}
                  onClick={() => setOpen(false)}
                >
                  <Button variant="outline">{button.label}</Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
