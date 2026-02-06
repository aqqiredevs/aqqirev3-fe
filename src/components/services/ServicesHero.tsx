import React from "react";
import { Button } from "../ui/button";

const ServicesHero = () => {
  return (
    <section className=" p-4 flex items-center justify-center">
      <div
        className="container min-h-[70vh] flex flex-col gap-6 justify-center xl:pl-16 xl:p-12 p-6 rounded-2xl"
        style={{
          background: `url("/background/serviceshero.png")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl xl:text-5xl font-bold xl:max-w-2/4 text-white">
          We Help You Promote CRE Listings That Get Seen
        </h1>
        <p className="text-gray-400 xl:max-w-2/4">
          From feature placements to custom branded content, AQQIRE connects
          your listings with 16,000+ active CRE professionals.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 uppercase">
          <Button
            className="bg-white text-primary hover:text-white rounded-full p-6 px-8 cursor-pointer"
            size={"lg"}
          >
            Explore Services
          </Button>
          <Button size={"lg"} className="rounded-full p-6 px-8 cursor-pointer">
            See Past Promotions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
