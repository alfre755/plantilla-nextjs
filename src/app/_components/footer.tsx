"use client";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/utils/select-icons";
import { ThemeLogo } from "@/components/shared/theme-logo";

const socialIcons = [
  { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { name: "Twitter", icon: TwitterIcon, href: "#" },
  { name: "Facebook", icon: FacebookIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-foreground text-background px-6 py-3 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <ThemeLogo width={120} height={32} inverted defaultColor="white" />
        <nav className="flex flex-col md:flex-row gap-4 text-sm ">
          <Link href="#contact" className="hover:opacity-60 transition">
            Contactanos
          </Link>
          <Link href="#about" className="hover:opacity-60 transition ">
            Sobre Nosotros
          </Link>
          <Link href="#" className="hover:opacity-60 transition ">
            Privacidad
          </Link>
          <Link href="#" className="hover:opacity-60 transition ">
            Términos de Servicio
          </Link>
          <Link href="#" className="hover:opacity-60 transition ">
            Política de Cookies
          </Link>
        </nav>

        <div className="flex gap-4">
          {socialIcons.map((icon) => {
            const Icon = icon.icon;
            return (
              <Link
                key={icon.name}
                href={icon.href}
                aria-label={icon.name}
                className="w-12 h-12 hover:opacity-60 transition"
              >
                <Icon className="text-background hover:opacity-60 transition " />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
