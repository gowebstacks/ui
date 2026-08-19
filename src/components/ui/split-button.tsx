import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * Geist-style split button — a primary action attached to a dropdown of
 * closely related variants (e.g. "Deploy" / "Deploy to Preview").
 *
 * Composition mirrors the compound children pattern used elsewhere in the
 * library. The trigger's aria-label is required for accessibility since it
 * shows only a chevron.
 */

type SplitButtonTone = Exclude<ButtonProps["tone"], "destructive">

interface SplitButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  /** Text or elements shown on the primary button. */
  children: React.ReactNode
  /** Primary click handler. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /** Menu items rendered inside the dropdown. Use `SplitButtonMenuItem`. */
  menuItems: React.ReactNode
  /** SR-only label describing the dropdown trigger (e.g. "More deploy options"). */
  menuButtonLabel: string
  /** Alignment of the dropdown relative to the trigger. */
  menuAlignment?: "start" | "end"
  /** Forwarded to the primary Button — `tone`, `size`, `disabled`, `type`, etc. */
  buttonProps?: Omit<ButtonProps, "asChild" | "children" | "onClick">
  /** Disables the whole split (both primary and menu trigger). */
  disabled?: boolean
}

const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      className,
      children,
      onClick,
      menuItems,
      menuButtonLabel,
      menuAlignment = "end",
      buttonProps,
      disabled,
      ...props
    },
    ref
  ) => {
    // Geist blocks destructive tones on split buttons — enforce it here so
    // consumers can't slip one through via buttonProps.
    const tone: SplitButtonTone =
      (buttonProps?.tone as SplitButtonTone) ?? "primary"
    const size = buttonProps?.size ?? "md"
    return (
      <div
        ref={ref}
        className={cn("inline-flex", className)}
        {...props}
      >
        <Button
          {...buttonProps}
          tone={tone}
          size={size}
          disabled={disabled ?? buttonProps?.disabled}
          onClick={onClick}
          className={cn(
            "rounded-r-none",
            buttonProps?.className
          )}
        >
          {children}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              tone={tone}
              size={size}
              mode={buttonProps?.mode}
              disabled={disabled ?? buttonProps?.disabled}
              aria-label={menuButtonLabel}
              className={cn(
                "-ml-px rounded-l-none px-2",
                size === "sm" && "px-1.5",
                size === "xs" && "px-1"
              )}
            >
              <ChevronDown aria-hidden />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={menuAlignment}>
            {menuItems}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
)
SplitButton.displayName = "SplitButton"

interface SplitButtonMenuItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DropdownMenuItem>,
    "children" | "title"
  > {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

const SplitButtonMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  SplitButtonMenuItemProps
>(({ title, description, icon, className, ...props }, ref) => (
  <DropdownMenuItem
    ref={ref}
    className={cn("gap-3 py-2", className)}
    {...props}
  >
    {icon ? (
      <span className="flex size-4 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4">
        {icon}
      </span>
    ) : null}
    <span className="flex min-w-0 flex-col gap-0.5">
      <span className="text-sm text-heading">{title}</span>
      {description ? (
        <span className="text-xs text-muted-foreground">{description}</span>
      ) : null}
    </span>
  </DropdownMenuItem>
))
SplitButtonMenuItem.displayName = "SplitButtonMenuItem"

export { SplitButton, SplitButtonMenuItem }
export type { SplitButtonProps, SplitButtonMenuItemProps }
