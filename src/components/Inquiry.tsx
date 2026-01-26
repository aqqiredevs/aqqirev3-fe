"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { makeChangeHandler } from "@/utils/handleInput";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaHouse } from "react-icons/fa6";

const Inquiry = () => {
  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    inquiry: string;
    note: string;
  }>({
    firstname: "",
    lastname: "",
    inquiry: "",
    note: "",
  });

  const handleChange = makeChangeHandler<{
    firstname: string;
    lastname: string;
    inquiry: string;
    note: string;
  }>(setFormData);

  return (
    <section className="p-6 md:p-24 flex flex-col md:flex-row bg-primary justify-center items-center">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl  text-white font-bold">
          Easiest Way to Find Your Next Commercial Space
        </h2>
        <div className="block space-y-2 md:flex  gap-4 w-full">
          <div className="flex-1 space-y-2">
            <Label
              htmlFor="firstname"
              className="text-white text-xl font-light"
            >
              First Name
            </Label>
            <Input
              name="firstname"
              value={formData?.firstname}
              onChange={handleChange}
              className="rounded-full p-6"
              placeholder="Last Name"
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="lastname" className="text-white text-xl font-light">
              Last name
            </Label>
            <Input
              name="lastname"
              value={formData?.lastname}
              onChange={handleChange}
              className="rounded-full p-6"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="inquiry"
            className="text-white text-lg space-y-2 font-light"
          >
            I'm looking for...
          </Label>
          <Input
            name="inquiry"
            value={formData?.inquiry}
            onChange={handleChange}
            className="rounded-full p-6"
            placeholder="Retail, office, industrial, land, hospitality…"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="note" className="text-white text-lg font-light">
            Message
          </Label>
          <Textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Share requirements: size, budget, location, timeline…"
            className="bg-white md:rounded-full p-6"
          />
        </div>
        <Button className="cursor-pointer w-full rounded-full py-6 px-8 bg-primary border">
          Send Inquiry
        </Button>
      </div>
      <div className="flex-1 relative hidden md:flex justify-center items-center">
        <Image
          src="https://placehold.co/400x610/png"
          alt="banner"
          width={450}
          height={600}
          className="min-h-[600]"
        />

        <div className="px-6 p-10 bg-white/90 md:absolute rounded-md border border-white translate-x-20">
          <div className="flex gap-4 items-center">
            <div>
              <div className="flex gap-2 text-xl items-center text-primary font-semibold">
                <FaHouse size={20} /> <span>Harborview Retail Plaza</span>
              </div>
              <p className="text-gray-400 text-md max-w-3/4">
                Auction in Progress | Ends Dec 5, 2025 6PM EST
              </p>
            </div>
            <Button className="rounded-full cursor-pointer">See Details</Button>
          </div>

          <div className="flex gap-6 justify-between items-center text-primary mt-4">
            <h3 className="text-5xl font-bold">$545,000</h3>
            <div className="flex">
              <div className="border-r pr-4">
                <p className="font-bold">1000</p>
                <p className="text-thin">Sq. ft</p>
              </div>
            </div>

            <div className="flex">
              <div className="border-r pr-4">
                <p className="font-bold">2</p>
                <p className="text-thin">Units</p>
              </div>
            </div>

            <div className="flex">
              <div className="">
                <p className="font-bold">3</p>
                <p className="text-thin">Bays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
