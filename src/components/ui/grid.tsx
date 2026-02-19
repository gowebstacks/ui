import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const gridVariants = cva("grid", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
    },
    gap: {
      none: "gap-0",
      condensed: "gap-2",
      normal: "gap-4",
      spacious: "gap-6",
      "extra-spacious": "gap-8",
    },
    gapX: {
      none: "gap-x-0",
      condensed: "gap-x-2",
      normal: "gap-x-4",
      spacious: "gap-x-6",
      "extra-spacious": "gap-x-8",
    },
    gapY: {
      none: "gap-y-0",
      condensed: "gap-y-2",
      normal: "gap-y-4",
      spacious: "gap-y-6",
      "extra-spacious": "gap-y-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-items-start",
      center: "justify-items-center",
      end: "justify-items-end",
      stretch: "justify-items-stretch",
    },
  },
  defaultVariants: {
    columns: 12,
    gap: "normal",
  },
})

type ColumnValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ResponsiveColumns {
  narrow?: ColumnValue
  regular?: ColumnValue
  wide?: ColumnValue
}

const columnMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
}

const mdColumnMap: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
}

const lgColumnMap: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
}

export interface GridProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "columns">,
    Omit<VariantProps<typeof gridVariants>, "columns"> {
  as?: React.ElementType
  columns?: ColumnValue | ResponsiveColumns
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ as: Comp = "div", className, columns = 12, gap, gapX, gapY, align, justify, ...props }, ref) => {
    let columnClasses: string

    if (typeof columns === "number") {
      columnClasses = columnMap[columns] || "grid-cols-12"
    } else {
      const classes: string[] = []
      if (columns.narrow) classes.push(columnMap[columns.narrow])
      if (columns.regular) classes.push(mdColumnMap[columns.regular])
      if (columns.wide) classes.push(lgColumnMap[columns.wide])
      columnClasses = classes.join(" ")
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          gridVariants({ gap, gapX, gapY, align, justify }),
          columnClasses,
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"

/* ── Grid.Column ── */

const gridColumnVariants = cva("", {
  variants: {
    span: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
    },
    start: {
      1: "col-start-1",
      2: "col-start-2",
      3: "col-start-3",
      4: "col-start-4",
      5: "col-start-5",
      6: "col-start-6",
      7: "col-start-7",
      8: "col-start-8",
      9: "col-start-9",
      10: "col-start-10",
      11: "col-start-11",
      12: "col-start-12",
      13: "col-start-13",
    },
  },
})

type SpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ResponsiveSpan {
  narrow?: SpanValue
  regular?: SpanValue
  wide?: SpanValue
}

const spanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
}

const mdSpanMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
}

const lgSpanMap: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
}

export interface GridColumnProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "start">,
    Omit<VariantProps<typeof gridColumnVariants>, "span" | "start"> {
  as?: React.ElementType
  span?: SpanValue | ResponsiveSpan
  start?: VariantProps<typeof gridColumnVariants>["start"]
}

const GridColumn = React.forwardRef<HTMLDivElement, GridColumnProps>(
  ({ as: Comp = "div", className, span, start, ...props }, ref) => {
    let spanClasses: string

    if (typeof span === "number") {
      spanClasses = spanMap[span] || ""
    } else if (span) {
      const classes: string[] = []
      if (span.narrow) classes.push(spanMap[span.narrow])
      if (span.regular) classes.push(mdSpanMap[span.regular])
      if (span.wide) classes.push(lgSpanMap[span.wide])
      spanClasses = classes.join(" ")
    } else {
      spanClasses = ""
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          gridColumnVariants({ start }),
          spanClasses,
          className
        )}
        {...props}
      />
    )
  }
)
GridColumn.displayName = "GridColumn"

export { Grid, GridColumn, gridVariants, gridColumnVariants }
