"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FaStar } from "react-icons/fa6";

const HeroCarousel = () => {
  const testimonials = [
    {
      name: "Michael Reyes",
      title: "Commercial Investor",
      testimonial:
        "AQQIRE's analytics and comp data gave me the clarity I needed to make fast decisions. Their platform surfaced deals I wasn't seeing anywhere else, and it's now one of my must-use tools when evaluating new markets.",
      image: "https://placehold.co/100x100/png",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      title: "Real Estate Developer",
      testimonial:
        "The deal discovery tools helped us identify off-market opportunities faster than ever. AQQIRE has become a core part of our acquisition workflow.",
      image: "https://placehold.co/100x100/png",
      rating: 4,
    },
    {
      name: "David Chen",
      title: "Multifamily Operator",
      testimonial:
        "What impressed me most was the depth of market insights. The data is accurate, easy to understand, and actionable.",
      image: "https://placehold.co/100x100/png",
      rating: 3,
    },
    {
      name: "Emily Carter",
      title: "Private Equity Analyst",
      testimonial:
        "AQQIRE streamlined our underwriting process and helped our team move with confidence. The UI is intuitive and incredibly fast.",
      image: "https://placehold.co/100x100/png",
      rating: 4,
    },
  ];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="p-4 py-16">
      <div className="container mx-auto space-y-6">
        <h2 className="font-bold text-4xl">What Our Clients Say About Us</h2>
        <p className="text-gray-400 mb-8">
          Real feedback from investors, brokers, and businesses growing their
          portfolio through AQQIRE.
        </p>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                className="basis-1/1 md:basis-1/2 lg:basis-1/3 "
                key={testimonial.name}
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer absolute top-[50%] left-5" />
          <CarouselNext className="cursor-pointer absolute top-[50%] right-5" />
        </Carousel>
      </div>
    </section>
  );
};

function TestimonialCard({
  name,
  testimonial,
  image,
  rating,
  title,
}: {
  name: string;
  testimonial: string;
  image: string;
  rating: number;
  title: string;
}) {
  const maxRating = 5;
  return (
    <Card className="border rounded-xl min-h-96">
      <CardHeader>
        <div className="flex gap-6 items-center">
          <Image
            src={image}
            alt={`${name} profile picture`}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h3 className="text-3xl font-semibold">{name}</h3>
            <p className="text-lg text-gray-500">{title}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="leading-8">{testimonial}</p>
      </CardContent>

      <CardFooter className="flex gap-4 mt-auto">
        {Array.from({ length: maxRating }).map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
            size={35}
          />
        ))}
      </CardFooter>
    </Card>
  );
}
export default HeroCarousel;
