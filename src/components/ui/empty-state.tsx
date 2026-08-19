import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Heading, type HeadingProps } from "./heading"

const emptyStateVariants = cva(
  "flex flex-col items-center justify-center text-center",
  {
    variants: {
      size: {
        sm: "gap-2 py-8 px-4",
        md: "gap-3 py-12 px-6",
        lg: "gap-4 py-16 px-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className={cn(emptyStateVariants({ size }), className)}
      {...props}
    />
  )
)
EmptyState.displayName = "EmptyState"

const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    aria-hidden="true"
    className={cn(
      "flex h-10 w-10 items-center justify-center rounded-sm border border-secondary text-muted-foreground [&_svg]:size-5",
      className
    )}
    {...props}
  />
))
EmptyStateIcon.displayName = "EmptyStateIcon"

const EmptyStateTitle = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => (
    <Heading
      ref={ref}
      as="div"
      size={6}
      className={cn("m-0 leading-tight tracking-tight", className)}
      {...props}
    />
  )
)
EmptyStateTitle.displayName = "EmptyStateTitle"

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "max-w-prose text-sm leading-relaxed text-muted-foreground",
      className
    )}
    {...props}
  />
))
EmptyStateDescription.displayName = "EmptyStateDescription"

const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-2 flex flex-wrap items-center justify-center gap-2", className)}
    {...props}
  />
))
EmptyStateActions.displayName = "EmptyStateActions"

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
  emptyStateVariants,
}
