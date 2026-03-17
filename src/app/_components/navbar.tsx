import { Button } from "@/components/ui/button";

const buttonsNav = [
  { label: "Home", href: "/" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Contactanos", href: "/contact" },
];

const buttonsAuth = [
  { label: "Login", href: "/login" },
  { label: "Registrate", href: "/register" },
];

export default function Navbar() {
  return (
    <div className="bg-black flex w-full gap-4 h-14 justify-between items-center">
      <div>
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="flex gap-4">
        {buttonsNav.map((button) => {
          return (
            <a key={button.href} href={button.href}>
              <Button>{button.label}</Button>
            </a>
          );
        })}
      </div>
      <div className="flex gap-4">
        {buttonsAuth.map((button) => {
          return (
            <a key={button.href} href={button.href}>
              <Button>{button.label}</Button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
