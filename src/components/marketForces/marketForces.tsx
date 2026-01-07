import React from "react";
import LineTabs from "../lineTabs/lineTabs";
import MarketForcesTestData from "../lineTabs/lineTabsTestData/marketForcesTestData";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { CiCalendar, CiUser } from "react-icons/ci";
import { Button } from "../ui/button";

const testData = MarketForcesTestData;

const MarketForces = () => {
  const mappedTabs = testData.map((item) => ({
    id: item.id,
    label: item.label,
    title: item.title,
    uploadedBy: item.uploadedBy,
    date: item.date,
    description: item.description,
    image: item.image,
    content: (
      <div className="space-y-3 space-x-4 flex items-start">
        <div className="aspect-square min-w-[300px]">
          <Image src={item.image} alt={item.title} width={300} height={300} />
        </div>

        <div className="flex flex-col gap-2">
          <p>Market Forces</p>
          <p className="text-primary text-sm font-bold">{item.title}</p>
          <div className="flex gap-2 text-xs text-gray-400">
            <p className="capitalize flex gap-1 items-center">
              <CiUser />
              {item.uploadedBy}
            </p>
            <p className="flex gap-1 items-center">
              <CiCalendar />
              {formatDate(item.date)}
            </p>
          </div>
          <p className="text-gray-400 text-sm">{item.description}</p>
          <Button className="cursor-pointer">Read More</Button>
        </div>
      </div>
    ),
  }));

  return (
    <div className="bg-white">
      <LineTabs items={mappedTabs} />
    </div>
  );
};

export default MarketForces;
