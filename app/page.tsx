import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Download, Github, AlertTriangle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="KBreak18 Logo" className="h-8 w-8" />
              <span className="inline-block font-bold">KBreak18</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#compatibility"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Compatibility
              </Link>
              <Link
                href="#download"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Download
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/kilianbalaguer/KBreak18">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild>
                <Link href="#download">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    iOS 18.0 - 18.5
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    KBreak18 Jailbreak
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A rootless semi-untethered jailbreak for iOS 18 devices. Unlock the full potential of your iPhone.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#download">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://github.com/kilianbalaguer/KBreak18">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/app-screenshot.png"
                  alt="KBreak18 App Screenshot"
                  className="rounded-lg shadow-xl max-w-full h-auto"
                  style={{ maxHeight: "600px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KBreak18 offers a comprehensive jailbreak solution for iOS 18 devices
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Rootless Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Modern rootless jailbreak that preserves system integrity while providing full customization
                    capabilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>ElleKit Injection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uses ElleKit for modern, PAC-safe tweak injection, ensuring compatibility with the latest security
                    features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Semi-Untethered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reapply jailbreak after reboot without computer access, maintaining convenience and flexibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Wide Device Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Supports iOS 18 compatible devices, including iPhone XS through iPhone 15 series.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>iOS 18 Compatible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specifically designed for iOS 18.0 through 18.5, with varying support based on device architecture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Active Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ongoing updates and improvements to ensure stability and expand device/version support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="compatibility" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Device Compatibility</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check if your device is supported by KBreak18
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-8">
              <Alert className="mb-6">
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>iOS 18 Compatible Devices Only</AlertTitle>
                <AlertDescription>
                  KBreak18 is designed exclusively for devices that can run iOS 18. Older devices are not supported.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="iphone">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="iphone">iPhone</TabsTrigger>
                  <TabsTrigger value="ipad">iPad</TabsTrigger>
                  <TabsTrigger value="ipod">iPod Touch</TabsTrigger>
                </TabsList>
                <TabsContent value="iphone" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>iPhone Compatibility</CardTitle>
                      <CardDescription>iOS 18.0 - 18.5</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Alert className="mb-4">
                        <InfoIcon className="h-4 w-4" />
                        <AlertTitle>Testing Status</AlertTitle>
                        <AlertDescription>
                          Currently testing: iPhone XS, XS Max, 12 Pro Max, 13, and 13 Pro Max. iPhone 14 will be tested
                          soon.
                        </AlertDescription>
                      </Alert>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone 15 Series</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 15
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 15 Plus
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 15 Pro
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 15 Pro Max
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone 14 Series</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 14
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 14 Plus
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 14 Pro
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 14 Pro Max
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone 13 Series</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-500" />
                              iPhone 13 (Currently testing)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 13 mini
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 13 Pro
                            </li>
                            <li className="flex items-center gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-500" />
                              iPhone 13 Pro Max (Currently testing)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone 12 Series</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 12
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 12 mini
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 12 Pro
                            </li>
                            <li className="flex items-center gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-500" />
                              iPhone 12 Pro Max (Currently testing)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone 11 Series</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 11
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 11 Pro
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone 11 Pro Max
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone XS/XR Series</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-500" />
                              iPhone XS (Currently testing)
                            </li>
                            <li className="flex items-center gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-500" />
                              iPhone XS Max (Currently testing)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPhone SE</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone SE (2nd generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPhone SE (3rd generation)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ipad" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>iPad Compatibility</CardTitle>
                      <CardDescription>iOS 18.0 - 18.5</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Alert className="mb-4">
                        <InfoIcon className="h-4 w-4" />
                        <AlertTitle>Testing Status</AlertTitle>
                        <AlertDescription>
                          iPad testing will begin after iPhone testing is complete. No iPad models have been tested yet.
                        </AlertDescription>
                      </Alert>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium mb-2">iPad Pro</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad Pro 11-inch (1st-4th generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad Pro 12.9-inch (3rd-6th generation)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPad Air</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad Air (3rd generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad Air (4th generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad Air (5th generation)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPad</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad (7th generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad (8th generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad (9th generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad (10th generation)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">iPad mini</h3>
                          <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad mini (5th generation)
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              iPad mini (6th generation)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ipod" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>iPod Touch Compatibility</CardTitle>
                      <CardDescription>iOS 18.0 - 18.5</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Not Supported</AlertTitle>
                        <AlertDescription>
                          No iPod Touch models support iOS 18. The latest iPod Touch (7th generation) only supports up
                          to iOS 15.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get KBreak18 for your iOS device
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-2xl mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>KBreak18 Downloads</CardTitle>
                  <CardDescription>Official release builds</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Alert>
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>Coming Soon</AlertTitle>
                    <AlertDescription>
                      KBreak18 is currently in development. Release builds will be available here once ready.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      The jailbreak is not finished yet. Do not try to jailbreak or use this tool until the official
                      release.
                    </AlertDescription>
                  </Alert>
                  <div className="flex flex-col gap-2 w-full mt-4">
                    <Button disabled className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download KBreak18 v1.0 (Coming Soon)
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/kilianbalaguer/KBreak18">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="app-preview" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">App Preview</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how KBreak18 looks on your device
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl mt-12 grid gap-8 md:grid-cols-2 items-center">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Simple & Intuitive Interface</h3>
                <p className="text-muted-foreground">
                  KBreak18 features a clean, modern interface that makes jailbreaking your device straightforward and
                  hassle-free.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Device information display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>One-tap jailbreak process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Quick access to re-spring and customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Detailed log for troubleshooting</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Screenshot shows KBreak18 running on iPhone 13 with iOS 18.4
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img
                      src="/app-screenshot.png"
                      className="w-full h-full object-cover"
                      alt="KBreak18 App Interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about KBreak18
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-8 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What is KBreak18?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    KBreak18 is a rootless semi-untethered jailbreak for iOS 18.0 - 18.5 devices. It allows you to
                    customize your iOS experience beyond Apple's limitations while maintaining system security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What does "rootless" mean?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A rootless jailbreak doesn't modify the system partition, making it safer and less likely to cause
                    system instability. It still provides most jailbreak functionality while preserving system
                    integrity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What is "semi-untethered"?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Semi-untethered means that after rebooting your device, you'll need to run the KBreak18 app again to
                    re-enable the jailbreak. You won't need a computer to do this, unlike tethered jailbreaks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is KBreak18 safe to use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    KBreak18 is designed with safety in mind, using a rootless approach that minimizes system
                    modification. However, all jailbreaks carry some risk. Always back up your device before
                    jailbreaking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What should I do for older iOS versions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For iOS 15-16, we recommend using Dopamine by opa334. KBreak18 is specifically designed for iOS 18
                    and won't work on earlier versions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why isn't my device supported?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    KBreak18 only supports devices that can run iOS 18. Older devices like iPhone X, iPhone 8, and
                    earlier models cannot run iOS 18 and therefore are not compatible with KBreak18.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 KBreak18. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kilianbalaguer/KBreak18"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
