/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EvLqzHUcUCE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
              href="/details"
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
      <main>
        <div className="px-4 py-6 space-y-4 md:px-6 md:space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/line-tight">
              One-Day Itinerary in Tokyo
            </h1>
          </div>
          <div className="mx-auto prose prose-gray max-w-none not-prose lg:max-w-[900px] dark:prose-invert">
            <p>
              Tokyo is a city of contrasts, where ancient traditions blend with
              cutting-edge technology, and serene gardens sit alongside neon-lit
              skyscrapers. In this one-day itinerary, we'll take you on a
              journey through some of Tokyo's most iconic and must-visit places,
              giving you a taste of the city's vibrant culture, rich history,
              and modern attractions.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Shibuya Crossing
              </h2>
              <p>
                No visit to Tokyo is complete without experiencing the
                world-famous Shibuya Crossing, the busiest pedestrian
                intersection in the world. The sheer energy and organized chaos
                of this crossing are a sight to behold, especially during peak
                hours when thousands of people cross the street in all
                directions.
              </p>
            </div>
            <img
              alt="Shibuya Crossing"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={562}
              src="https://travel-app-photos.s3.ap-northeast-1.amazonaws.com/tokyo/asakusa_images.jpg"
              width={1000}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">Asakusa</h2>
              <p>
                Asakusa is one of Tokyo's most historic and traditional
                neighborhoods, home to the iconic Senso-ji Temple, a
                centuries-old Buddhist temple that is the oldest in the city.
                The approach to the temple, known as Nakamise-dori, is lined
                with traditional shops selling snacks, souvenirs, and crafts.
              </p>
            </div>
            <img
              alt="Asakusa"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={562}
              src="https://travel-app-photos.s3.ap-northeast-1.amazonaws.com/tokyo/tokyo-skytree_08.jpeg"
              width={1000}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Traditional Tea Ceremony
              </h2>
              <p>
                Experience the serene beauty and ritual of a traditional
                Japanese tea ceremony. Led by a tea master, the ceremony
                involves the preparation and serving of matcha, a finely
                powdered green tea, with meticulous attention to detail and
                graceful movements.
              </p>
            </div>
            <img
              alt="Tea Ceremony"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={562}
              src="https://travel-app-photos.s3.ap-northeast-1.amazonaws.com/tokyo/asakusa_images2.jpg"
              width={1000}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Tsukiji Fish Market
              </h2>
              <p>
                Conclude your day with a visit to the lively and world-famous
                Tsukiji Fish Market, the largest and most renowned fish market
                in Tokyo. Here, you'll find an incredible variety of fresh
                seafood, from succulent sashimi to giant tuna, as well as
                bustling stalls selling street food and local delicacies.
              </p>
            </div>
            <img
              alt="Tsukiji Fish Market"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={562}
              src="https://travel-app-photos.s3.ap-northeast-1.amazonaws.com/tokyo/night_images.jpg"
              width={1000}
            />
          </div>
          <div className="mx-auto prose prose-gray max-w-[600px] lg:max-w-[800px] dark:prose-invert">
            <h2>Practical Information</h2>
            <ul className="list-disc pl-4 grid gap-2">
              <li>
                <strong>Transportation:</strong>
                The best way to get around Tokyo is via the city's efficient and
                extensive public transportation system, which includes subways,
                trains, and buses. We recommend using a prepaid IC card such as
                Suica or Pasmo for seamless travel on all modes of public
                transport.
              </li>
              <li>
                <strong>Time Slots:</strong>
                Here are the recommended time slots for each activity:
                <ul className="list-disc pl-4">
                  <li>
                    <strong>Shibuya Crossing:</strong>
                    Anytime, but for the full effect, visit during the morning
                    or evening rush hours.
                  </li>
                  <li>
                    <strong>Asakusa:</strong>
                    The Senso-ji Temple and Nakamise-dori are open 24 hours, but
                    the shops along Nakamise-dori have varying opening hours.
                  </li>
                  <li>
                    <strong>Tea Ceremony:</strong>
                    Traditional tea ceremonies are often held in the afternoon,
                    but reservations are required.
                  </li>
                  <li>
                    <strong>Tsukiji Fish Market:</strong>
                    The inner market is open to visitors from 10:00 am to 1:00
                    pm, Tuesday through Saturday. The outer market has more
                    flexible hours, with some shops and restaurants opening
                    earlier in the morning.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dining:</strong>
                After a day of exploration, you're sure to work up an appetite.
                Luckily, each of the areas you'll visit on this itinerary offers
                a variety of dining options to satisfy your hunger. In Shibuya,
                you'll find everything from trendy cafes to traditional
                izakayas. Asakusa is known for its street food, with vendors
                selling treats like senbei (rice crackers) and ningyo-yaki
                (sweet filled cakes) along Nakamise-dori. And the Tsukiji Fish
                Market is a paradise for seafood lovers, with numerous sushi
                restaurants and stalls serving up the freshest catch of the day.
              </li>
            </ul>
          </div>
          <div className="mx-auto flex flex-col gap-4 lg:gap-0">
            <Link
              className="inline-flex items-center justify-center w-full max-w-xs rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Explore More Itineraries
            </Link>
          </div>
        </div>
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

function LeafIcon({ width = "24", height = "24", ...rest }) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function SearchIcon({ width = "24", height = "24", ...rest }) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
