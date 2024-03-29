/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mJgiGX1sR0Z
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function detailTokyo() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white shadow shrink-0 py-2">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="#">
            <div className="h-6 w-6" />
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
                <div className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>
      <div className="bg-gray-50/90 border-t border-b border-gray-200 border-gray-200 dark:border-gray-800">
        <div className="container px-4 py-6 md:py-10 grid gap-4 items-center text-sm md:gap-6 lg:grid-cols-[1fr_auto] dark:bg-gray-950 dark:border-gray-800">
          <div className="flex items-center space-x-2">
            <MapIcon className="h-4 w-4 opacity-50" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Explore Tokyo, Japan
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-center md:justify-end md:space-x-4 lg:order-last">
            <Button size="sm" variant="outline">
              Print
            </Button>
            <Button size="sm">Save</Button>
          </div>
        </div>
      </div>
      <article className="container px-4 py-6 space-y-4 md:py-10 md:space-y-8 lg:space-y-10 xl:space-y-12 dark:bg-gray-950">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl xl:text-7xl">
            One Day in Tokyo
          </h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Experience the best of Tokyo in a single day. From historic temples
            to bustling markets, this itinerary covers the must-see destinations
            in the heart of the city.
          </p>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter">
              1. Senso-ji Temple
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Founded in 628 AD, Senso-ji is Tokyo's oldest temple and one of
              its most significant religious sites. The iconic Kaminarimon Gate
              leads to the temple grounds, where visitors can explore the main
              hall, pagoda, and various shrines. The surrounding Nakamise
              shopping street offers traditional snacks, souvenirs, and a lively
              atmosphere.
            </p>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9] lg:order-last">
              <img
                alt="Senso-ji Temple"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9]">
              <img
                alt="Senso-ji Temple"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm underline translate-y-0.5"
              href="#"
            >
              <span>Learn more about Senso-ji Temple</span>
              <ExternalLinkIcon className="h-4 w-4 -translate-y-1" />
            </Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter">
              2. Tsukiji Outer Market
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              After visiting the temple, head to the nearby Tsukiji Outer Market
              to experience the sights, sounds, and flavors of a traditional
              Japanese market. The narrow lanes are lined with stalls selling a
              variety of fresh seafood, produce, and local delicacies. Visitors
              can sample street food such as sushi, sashimi, and grilled
              seafood, as well as browse for kitchenware, tea, and other
              food-related items.
            </p>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9] lg:order-last">
              <img
                alt="Tsukiji Outer Market"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9]">
              <img
                alt="Tsukiji Outer Market"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm underline translate-y-0.5"
              href="#"
            >
              <span>Learn more about Tsukiji Outer Market</span>
              <ExternalLinkIcon className="h-4 w-4 -translate-y-1" />
            </Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter">
              3. Meiji Shrine
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Located in the heart of bustling Shibuya, the Meiji Shrine is a
              serene oasis surrounded by a lush forest. Dedicated to Emperor
              Meiji and Empress Shoken, the shrine is a popular spot for
              traditional Shinto weddings and quiet reflection. The approach to
              the shrine is lined with towering torii gates, creating a dramatic
              entrance. Visitors can participate in rituals such as making
              offerings, writing wishes on wooden plaques, and drawing omikuji
              (fortune-telling slips).
            </p>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9] lg:order-last">
              <img
                alt="Meiji Shrine"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9]">
              <img
                alt="Meiji Shrine"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm underline translate-y-0.5"
              href="#"
            >
              <span>Learn more about Meiji Shrine</span>
              <ExternalLinkIcon className="h-4 w-4 -translate-y-1" />
            </Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter">
              4. Harajuku Takeshita Street
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              After visiting the Meiji Shrine, take a stroll down Takeshita
              Street, the epicenter of Harajuku's vibrant youth culture. The
              narrow pedestrian street is lined with trendy boutiques, quirky
              shops, and colorful cafes, offering a glimpse into the latest
              fashion and pop culture trends. Visitors can browse for unique
              clothing, accessories, and souvenirs, as well as sample
              Instagram-worthy snacks such as crepes, cotton candy, and bubble
              tea.
            </p>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9] lg:order-last">
              <img
                alt="Harajuku Takeshita Street"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="mx-auto w-full aspect-video overflow-hidden rounded-xl sm:aspect-[16/9]">
              <img
                alt="Harajuku Takeshita Street"
                className="object-cover object-center"
                height="337"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/337",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm underline translate-y-0.5"
              href="#"
            >
              <span>Learn more about Harajuku Takeshita Street</span>
              <ExternalLinkIcon className="h-4 w-4 -translate-y-1" />
            </Link>
          </div>
        </div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
          </nav>
          <div className="ml-auto space-x-2">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              © 2023 Japan Trip Planner
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}

function MapIcon({ width = "24", height = "24", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest} // 他のすべての受け入れられるプロパティをここに展開
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function ExternalLinkIcon({ width = "24", height = "24", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest} // 他のすべての受け入れられるプロパティをここに展開
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}
