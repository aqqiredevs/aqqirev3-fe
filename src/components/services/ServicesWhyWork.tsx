import Image from "next/image";

const ServicesWhyWork = () => {
  return (
    <section className="pt-6 p-4">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row justify-center text-center lg:text-left gap-4 items-center">
          {/* left */}
          <div className="flex-1 space-y-4">
            <p className="text-sm text-primary uppercase font-semibold">
              WHY WORK WITH AQQIRE
            </p>
            <h2 className="font-bold text-2xl lg:text-5xl lg:leading-relaxed">
              A Trusted Marketing Platform Built for Commercial Real Estate
              Professionals
            </h2>
          </div>

          {/* Right */}
          <div className="text-gray-400 space-y-4 flex-1 lg:text-xl">
            <p className="lg:max-w-3/4">
              AQQIRE connects your listings, services, and brand with 16,000+
              engaged professionals in CRE. reach.
            </p>
            <p className="lg:max-w-3/4">
              Our platform is optimized for maximum visibility—combining smart
              distribution with proven strategies to help you close deals faster
              and grow your business
            </p>
          </div>
        </div>

        {/* Image section */}

        <div className="relative">
          <div className="hidden lg:block lg:w-[58rem] h-72 relative">
            <Image
              src="/background/skyline.jpg"
              fill
              alt="background"
              className="rounded-t-2xl"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-end items-center gap-4 lg:absolute right-0 top-1/4">
            <div className="text-gray-400 bg-gray-200 lg:py-12 p-8 rounded-2xl lg:max-w-1/4">
              <h3 className="font-bold text-xl">Strategic CRE Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="text-gray-400 bg-gray-200 lg:py-12 p-8 rounded-2xl lg:max-w-1/4">
              <h3 className="font-bold text-xl">Strategic CRE Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>{" "}
            <div className="text-gray-400 bg-gray-200 lg:py-12 p-8 rounded-2xl lg:max-w-1/4">
              <h3 className="font-bold text-xl">Strategic CRE Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyWork;
