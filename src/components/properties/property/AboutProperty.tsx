import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";

const AboutProperty = ({ description }: { description: string }) => {
  return (
    <section className="grid grid-cols-6 my-4">
      {/* Information */}
      <div className="space-y-4 xl:col-span-4 col-span-6">
        <h2 className="font-bold text-2xl xl:text-4xl">About The Property:</h2>
        <p className="xl:text-lg text-gray-500">{description}</p>

        <h3 className="font-bold text-3xl mt-8">Facility:</h3>
        <div className="grid  grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-12">
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />1 Bedroom(s)
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />1 Bathroom(s)
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />
            1200 sqft
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />
            Parking
          </div>
        </div>
        <h3 className="font-bold text-3xl mt-8  mb-4">Features:</h3>
        <div className="grid grid-cols-2 xl:grid-cols-4 xl:gap-12 gap-6">
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />1 Bedroom(s)
          </div>

          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />1 Bathroom(s)
          </div>

          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />
            1200 sqft
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />
            Parking
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />1 Bedroom(s)
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />1 Bathroom(s)
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />
            1200 sqft
          </div>
          <div className="flex gap-2 text-lg text-primary">
            <MdOutlineBedroomParent size={30} />
            Parking
          </div>
        </div>
      </div>
      {/* Broker */}

      <aside className="col-span-6 xl:col-span-2 relative pt-6 xl:pt-0">
        {/* Broker */}
        <div className="xl:max-w-3/4 mx-auto space-y-4">
          <div className="space-y-4 shadow-md p-6 flex flex-col justify-center items-center rounded-lg ">
            <Image
              src="https://placehold.co/160x160/png"
              width={160}
              height={160}
              alt="Broker"
              className="rounded-full"
            />
            <h3>Jane Evelyn</h3>
            <p>Commercial Listing Agent</p>
            <div className="flex gap-4 justify-between">
              <a href="https://www.google.com/" target="_blank">
                <div className="shadow-md rounded-md bg-white  p-4">
                  <FaSquareTwitter size={24} />
                </div>
              </a>

              <a href="https://www.google.com/" target="_blank">
                <div className="shadow-md rounded-md bg-white p-4">
                  <FaSquareFacebook size={24} />
                </div>
              </a>

              <a href="https://www.google.com/" target="_blank">
                <div className="shadow-md rounded-md bg-white p-4">
                  <FaLinkedin size={24} />
                </div>
              </a>

              <a href="https://www.google.com/" target="_blank">
                <div className="shadow-md rounded-md bg-white p-4">
                  <FaSquareInstagram size={24} />
                </div>
              </a>
            </div>
          </div>
          {/* Agent */}
          <div className="space-y-4 shadow-md p-6 rounded-lg">
            <h3 className="font-bold">Agent Details</h3>
            <div className="flex gap-4 items-center">
              <Image
                src="https://placehold.co/80x80/png"
                width={80}
                height={80}
                alt="Broker"
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Jane Evelyn</h3>
                <p className="text-gray-400">Commercial Listing Agent</p>
              </div>
            </div>
            <Button className="cursor-pointer w-full rounded-full">
              Contact Agency
            </Button>
          </div>

          <div className="space-y-4 shadow-md p-6 rounded-lg">
            <h3 className="font-bold">Owner History</h3>

            <div className="flex gap-4 items-center">
              <Image
                src="https://placehold.co/80x80/png"
                width={40}
                height={40}
                alt="Broker"
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Jane Evelyn</h3>
                <p className="text-gray-400">Commercial Listing Agent</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Image
                src="https://placehold.co/80x80/png"
                width={40}
                height={40}
                alt="Broker"
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Jane Evelyn</h3>
                <p className="text-gray-400">Commercial Listing Agent</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Image
                src="https://placehold.co/80x80/png"
                width={40}
                height={40}
                alt="Broker"
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">Jane Evelyn</h3>
                <p className="text-gray-400">Commercial Listing Agent</p>
              </div>
            </div>
          </div>
        </div>
        {/* History */}
      </aside>
    </section>
  );
};

export default AboutProperty;
