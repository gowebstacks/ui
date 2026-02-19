# @webstacks/ui

A React implementation of the Webstacks Design System — built on [Radix UI](https://www.radix-ui.com), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Getting started

To install `@webstacks/ui` in your project, run the following command:

```bash
npm install @webstacks/ui
```

If you prefer Yarn or pnpm:

```bash
yarn add @webstacks/ui
# or
pnpm add @webstacks/ui
```

This package includes:

- **Components** — all UI primitives and layout components
- **Design tokens** — color primitives, semantic tokens, and shadcn variable bridge
- **Fonts** — Saans and TT Interphases Pro Mono font files and `@font-face` declarations
- **Typography** — a full type scale with semantic font variables

## Usage

### 1. Add the theme to your CSS

In your app's main CSS file (e.g. `index.css`), import Tailwind and the `@webstacks/ui` theme:

```css
@import "tailwindcss";
@import "@webstacks/ui/theme";
```

This registers all design tokens, fonts, colors, and component classes with Tailwind v4 at build time. No other CSS imports are needed.

### 2. Wrap your app with BaseStyles

At the root of your application, wrap your content with `BaseStyles` to activate the design tokens at runtime:

```tsx
import { BaseStyles } from "@webstacks/ui";

function RootLayout({ children }) {
  return <BaseStyles>{children}</BaseStyles>;
}
```

### 3. Use components

```tsx
import { Button, Heading, Section } from "@webstacks/ui";

function App() {
  return (
    <Section paddingBlockStart="spacious" paddingBlockEnd="spacious">
      <Heading as="h1" size="display">Hello world</Heading>
      <Button>Get Started</Button>
    </Section>
  );
}
```

### Color mode

`BaseStyles` accepts a `colorMode` prop to control light/dark theming:

```tsx
// Force light mode (default)
<BaseStyles colorMode="light">

// Force dark mode
<BaseStyles colorMode="dark">

// Follow system preference
<BaseStyles colorMode="auto">
```

## Components

### Layout

- **Box** — versatile layout primitive with padding, margin, background, border, and border-radius props
- **Grid** / **GridColumn** — 12-column grid with responsive columns and gap control
- **Stack** — one-dimensional flex layout with direction, gap, alignment, and justification

### Typography

- **Heading** — semantic heading component (h1–h6) with size, weight, stretch, and letter-spacing variants
- **Text** — body text component with size (100–700), variant, weight, and alignment

### UI Primitives

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, Toaster, Toggle, ToggleGroup, Tooltip

## Hooks

- `useToast` / `toast` — Toast notification system
- `useIsMobile` — Mobile breakpoint detection
- `useSidebar` — Sidebar state management
- `useFormField` — Form field context

## Utilities

- `cn()` — Tailwind class merging utility (clsx + tailwind-merge)
- `buttonVariants` / `badgeVariants` / `toggleVariants` / `boxVariants` / `headingVariants` / `textVariants` — CVA variant helpers

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode
npm run dev

# Preview all components
npm run dev:preview

# Type check
npm run typecheck
```

## Publishing

```bash
npm version patch  # or minor / major
npm publish --access public
```

## License

MIT
