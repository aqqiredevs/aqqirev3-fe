import PropertiesResult from "@/components/search/PropertiesResult";
import { Suspense } from "react";
import PropertiesResultSkeleton from "@/components/search/PropertyResultSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchMap from "@/components/search/SearchMap";
import Link from "next/link";
import Faq from "@/components/Faq";
import Inquiry from "@/components/Inquiry";
import Testimonials from "@/components/Testimonials";
import PropertiesHeroMap from "@/components/properties/PropertiesHeroMap";

type searchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Page = async ({ searchParams }: searchParams) => {
  const query = (await searchParams).query as string;
  return (
    <section className="p-4 pt-12">
      <div className="container mx-auto">
        <PropertiesHeroMap />

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mt-12">Trending on AQQIRE</h2>
          <p>See what's catching investor attention this week.</p>
          <div className="flex gap-2">
            <Button>Filter</Button>
            <Button>For Lease</Button>
            <Button>For Sale</Button>
            <Button>Auctions</Button>
            <Button>Featured Deals</Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<PropertiesResultSkeleton />}>
            <PropertiesResult query={query} />
          </Suspense>
        </div>

        <section className="bg-gray-200 p-6  pt-16 px-16">
          <h2 className="text-5xl font-bold ">Browse by Property Type</h2>
          <p className="mt-6 ">
            Quickly explore listings across major commercial asset classes.
          </p>
          <div className="flex gap-2 mt-6 ">
            <Button
              className="bg-primary cursor-pointer rounded-full"
              size={"lg"}
            >
              Filter
            </Button>
            <Button
              className="bg-primary cursor-pointer rounded-full"
              size={"lg"}
            >
              For Lease
            </Button>
            <Button
              className="bg-primary cursor-pointer rounded-full"
              size={"lg"}
            >
              For Sale
            </Button>
            <Button
              className="bg-primary cursor-pointer rounded-full"
              size={"lg"}
            >
              Auctions
            </Button>
            <Button
              className="bg-primary cursor-pointer rounded-full"
              size={"lg"}
            >
              Featured Deals
            </Button>
          </div>

          <div className="grid grid-cols-4 mt-6 gap-8">
            <div className="col-span-1 rounded-2xl min-h-[300px] space-y-6 border bg-white text-black flex flex-col justify-around p-4">
              <p className="text-4xl font-semibold">Retail</p>
              <p className="text-2xl">
                High-visibility spaces ideal for QSR, service retail, and
                national brands.
              </p>
              <Link href={"/"} className="text-primary font-semibold">
                120+ Properties
              </Link>
            </div>

            <div className="col-span-1 rounded-2xl min-h-[300px] space-y-6 border bg-white text-black flex flex-col justify-around p-4">
              <p className="text-4xl font-semibold">Office</p>
              <p className="text-2xl">
                Modernized office suites and investment-grade office assets.
              </p>
              <Link href={"/"} className="text-primary font-semibold">
                200+ Properties
              </Link>
            </div>

            <div className="col-span-1 rounded-2xl min-h-[300px] space-y-6 border bg-white text-black flex flex-col justify-around p-4">
              <p className="text-4xl font-semibold">Industrial</p>
              <p className="text-2xl">
                High-clearance facilities, flex buildings, and last-mile
                warehouses.
              </p>
              <Link href={"/"} className="text-primary font-semibold">
                85+ Properties
              </Link>
            </div>

            <div className="col-span-1 rounded-2xl min-h-[300px] space-y-6 border bg-white text-black flex flex-col justify-around p-4">
              <p className="text-4xl font-semibold">Hospitality</p>
              <p className="text-2xl">
                Hotel, motel, and short-term rental investment properties.
              </p>
              <Link href={"/"} className="text-primary font-semibold">
                95+ Properties
              </Link>
            </div>
          </div>

          <Button
            className="bg-primary cursor-pointer rounded-full mt-12"
            size={"lg"}
          >
            Browse All Categories
          </Button>
        </section>

        <Faq />
        <Inquiry />
        <Testimonials />
      </div>
    </section>
  );
};

export default Page;
