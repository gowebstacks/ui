import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NativeSelect({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="native-select"
        className={cn(
          "border-input bg-background text-foreground shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 has-[option[disabled]:checked]:text-muted-foreground aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex h-9 w-full appearance-none rounded-md border py-1 pe-8 ps-3 text-sm outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon
        className="text-muted-foreground pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return <option className={cn(className)} {...props} />
}

function NativeSelectGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return <optgroup className={cn(className)} {...props} />
}

export { NativeSelect, NativeSelectOption, NativeSelectGroup }
