/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DIGRRheaVDr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-10 bg-white shadow shrink-0 py-2">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="#">
            <LeafIcon className="h-6 w-6" />
            <span className="font-semibold">Japan Trip Planner</span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Destinations
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Things to Do
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Transportation
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Accommodation
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Travel Tips
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="flex items-center space-x-2">
              <Input
                className="max-w-[300px] w-[200px]"
                placeholder="Search..."
                type="search"
              />
              <Button type="submit">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Your Journey Starts Here
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the beauty of Japan with our comprehensive travel
                guide. From ancient temples to modern cities, we've got you
                covered.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 lg:py-24 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Popular Destinations
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Explore the most iconic spots in Japan.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <Card>
                <Link className="absolute inset-0 z-10" href="#" />
                <img
                  alt="Image"
                  className="aspect-16/9 overflow-hidden object-cover rounded-t-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="font-bold">Tokyo</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The bustling capital of Japan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10" href="#" />
                <img
                  alt="Image"
                  className="aspect-16/9 overflow-hidden object-cover rounded-t-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="font-bold">Kyoto</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ancient temples and traditional culture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10" href="#" />
                <img
                  alt="Image"
                  className="aspect-16/9 overflow-hidden object-cover rounded-t-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="font-bold">Osaka</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Street food and vibrant nightlife.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10" href="#" />
                <img
                  alt="Image"
                  className="aspect-16/9 overflow-hidden object-cover rounded-t-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <h3 className="font-bold">Hiroshima</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Peace Memorial Park and historic sites.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 lg:py-24 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Travel Tips & Guides
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Expert advice for your Japan journey.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <Link className="absolute inset-0 z-10" href="#" />
                <img
                  alt="Image"
                  className="aspect-16/9 overflow-hidden object-cover rounded-t-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      Travel Tips
                    </div>
                    <h3 className="font-bold">
                      Top 10 Must-Visit Temples in Japan
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Explore the ancient beauty of Japan's temples with our
                      expert guide.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <Link className="absolute inset-0 z-10" href="#" />
                <img
                  alt="Image"
                  className="aspect-16/9 overflow-hidden object-cover rounded-t-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      Travel Tips
                    </div>
                    <h3 className="font-bold">
                      How to Navigate Tokyo's Public Transportation
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Master the Tokyo subway system and get around the city
                      like a local.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
        <div className="ml-auto space-x-2">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            © 2023 Japan Trip Planner
          </Link>
        </div>
      </footer>
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
