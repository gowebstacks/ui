import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva("font-heading scroll-m-24", {
  variants: {
    size: {
      display:
        "text-7xl leading-[1.1] tracking-[-0.03em] lg:text-8xl lg:leading-[1.1] lg:tracking-[-0.031em]",
      1: "text-5xl leading-[1.05] tracking-[-0.022em] lg:text-6xl lg:leading-[1.05] lg:tracking-[-0.025em]",
      2: "text-4xl leading-[1.08] tracking-[-0.02em] lg:text-5xl lg:leading-[1.05] lg:tracking-[-0.022em]",
      3: "text-3xl leading-[1.1] tracking-[-0.02em] lg:text-4xl lg:leading-[1.08] lg:tracking-[-0.02em]",
      4: "text-2xl leading-[1.33] tracking-[-0.015em] lg:text-3xl lg:leading-[1.1] lg:tracking-[-0.02em]",
      5: "text-xl leading-[1.5] lg:text-2xl lg:leading-[1.33] lg:tracking-[-0.015em]",
      6: "text-lg leading-[1.55] lg:text-xl lg:leading-[1.5]",
      "subhead-large": "text-lg leading-[1.3] tracking-[-0.01em]",
      "subhead-medium": "text-base leading-[1.2] tracking-[-0.01em]",
    },
    weight: {
      heavy: "font-black",
      extrabold: "font-extrabold",
      bold: "font-bold",
      semibold: "font-semibold",
      medium: "font-medium",
      normal: "font-normal",
      light: "font-light",
      extralight: "font-extralight",
    },
    stretch: {
      condensed: "tracking-tighter",
      normal: "",
      expanded: "tracking-wider",
    },
    letterSpacing: {
      condensed: "tracking-tight",
      normal: "tracking-normal",
      none: "tracking-[0]",
    },
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: 2,
    variant: "default",
  },
})

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingSize = "display" | 1 | 2 | 3 | 4 | 5 | 6 | "subhead-large" | "subhead-medium"

interface ResponsiveProp<T> {
  narrow?: T
  regular?: T
  wide?: T
}

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    Omit<VariantProps<typeof headingVariants>, "size" | "weight"> {
  as?: HeadingTag
  size?: HeadingSize | ResponsiveProp<HeadingSize>
  weight?: VariantProps<typeof headingVariants>["weight"] | ResponsiveProp<NonNullable<VariantProps<typeof headingVariants>["weight"]>>
}

const sizeMap: Record<string, string> = {
  display:
    "text-7xl leading-[1.1] tracking-[-0.03em] lg:text-8xl lg:leading-[1.1] lg:tracking-[-0.031em]",
  1: "text-5xl leading-[1.05] tracking-[-0.022em] lg:text-6xl lg:leading-[1.05] lg:tracking-[-0.025em]",
  2: "text-4xl leading-[1.08] tracking-[-0.02em] lg:text-5xl lg:leading-[1.05] lg:tracking-[-0.022em]",
  3: "text-3xl leading-[1.1] tracking-[-0.02em] lg:text-4xl lg:leading-[1.08] lg:tracking-[-0.02em]",
  4: "text-2xl leading-[1.33] tracking-[-0.015em] lg:text-3xl lg:leading-[1.1] lg:tracking-[-0.02em]",
  5: "text-xl leading-[1.5] lg:text-2xl lg:leading-[1.33] lg:tracking-[-0.015em]",
  6: "text-lg leading-[1.55] lg:text-xl lg:leading-[1.5]",
  "subhead-large": "text-lg leading-[1.3] tracking-[-0.01em]",
  "subhead-medium": "text-base leading-[1.2] tracking-[-0.01em]",
}

const weightMap: Record<string, string> = {
  heavy: "font-black",
  extrabold: "font-extrabold",
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  normal: "font-normal",
  light: "font-light",
  extralight: "font-extralight",
}

const responsivePrefixes = { narrow: "", regular: "md:", wide: "lg:" }

function resolveResponsive<T extends string | number>(
  value: T | ResponsiveProp<T> | undefined,
  map: Record<string, string>
): string[] {
  if (value === undefined || value === null) return []
  if (typeof value !== "object") return [map[String(value)]].filter(Boolean)

  const classes: string[] = []
  for (const [bp, val] of Object.entries(value as Record<string, T>)) {
    if (val !== undefined && map[String(val)]) {
      const prefix = responsivePrefixes[bp as keyof typeof responsivePrefixes] || ""
      classes.push(
        map[String(val)]
          .split(" ")
          .map((c) => `${prefix}${c}`)
          .join(" ")
      )
    }
  }
  return classes
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", className, size = 2, weight, stretch, letterSpacing, align, variant, ...props }, ref) => {
    const isResponsiveSize = typeof size === "object"
    const isResponsiveWeight = typeof weight === "object"

    const responsiveClasses = [
      ...(isResponsiveSize ? resolveResponsive(size, sizeMap) : []),
      ...(isResponsiveWeight ? resolveResponsive(weight as ResponsiveProp<string>, weightMap) : []),
    ]

    return (
      <Tag
        ref={ref}
        className={cn(
          "font-heading scroll-m-24",
          headingVariants({
            size: isResponsiveSize ? undefined : (size as HeadingSize),
            weight: isResponsiveWeight ? undefined : (weight as VariantProps<typeof headingVariants>["weight"]),
            stretch,
            letterSpacing,
            align,
            variant,
          }),
          ...responsiveClasses,
          className
        )}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
