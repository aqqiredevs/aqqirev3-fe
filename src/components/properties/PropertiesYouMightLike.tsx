"use client";

import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";
import LineTabsNew from "../lineTabs/LineTabsControls";
import LineTabsContent from "../lineTabs/LineTabsContent";
import { useState } from "react";
import Image from "next/image";

const propertyData = [
  [
    {
      type: "Office",
      price: "From $33.60 SF/YR",
      address: "5 Hutton Centre Dr",
      location: "Santa Ana, CA 92707",
      size: "Up to 68,300 SF",
      image: "https://placehold.co/600x400/png",
    },
    {
      type: "Coworking",
      price: "From $70.17 SF/YR",
      address: "1512 Curtis St",
      location: "Denver, CO 80202",
      size: "Up to 2,100 SF",
      image: "https://placehold.co/600x400/png",
    },
    {
      type: "Retail",
      price: "From $13 SF/YR",
      address: "450 Amwell Rd",
      location: "Hillsborough, NJ 08844",
      size: "Up to 4,100 SF",
      image: "https://placehold.co/600x400/png",
    },
  ],
  [
    {
      type: "Retail",
      price: "From $13 SF/YR",
      address: "450 Amwell Rd",
      location: "Hillsborough, NJ 08844",
      size: "Up to 4,100 SF",
      image: "https://placehold.co/600x400/png",
    },
    {
      type: "Industrial",
      price: "From $18.50 SF/YR",
      address: "2100 Factory Way",
      location: "Austin, TX 78701",
      size: "Up to 15,000 SF",
      image: "https://placehold.co/600x400/png",
    },
    {
      type: "Office",
      price: "From $45.00 SF/YR",
      address: "101 Market St",
      location: "San Francisco, CA 94105",
      size: "Up to 12,000 SF",
      image: "https://placehold.co/600x400/png",
    },
  ],
  [
    {
      type: "Retail",
      price: "From $25.00 SF/YR",
      address: "888 Broadway",
      location: "New York, NY 10003",
      size: "Up to 2,500 SF",
      image: "https://placehold.co/600x400/png",
    },
    {
      type: "Coworking",
      price: "From $55.00 SF/YR",
      address: "500 Yale Ave N",
      location: "Seattle, WA 98109",
      size: "Up to 5,000 SF",
      image: "https://placehold.co/600x400/png",
    },
    {
      type: "Medical",
      price: "From $40.00 SF/YR",
      address: "1200 Health Plaza",
      location: "Miami, FL 33101",
      size: "Up to 8,200 SF",
      image: "https://placehold.co/600x400/png",
    },
  ],
];

const PropertiesYouMightLike = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-4">
      <h2 className="text-primary text-lg font-semibold">
        Properties You Might Like
      </h2>
      {/* <div className="flex justify-end gap-4">
        <Input
          placeholder="Search..."
          className="max-w-1/4 border-0 outline-none hover:outline-0 shadow-none focus-visible:ring-0 text-primary"
        />
        <CiSearch className="size-8" />
      </div> */}

      <LineTabsNew
        tabs={propertyData.length}
        activeTab={active}
        setActiveTab={setActive}
        autoplayDuration={3000}
      />

      <div className="mt-4 ">
        {propertyData.map((item, index) => (
          <LineTabsContent
            active={active === index}
            key={index}
            className="grid gap-4 grid-cols-3"
          >
            {item.map((item, idx) => (
              <div
                className=" p-4 rounded-lg mb-2 col-span-1 space-y-2"
                key={idx}
              >
                <Image
                  src={item.image}
                  alt={item.type}
                  width={400}
                  height={300}
                />
                <h3 className="font-bold text-primary text-sm">{item.price}</h3>
                <div className="text-sm text-gray-400">
                  <p>{item.address}</p>
                  <p>{item.location}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </LineTabsContent>
        ))}
      </div>
    </div>
  );
};

export default PropertiesYouMightLike;
