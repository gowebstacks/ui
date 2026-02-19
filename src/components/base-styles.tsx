import * as React from "react"

import "../styles/globals.css"

export interface BaseStylesProps {
  children: React.ReactNode
  /**
   * Color mode for the application.
   * - "light" — force light theme
   * - "dark"  — force dark theme
   * - "auto"  — follow system preference
   * @default "light"
   */
  colorMode?: "light" | "dark" | "auto"
}

/**
 * BaseStyles wraps your application with the @webstacks/ui design tokens,
 * fonts, color primitives, and base styles. Place this at the root of your
 * app so all components render correctly.
 *
 * @example
 * ```tsx
 * import { BaseStyles } from '@webstacks/ui'
 *
 * function RootLayout({ children }) {
 *   return <BaseStyles>{children}</BaseStyles>
 * }
 * ```
 */
export function BaseStyles({ children, colorMode = "light" }: BaseStylesProps) {
  const [resolvedMode, setResolvedMode] = React.useState<"light" | "dark">(
    colorMode === "auto" ? "light" : colorMode
  )

  React.useEffect(() => {
    if (colorMode !== "auto") {
      setResolvedMode(colorMode)
      return
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    setResolvedMode(mq.matches ? "dark" : "light")

    const handler = (e: MediaQueryListEvent) => {
      setResolvedMode(e.matches ? "dark" : "light")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [colorMode])

  return (
    <div
      className={resolvedMode === "dark" ? "dark" : ""}
      data-color-mode={colorMode}
      data-light-theme="light"
      data-dark-theme="dark"
      style={{ colorScheme: resolvedMode }}
    >
      {children}
    </div>
  )
}
