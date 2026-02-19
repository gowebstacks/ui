import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type ResponsiveProp<T> = T | { narrow?: T; regular?: T; wide?: T }

const paddingStartVariants = {
  none: "pt-0",
  condensed: "pt-6 md:pt-8",
  normal: "pt-12 md:pt-16 lg:pt-20",
  spacious: "pt-16 md:pt-24 lg:pt-32",
}

const paddingEndVariants = {
  none: "pb-0",
  condensed: "pb-6 md:pb-8",
  normal: "pb-12 md:pb-16 lg:pb-20",
  spacious: "pb-16 md:pb-24 lg:pb-32",
}

const backgroundColorVariants = {
  default: "bg-background",
  subtle: "bg-muted",
  inset: "bg-accent",
}

const sectionVariants = cva("relative w-full", {
  variants: {
    rounded: {
      true: "rounded-xl overflow-hidden",
      false: "",
    },
  },
  defaultVariants: {
    rounded: false,
  },
})

const responsivePrefixes = { narrow: "", regular: "md:", wide: "lg:" }

function resolveResponsivePadding(
  prop: ResponsiveProp<string> | undefined,
  map: Record<string, string>,
  fallback: string
): string {
  if (!prop) return map[fallback] || ""
  if (typeof prop === "string") return map[prop] || ""

  const classes: string[] = []
  for (const [bp, prefix] of Object.entries(responsivePrefixes)) {
    const val = (prop as Record<string, string | undefined>)[bp]
    if (val && map[val]) {
      const base = map[val]
      if (prefix === "") {
        classes.push(base)
      } else {
        // Extract the responsive classes from the map value
        // e.g. "pt-12 md:pt-16 lg:pt-20" → for narrow, use "pt-12"
        // for regular, use the md: value, etc.
        const parts = base.split(" ")
        for (const part of parts) {
          if (prefix === "md:" && part.startsWith("md:")) {
            classes.push(part)
          } else if (prefix === "lg:" && part.startsWith("lg:")) {
            classes.push(part)
          } else if (prefix === "" && !part.includes(":")) {
            classes.push(part)
          }
        }
      }
    }
  }
  return classes.join(" ")
}

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div"
  paddingBlockStart?: ResponsiveProp<"none" | "condensed" | "normal" | "spacious">
  paddingBlockEnd?: ResponsiveProp<"none" | "condensed" | "normal" | "spacious">
  backgroundColor?: ResponsiveProp<"default" | "subtle" | "inset"> | string
  backgroundImageSrc?: string | string[]
  backgroundImageSize?: string
  backgroundImagePosition?: string
  /**
   * Optional section title rendered as an h2 heading inside the container.
   */
  sectionTitle?: React.ReactNode
  /**
   * Additional class names for the inner container.
   */
  containerClassName?: string
  /**
   * When true, the inner container is full-width (no max-width constraint).
   * @default false
   */
  fullWidth?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Tag = "section",
      className,
      children,
      paddingBlockStart = "normal",
      paddingBlockEnd = "normal",
      backgroundColor,
      backgroundImageSrc,
      backgroundImageSize = "cover",
      backgroundImagePosition = "50%",
      rounded,
      fullWidth = false,
      sectionTitle,
      containerClassName,
      style,
      ...props
    },
    ref
  ) => {
    const paddingStartClasses = resolveResponsivePadding(
      paddingBlockStart,
      paddingStartVariants,
      "normal"
    )
    const paddingEndClasses = resolveResponsivePadding(
      paddingBlockEnd,
      paddingEndVariants,
      "normal"
    )

    // Resolve background color
    let bgColorClass = ""
    let bgColorStyle: React.CSSProperties | undefined
    if (backgroundColor) {
      if (typeof backgroundColor === "string") {
        const mapped =
          backgroundColorVariants[
            backgroundColor as keyof typeof backgroundColorVariants
          ]
        if (mapped) {
          bgColorClass = mapped
        } else {
          bgColorStyle = { backgroundColor }
        }
      }
    }

    // Resolve background image
    let bgImageStyle: React.CSSProperties | undefined
    if (backgroundImageSrc) {
      const srcs = Array.isArray(backgroundImageSrc)
        ? backgroundImageSrc
        : [backgroundImageSrc]
      const bgImages = srcs.map((src) => `url(${src})`).join(", ")
      const bgSizes = Array.isArray(backgroundImageSrc)
        ? srcs.map(() => backgroundImageSize).join(", ")
        : backgroundImageSize
      const bgPositions = Array.isArray(backgroundImageSrc)
        ? srcs.map(() => backgroundImagePosition).join(", ")
        : backgroundImagePosition

      bgImageStyle = {
        backgroundImage: bgImages,
        backgroundSize: bgSizes,
        backgroundPosition: bgPositions,
        backgroundRepeat: "no-repeat",
      }
    }

    const combinedStyle = {
      ...bgColorStyle,
      ...bgImageStyle,
      ...style,
    }

    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement> & React.Ref<HTMLElement>}
        className={cn(
          sectionVariants({ rounded }),
          paddingStartClasses,
          paddingEndClasses,
          bgColorClass,
          className
        )}
        style={
          Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined
        }
        {...props}
      >
        <div
          className={cn(
            fullWidth ? "w-full" : "max-w-7xl mx-auto px-6",
            containerClassName
          )}
        >
          {sectionTitle && (
            <h2 className="text-2xl text-foreground border-b border-border pb-2 mb-4">
              {sectionTitle}
            </h2>
          )}
          {children}
        </div>
      </Tag>
    )
  }
)
Section.displayName = "Section"

export { Section, sectionVariants }
