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
const mdDirectionMap: Record<string, string> = {
  horizontal: "md:flex-row",
  vertical: "md:flex-col",
}
const lgDirectionMap: Record<string, string> = {
  horizontal: "lg:flex-row",
  vertical: "lg:flex-col",
}

const gapMap: Record<string, string> = {
  none: "gap-0",
  condensed: "gap-2",
  normal: "gap-4",
  spacious: "gap-6",
  "extra-spacious": "gap-8",
}
const mdGapMap: Record<string, string> = {
  none: "md:gap-0",
  condensed: "md:gap-2",
  normal: "md:gap-4",
  spacious: "md:gap-6",
  "extra-spacious": "md:gap-8",
}
const lgGapMap: Record<string, string> = {
  none: "lg:gap-0",
  condensed: "lg:gap-2",
  normal: "lg:gap-4",
  spacious: "lg:gap-6",
  "extra-spacious": "lg:gap-8",
}

const alignMap: Record<string, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
}
const mdAlignMap: Record<string, string> = {
  start: "md:items-start",
  center: "md:items-center",
  end: "md:items-end",
  stretch: "md:items-stretch",
  baseline: "md:items-baseline",
}
const lgAlignMap: Record<string, string> = {
  start: "lg:items-start",
  center: "lg:items-center",
  end: "lg:items-end",
  stretch: "lg:items-stretch",
  baseline: "lg:items-baseline",
}

const justifyMap: Record<string, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
}
const mdJustifyMap: Record<string, string> = {
  start: "md:justify-start",
  center: "md:justify-center",
  end: "md:justify-end",
  "space-between": "md:justify-between",
  "space-around": "md:justify-around",
  "space-evenly": "md:justify-evenly",
}
const lgJustifyMap: Record<string, string> = {
  start: "lg:justify-start",
  center: "lg:justify-center",
  end: "lg:justify-end",
  "space-between": "lg:justify-between",
  "space-around": "lg:justify-around",
  "space-evenly": "lg:justify-evenly",
}

type ResponsiveMaps = { narrow: Record<string, string>; regular: Record<string, string>; wide: Record<string, string> }

function resolveResponsive<T extends string>(
  value: T | ResponsiveProp<T> | undefined,
  maps: ResponsiveMaps
): string[] {
  if (!value) return []
  if (typeof value === "string") return [maps.narrow[value]].filter(Boolean)

  const classes: string[] = []
  if ((value as ResponsiveProp<T>).narrow) {
    const cls = maps.narrow[(value as ResponsiveProp<T>).narrow as string]
    if (cls) classes.push(cls)
  }
  if ((value as ResponsiveProp<T>).regular) {
    const cls = maps.regular[(value as ResponsiveProp<T>).regular as string]
    if (cls) classes.push(cls)
  }
  if ((value as ResponsiveProp<T>).wide) {
    const cls = maps.wide[(value as ResponsiveProp<T>).wide as string]
    if (cls) classes.push(cls)
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
      ...resolveResponsive(direction, { narrow: directionMap, regular: mdDirectionMap, wide: lgDirectionMap }),
      ...resolveResponsive(gap, { narrow: gapMap, regular: mdGapMap, wide: lgGapMap }),
      ...resolveResponsive(align, { narrow: alignMap, regular: mdAlignMap, wide: lgAlignMap }),
      ...resolveResponsive(justify, { narrow: justifyMap, regular: mdJustifyMap, wide: lgJustifyMap }),
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
