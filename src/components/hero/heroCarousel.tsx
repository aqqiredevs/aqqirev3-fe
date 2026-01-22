"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRef } from "react";

const HeroCarousel = () => {
  const logos = ["colliers.png", "marcus.png", "hrec.png", "sei.png"];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="p-4 py-16 bg-primary">
      <div className="container mx-auto ">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {logos.map((logo) => (
              <CarouselItem
                className="basis-1/1 md:basis-1/2 lg:basis-1/3 "
                key={logo}
              >
                <Image
                  width={350}
                  height={250}
                  alt="logo"
                  className="mx-auto"
                  src={`/logos/${logo}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="cursor-pointer absolute top-[50%] left-5" />
          <CarouselNext className="cursor-pointer absolute top-[50%] right-5" /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroCarousel;
