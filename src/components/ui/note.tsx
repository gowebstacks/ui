import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const noteVariants = cva(
  "flex items-start gap-3 rounded-md border text-sm",
  {
    variants: {
      variant: {
        default: "border-secondary text-foreground",
        secondary: "border-secondary text-muted-foreground",
        success: "border-success text-success",
        warning: "border-warning text-warning",
        error: "border-error text-error",
      },
      size: {
        default: "px-4 py-3",
        small: "px-3 py-2 text-xs",
      },
      fill: {
        true: "",
        false: "",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      { variant: "default", fill: true, class: "bg-muted" },
      { variant: "secondary", fill: true, class: "bg-muted" },
      { variant: "success", fill: true, class: "bg-success" },
      { variant: "warning", fill: true, class: "bg-warning" },
      { variant: "error", fill: true, class: "bg-error" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      fill: false,
      disabled: false,
    },
  }
)

export interface NoteProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "role">,
    VariantProps<typeof noteVariants> {
  icon?: React.ReactNode
}

const Note = React.forwardRef<HTMLDivElement, NoteProps>(
  ({ className, variant, size, fill, disabled, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      role="note"
      className={cn(noteVariants({ variant, size, fill, disabled }), className)}
      {...props}
    >
      {icon !== null && icon !== undefined && (
        <span className="mt-0.5 flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="flex flex-1 flex-col gap-1">{children}</div>
    </div>
  )
)
Note.displayName = "Note"

const NoteLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
NoteLabel.displayName = "NoteLabel"

const NoteContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("leading-relaxed", className)} {...props} />
))
NoteContent.displayName = "NoteContent"

const NoteAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-2 flex", className)} {...props} />
))
NoteAction.displayName = "NoteAction"

export { Note, NoteLabel, NoteContent, NoteAction, noteVariants }
