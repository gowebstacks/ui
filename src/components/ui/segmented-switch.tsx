"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Geist-style Switch — a segmented control for 2–4 mutually exclusive views
 * of the same surface (e.g. "Source" / "Output"). Built on Radix RadioGroup
 * so it inherits proper radio semantics and keyboard navigation.
 *
 * Named `SegmentedSwitch` to avoid clashing with the existing boolean
 * Switch (Radix Switch primitive) already exported from this package.
 */

const segmentedSwitchVariants = cva(
  "inline-flex items-center rounded-md border border-input bg-secondary p-1",
  {
    variants: {
      size: {
        sm: "gap-0.5 p-0.5",
        md: "gap-1 p-1",
        lg: "gap-1 p-1.5",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: false,
    },
  }
)

interface SegmentedSwitchContextValue {
  size: NonNullable<VariantProps<typeof segmentedSwitchVariants>["size"]>
}

const SegmentedSwitchContext =
  React.createContext<SegmentedSwitchContextValue | null>(null)

function useSegmentedSwitchContext() {
  const ctx = React.useContext(SegmentedSwitchContext)
  if (!ctx) {
    throw new Error(
      "SegmentedSwitchItem must be rendered inside a SegmentedSwitch"
    )
  }
  return ctx
}

interface SegmentedSwitchProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
      "orientation"
    >,
    VariantProps<typeof segmentedSwitchVariants> {}

const SegmentedSwitch = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  SegmentedSwitchProps
>(({ className, size, fullWidth, ...props }, ref) => (
  <SegmentedSwitchContext.Provider value={{ size: size ?? "md" }}>
    <RadioGroupPrimitive.Root
      ref={ref}
      orientation="horizontal"
      className={cn(
        segmentedSwitchVariants({ size, fullWidth }),
        className
      )}
      {...props}
    />
  </SegmentedSwitchContext.Provider>
))
SegmentedSwitch.displayName = "SegmentedSwitch"

const segmentedSwitchItemVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border border-transparent text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-input data-[state=checked]:bg-background data-[state=checked]:text-heading data-[state=checked]:shadow-sm [&>svg]:pointer-events-none [&>svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "h-6 px-2 text-xs [&>svg]:size-3",
        md: "h-8 px-3 text-sm [&>svg]:size-3.5",
        lg: "h-10 px-4 text-sm [&>svg]:size-4",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: false,
    },
  }
)

interface SegmentedSwitchItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    "children"
  > {
  /** Visible label; will render as sr-only if `icon` is present and `srOnlyLabel` is true. */
  label: React.ReactNode
  /** Optional leading icon. Pair with sr-only label for icon-only segments. */
  icon?: React.ReactNode
  /** Render the label as sr-only (icon-only segment). Requires `icon`. */
  srOnlyLabel?: boolean
  /** Stretch this item to share the row equally with siblings. */
  fullWidth?: boolean
}

const SegmentedSwitchItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  SegmentedSwitchItemProps
>(
  (
    { className, label, icon, srOnlyLabel, fullWidth, ...props },
    ref
  ) => {
    const { size } = useSegmentedSwitchContext()
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          segmentedSwitchItemVariants({ size, fullWidth }),
          className
        )}
        {...props}
      >
        {icon}
        {srOnlyLabel ? (
          <span className="sr-only">{label}</span>
        ) : (
          <span>{label}</span>
        )}
      </RadioGroupPrimitive.Item>
    )
  }
)
SegmentedSwitchItem.displayName = "SegmentedSwitchItem"

export {
  SegmentedSwitch,
  SegmentedSwitchItem,
  segmentedSwitchVariants,
  segmentedSwitchItemVariants,
}
export type { SegmentedSwitchProps, SegmentedSwitchItemProps }
