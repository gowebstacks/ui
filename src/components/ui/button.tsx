import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      mode: {
        filled: "hover:brightness-110 active:brightness-95 disabled:opacity-50",
        stroke: "bg-transparent border disabled:opacity-50",
        bleed: "bg-transparent border-0 hover:bg-bleed-hover disabled:opacity-50",
        link: "disabled:opacity-50",
      },
      tone: {
        primary: "",
        secondary: "",
        tertiary: "",
        destructive: "",
      },
      size: {
        xs: "px-2.5 py-1 text-xs",
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        icon: "h-9 w-9",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
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
      radius: "full",
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
      {
        mode: "filled",
        tone: "destructive",
        className:
          "bg-destructive text-destructive-foreground hover:brightness-110",
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
      {
        mode: "stroke",
        tone: "destructive",
        className:
          "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
      },

      /* ── Bleed ── */
      {
        mode: "bleed",
        tone: "primary",
        className: "text-foreground hover:text-foreground",
      },
      {
        mode: "bleed",
        tone: "secondary",
        className: "text-foreground hover:text-foreground",
      },
      {
        mode: "bleed",
        tone: "tertiary",
        className: "text-muted-foreground hover:text-muted-foreground",
      },
      {
        mode: "bleed",
        tone: "destructive",
        className: "text-destructive hover:text-destructive",
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
      {
        mode: "link",
        tone: "destructive",
        className: "text-destructive underline-offset-4 hover:underline",
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
    ],
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, mode, tone, size, radius, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ mode, tone, size, radius, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
