import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-dark": "var(--color-secondary-dark)",
        background: "var(--color-background)",
        "background-light": "var(--color-background-light)",
        "background-dark": "var(--color-background-dark)",
        foreground: "var(--color-foreground)",
      },
    },
  },
} satisfies Config;
