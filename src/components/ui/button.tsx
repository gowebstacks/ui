import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      mode: {
        filled: "hover:brightness-110 active:brightness-95 disabled:opacity-50",
        stroke: "bg-transparent border disabled:opacity-50",
        bleed: "bg-transparent border-0 rounded hover:bg-accent disabled:opacity-50",
        link: "disabled:opacity-50",
      },
      tone: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      size: {
        xs: "",
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        icon: "h-9 w-9",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      mode: "filled",
      tone: "primary",
      size: "md",
    },
    compoundVariants: [
      /* ── Filled ── */
      {
        mode: "filled",
        tone: "primary",
        className:
          "bg-primary text-primary-foreground",
      },
      {
        mode: "filled",
        tone: "secondary",
        className:
          "bg-foreground text-background",
      },
      {
        mode: "filled",
        tone: "tertiary",
        className:
          "bg-muted text-foreground",
      },

      /* ── Stroke ── */
      {
        mode: "stroke",
        tone: "primary",
        className:
          "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      },
      {
        mode: "stroke",
        tone: "secondary",
        className:
          "border-border text-foreground hover:bg-border hover:text-foreground",
      },
      {
        mode: "stroke",
        tone: "tertiary",
        className:
          "border-border text-foreground hover:bg-accent",
      },

      /* ── Bleed ── */
      {
        mode: "bleed",
        tone: "primary",
        className: "text-foreground",
      },
      {
        mode: "bleed",
        tone: "secondary",
        className: "text-foreground",
      },
      {
        mode: "bleed",
        tone: "tertiary",
        className: "text-muted-foreground",
      },

      /* ── Link ── */
      {
        mode: "link",
        tone: "primary",
        className: "text-primary underline-offset-4 hover:underline",
      },
      {
        mode: "link",
        tone: "secondary",
        className: "text-foreground underline-offset-4 hover:underline",
      },
      {
        mode: "link",
        tone: "tertiary",
        className: "text-muted-foreground underline-offset-4 hover:underline",
      },

      /* ── Link + Bleed size overrides ── */
      {
        mode: "link",
        size: "xs",
        className: "text-xs",
      },
      {
        mode: "link",
        size: "sm",
        className: "px-0 py-0 text-sm",
      },
      {
        mode: "link",
        size: "md",
        className: "px-0 py-0 text-sm",
      },
      {
        mode: "link",
        size: "lg",
        className: "px-0 py-0 text-base",
      },
      {
        mode: "bleed",
        size: "sm",
        className: "px-2 py-1 text-sm",
      },
      {
        mode: "bleed",
        size: "md",
        className: "px-3 py-2 text-sm",
      },
      {
        mode: "bleed",
        size: "lg",
        className: "px-3 py-2 text-base",
      },
    ],
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, mode, tone, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ mode, tone, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
