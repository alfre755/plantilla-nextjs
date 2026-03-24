"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

export default function ScrollToTopButton() {
  const [offset, setOffset] = useState(24); // distancia desde abajo
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleScroll = () => {
      const show = window.scrollY > 300;
      const isMd = window.innerWidth >= 768;
      button.style.display = show && isMd ? "flex" : "none";

      const footer = document.getElementById("footer");
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const offset =
        rect.top < windowHeight ? 24 + (windowHeight - rect.top) : 24;

      button.style.bottom = `${offset}px`;
    };

    // estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ bottom: `${offset}px` }}
      className="hidden md:flex fixed z-50 right-6 p-3 rounded-full shadow-lg bg-white text-black mix-blend-difference opacity-80 hover:opacity-100 transition-opacity"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}
