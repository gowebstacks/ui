# @webstacks/ui

A shareable React component library built on [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com), and [Tailwind CSS](https://tailwindcss.com).

## Installation

```bash
npm install @webstacks/ui
```

## Peer Dependencies

This library requires the following peer dependencies in your consuming application:

```bash
npm install react react-dom
```

## Usage

Import components directly from the package:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@webstacks/ui";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Styles

You must import the CSS in your application's entry point:

```tsx
import "@webstacks/ui/styles.css";
```

Or include the Tailwind CSS variables from `globals.css` in your own Tailwind setup.

## Available Components

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, Toaster, Toggle, ToggleGroup, Tooltip

## Hooks

- `useToast` / `toast` — Toast notification system
- `useIsMobile` — Mobile breakpoint detection
- `useSidebar` — Sidebar state management
- `useFormField` — Form field context

## Utilities

- `cn()` — Tailwind class merging utility (clsx + tailwind-merge)
- `buttonVariants` / `badgeVariants` / `toggleVariants` — CVA variant helpers

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode
npm run dev

# Type check
npm run typecheck
```

## Publishing

```bash
npm run build
npm publish --access public
```
