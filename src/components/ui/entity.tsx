import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const entityVariants = cva(
  "group/entity flex w-full items-center gap-4 text-left text-sm outline-none",
  {
    variants: {
      variant: {
        default: "",
        outline: "rounded-md border bg-background",
      },
      size: {
        default: "gap-4 px-4 py-3",
        sm: "gap-3 px-3 py-2",
        lg: "gap-4 px-4 py-4",
      },
      interactive: {
        true: "focus-visible:border-ring focus-visible:ring-ring/50 cursor-pointer rounded-md transition-colors duration-100 hover:bg-accent/50 focus-visible:ring-[3px]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      interactive: false,
    },
  }
)

type EntityElement = "div" | "li" | "button" | "a"

type EntityBaseProps = {
  left?: React.ReactNode
  right?: React.ReactNode
  leftClassName?: string
  rightClassName?: string
  as?: EntityElement
  asChild?: boolean
  children?: React.ReactNode
  className?: string
} & VariantProps<typeof entityVariants>

type EntityProps = EntityBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof EntityBaseProps>

function Entity({
  left,
  right,
  leftClassName,
  rightClassName,
  as = "div",
  asChild = false,
  variant,
  size,
  interactive,
  className,
  children,
  ...props
}: EntityProps) {
  const isInteractive =
    interactive ?? (as === "button" || as === "a" ? true : undefined)
  const Comp = asChild ? Slot : (as as React.ElementType)

  return (
    <Comp
      data-slot="entity"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      className={cn(
        entityVariants({ variant, size, interactive: isInteractive }),
        className
      )}
      {...props}
    >
      {left !== undefined && left !== null ? (
        <div
          data-slot="entity-left"
          className={cn(
            "flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
            leftClassName
          )}
        >
          {left}
        </div>
      ) : null}
      <div
        data-slot="entity-body"
        className="flex min-w-0 flex-1 items-center gap-4"
      >
        {children}
      </div>
      {right !== undefined && right !== null ? (
        <div
          data-slot="entity-right"
          className={cn(
            "flex shrink-0 items-center justify-end gap-2",
            rightClassName
          )}
        >
          {right}
        </div>
      ) : null}
    </Comp>
  )
}

type EntityContentProps = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> & {
  title?: React.ReactNode
  description?: React.ReactNode
  titleClassName?: string
  descriptionClassName?: string
}

function EntityContent({
  title,
  description,
  titleClassName,
  descriptionClassName,
  className,
  children,
  ...props
}: EntityContentProps) {
  return (
    <div
      data-slot="entity-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    >
      {title !== undefined && title !== null ? (
        <div
          data-slot="entity-title"
          className={cn(
            "truncate text-sm font-medium leading-snug",
            titleClassName
          )}
        >
          {title}
        </div>
      ) : null}
      {description !== undefined && description !== null ? (
        <div
          data-slot="entity-description"
          className={cn(
            "text-muted-foreground truncate text-sm leading-normal",
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
            descriptionClassName
          )}
        >
          {description}
        </div>
      ) : null}
      {children}
    </div>
  )
}

type EntityListProps = React.HTMLAttributes<HTMLUListElement> & {
  variant?: "default" | "outline"
}

function EntityList({
  className,
  variant = "outline",
  ...props
}: EntityListProps) {
  return (
    <ul
      data-slot="entity-list"
      data-variant={variant}
      className={cn(
        "flex flex-col",
        variant === "outline" &&
          "divide-y divide-secondary overflow-hidden rounded-md border border-secondary bg-background [&>[data-slot=entity]]:rounded-none",
        className
      )}
      {...props}
    />
  )
}

export { Entity, EntityContent, EntityList, entityVariants }
export type { EntityProps, EntityContentProps, EntityListProps }
