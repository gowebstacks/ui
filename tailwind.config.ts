import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./dev/**/*.{ts,tsx}"],
  safelist: [
    "border-secondary",
    "bg-secondary-soft",
    "border-success",
    "border-warning",
    "border-error",
    "bg-success",
    "bg-warning",
    "bg-error",
    "text-success",
    "text-warning",
    "text-error",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: {
          DEFAULT: "var(--input)",
          surface: "var(--token-bg-input)",
        },
        heading: "var(--token-text-heading)",
        disabled: "var(--token-text-disabled)",
        error: "var(--token-border-error)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        "heading-display": ["var(--font-heading-display)"],
        "heading-accent": ["var(--font-heading-accent)"],
        eyebrow: ["var(--font-eyebrow)"],
        ui: ["var(--font-ui)"],
        caption: ["var(--font-caption)"],
        mono: ["var(--font-code)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".border-secondary": { borderColor: "var(--token-border-secondary)" },
        ".bg-secondary-soft": { backgroundColor: "var(--token-bg-secondary-soft)" },
        ".border-success": { borderColor: "var(--token-border-success)" },
        ".border-warning": { borderColor: "var(--token-border-warning)" },
        ".border-error": { borderColor: "var(--token-border-error)" },
        ".bg-success": { backgroundColor: "var(--token-bg-success)" },
        ".bg-warning": { backgroundColor: "var(--token-bg-warning)" },
        ".bg-error": { backgroundColor: "var(--token-bg-error)" },
        ".text-success": { color: "var(--token-text-success)" },
        ".text-warning": { color: "var(--token-text-warning)" },
        ".text-error": { color: "var(--token-text-error)" },
      });
    }),
  ],
};

export default config;
