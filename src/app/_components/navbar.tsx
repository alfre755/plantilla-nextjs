"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BarIcon } from "@/utils/select-icons";

const buttonsNav = [
  { label: "Home", href: "#home" },
  { label: "Sobre nosotros", href: "#about" },
  { label: "Contactanos", href: "#contact" },
];

const buttonsAuth = [{ label: "Login", href: "/login" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-foreground text-background w-full relative p-2">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        <div>
          <Image
            src="/assets/images/logo_blanco.png"
            alt="Logo"
            width={120}
            height={32}
            priority
          />
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
        <div className="sm:hidden absolute left-0 right-0 top-full z-50 bg-foreground border-t border-border shadow-lg">
          <div className="flex flex-col gap-2 p-4">
            {buttonsNav.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                onClick={() => setOpen(false)}
              >
                <Button variant="link-light" className="w-full text-left ">
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
                  <Button variant="outline" className="w-full text-foreground">
                    {button.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
