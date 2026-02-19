import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("font-body", {
  variants: {
    size: {
      100: "text-xs leading-[1.5]",
      200: "text-sm leading-[1.42]",
      300: "text-base leading-[1.5]",
      400: "text-base leading-[1.5]",
      500: "text-lg leading-[1.55]",
      600: "text-xl leading-[1.5]",
      700: "text-2xl leading-[1.33] tracking-[-0.015em]",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
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
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
  },
  defaultVariants: {
    size: 400,
    variant: "default",
  },
})

type TextSize = 100 | 200 | 300 | 400 | 500 | 600 | 700

interface ResponsiveProp<T> {
  narrow?: T
  regular?: T
  wide?: T
}

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    Omit<VariantProps<typeof textVariants>, "size" | "weight"> {
  as?: React.ElementType
  size?: TextSize | ResponsiveProp<TextSize>
  weight?: VariantProps<typeof textVariants>["weight"] | ResponsiveProp<NonNullable<VariantProps<typeof textVariants>["weight"]>>
}

const sizeMap: Record<string, string> = {
  100: "text-xs leading-[1.5]",
  200: "text-sm leading-[1.42]",
  300: "text-base leading-[1.5]",
  400: "text-base leading-[1.5]",
  500: "text-lg leading-[1.55]",
  600: "text-xl leading-[1.5]",
  700: "text-2xl leading-[1.33] tracking-[-0.015em]",
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
  value: T | ResponsiveProp<T> | undefined | null,
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

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Comp = "p", className, size = 400, weight, align, variant, ...props }, ref) => {
    const isResponsiveSize = typeof size === "object"
    const isResponsiveWeight = typeof weight === "object"

    const responsiveClasses = [
      ...(isResponsiveSize ? resolveResponsive(size, sizeMap) : []),
      ...(isResponsiveWeight ? resolveResponsive(weight as ResponsiveProp<string>, weightMap) : []),
    ]

    return (
      <Comp
        ref={ref}
        className={cn(
          "font-body",
          textVariants({
            size: isResponsiveSize ? undefined : (size as TextSize),
            weight: isResponsiveWeight ? undefined : (weight as VariantProps<typeof textVariants>["weight"]),
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
Text.displayName = "Text"

export { Text, textVariants }
