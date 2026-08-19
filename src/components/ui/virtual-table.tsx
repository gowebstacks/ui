"use client"

import * as React from "react"
import { useVirtualizer } from "@tanstack/react-virtual"

import { cn } from "@/lib/utils"

interface VirtualTableBodyOptions {
  striped: boolean
  bordered: boolean
  interactive: boolean
  columnTemplate?: string
}

const VirtualTableBodyContext = React.createContext<VirtualTableBodyOptions>({
  striped: false,
  bordered: false,
  interactive: true,
})

interface VirtualTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columnTemplate?: string
}

const VirtualTable = React.forwardRef<HTMLDivElement, VirtualTableProps>(
  ({ className, columnTemplate, style, ...props }, ref) => (
    <div
      ref={ref}
      role="table"
      className={cn("w-full text-sm", className)}
      style={
        columnTemplate
          ? ({ ...style, "--vt-columns": columnTemplate } as React.CSSProperties)
          : style
      }
      {...props}
    />
  )
)
VirtualTable.displayName = "VirtualTable"

const VirtualTableHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="rowgroup"
    className={cn("border-b border-border", className)}
    {...props}
  />
))
VirtualTableHeader.displayName = "VirtualTableHeader"

const VirtualTableRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => {
  const { striped, interactive } = React.useContext(VirtualTableBodyContext)
  return (
    <div
      ref={ref}
      role="row"
      className={cn(
        "grid grid-cols-[var(--vt-columns,repeat(auto-fit,minmax(0,1fr)))] border-b border-border transition-colors data-[state=selected]:bg-muted",
        striped && "even:bg-muted/30",
        interactive && "hover:bg-muted/50",
        className
      )}
      style={style}
      {...props}
    />
  )
})
VirtualTableRow.displayName = "VirtualTableRow"

const VirtualTableHead = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { bordered } = React.useContext(VirtualTableBodyContext)
  return (
    <div
      ref={ref}
      role="columnheader"
      className={cn(
        "flex h-10 items-center px-2 text-left align-middle text-muted-foreground",
        bordered && "border-r border-border last:border-r-0",
        className
      )}
      {...props}
    />
  )
})
VirtualTableHead.displayName = "VirtualTableHead"

const VirtualTableCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { bordered } = React.useContext(VirtualTableBodyContext)
  return (
    <div
      ref={ref}
      role="cell"
      className={cn(
        "flex items-center p-2 align-middle",
        bordered && "border-r border-border last:border-r-0",
        className
      )}
      {...props}
    />
  )
})
VirtualTableCell.displayName = "VirtualTableCell"

interface VirtualTableBodyProps<TRow>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  rows: TRow[]
  children: (row: TRow, index: number) => React.ReactNode
  estimateRowHeight: number
  containerHeight?: number | string
  overscan?: number
  getRowKey?: (row: TRow, index: number) => React.Key
  striped?: boolean
  bordered?: boolean
  interactive?: boolean
}

function VirtualTableBody<TRow>({
  rows,
  children,
  estimateRowHeight,
  containerHeight = 480,
  overscan = 8,
  getRowKey,
  striped = false,
  bordered = false,
  interactive = true,
  className,
  style,
  ...props
}: VirtualTableBodyProps<TRow>) {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => estimateRowHeight,
    overscan,
  })

  return (
    <VirtualTableBodyContext.Provider value={{ striped, bordered, interactive }}>
      <div
        ref={scrollRef}
        role="rowgroup"
        className={cn("relative overflow-auto", className)}
        style={{ height: containerHeight, ...style }}
        {...props}
      >
        <div
          className="relative w-full"
          style={{ height: virtualizer.getTotalSize() }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const row = rows[virtualRow.index]
            const key = getRowKey ? getRowKey(row, virtualRow.index) : virtualRow.key
            return (
              <div
                key={key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
                className="absolute left-0 top-0 w-full"
                style={{ transform: `translateY(${virtualRow.start}px)` }}
              >
                {children(row, virtualRow.index)}
              </div>
            )
          })}
        </div>
      </div>
    </VirtualTableBodyContext.Provider>
  )
}
VirtualTableBody.displayName = "VirtualTableBody"

export {
  VirtualTable,
  VirtualTableHeader,
  VirtualTableRow,
  VirtualTableHead,
  VirtualTableCell,
  VirtualTableBody,
}
export type { VirtualTableProps, VirtualTableBodyProps }
