import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border px-4 py-3 text-sm",
        "bg-input-surface text-heading placeholder:text-disabled",
        "focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "border-input",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
