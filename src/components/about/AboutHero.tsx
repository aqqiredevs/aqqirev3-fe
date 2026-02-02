import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const AboutHero = () => {
  const heroItems = [
    {
      url: "/",
      image: "/background/skyline.jpg",
      name: "Latest Listings",
    },
    {
      url: "/",
      image: "/background/skyline.jpg",
      name: "Vendor Spotlights",
    },
    {
      url: "/",
      image: "/background/skyline.jpg",
      name: "Sponsored Clasified Ads",
    },
    {
      url: "/",
      image: "/background/skyline.jpg",
      name: "Market Trends or Featured Cities",
    },
  ];
  return (
    <section className="p-4 py-12">
      <div className="container flex xl:justify-center flex-col  gap-4 text-center items-center mx-auto xl:min-h-screen">
        <h1 className="lg:max-w-3/4 text-4xl md:text-5xl font-semibold xl:max-w-2/4">
          Expand Your Reach in Commercial Real Estate with{" "}
          <span className="text-primary">AQQIRE</span>
        </h1>
        <p className="lg:max-w-3/4  text-gray-400 xl:max-w-2/4">
          AQQIRE is a platform built to solve the content distribution problem
          in commercial real estate. We help brokers, sellers, and vendors reach
          a wider, more relevant audience—without relying on outdated private
          networks.
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-2 w-full gap-4 xl:max-w-3/4">
          {heroItems.map((item) => (
            <div
              key={item.name}
              className="relative col-span-1 md:min-h-86 xl:min-h-96 rounded-2xl border p-4 md:p-8 md:pl-6 text-center md:text-left overflow-hidden"
            >
              <Link
                href={item.url}
                className="md:bg-white/60 text-primary md:text-white font-semibold md:px-6 md:p-3 rounded-full z-10 text-xs xl:text-lg items-center gap-2 relative"
              >
                {item.name}
                <FaArrowRight className="hidden md:inline-block ml-2" />
              </Link>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="hidden md:block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
