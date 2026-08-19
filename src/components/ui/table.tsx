import * as React from "react"

import { cn } from "@/lib/utils"

interface TableBodyOptions {
  striped: boolean
  bordered: boolean
  interactive: boolean
}

const TableBodyContext = React.createContext<TableBodyOptions>({
  striped: false,
  bordered: false,
  interactive: true,
})

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b [&_tr]:border-border", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  striped?: boolean
  bordered?: boolean
  interactive?: boolean
}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, striped = false, bordered = false, interactive = true, ...props }, ref) => (
    <TableBodyContext.Provider value={{ striped, bordered, interactive }}>
      <tbody
        ref={ref}
        data-striped={striped || undefined}
        data-bordered={bordered || undefined}
        data-interactive={interactive || undefined}
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
      />
    </TableBodyContext.Provider>
  )
)
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t border-border bg-muted/50 [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const { striped, interactive } = React.useContext(TableBodyContext)
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b border-border transition-colors data-[state=selected]:bg-muted",
        striped && "even:bg-muted/30",
        interactive && "hover:bg-muted/50",
        className
      )}
      {...props}
    />
  )
})
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { bordered } = React.useContext(TableBodyContext)
  return (
    <th
      ref={ref}
      className={cn(
        "h-10 px-2 text-left align-middle text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        bordered && "border-r border-border last:border-r-0",
        className
      )}
      {...props}
    />
  )
})
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { bordered } = React.useContext(TableBodyContext)
  return (
    <td
      ref={ref}
      className={cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        bordered && "border-r border-border last:border-r-0",
        className
      )}
      {...props}
    />
  )
})
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

const TableColgroup = React.forwardRef<
  HTMLTableColElement,
  React.HTMLAttributes<HTMLTableColElement>
>(({ className, ...props }, ref) => (
  <colgroup ref={ref} className={cn(className)} {...props} />
))
TableColgroup.displayName = "TableColgroup"

const TableCol = React.forwardRef<
  HTMLTableColElement,
  React.ColHTMLAttributes<HTMLTableColElement>
>(({ className, ...props }, ref) => (
  <col ref={ref} className={cn(className)} {...props} />
))
TableCol.displayName = "TableCol"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableColgroup,
  TableCol,
}
export type { TableBodyProps }
