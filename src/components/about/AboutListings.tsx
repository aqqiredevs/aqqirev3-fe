import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const AboutListings = () => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto flex justify-between items-center flex-col xl:flex-row gap-12 p-12 min-h-[60dvh]">
        {/* header and description */}
        <div className="space-y-6 flex-1">
          <h2 className="text-4xl font-bold">Let's Talk About Your Listings</h2>
          <p className="text-gray-400">
            Tired of low visibility and stale email blasts? Meet with the AQQIRE
            team to discuss how we can get your listings, brand, or services in
            front of the right buyers—faster and smarter.
          </p>
          <Link href={"/"}>
            <Button
              variant={"default"}
              size={"lg"}
              className="font-bold rounded-full cursor-pointer"
            >
              Start Now
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 ">
          <Image
            src="https://placehold.co/800x600/png"
            width={800}
            height={600}
            alt="Image"
            className="rounded-tl-4xl rounded-br-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutListings;
