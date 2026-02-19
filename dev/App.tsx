import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../src/components/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../src/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../src/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../src/components/ui/avatar";
import { Badge } from "../src/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";
import { Button } from "../src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../src/components/ui/card";
import { Checkbox } from "../src/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../src/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../src/components/ui/dropdown-menu";
import { Input } from "../src/components/ui/input";
import { Label } from "../src/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../src/components/ui/pagination";
import { Progress } from "../src/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../src/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select";
import { Separator } from "../src/components/ui/separator";
import { Skeleton } from "../src/components/ui/skeleton";
import { Slider } from "../src/components/ui/slider";
import { Switch } from "../src/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../src/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src/components/ui/tabs";
import { Textarea } from "../src/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../src/components/ui/tooltip";
import { Toggle } from "../src/components/ui/toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../src/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../src/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../src/components/ui/sheet";
import { ScrollArea } from "../src/components/ui/scroll-area";
import { AspectRatio } from "../src/components/ui/aspect-ratio";
import { Calendar } from "../src/components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../src/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../src/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../src/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../src/components/ui/context-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../src/components/ui/drawer";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "../src/components/ui/input-otp";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../src/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../src/components/ui/navigation-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../src/components/ui/resizable";
import { ToggleGroup, ToggleGroupItem } from "../src/components/ui/toggle-group";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { toast } from "sonner";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "../src/components/ui/button-group";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "../src/components/ui/empty";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "../src/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../src/components/ui/input-group";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
} from "../src/components/ui/item";
import { Kbd } from "../src/components/ui/kbd";
import { Spinner } from "../src/components/ui/spinner";
import { Box } from "../src/components/ui/box";
import { Heading } from "../src/components/ui/heading";
import { Text } from "../src/components/ui/text";
import { Grid, GridColumn } from "../src/components/ui/grid";
import { Stack } from "../src/components/ui/stack";
import { Section } from "../src/components/ui/section";
import { BaseStyles } from "../src/components/base-styles";


export default function App() {
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(45);

  return (
    <BaseStyles colorMode={dark ? "dark" : "light"}>
    <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-xl">@webstacks/ui</h1>
              <div className="flex items-center gap-3">
                <Label htmlFor="dark-toggle" className="text-sm">
                  Dark Mode
                </Label>
                <Switch
                  id="dark-toggle"
                  checked={dark}
                  onCheckedChange={setDark}
                />
              </div>
            </div>
          </header>

          {/* Content */}
          <main>
            {/* Heading */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Heading">
              <div className="space-y-6">
                <Heading as="h1" size="display">Display heading</Heading>
                <Heading as="h1" size={1}>Heading size 1</Heading>
                <Heading as="h2" size={2}>Heading size 2</Heading>
                <Heading as="h3" size={3}>Heading size 3</Heading>
                <Heading as="h4" size={4}>Heading size 4</Heading>
                <Heading as="h5" size={5}>Heading size 5</Heading>
                <Heading as="h6" size={6}>Heading size 6</Heading>
                <Heading as="h3" size="subhead-large">Subhead large</Heading>
                <Heading as="h4" size="subhead-medium">Subhead medium</Heading>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-xs text-muted-foreground">Weight variants</p>
                <Heading as="h3" size={3} weight="light">Light heading</Heading>
                <Heading as="h3" size={3} weight="normal">Normal heading</Heading>
                <Heading as="h3" size={3} weight="semibold">Semibold heading</Heading>
                <Heading as="h3" size={3} weight="bold">Bold heading</Heading>
              </div>
              <div className="mt-6">
                <p className="text-xs text-muted-foreground mb-2">Muted variant</p>
                <Heading as="h3" size={3} variant="muted">Muted heading</Heading>
              </div>
            </Section>

            {/* Text */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Text">
              <div className="space-y-4">
                <Text size={700}>Text size 700 — Display body text</Text>
                <Text size={600}>Text size 600 — Large body text for emphasis</Text>
                <Text size={500}>Text size 500 — Slightly larger than default</Text>
                <Text size={400}>Text size 400 — Default body text used for paragraphs and general content.</Text>
                <Text size={300}>Text size 300 — Slightly smaller body text</Text>
                <Text size={200}>Text size 200 — Small text for captions and labels</Text>
                <Text size={100}>Text size 100 — Extra small text for fine print</Text>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-xs text-muted-foreground">Muted variant</p>
                <Text variant="muted">This is muted text, used to de-emphasize content or provide visual contrast when paired with a title.</Text>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-xs text-muted-foreground">Weight variants</p>
                <Text weight="light">Light weight text</Text>
                <Text weight="normal">Normal weight text</Text>
                <Text weight="medium">Medium weight text</Text>
                <Text weight="semibold">Semibold weight text</Text>
                <Text weight="bold">Bold weight text</Text>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-xs text-muted-foreground">Alignment</p>
                <Text align="start">Start-aligned text</Text>
                <Text align="center">Center-aligned text</Text>
                <Text align="end">End-aligned text</Text>
              </div>
            </Section>

            {/* Box */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Box">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Padding, background, border, and border-radius options.</p>
                <div className="flex flex-wrap gap-4">
                  <Box padding="normal" backgroundColor="subtle" borderRadius="large" className="w-48">
                    <span className="text-sm">padding=normal, bg=subtle, radius=large</span>
                  </Box>
                  <Box padding="spacious" backgroundColor="inset" borderStyle="solid" borderColor="default" borderRadius="medium" className="w-48">
                    <span className="text-sm">padding=spacious, bg=inset, border=solid</span>
                  </Box>
                  <Box padding="condensed" backgroundColor="default" borderStyle="dashed" borderColor="muted" borderRadius="xlarge" className="w-48">
                    <span className="text-sm">padding=condensed, border=dashed</span>
                  </Box>
                </div>
              </div>
            </Section>

            {/* Grid */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Grid">
              <p className="text-sm text-muted-foreground">12-column grid with responsive columns and gap control.</p>
              <Grid columns={{ narrow: 1, regular: 2, wide: 4 }} gap="normal">
                {[1, 2, 3, 4].map((i) => (
                  <Box key={i} padding="normal" backgroundColor="subtle" borderRadius="medium" borderStyle="solid" borderColor="default">
                    <span className="text-sm">Column {i}</span>
                  </Box>
                ))}
              </Grid>
              <p className="text-xs text-muted-foreground mt-2">Responsive: 1 col (narrow) → 2 cols (md) → 4 cols (lg)</p>

              <Grid columns={12} gap="condensed" className="mt-4">
                <GridColumn span={8}>
                  <Box padding="normal" backgroundColor="subtle" borderRadius="medium" borderStyle="solid" borderColor="default">
                    <span className="text-sm">Main content (span 8)</span>
                  </Box>
                </GridColumn>
                <GridColumn span={4}>
                  <Box padding="normal" backgroundColor="inset" borderRadius="medium" borderStyle="solid" borderColor="default">
                    <span className="text-sm">Sidebar (span 4)</span>
                  </Box>
                </GridColumn>
              </Grid>
            </Section>

            {/* Stack */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Stack">
              <p className="text-sm text-muted-foreground">Vertical and horizontal stacking with gap, alignment, and justification.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs mb-2">Vertical (default)</p>
                  <Stack gap="condensed">
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">Item 1</span></Box>
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">Item 2</span></Box>
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">Item 3</span></Box>
                  </Stack>
                </div>
                <div>
                  <p className="text-xs mb-2">Horizontal, center-aligned</p>
                  <Stack direction="horizontal" gap="normal" align="center">
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">A</span></Box>
                    <Box padding="spacious" backgroundColor="subtle" borderRadius="small"><span className="text-sm">B (taller)</span></Box>
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">C</span></Box>
                  </Stack>
                </div>
                <div>
                  <p className="text-xs mb-2">Horizontal, space-between</p>
                  <Stack direction="horizontal" gap="normal" justify="space-between" className="w-full">
                    <Button>Left</Button>
                    <Button mode="stroke" tone="secondary">Right</Button>
                  </Stack>
                </div>
                <div>
                  <p className="text-xs mb-2">Responsive: vertical (narrow) → horizontal (regular)</p>
                  <Stack direction={{ narrow: "vertical", regular: "horizontal" }} gap="normal" align="center">
                    <Badge>Tag 1</Badge>
                    <Badge>Tag 2</Badge>
                    <Badge>Tag 3</Badge>
                  </Stack>
                </div>
              </div>
            </Section>

            {/* Section */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Section">
              <p className="text-sm text-muted-foreground">Page-level container with padding, background color, rounded corners, and full-width options.</p>
              <div className="space-y-6">
                <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" backgroundColor="subtle" rounded>
                  <Heading as="h3" size={4}>Default subtle section (rounded)</Heading>
                  <Text variant="muted">A section with condensed padding, subtle background, and rounded corners.</Text>
                </Section>
                <Section paddingBlockStart="normal" paddingBlockEnd="normal" backgroundColor="default">
                  <Heading as="h3" size={4}>Default background section</Heading>
                  <Text variant="muted">A section with normal padding and the default background color.</Text>
                </Section>
                <Section paddingBlockStart="spacious" paddingBlockEnd="spacious" backgroundColor="inset" rounded fullWidth>
                  <Heading as="h3" size={4}>Full-width inset section (rounded)</Heading>
                  <Text variant="muted">A full-width section with spacious padding, inset background, and rounded corners.</Text>
                </Section>
              </div>
            </Section>

            {/* Buttons */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Button">
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button mode="filled" tone="secondary">Secondary</Button>
                <Button mode="stroke" tone="primary">Stroke Primary</Button>
                <Button mode="stroke" tone="secondary">Stroke Secondary</Button>
                <Button mode="bleed">Bleed</Button>
                <Button mode="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </Section>

            {/* Button Group */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Button Group">
              <div className="space-y-4">
                <ButtonGroup>
                  <Button mode="stroke" tone="secondary">Left</Button>
                  <ButtonGroupSeparator />
                  <Button mode="stroke" tone="secondary">Center</Button>
                  <ButtonGroupSeparator />
                  <Button mode="stroke" tone="secondary">Right</Button>
                </ButtonGroup>
              </div>
            </Section>

            {/* Kbd */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Kbd">
              <div className="flex items-center gap-4">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
                <span className="text-sm text-muted-foreground">or</span>
                <Kbd>Ctrl</Kbd>
                <span className="text-sm text-muted-foreground">+</span>
                <Kbd>Shift</Kbd>
                <span className="text-sm text-muted-foreground">+</span>
                <Kbd>P</Kbd>
              </div>
            </Section>

            {/* Spinner */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Spinner">
              <div className="flex items-center gap-6">
                <Spinner />
                <Spinner className="size-6" />
                <Spinner className="size-8" />
                <div className="flex items-center gap-2">
                  <Spinner />
                  <span className="text-sm text-muted-foreground">Loading...</span>
                </div>
              </div>
            </Section>

            {/* Empty */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Empty">
              <Empty className="border">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                  </EmptyMedia>
                  <EmptyTitle>No files found</EmptyTitle>
                  <EmptyDescription>Upload a file to get started.</EmptyDescription>
                </EmptyHeader>
                <Button mode="stroke" tone="secondary" size="sm">Upload File</Button>
              </Empty>
            </Section>

            {/* Field */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Field">
              <div className="max-w-sm space-y-6">
                <Field>
                  <FieldLabel>Username</FieldLabel>
                  <FieldContent>
                    <Input placeholder="Enter username" />
                    <FieldDescription>This is your public display name.</FieldDescription>
                  </FieldContent>
                </Field>
              </div>
            </Section>

            {/* Input Group */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Input Group">
              <div className="max-w-sm space-y-4">
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <span className="text-muted-foreground">https://</span>
                  </InputGroupAddon>
                  <InputGroupInput placeholder="example.com" />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <span className="text-muted-foreground">$</span>
                  </InputGroupAddon>
                  <InputGroupInput placeholder="0.00" />
                  <InputGroupAddon align="inline-end">
                    <span className="text-muted-foreground">USD</span>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Section>

            {/* Item */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Item">
              <div className="max-w-md">
                <ItemGroup>
                  <Item>
                    <ItemContent>
                      <ItemTitle>First Item</ItemTitle>
                      <ItemDescription>Description for the first item in the list.</ItemDescription>
                    </ItemContent>
                  </Item>
                  <ItemSeparator />
                  <Item>
                    <ItemContent>
                      <ItemTitle>Second Item</ItemTitle>
                      <ItemDescription>Description for the second item in the list.</ItemDescription>
                    </ItemContent>
                  </Item>
                  <ItemSeparator />
                  <Item>
                    <ItemContent>
                      <ItemTitle>Third Item</ItemTitle>
                      <ItemDescription>Description for the third item in the list.</ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </div>
            </Section>

            {/* Badge */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Badge">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Section>

            {/* Card */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description with supporting text.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here. This is a basic card component.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button mode="stroke" tone="secondary">Cancel</Button>
                    <Button>Submit</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>You have 3 unread messages.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">New comment on your post</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">Someone mentioned you</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">Your report is ready</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Section>

            {/* Input & Form Controls */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Input & Form Controls">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." />
                </div>
                <div className="space-y-3">
                  <Label>Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="cherry">Cherry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Section>

            {/* Checkbox, Radio, Switch */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Checkbox, Radio & Switch">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3>Checkbox</h3>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3>Radio Group</h3>
                  <RadioGroup defaultValue="option-1">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option-1" id="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option-2" id="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option-3" id="r3" />
                      <Label htmlFor="r3">Option 3</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-3">
                  <h3>Switch</h3>
                  <div className="flex items-center gap-2">
                    <Switch id="airplane" />
                    <Label htmlFor="airplane">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="wifi" defaultChecked />
                    <Label htmlFor="wifi">Wi-Fi</Label>
                  </div>
                </div>
              </div>
            </Section>

            {/* Slider & Progress */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Slider & Progress">
              <div className="space-y-6 max-w-md">
                <div className="space-y-3">
                  <Label>Slider: {progress}%</Label>
                  <Slider
                    value={[progress]}
                    onValueChange={(v) => setProgress(v[0])}
                    max={100}
                    step={1}
                  />
                </div>
                <div className="space-y-3">
                  <Label>Progress</Label>
                  <Progress value={progress} />
                </div>
              </div>
            </Section>

            {/* Accordion */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Accordion">
              <Accordion type="single" collapsible className="max-w-lg">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the design system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default with smooth transitions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Section>

            {/* Tabs */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Tabs">
              <Tabs defaultValue="account" className="max-w-lg">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>Change your password here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </CardContent>
                    <CardFooter>
                      <Button>Update password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>Manage your preferences.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Switch id="notifications" />
                        <Label htmlFor="notifications">Enable notifications</Label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </Section>

            {/* Alert */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Alert">
              <div className="space-y-3 max-w-lg">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the CLI.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>
            </Section>

            {/* Avatar */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Avatar">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>WS</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
              </div>
            </Section>

            {/* Breadcrumb */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Section>

            {/* Table */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell><Badge>Paid</Badge></TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV002</TableCell>
                    <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV003</TableCell>
                    <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Section>

            {/* Dialog & AlertDialog */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Dialog & AlertDialog">
              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button mode="stroke" tone="secondary">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 py-4">
                      <Label htmlFor="dialog-name">Name</Label>
                      <Input id="dialog-name" defaultValue="John Doe" />
                    </div>
                    <DialogFooter>
                      <Button>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button mode="filled" tone="secondary">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </Section>

            {/* Dropdown Menu */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Dropdown Menu">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button mode="stroke" tone="secondary">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Section>

            {/* Tooltip & HoverCard */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Tooltip & HoverCard">
              <div className="flex gap-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button mode="stroke" tone="secondary">Hover me (Tooltip)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button mode="link">Hover me (HoverCard)</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback>WS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm">@webstacks</h4>
                        <p className="text-sm text-muted-foreground">
                          A shareable React component library built with shadcn/ui.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </Section>

            {/* Popover */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Popover">
              <Popover>
                <PopoverTrigger asChild>
                  <Button mode="stroke" tone="secondary">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <h4>Dimensions</h4>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input id="height" defaultValue="25px" className="col-span-2" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Section>

            {/* Sheet */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Sheet">
              <Sheet>
                <SheetTrigger asChild>
                  <Button mode="stroke" tone="secondary">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="sheet-name">Name</Label>
                      <Input id="sheet-name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sheet-username">Username</Label>
                      <Input id="sheet-username" defaultValue="@johndoe" />
                    </div>
                    <Button className="w-full">Save changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </Section>

            {/* Toggle */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Toggle">
              <div className="flex gap-3">
                <Toggle>Bold</Toggle>
                <Toggle>Italic</Toggle>
                <Toggle>Underline</Toggle>
              </div>
            </Section>

            {/* Pagination */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Pagination">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </Section>

            {/* Separator */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Separator">
              <div className="max-w-md">
                <div className="space-y-1">
                  <h4 className="text-sm">Radix Primitives</h4>
                  <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center gap-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
            </Section>

            {/* Skeleton */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Skeleton">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </Section>

            {/* Scroll Area */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Scroll Area">
              <ScrollArea className="h-48 w-64 rounded-md border border-border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1} — Scrollable content
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Section>

            {/* Aspect Ratio */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Aspect Ratio">
              <div className="max-w-sm">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                    16:9 Aspect Ratio
                  </div>
                </AspectRatio>
              </div>
            </Section>

            {/* Calendar */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Calendar">
              <Calendar className="rounded-md border border-border w-fit" />
            </Section>

            {/* Carousel */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Carousel">
              <div className="max-w-sm mx-auto">
                <Carousel>
                  <CarouselContent>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <CarouselItem key={i}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{i}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Section>

            {/* Collapsible */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Collapsible">
              <Collapsible className="max-w-sm space-y-2">
                <CollapsibleTrigger asChild>
                  <Button mode="stroke" tone="secondary" size="sm">Toggle Content</Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border border-border px-4 py-2 text-sm">
                    Collapsible content item 1
                  </div>
                  <div className="rounded-md border border-border px-4 py-2 text-sm">
                    Collapsible content item 2
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Section>

            {/* Command */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Command">
              <Command className="rounded-lg border border-border shadow-md max-w-sm">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search</CommandItem>
                    <CommandItem>Settings</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Notifications</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </Section>

            {/* Context Menu */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Context Menu">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed border-border text-sm">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Forward</ContextMenuItem>
                  <ContextMenuItem>Reload</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>View Source</ContextMenuItem>
                  <ContextMenuItem>Inspect</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Section>

            {/* Drawer */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Drawer">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button mode="stroke" tone="secondary">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Edit Profile</DrawerTitle>
                    <DrawerDescription>Make changes to your profile.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Drawer body content goes here.</p>
                  </div>
                  <DrawerFooter>
                    <Button>Save</Button>
                    <DrawerClose asChild>
                      <Button mode="stroke" tone="secondary">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Section>

            {/* Input OTP */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Input OTP">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Section>

            {/* Menubar */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Menubar">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Zoom In</MenubarItem>
                    <MenubarItem>Zoom Out</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Full Screen</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </Section>

            {/* Navigation Menu */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Navigation Menu">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <NavigationMenuLink className="text-sm hover:underline">Introduction</NavigationMenuLink>
                        <NavigationMenuLink className="text-sm hover:underline">Installation</NavigationMenuLink>
                        <NavigationMenuLink className="text-sm hover:underline">Typography</NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <NavigationMenuLink className="text-sm hover:underline">Alert Dialog</NavigationMenuLink>
                        <NavigationMenuLink className="text-sm hover:underline">Hover Card</NavigationMenuLink>
                        <NavigationMenuLink className="text-sm hover:underline">Progress</NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Section>

            {/* Resizable */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Resizable">
              <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border border-border">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-32 items-center justify-center p-6">
                    <span className="text-sm">Panel A</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-32 items-center justify-center p-6">
                    <span className="text-sm">Panel B</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </Section>

            {/* Toggle Group */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Toggle Group">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Single selection</p>
                  <ToggleGroup type="single">
                    <ToggleGroupItem value="left">Left</ToggleGroupItem>
                    <ToggleGroupItem value="center">Center</ToggleGroupItem>
                    <ToggleGroupItem value="right">Right</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Multiple selection</p>
                  <ToggleGroup type="multiple">
                    <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                    <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                    <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </Section>

            {/* Sonner / Toast */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Sonner (Toast)">
              <div className="flex gap-3">
                <Button mode="stroke" tone="secondary" onClick={() => toast("Event has been created.")}>
                  Show Toast
                </Button>
                <Button mode="stroke" tone="secondary" onClick={() => toast.success("Successfully saved!")}>
                  Success Toast
                </Button>
                <Button mode="stroke" tone="secondary" onClick={() => toast.error("Something went wrong.")}>
                  Error Toast
                </Button>
              </div>
            </Section>

            {/* Color Palette Preview */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Color Palette">
              <div className="space-y-6">
                {[
                  { name: "Blue", prefix: "--color-blue" },
                  { name: "Teal", prefix: "--color-teal" },
                  { name: "Neutral", prefix: "--color-neutral" },
                  { name: "Error", prefix: "--color-error" },
                  { name: "Success", prefix: "--color-success" },
                  { name: "Warning", prefix: "--color-warning" },
                  { name: "Purple", prefix: "--color-purple" },
                  { name: "Mint", prefix: "--color-mint" },
                ].map(({ name, prefix }) => (
                  <div key={name}>
                    <h3 className="text-sm mb-2">{name}</h3>
                    <div className="flex gap-1">
                      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                        <div
                          key={shade}
                          className="h-10 w-10 rounded"
                          style={{ backgroundColor: `var(${prefix}-${shade})` }}
                          title={`${prefix}-${shade}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Token Preview */}
            <Section paddingBlockStart="condensed" paddingBlockEnd="condensed" sectionTitle="Semantic Tokens">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Background", var: "--background" },
                  { label: "Foreground", var: "--foreground" },
                  { label: "Primary", var: "--primary" },
                  { label: "Primary FG", var: "--primary-foreground" },
                  { label: "Secondary", var: "--secondary" },
                  { label: "Muted", var: "--muted" },
                  { label: "Accent", var: "--accent" },
                  { label: "Destructive", var: "--destructive" },
                  { label: "Border", var: "--border" },
                  { label: "Input", var: "--input" },
                  { label: "Ring", var: "--ring" },
                  { label: "Card", var: "--card" },
                ].map(({ label, var: cssVar }) => (
                  <div key={cssVar} className="flex items-center gap-3">
                    <div
                      className="h-8 w-8 rounded border border-border"
                      style={{ backgroundColor: `var(${cssVar})` }}
                    />
                    <div>
                      <div className="text-xs">{label}</div>
                      <div className="text-xs text-muted-foreground">{cssVar}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </main>
        </div>
    <Sonner />
    </TooltipProvider>
    </BaseStyles>
  );
}
