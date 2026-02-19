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
import { Box } from "../src/components/ui/box";
import { Heading } from "../src/components/ui/heading";
import { Text } from "../src/components/ui/text";
import { Grid, GridColumn } from "../src/components/ui/grid";
import { Stack } from "../src/components/ui/stack";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(45);

  return (
    <TooltipProvider>
      <div className={dark ? "dark" : ""}>
        <div className="min-h-screen bg-background text-foreground">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-xl font-bold">@webstacks/ui</h1>
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
          <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
            {/* Heading */}
            <Section title="Heading">
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
                <p className="text-xs font-medium text-muted-foreground">Weight variants</p>
                <Heading as="h3" size={3} weight="light">Light heading</Heading>
                <Heading as="h3" size={3} weight="normal">Normal heading</Heading>
                <Heading as="h3" size={3} weight="semibold">Semibold heading</Heading>
                <Heading as="h3" size={3} weight="bold">Bold heading</Heading>
              </div>
              <div className="mt-6">
                <p className="text-xs font-medium text-muted-foreground mb-2">Muted variant</p>
                <Heading as="h3" size={3} variant="muted">Muted heading</Heading>
              </div>
            </Section>

            {/* Text */}
            <Section title="Text">
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
                <p className="text-xs font-medium text-muted-foreground">Muted variant</p>
                <Text variant="muted">This is muted text, used to de-emphasize content or provide visual contrast when paired with a title.</Text>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-xs font-medium text-muted-foreground">Weight variants</p>
                <Text weight="light">Light weight text</Text>
                <Text weight="normal">Normal weight text</Text>
                <Text weight="medium">Medium weight text</Text>
                <Text weight="semibold">Semibold weight text</Text>
                <Text weight="bold">Bold weight text</Text>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-xs font-medium text-muted-foreground">Alignment</p>
                <Text align="start">Start-aligned text</Text>
                <Text align="center">Center-aligned text</Text>
                <Text align="end">End-aligned text</Text>
              </div>
            </Section>

            {/* Box */}
            <Section title="Box">
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
            <Section title="Grid">
              <p className="text-sm text-muted-foreground">12-column grid with responsive columns and gap control.</p>
              <Grid columns={{ narrow: 1, regular: 2, wide: 4 }} gap="normal">
                {[1, 2, 3, 4].map((i) => (
                  <Box key={i} padding="normal" backgroundColor="subtle" borderRadius="medium" borderStyle="solid" borderColor="default">
                    <span className="text-sm font-medium">Column {i}</span>
                  </Box>
                ))}
              </Grid>
              <p className="text-xs text-muted-foreground mt-2">Responsive: 1 col (narrow) → 2 cols (md) → 4 cols (lg)</p>

              <Grid columns={12} gap="condensed" className="mt-4">
                <GridColumn span={8}>
                  <Box padding="normal" backgroundColor="subtle" borderRadius="medium" borderStyle="solid" borderColor="default">
                    <span className="text-sm font-medium">Main content (span 8)</span>
                  </Box>
                </GridColumn>
                <GridColumn span={4}>
                  <Box padding="normal" backgroundColor="inset" borderRadius="medium" borderStyle="solid" borderColor="default">
                    <span className="text-sm font-medium">Sidebar (span 4)</span>
                  </Box>
                </GridColumn>
              </Grid>
            </Section>

            {/* Stack */}
            <Section title="Stack">
              <p className="text-sm text-muted-foreground">Vertical and horizontal stacking with gap, alignment, and justification.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-medium mb-2">Vertical (default)</p>
                  <Stack gap="condensed">
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">Item 1</span></Box>
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">Item 2</span></Box>
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">Item 3</span></Box>
                  </Stack>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Horizontal, center-aligned</p>
                  <Stack direction="horizontal" gap="normal" align="center">
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">A</span></Box>
                    <Box padding="spacious" backgroundColor="subtle" borderRadius="small"><span className="text-sm">B (taller)</span></Box>
                    <Box padding="condensed" backgroundColor="subtle" borderRadius="small"><span className="text-sm">C</span></Box>
                  </Stack>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Horizontal, space-between</p>
                  <Stack direction="horizontal" gap="normal" justify="space-between" className="w-full">
                    <Button>Left</Button>
                    <Button variant="outline">Right</Button>
                  </Stack>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Responsive: vertical (narrow) → horizontal (regular)</p>
                  <Stack direction={{ narrow: "vertical", regular: "horizontal" }} gap="normal" align="center">
                    <Badge>Tag 1</Badge>
                    <Badge>Tag 2</Badge>
                    <Badge>Tag 3</Badge>
                  </Stack>
                </div>
              </div>
            </Section>

            {/* Buttons */}
            <Section title="Button">
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </Section>

            {/* Badge */}
            <Section title="Badge">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Section>

            {/* Card */}
            <Section title="Card">
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
                    <Button variant="outline">Cancel</Button>
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
            <Section title="Input & Form Controls">
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
            <Section title="Checkbox, Radio & Switch">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Checkbox</h3>
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
                  <h3 className="font-medium">Radio Group</h3>
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
                  <h3 className="font-medium">Switch</h3>
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
            <Section title="Slider & Progress">
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
            <Section title="Accordion">
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
            <Section title="Tabs">
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
            <Section title="Alert">
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
            <Section title="Avatar">
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
            <Section title="Breadcrumb">
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
            <Section title="Table">
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
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell><Badge>Paid</Badge></TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Section>

            {/* Dialog & AlertDialog */}
            <Section title="Dialog & AlertDialog">
              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
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
                    <Button variant="destructive">Delete Account</Button>
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
            <Section title="Dropdown Menu">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
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
            <Section title="Tooltip & HoverCard">
              <div className="flex gap-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me (Tooltip)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">Hover me (HoverCard)</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback>WS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@webstacks</h4>
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
            <Section title="Popover">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <h4 className="font-medium">Dimensions</h4>
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
            <Section title="Sheet">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
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
            <Section title="Toggle">
              <div className="flex gap-3">
                <Toggle>Bold</Toggle>
                <Toggle>Italic</Toggle>
                <Toggle>Underline</Toggle>
              </div>
            </Section>

            {/* Pagination */}
            <Section title="Pagination">
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
            <Section title="Separator">
              <div className="max-w-md">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Radix Primitives</h4>
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
            <Section title="Skeleton">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </Section>

            {/* Scroll Area */}
            <Section title="Scroll Area">
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

            {/* Color Palette Preview */}
            <Section title="Color Palette">
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
                    <h3 className="text-sm font-medium mb-2">{name}</h3>
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
            <Section title="Semantic Tokens">
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
                      <div className="text-xs font-medium">{label}</div>
                      <div className="text-xs text-muted-foreground">{cssVar}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
