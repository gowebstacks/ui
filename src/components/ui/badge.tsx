import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

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
          "border-transparent bg-[var(--color-neutral-200)] text-[var(--color-neutral-900)] dark:bg-[var(--color-neutral-800)] dark:text-[var(--color-neutral-100)]",
      },
      {
        variant: "gray",
        contrast: "low",
        className:
          "border-[var(--color-neutral-300)] bg-transparent text-[var(--color-neutral-700)] dark:border-[var(--color-neutral-700)] dark:text-[var(--color-neutral-300)]",
      },

      /* ── Blue ── */
      {
        variant: "blue",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-blue-500)] text-white",
      },
      {
        variant: "blue",
        contrast: "low",
        className:
          "border-[var(--color-blue-500)]/40 bg-[var(--color-blue-500)]/10 text-[var(--color-blue-600)] dark:text-[var(--color-blue-400)]",
      },

      /* ── Purple ── */
      {
        variant: "purple",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-purple-500)] text-white",
      },
      {
        variant: "purple",
        contrast: "low",
        className:
          "border-[var(--color-purple-500)]/40 bg-[var(--color-purple-500)]/10 text-[var(--color-purple-600)] dark:text-[var(--color-purple-300)]",
      },

      /* ── Amber (warning scale) ── */
      {
        variant: "amber",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-warning-500)] text-[var(--color-neutral-900)]",
      },
      {
        variant: "amber",
        contrast: "low",
        className:
          "border-[var(--color-warning-500)]/40 bg-[var(--color-warning-500)]/10 text-[var(--color-warning-700)] dark:text-[var(--color-warning-400)]",
      },

      /* ── Red (error scale) ── */
      {
        variant: "red",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-error-500)] text-white",
      },
      {
        variant: "red",
        contrast: "low",
        className:
          "border-[var(--color-error-500)]/40 bg-[var(--color-error-500)]/10 text-[var(--color-error-600)] dark:text-[var(--color-error-400)]",
      },

      /* ── Pink ── */
      {
        variant: "pink",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-pink-500)] text-[var(--color-neutral-900)]",
      },
      {
        variant: "pink",
        contrast: "low",
        className:
          "border-[var(--color-pink-500)]/40 bg-[var(--color-pink-500)]/10 text-[var(--color-pink-500)]",
      },

      /* ── Green (success scale) ── */
      {
        variant: "green",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-success-500)] text-white",
      },
      {
        variant: "green",
        contrast: "low",
        className:
          "border-[var(--color-success-500)]/40 bg-[var(--color-success-500)]/10 text-[var(--color-success-700)] dark:text-[var(--color-success-400)]",
      },

      /* ── Teal ── */
      {
        variant: "teal",
        contrast: "standard",
        className:
          "border-transparent bg-[var(--color-teal-500)] text-white",
      },
      {
        variant: "teal",
        contrast: "low",
        className:
          "border-[var(--color-teal-500)]/40 bg-[var(--color-teal-500)]/10 text-[var(--color-teal-500)] dark:text-[var(--color-teal-200)]",
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
