import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const boxVariants = cva("", {
  variants: {
    padding: {
      none: "p-0",
      condensed: "p-2",
      normal: "p-4",
      spacious: "p-6",
      "extra-spacious": "p-8",
    },
    paddingX: {
      none: "px-0",
      condensed: "px-2",
      normal: "px-4",
      spacious: "px-6",
      "extra-spacious": "px-8",
    },
    paddingY: {
      none: "py-0",
      condensed: "py-2",
      normal: "py-4",
      spacious: "py-6",
      "extra-spacious": "py-8",
    },
    paddingTop: {
      none: "pt-0",
      condensed: "pt-2",
      normal: "pt-4",
      spacious: "pt-6",
      "extra-spacious": "pt-8",
    },
    paddingBottom: {
      none: "pb-0",
      condensed: "pb-2",
      normal: "pb-4",
      spacious: "pb-6",
      "extra-spacious": "pb-8",
    },
    paddingStart: {
      none: "ps-0",
      condensed: "ps-2",
      normal: "ps-4",
      spacious: "ps-6",
      "extra-spacious": "ps-8",
    },
    paddingEnd: {
      none: "pe-0",
      condensed: "pe-2",
      normal: "pe-4",
      spacious: "pe-6",
      "extra-spacious": "pe-8",
    },
    margin: {
      none: "m-0",
      condensed: "m-2",
      normal: "m-4",
      spacious: "m-6",
      "extra-spacious": "m-8",
      auto: "m-auto",
    },
    marginX: {
      none: "mx-0",
      condensed: "mx-2",
      normal: "mx-4",
      spacious: "mx-6",
      "extra-spacious": "mx-8",
      auto: "mx-auto",
    },
    marginY: {
      none: "my-0",
      condensed: "my-2",
      normal: "my-4",
      spacious: "my-6",
      "extra-spacious": "my-8",
      auto: "my-auto",
    },
    marginTop: {
      none: "mt-0",
      condensed: "mt-2",
      normal: "mt-4",
      spacious: "mt-6",
      "extra-spacious": "mt-8",
      auto: "mt-auto",
    },
    marginBottom: {
      none: "mb-0",
      condensed: "mb-2",
      normal: "mb-4",
      spacious: "mb-6",
      "extra-spacious": "mb-8",
      auto: "mb-auto",
    },
    marginStart: {
      none: "ms-0",
      condensed: "ms-2",
      normal: "ms-4",
      spacious: "ms-6",
      "extra-spacious": "ms-8",
      auto: "ms-auto",
    },
    marginEnd: {
      none: "me-0",
      condensed: "me-2",
      normal: "me-4",
      spacious: "me-6",
      "extra-spacious": "me-8",
      auto: "me-auto",
    },
    backgroundColor: {
      default: "bg-background",
      subtle: "bg-muted",
      inset: "bg-accent",
    },
    borderStyle: {
      none: "border-0",
      solid: "border border-solid",
      dashed: "border border-dashed",
    },
    borderRadius: {
      none: "rounded-none",
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      xlarge: "rounded-xl",
      full: "rounded-full",
    },
    borderColor: {
      default: "border-border",
      muted: "border-muted",
      subtle: "border-border/50",
    },
  },
})

type SpacingValue = "none" | "condensed" | "normal" | "spacious" | "extra-spacious"
type MarginValue = SpacingValue | "auto"

interface ResponsiveProp<T> {
  narrow?: T
  regular?: T
  wide?: T
}

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    Omit<VariantProps<typeof boxVariants>, "padding" | "paddingX" | "paddingY" | "paddingTop" | "paddingBottom" | "paddingStart" | "paddingEnd" | "margin" | "marginX" | "marginY" | "marginTop" | "marginBottom" | "marginStart" | "marginEnd"> {
  as?: React.ElementType
  padding?: SpacingValue | ResponsiveProp<SpacingValue>
  paddingX?: SpacingValue | ResponsiveProp<SpacingValue>
  paddingY?: SpacingValue | ResponsiveProp<SpacingValue>
  paddingTop?: SpacingValue | ResponsiveProp<SpacingValue>
  paddingBottom?: SpacingValue | ResponsiveProp<SpacingValue>
  paddingStart?: SpacingValue | ResponsiveProp<SpacingValue>
  paddingEnd?: SpacingValue | ResponsiveProp<SpacingValue>
  margin?: MarginValue | ResponsiveProp<MarginValue>
  marginX?: MarginValue | ResponsiveProp<MarginValue>
  marginY?: MarginValue | ResponsiveProp<MarginValue>
  marginTop?: MarginValue | ResponsiveProp<MarginValue>
  marginBottom?: MarginValue | ResponsiveProp<MarginValue>
  marginStart?: MarginValue | ResponsiveProp<MarginValue>
  marginEnd?: MarginValue | ResponsiveProp<MarginValue>
}

const spacingMap: Record<string, Record<string, string>> = {
  padding: { none: "p-0", condensed: "p-2", normal: "p-4", spacious: "p-6", "extra-spacious": "p-8" },
  paddingX: { none: "px-0", condensed: "px-2", normal: "px-4", spacious: "px-6", "extra-spacious": "px-8" },
  paddingY: { none: "py-0", condensed: "py-2", normal: "py-4", spacious: "py-6", "extra-spacious": "py-8" },
  paddingTop: { none: "pt-0", condensed: "pt-2", normal: "pt-4", spacious: "pt-6", "extra-spacious": "pt-8" },
  paddingBottom: { none: "pb-0", condensed: "pb-2", normal: "pb-4", spacious: "pb-6", "extra-spacious": "pb-8" },
  paddingStart: { none: "ps-0", condensed: "ps-2", normal: "ps-4", spacious: "ps-6", "extra-spacious": "ps-8" },
  paddingEnd: { none: "pe-0", condensed: "pe-2", normal: "pe-4", spacious: "pe-6", "extra-spacious": "pe-8" },
  margin: { none: "m-0", condensed: "m-2", normal: "m-4", spacious: "m-6", "extra-spacious": "m-8", auto: "m-auto" },
  marginX: { none: "mx-0", condensed: "mx-2", normal: "mx-4", spacious: "mx-6", "extra-spacious": "mx-8", auto: "mx-auto" },
  marginY: { none: "my-0", condensed: "my-2", normal: "my-4", spacious: "my-6", "extra-spacious": "my-8", auto: "my-auto" },
  marginTop: { none: "mt-0", condensed: "mt-2", normal: "mt-4", spacious: "mt-6", "extra-spacious": "mt-8", auto: "mt-auto" },
  marginBottom: { none: "mb-0", condensed: "mb-2", normal: "mb-4", spacious: "mb-6", "extra-spacious": "mb-8", auto: "mb-auto" },
  marginStart: { none: "ms-0", condensed: "ms-2", normal: "ms-4", spacious: "ms-6", "extra-spacious": "ms-8", auto: "ms-auto" },
  marginEnd: { none: "me-0", condensed: "me-2", normal: "me-4", spacious: "me-6", "extra-spacious": "me-8", auto: "me-auto" },
}

const responsivePrefixes = {
  narrow: "",
  regular: "md:",
  wide: "lg:",
}

function resolveResponsiveClasses(
  prop: string,
  value: string | ResponsiveProp<string> | undefined
): string[] {
  if (!value) return []
  const map = spacingMap[prop]
  if (!map) return []

  if (typeof value === "string") {
    return [map[value]].filter(Boolean)
  }

  const classes: string[] = []
  for (const [breakpoint, val] of Object.entries(value)) {
    if (val && map[val]) {
      const prefix = responsivePrefixes[breakpoint as keyof typeof responsivePrefixes] || ""
      classes.push(`${prefix}${map[val]}`)
    }
  }
  return classes
}

const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Comp = "div",
      className,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingStart,
      paddingEnd,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginStart,
      marginEnd,
      backgroundColor,
      borderStyle,
      borderRadius,
      borderColor,
      ...props
    },
    ref
  ) => {
    const responsiveClasses = [
      ...resolveResponsiveClasses("padding", padding),
      ...resolveResponsiveClasses("paddingX", paddingX),
      ...resolveResponsiveClasses("paddingY", paddingY),
      ...resolveResponsiveClasses("paddingTop", paddingTop),
      ...resolveResponsiveClasses("paddingBottom", paddingBottom),
      ...resolveResponsiveClasses("paddingStart", paddingStart),
      ...resolveResponsiveClasses("paddingEnd", paddingEnd),
      ...resolveResponsiveClasses("margin", margin),
      ...resolveResponsiveClasses("marginX", marginX),
      ...resolveResponsiveClasses("marginY", marginY),
      ...resolveResponsiveClasses("marginTop", marginTop),
      ...resolveResponsiveClasses("marginBottom", marginBottom),
      ...resolveResponsiveClasses("marginStart", marginStart),
      ...resolveResponsiveClasses("marginEnd", marginEnd),
    ]

    return (
      <Comp
        ref={ref}
        className={cn(
          boxVariants({ backgroundColor, borderStyle, borderRadius, borderColor }),
          ...responsiveClasses,
          className
        )}
        {...props}
      />
    )
  }
)
Box.displayName = "Box"

export { Box, boxVariants }
