"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

const MeetTheTeamCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  const people = [
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    ,
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    {
      image: "https://placehold.co/800x800/png",

      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
    {
      image: "https://placehold.co/800x800/png",
      name: "Rob Astudillo",
      title: "Founder, COO",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="px-12">
      <Carousel
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {people.map((person, index) => (
            <CarouselItem
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={index}
            >
              <Card className="h-full p-6">
                <CardHeader>
                  <Image
                    src={person!.image}
                    width={400}
                    height={400}
                    alt={person!.name + "'s image"}
                    className="rounded-lg"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <h2 className="font-bold text-xl">{person?.name}</h2>
                  <p className="text-gray-400">{person?.title}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:flex cursor-pointer -left-12" />
        <CarouselNext className="lg:flex cursor-pointer -right-12" />
      </Carousel>
    </div>
  );
};

export default MeetTheTeamCarousel;
