import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full rounded-md border px-4 py-3 text-sm",
          "bg-input-surface text-heading placeholder:text-disabled",
          "focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-error" : "border-input",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
export type { InputProps }
