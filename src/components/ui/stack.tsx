import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const stackVariants = cva("flex", {
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    gap: {
      none: "gap-0",
      condensed: "gap-2",
      normal: "gap-4",
      spacious: "gap-6",
      "extra-spacious": "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    padding: {
      none: "p-0",
      condensed: "p-2",
      normal: "p-4",
      spacious: "p-6",
      "extra-spacious": "p-8",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "normal",
    align: "stretch",
    wrap: false,
  },
})

type DirectionValue = "horizontal" | "vertical"
type GapValue = "none" | "condensed" | "normal" | "spacious" | "extra-spacious"
type AlignValue = "start" | "center" | "end" | "stretch" | "baseline"
type JustifyValue = "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"

interface ResponsiveProp<T> {
  narrow?: T
  regular?: T
  wide?: T
}

const directionMap: Record<string, string> = {
  horizontal: "flex-row",
  vertical: "flex-col",
}

const gapMap: Record<string, string> = {
  none: "gap-0",
  condensed: "gap-2",
  normal: "gap-4",
  spacious: "gap-6",
  "extra-spacious": "gap-8",
}

const alignMap: Record<string, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
}

const justifyMap: Record<string, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
}

function resolveResponsive<T extends string>(
  value: T | ResponsiveProp<T> | undefined,
  map: Record<string, string>
): string[] {
  if (!value) return []
  if (typeof value === "string") return [map[value]].filter(Boolean)

  const classes: string[] = []
  const prefixes = { narrow: "", regular: "md:", wide: "lg:" }
  for (const [bp, val] of Object.entries(value)) {
    if (val && map[val as string]) {
      const prefix = prefixes[bp as keyof typeof prefixes] || ""
      classes.push(`${prefix}${map[val as string]}`)
    }
  }
  return classes
}

export interface StackProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "dir">,
    Omit<VariantProps<typeof stackVariants>, "direction" | "gap" | "align" | "justify"> {
  as?: React.ElementType
  direction?: DirectionValue | ResponsiveProp<DirectionValue>
  gap?: GapValue | ResponsiveProp<GapValue>
  align?: AlignValue | ResponsiveProp<AlignValue>
  justify?: JustifyValue | ResponsiveProp<JustifyValue>
}

const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Comp = "div",
      className,
      direction = "vertical",
      gap = "normal",
      align,
      justify,
      wrap,
      padding,
      ...props
    },
    ref
  ) => {
    const responsiveClasses = [
      ...resolveResponsive(direction, directionMap),
      ...resolveResponsive(gap, gapMap),
      ...resolveResponsive(align, alignMap),
      ...resolveResponsive(justify, justifyMap),
    ]

    const isResponsiveDirection = typeof direction === "object"
    const isResponsiveGap = typeof gap === "object"
    const isResponsiveAlign = typeof align === "object"
    const isResponsiveJustify = typeof justify === "object"

    return (
      <Comp
        ref={ref}
        className={cn(
          "flex",
          stackVariants({
            direction: isResponsiveDirection ? undefined : (direction as DirectionValue),
            gap: isResponsiveGap ? undefined : (gap as GapValue),
            align: isResponsiveAlign ? undefined : (align as AlignValue),
            justify: isResponsiveJustify ? undefined : (justify as JustifyValue),
            wrap,
            padding,
          }),
          ...responsiveClasses.filter((c) =>
            (isResponsiveDirection && directionMap[c]) ||
            (isResponsiveGap && gapMap[c]) ||
            (isResponsiveAlign && alignMap[c]) ||
            (isResponsiveJustify && justifyMap[c]) ||
            true
          ),
          className
        )}
        {...props}
      />
    )
  }
)
Stack.displayName = "Stack"

export { Stack, stackVariants }
