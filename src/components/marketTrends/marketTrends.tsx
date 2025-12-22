"use client";
import { Property } from "@/types/property";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { searchProperties } from "@/actions/searchProperties";
import { useEffect, useState } from "react";
import TrendItems from "./trendItems";
import TrendSkeleton from "./trendSkeleton";

const TestDataMarketTrends = [
  {
    id: 1,
    title: "Hospitality Owners Push Into Extended-Stay as Urban ADR Softens",
    description:
      "Operators shift from luxury nightly models to predictable monthly revenue, citing labor volatility and declining business travel. ",
    uploader: "Admin",
    dateUploaded: "2 Dec 2025",
    image: "https://placehold.co/620x390/png",
    timeElapsed: "20 mins",
  },
];

const MarketTrends = () => {
  return (
    <div>
      {TestDataMarketTrends.map((item) => (
        <div key={item.id} className="bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="h-[340px] w-[620px] object-cover"
          />
          <div className="flex flex-col items-center space-y-3 mt-4">
            <div>
              <h3 className="text-[8px] border p-1 border-gray-200 rounded-sm font-normal">
                MARKET TRENDS
              </h3>
            </div>

            <h2 className="text-2xl font-semibold text-center">{item.title}</h2>

            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <p>By: {item.uploader}</p>
              <p>{item.dateUploaded}</p>
              <p>{item.timeElapsed}</p>
            </div>

            <div className="text-sm font-normal text-center text-gray-500">
              {item.description}

              <div className="w-py bg-gray-300"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketTrends;
