import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Low-contrast variants tint the background and border with `color-mix()`
 * rather than Tailwind's `/N` opacity modifier because the palette tokens
 * are defined as full `hsl(H, S%, L%)` color functions — Tailwind can't
 * decompose them to apply an alpha. `color-mix(in oklch, <color> N%,
 * transparent)` produces the same visual result and compiles as a literal
 * arbitrary value.
 *
 * Class strings must appear literally in source so Tailwind's JIT can
 * generate the utilities — no template-literal indirection here.
 */
const badgeVariants = cva(
  "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border transition-colors [&>svg]:pointer-events-none [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        gray: "",
        blue: "",
        purple: "",
        amber: "",
        red: "",
        pink: "",
        green: "",
        teal: "",
        inverted:
          "border-transparent bg-foreground text-background",
      },
      contrast: {
        standard: "",
        low: "",
      },
      size: {
        sm: "px-1.5 py-0 text-[11px] leading-4 [&>svg]:size-3",
        md: "px-2 py-0.5 text-xs leading-5 [&>svg]:size-3.5",
        lg: "px-2.5 py-1 text-sm leading-5 [&>svg]:size-4",
      },
    },
    compoundVariants: [
      /* ── Gray ── */
      {
        variant: "gray",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-neutral-200)] text-[color:var(--color-neutral-900)] dark:bg-[color:var(--color-neutral-800)] dark:text-[color:var(--color-neutral-100)]",
      },
      {
        variant: "gray",
        contrast: "low",
        className:
          "border-[color:var(--color-neutral-300)] bg-transparent text-[color:var(--color-neutral-700)] dark:border-[color:var(--color-neutral-700)] dark:text-[color:var(--color-neutral-300)]",
      },

      /* ── Blue ── */
      {
        variant: "blue",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-blue-500)] text-white",
      },
      {
        variant: "blue",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-blue-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-blue-500)_10%,transparent)] text-[color:var(--color-blue-600)] dark:text-[color:var(--color-blue-400)]",
      },

      /* ── Purple ── */
      {
        variant: "purple",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-purple-500)] text-white",
      },
      {
        variant: "purple",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-purple-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-purple-500)_10%,transparent)] text-[color:var(--color-purple-600)] dark:text-[color:var(--color-purple-300)]",
      },

      /* ── Amber (warning scale) ── */
      {
        variant: "amber",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-warning-500)] text-[color:var(--color-neutral-900)]",
      },
      {
        variant: "amber",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-warning-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-warning-500)_10%,transparent)] text-[color:var(--color-warning-700)] dark:text-[color:var(--color-warning-400)]",
      },

      /* ── Red (error scale) ── */
      {
        variant: "red",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-error-500)] text-white",
      },
      {
        variant: "red",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-error-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-error-500)_10%,transparent)] text-[color:var(--color-error-600)] dark:text-[color:var(--color-error-400)]",
      },

      /* ── Pink ── */
      {
        variant: "pink",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-pink-500)] text-[color:var(--color-neutral-900)]",
      },
      {
        variant: "pink",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-pink-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-pink-500)_10%,transparent)] text-[color:var(--color-pink-500)]",
      },

      /* ── Green (success scale) ── */
      {
        variant: "green",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-success-500)] text-white",
      },
      {
        variant: "green",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-success-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-success-500)_10%,transparent)] text-[color:var(--color-success-700)] dark:text-[color:var(--color-success-400)]",
      },

      /* ── Teal ── */
      {
        variant: "teal",
        contrast: "standard",
        className:
          "border-transparent bg-[color:var(--color-teal-500)] text-white",
      },
      {
        variant: "teal",
        contrast: "low",
        className:
          "border-[color-mix(in_oklch,var(--color-teal-500)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-teal-500)_10%,transparent)] text-[color:var(--color-teal-500)] dark:text-[color:var(--color-teal-200)]",
      },
    ],
    defaultVariants: {
      variant: "gray",
      contrast: "standard",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  children?: React.ReactNode
}

function Badge({
  className,
  variant,
  contrast,
  size,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, contrast, size }), className)}
      {...props}
    >
      {icon}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
